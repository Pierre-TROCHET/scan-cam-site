// Le sixième témoin : une traduction des guides a-t-elle exactement la structure de l'anglais ?
//
//     node outils/guides-verifier.js fr        (une langue)
//     node outils/guides-verifier.js           (toutes celles qui ont un fichier)
//
// Il vérifie ce qui ferait une page fausse sans que rien ne casse au moment de la fabrication :
// un guide ou une étape en moins, une capture changée, un nom de fichier en double, un prix écrit
// en toutes lettres (il change d'un pays à l'autre), et — en avertissement — un mot en gras qui
// n'est pas un libellé de l'application dans cette langue (cam-scan/i18n/<langue>.ts).
const fs = require('fs');
const path = require('path');

const RACINE = path.join(__dirname, '..');
const { CODES } = require(path.join(RACINE, 'langues.js'));
const I18N = path.join(RACINE, '..', 'cam-scan', 'i18n');

const fichierGuides = (code) => path.join(RACINE, 'textes', `guides-${code}.js`);
const charger = (code) => require(fichierGuides(code));

/** Le dictionnaire de l'application dans une langue (clé française → texte), ou null s'il est introuvable. */
function dictionnaire(code) {
  if (code === 'fr') return null; // les clés sont le français lui-même
  const f = path.join(I18N, `${code}.ts`);
  if (!fs.existsSync(f)) return null;
  const src = fs
    .readFileSync(f, 'utf8')
    .replace(/^import .*$/gm, '')
    .replace(/export const \w+: Dictionary =/, 'module.exports =');
  const m = { exports: {} };
  new Function('module', src)(m);
  return m.exports;
}

/** Tous les libellés que l'application affiche dans cette langue. */
function libelles(code) {
  if (code === 'fr' || code === 'en') {
    const en = dictionnaire('en');
    if (!en) return null;
    return new Set(code === 'fr' ? Object.keys(en) : Object.values(en));
  }
  const d = dictionnaire(code);
  return d ? new Set(Object.values(d)) : null;
}

const chaines = (o, sortie = []) => {
  if (typeof o === 'string') sortie.push(o);
  else if (Array.isArray(o)) o.forEach((x) => chaines(x, sortie));
  else if (o && typeof o === 'object') Object.values(o).forEach((x) => chaines(x, sortie));
  return sortie;
};

