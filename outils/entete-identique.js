// Le quatrième témoin : l'en-tête et le pied sont-ils LES MÊMES sur les huit pages ?
//
//     node outils/entete-identique.js
//
// C'est le défaut qui revient. Trois fois le 9 septembre 2026 :
//   1. le menu retirait le lien de la page où l'on se trouvait (bloc S1) ;
//   2. deux pages avaient perdu leur lien App Store dans le pied (bloc S1) ;
//   3. le bandeau se resserrait sur les pages de texte, si bien que le menu
//      SAUTAIT en passant de l'accueil aux autres pages (signalé par Pierre
//      après le bloc S5).
//
// Les trois ont la même cause : quelque chose qui devrait être identique
// partout ne l'était pas. Ce contrôle compare, d'une page à l'autre, la
// structure de l'en-tête et du pied — en mettant de côté ce qui DOIT différer,
// c'est-à-dire les adresses des liens et la marque de la page courante.
const fs = require('fs');
const path = require('path');

const RACINE = path.join(__dirname, '..');
const LANGUES = ['fr', 'en'];

/**
 * Le squelette d'un morceau : ses balises, ses classes et ses libellés, mais
 * sans les adresses — et surtout, **un lien marqué et un lien cliquable
 * comptent pour la même chose**. Sinon le contrôle signalerait comme un écart
 * ce qui est justement le comportement voulu : « Accueil » est marqué sur
 * l'accueil et cliquable ailleurs. Que la marque tombe au bon endroit est
 * vérifié séparément, en comptant les marques.
 */
function squelette(html) {
  return html
    .replace(/<svg[\s\S]*?<\/svg>/g, '<SVG>')
    .replace(/<span class="current" aria-current="page">([\s\S]*?)<\/span>/g, (m, t) => '<ITEM>' + t + '</ITEM>')
    .replace(/<a\b[^>]*>([\s\S]*?)<\/a>/g, (m, t) => '<ITEM>' + t + '</ITEM>')
    .replace(/href="[^"]*"/g, 'href="…"')
    .replace(/hreflang="[^"]*"/g, 'hreflang="…"')
    .replace(/\slang="[^"]*"/g, ' lang="…"')
    .replace(/\s+/g, ' ')
    .trim();
}

const extrait = (html, ouvre, ferme) => {
  const a = html.indexOf(ouvre);
  const b = html.indexOf(ferme, a);
  return a === -1 || b === -1 ? null : html.slice(a, b + ferme.length);
};

let fautes = 0;
for (const code of LANGUES) {
  const L = require(path.join(RACINE, 'textes', code + '.js'));
  const fichiers = Object.values(L.fichiers);
  const reference = {};

  for (const f of fichiers) {
    const html = fs.readFileSync(path.join(RACINE, f), 'utf8');
    const morceaux = {
      'ouverture du bandeau': extrait(html, '<div class="bande">', '<header'),
      "en-tête": squelette(extrait(html, '<header class="entete">', '</header>')),
      'ouverture du corps': extrait(html, '<main', '>'),
      'pied de page': squelette(extrait(html, '<footer class="pied">', '</footer>')),
    };
    for (const [nom, valeur] of Object.entries(morceaux)) {
      if (valeur === null) {
        console.log(`✗ ${f} : « ${nom} » introuvable.`);
        fautes++;
        continue;
      }
      const propre = String(valeur).replace(/\s+/g, ' ').trim();
      if (!(nom in reference)) {
        reference[nom] = { valeur: propre, page: f };
        continue;
      }
      if (reference[nom].valeur === propre) continue;
      console.log(`✗ « ${nom} » diffère entre ${reference[nom].page} et ${f} :`);
      console.log(`   ${reference[nom].page} : ${reference[nom].valeur.slice(0, 120)}`);
      console.log(`   ${f} : ${propre.slice(0, 120)}`);
      fautes++;
    }
  }

  // Et le nombre de marques : exactement une dans le menu, une dans le pied.
  for (const f of fichiers) {
    const html = fs.readFileSync(path.join(RACINE, f), 'utf8');
    const n = (html.match(/aria-current="page"/g) || []).length;
    if (n === 2) continue;
    console.log(`✗ ${f} : ${n} page(s) marquée(s) au lieu de 2 (une au menu, une au pied).`);
    fautes++;
  }
}

console.log(
  fautes === 0
    ? "✔ L'en-tête, le bandeau et le pied ont exactement la même structure sur les huit pages.\n" +
        '  Seules varient les adresses des liens et la marque de la page courante — le menu ne\n' +
        "  peut donc pas sauter d'une page à l'autre."
    : `\n${fautes} écart(s).`
);
process.exit(fautes === 0 ? 0 : 1);
