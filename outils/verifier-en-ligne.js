// Le cinquième témoin — et le seul qui regarde le site PUBLIÉ, pas les fichiers.
//
//     node outils/verifier-en-ligne.js
//     node outils/verifier-en-ligne.js http://localhost:4173/   (sur l'aperçu local)
//
// Les quatre autres témoins relisent ce qu'on a écrit. Celui-ci va voir ce qui
// est réellement en ligne, ce qui n'est pas la même chose : une page peut être
// juste dans le dépôt et absente du site, une image peut avoir été oubliée à la
// publication, une adresse déclarée chez Apple peut ne plus répondre.
//
// **Une adresse d'assistance qui ne répond pas est un motif de refus.** C'est ce
// contrôle-là, fait à la main les 27 et 29 août 2026, qui avait évité un refus.
const path = require('path');

const RACINE = path.join(__dirname, '..');
const { CODES, charger } = require(path.join(RACINE, 'langues.js'));
const SITE = (process.argv[2] || 'https://scancam.app/').replace(/\/?$/, '/');
const APPSTORE = 'https://apps.apple.com/app/id6805626898';

const langues = charger();
const parCode = Object.fromEntries(langues.map((L) => [L.code, L]));
const CLES = ['accueil', 'assistance', 'conditions', 'confidentialite'];

/** De quel fichier il s'agit : sa langue et sa page. */
const identite = {};
for (const L of langues) for (const cle of CLES) identite[L.fichiers[cle]] = { code: L.code, cle };

let fautes = 0;
const rate = (m) => {
  console.log('  ✗ ' + m);
  fautes++;
};

async function chercher(url) {
  try {
    const r = await fetch(url, { redirect: 'follow' });
    return { statut: r.status, texte: r.headers.get('content-type') || '' };
  } catch (e) {
    return { statut: 0, texte: String(e.message) };
  }
}

(async () => {
  console.log(`Vérification de ${SITE}\n`);

  // 1. Les 24 pages répondent, et disent qui elles sont.
  console.log(`1. Les ${Object.keys(identite).length} pages répondent`);
  const pages = {};
  for (const [fichier, qui] of Object.entries(identite)) {
    const r = await fetch(SITE + fichier).catch(() => null);
    if (!r || r.status !== 200) {
      rate(`${fichier} → ${r ? r.status : 'injoignable'}`);
      continue;
    }
    const html = await r.text();
    pages[fichier] = html;
    const langue = (html.match(/<html lang="([^"]*)"/) || [, ''])[1];
    if (langue !== qui.code) rate(`${fichier} : annonce la langue « ${langue} » au lieu de « ${qui.code} »`);
  }
  if (!fautes) console.log(`  ✔ les ${Object.keys(pages).length} pages répondent, chacune dans sa langue`);

  // 2. Chaque page mène à ses cinq sœurs, et vers la bonne.
  console.log('\n2. Chaque page mène à ses cinq sœurs');
  let soeurs = 0;
  for (const [fichier, html] of Object.entries(pages)) {
    const qui = identite[fichier];
    for (const autre of CODES) {
      if (autre === qui.code) continue;
      const attendu = parCode[autre].fichiers[qui.cle];
      const dansLeMenu = new RegExp(`href="${attendu}" hreflang="${autre}"`).test(html);
      const dansLaTete = new RegExp(`rel="alternate" hreflang="${autre}" href="${attendu}"`).test(html);
      if (!dansLeMenu) rate(`${fichier} : pas de lien vers ${attendu} (${autre}) dans le sélecteur`);
      else if (!dansLaTete) rate(`${fichier} : pas de <link rel="alternate"> vers ${attendu} (${autre})`);
      else soeurs++;
    }
  }
  if (soeurs === Object.keys(pages).length * 5) console.log(`  ✔ ${soeurs} liens de langue, tous vers la bonne page`);

  // 3. Aucun lien interne mort, aucune image manquante.
  console.log('\n3. Les liens et les images');
  const aVoir = new Set();
  for (const html of Object.values(pages)) {
    for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const h = m[1];
      if (/^(https?:|mailto:|#|data:)/.test(h)) continue;
      aVoir.add(h);
    }
  }
  for (const chemin of [...aVoir].sort()) {
    const r = await chercher(SITE + chemin);
    if (r.statut !== 200) rate(`${chemin} → ${r.statut}`);
  }
  console.log(`  ✔ ${aVoir.size} adresses internes distinctes, toutes servies`);

  // 4. Le bouton App Store mène à la bonne fiche, sur chaque page.
  console.log("\n4. Le bouton App Store");
  for (const [fichier, html] of Object.entries(pages)) {
    if (!html.includes(APPSTORE)) rate(`${fichier} : pas de lien vers la fiche App Store`);
  }
  console.log(`  ✔ la fiche ${APPSTORE.split('/').pop()} est liée depuis les ${Object.keys(pages).length} pages`);

  // 5. Rien qui parte en clair, et une seule marque de page courante par endroit.
  console.log('\n5. Deux détails qui se voient tard');
  for (const [fichier, html] of Object.entries(pages)) {
    const clair = [...html.matchAll(/(?:href|src)="(http:\/\/[^"]+)"/g)].map((m) => m[1]);
    if (clair.length) rate(`${fichier} : ${clair.length} adresse(s) en http non sécurisé — ${clair[0]}`);
    const marques = (html.match(/aria-current="page"/g) || []).length;
    if (marques !== 2) rate(`${fichier} : ${marques} page(s) marquée(s) au lieu de 2`);
  }
  console.log('  ✔ aucune adresse en clair, une marque au menu et une au pied partout');

  // 6. Les adresses déclarées chez Apple.
  console.log("\n6. Les adresses déclarées chez Apple");
  const declarees = [];
  for (const L of langues) {
    declarees.push(SITE + L.fichiers.assistance, SITE + L.fichiers.confidentialite, SITE + L.fichiers.accueil);
  }
  for (const url of [...new Set(declarees)]) {
    const r = await chercher(url);
    if (r.statut !== 200) rate(`${url} → ${r.statut}`);
  }
  console.log(`  ✔ les ${new Set(declarees).size} adresses déclarables répondent`);

  // 7. Les anciennes adresses, celles que porte encore la version en vente.
  console.log("\n7. Les anciennes adresses de la version en vente");
  const ancien = 'https://pierre-trochet.github.io/scan-cam-site/';
  for (const f of ['assistance.html', 'confidentialite.html', 'support.html', 'privacy.html']) {
    const r = await fetch(ancien + f, { redirect: 'manual' }).catch(() => null);
    const ok = r && (r.status === 301 || r.status === 302);
    if (!ok) rate(`${ancien}${f} ne redirige plus (${r ? r.status : 'injoignable'})`);
  }
  console.log('  ✔ les quatre anciennes adresses redirigent toujours');

  console.log(
    fautes === 0
      ? '\n✔ Tout est en ligne et cohérent. Reste ce qu’une machine ne peut pas voir : ouvrir le site sur un téléphone.'
      : `\n${fautes} problème(s).`
  );
  process.exit(fautes === 0 ? 0 : 1);
})();
