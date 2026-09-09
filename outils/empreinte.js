// Le témoin de non-régression du bloc S3.
//
//     node outils/empreinte.js avant.json     (avant de refabriquer)
//     node outils/empreinte.js apres.json     (après)
//     node outils/empreinte.js --comparer avant.json apres.json
//
// Il relève de chaque page ce qui compte pour un lecteur — le titre, la
// description, le texte visible et tous les liens — et ignore la mise en forme
// du HTML. Le bloc S3 ne doit RIEN changer de tout cela : c'est une refonte de
// la charpente, pas du contenu. Si l'empreinte est identique avant et après,
// c'est prouvé plutôt que supposé.
const fs = require('fs');
const path = require('path');

const RACINE = path.join(__dirname, '..');
const PAGES = [
  'index.html', 'assistance.html', 'conditions.html', 'confidentialite.html',
  'home.html', 'support.html', 'terms.html', 'privacy.html',
];

function releve(fichier) {
  const html = fs.readFileSync(path.join(RACINE, fichier), 'utf8');
  const titre = (html.match(/<title>([^<]*)<\/title>/) || [, ''])[1];
  const description = (html.match(/name="description" content="([^"]*)"/) || [, ''])[1];

  const corps = html
    .replace(/<head>[\s\S]*?<\/head>/i, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const liens = [...html.matchAll(/(?:href|src)="([^"]*)"/g)].map((m) => m[1]);
  const marquee = [...html.matchAll(/aria-current="page">([^<]*)</g)].map((m) => m[1]);

  return { titre, description, texte: corps, liens, marquee };
}

function empreinte() {
  const out = {};
  for (const f of PAGES) out[f] = releve(f);
  return out;
}

function comparer(a, b) {
  const A = JSON.parse(fs.readFileSync(a, 'utf8'));
  const B = JSON.parse(fs.readFileSync(b, 'utf8'));
  let ecarts = 0;
  for (const f of PAGES) {
    for (const champ of ['titre', 'description', 'texte', 'liens', 'marquee']) {
      const x = JSON.stringify(A[f][champ]);
      const y = JSON.stringify(B[f][champ]);
      if (x === y) continue;
      ecarts++;
      console.log(`\n≠ ${f} — ${champ}`);
      if (champ === 'texte') {
        // Montrer où ça diverge plutôt que deux pavés.
        const mx = A[f][champ].split(' ');
        const my = B[f][champ].split(' ');
        let i = 0;
        while (i < mx.length && i < my.length && mx[i] === my[i]) i++;
        console.log('   avant : …' + mx.slice(Math.max(0, i - 8), i + 12).join(' '));
        console.log('   après : …' + my.slice(Math.max(0, i - 8), i + 12).join(' '));
      } else {
        console.log('   avant :', x);
        console.log('   après :', y);
      }
    }
  }
  console.log(ecarts === 0 ? '\n✔ Aucun écart : les huit pages disent exactement la même chose.' : `\n${ecarts} écart(s).`);
  return ecarts;
}

const args = process.argv.slice(2);
if (args[0] === '--comparer') {
  process.exit(comparer(args[1], args[2]) === 0 ? 0 : 1);
} else {
  fs.writeFileSync(args[0], JSON.stringify(empreinte(), null, 1), 'utf8');
  console.log('empreinte écrite dans ' + args[0]);
}