function verifier(code, EN, tousLesFichiers) {
  const erreurs = [];
  const avertissements = [];
  let T;
  try {
    T = charger(code);
  } catch (e) {
    return { erreurs: [`le fichier ne se charge pas : ${e.message}`], avertissements };
  }

  if (T.code !== code) erreurs.push(`« code » vaut « ${T.code} », attendu « ${code} »`);
  for (const cle of Object.keys(EN)) if (!(cle in T)) erreurs.push(`clé « ${cle} » absente`);
  for (const cle of ['titre', 'description', 'h1', 'lead', 'sectionTitre', 'gratuit', 'pro', 'fichier'])
    if (!T.accueil || !T.accueil[cle]) erreurs.push(`accueil.${cle} absent`);
  for (const cle of ['free', 'pro']) if (!T.etiquette || !T.etiquette[cle]) erreurs.push(`etiquette.${cle} absent`);

  const attenduIndex = code === 'en' ? 'guides.html' : `guides-${code}.html`;
  if (T.accueil && T.accueil.fichier !== attenduIndex)
    erreurs.push(`accueil.fichier vaut « ${T.accueil.fichier} », attendu « ${attenduIndex} »`);

  const clesCaptures = Object.keys(EN.captures).sort().join(',');
  if (Object.keys(T.captures || {}).sort().join(',') !== clesCaptures)
    erreurs.push(`les captures ne sont pas celles de l'anglais (${clesCaptures})`);
  for (const [cle, c] of Object.entries(T.captures || {}))
    if (!c.alt || !c.legende) erreurs.push(`capture « ${cle} » : alt ou légende vide`);

  if (!T.guides || T.guides.length !== EN.guides.length) {
    erreurs.push(`${T.guides ? T.guides.length : 0} guides au lieu de ${EN.guides.length}`);
  } else {
    EN.guides.forEach((ge, i) => {
      const g = T.guides[i];
      const ici = `guide ${i + 1} (${ge.cle})`;
      for (const k of ['cle', 'niveau']) if (g[k] !== ge[k]) erreurs.push(`${ici} : ${k} « ${g[k]} » au lieu de « ${ge[k]} »`);
      if (JSON.stringify(g.suite) !== JSON.stringify(ge.suite)) erreurs.push(`${ici} : « suite » diffère de l'anglais`);
      for (const k of ['fichier', 'titre', 'description', 'h1', 'lead', 'carte'])
        if (!g[k]) erreurs.push(`${ici} : ${k} absent`);
      const motif = code === 'en' ? /^guide-[a-z0-9-]+\.html$/ : new RegExp(`^guide-[a-z0-9-]+-${code}\\.html$`);
      if (g.fichier && !motif.test(g.fichier))
        erreurs.push(`${ici} : fichier « ${g.fichier} » ne suit pas le motif ${motif}`);
      if (!g.corps || g.corps.length !== ge.corps.length) {
        erreurs.push(`${ici} : ${g.corps ? g.corps.length : 0} blocs au lieu de ${ge.corps.length}`);
        return;
      }
      ge.corps.forEach(([type, contenu], j) => {
        const [t2, c2] = g.corps[j];
        if (t2 !== type) erreurs.push(`${ici}, bloc ${j + 1} : « ${t2} » au lieu de « ${type} »`);
        else if (Array.isArray(contenu) && (!Array.isArray(c2) || c2.length !== contenu.length))
          erreurs.push(`${ici}, bloc ${j + 1} (${type}) : ${Array.isArray(c2) ? c2.length : '?'} éléments au lieu de ${contenu.length}`);
        else if (type === 'img' && JSON.stringify(c2) !== JSON.stringify(contenu))
          erreurs.push(`${ici}, bloc ${j + 1} : captures ${JSON.stringify(c2)} au lieu de ${JSON.stringify(contenu)}`);
      });
    });
  }

  // Les noms de fichiers : uniques dans toute la boutique de guides, toutes langues confondues.
  const fichiers = [T.accueil && T.accueil.fichier, ...(T.guides || []).map((g) => g.fichier)].filter(Boolean);
  for (const f of fichiers) {
    if (tousLesFichiers.has(f) && tousLesFichiers.get(f) !== code)
      erreurs.push(`fichier « ${f} » déjà pris par la langue ${tousLesFichiers.get(f)}`);
    tousLesFichiers.set(f, code);
  }

  // Aucun prix écrit : il change d'un pays à l'autre.
  for (const s of chaines(T)) {
    const prix = s.match(/\d+[.,]\d{2}\b|[€£¥₩]|\$\d/);
    if (prix) erreurs.push(`un prix semble écrit (« ${prix[0]} ») dans : ${s.slice(0, 80)}…`);
  }

  // Les mots en gras doivent être les libellés de l'application dans cette langue.
  const connus = libelles(code);
  if (connus) {
    const notes = new Set(); // les titres de note (« Free or Pro? ») ne sont pas des libellés
    for (const g of T.guides || [])
      for (const [type, c] of g.corps || [])
        if (type === 'note') {
          const m = String(c).match(/^<strong>([^<]+)<\/strong>/);
          if (m) notes.add(m[1]);
        }
    for (const s of chaines(T.guides || [])) {
      for (const m of s.matchAll(/<strong>([^<]+)<\/strong>/g)) {
        if (notes.has(m[1])) continue;
        for (const morceau of m[1].split(/\s*→\s*/)) {
          if (!connus.has(morceau) && !['PDF', 'JPEG'].includes(morceau))
            avertissements.push(`« ${morceau} » est en gras mais n'est pas un libellé de l'app en « ${code} »`);
        }
      }
    }
  }
  return { erreurs, avertissements: [...new Set(avertissements)] };
}

function main() {
  const EN = charger('en');
  const demandees = process.argv[2] ? [process.argv[2]] : CODES.filter((c) => fs.existsSync(fichierGuides(c)));
  // L'anglais d'abord, pour que ses fichiers soient réservés avant ceux des traductions.
  const tousLesFichiers = new Map();
  if (!demandees.includes('en')) verifier('en', EN, tousLesFichiers);
  for (const c of CODES) if (c !== 'en' && !demandees.includes(c) && fs.existsSync(fichierGuides(c))) verifier(c, EN, tousLesFichiers);

  let echec = false;
  for (const code of demandees) {
    const { erreurs, avertissements } = verifier(code, EN, tousLesFichiers);
    if (erreurs.length) echec = true;
    console.log(`${erreurs.length ? '✗' : '✔'} ${code} — ${erreurs.length} erreur(s), ${avertissements.length} avertissement(s)`);
    for (const e of erreurs) console.log('   ✗ ' + e);
    for (const a of avertissements) console.log('   ⚠ ' + a);
  }
  process.exitCode = echec ? 1 : 0;
}

main();
