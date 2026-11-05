// Les guides : dans chaque langue, la page qui les liste, une page par guide, et le bloc de
// l'accueil qui y renvoie. Les textes sont dans `textes/guides-<langue>.js` (l'anglais fait
// référence) ; ce fichier-ci ne fait que les poser dans le gabarit.
//
// Une langue dont le fichier n'existe pas encore n'a simplement pas de guides : ni lien dans le
// menu, ni bloc sur l'accueil, ni traduction annoncée. Rien ne casse.
//
// Appelé par build.js, qui écrit aussi le plan du site (sitemap.xml) avec ces adresses.
const fs = require('fs');
const path = require('path');
const { page, adresse, echapper, APPSTORE, GOOGLEPLAY, YOUTUBE, SITE } = require('./gabarit');
const icones = require('./icones');
const { CODES } = require('./langues');

/**
 * Les captures (images/guides/). Celles marquées `traduite` existent dans chaque langue — ce sont
 * les captures de la fiche App Store, dont l'interface est traduite — et se trouvent dans
 * images/guides/<langue>/. Les autres ont été prises sur l'iPhone avec l'app en anglais, et servent
 * à toutes les langues (décision de Pierre, 19 octobre 2026).
 */
const CAPTURES = {
  scanner: { hauteur: 1212 },
  filtres: { hauteur: 1212 },
  dossiers: { hauteur: 1212 },
  bibliotheque: { hauteur: 1212 },
  document: { hauteur: 1212 },
  fusion: { hauteur: 1212 },
  extraction: { hauteur: 1212 },
  'nouvelle-signature': { hauteur: 1212 },
  propre: { hauteur: 1214, traduite: true },
  signature: { hauteur: 1214, traduite: true },
  texte: { hauteur: 1214, traduite: true },
  filigrane: { hauteur: 1214, traduite: true },
  recherche: { hauteur: 1214, traduite: true },
  partage: { hauteur: 1214, traduite: true },
};

/**
 * Les clips muets (images/guides/clips/<prise>.mp4, 560 × 1212, et leur affiche <prise>.jpg) : les
 * enregistrements d'écran de l'app, sans le son, avec un rond sur chaque geste — demandé par Pierre le
 * 5 novembre 2026. Ils sont fabriqués par « fiche Appstore Scan Cam/6 - Marketing/YouTube/clips-site.js ».
 * L'application y est en anglais, comme dans les captures non traduites.
 *
 * Par guide : [numéro du bloc 'img' dans `corps` (le même dans toutes les langues), prise]. Si ce bloc
 * n'a qu'une capture, le clip se pose à côté d'elle ; s'il en a deux, dans sa propre rangée, au-dessus.
 */
const CLIPS = {
  'multi-page': [[2, 'scan'], [5, 'reordonner']],
  receipts: [[2, 'filtres'], [6, 'ranger']],
  sign: [[5, 'signature']],
  'extract-text': [[4, 'texte']],
  merge: [[5, 'fusion']],
  'extract-pages': [[5, 'pages']],
  watermark: [[2, 'filigrane']],
  'without-subscription': [[9, 'scan']],
};
for (const [cle, clips] of Object.entries(CLIPS)) {
  for (const [, prise] of clips) {
    if (!fs.existsSync(path.join(__dirname, 'images', 'guides', 'clips', `${prise}.mp4`))) {
      throw new Error(`guides.js : le clip « ${prise} » du guide ${cle} est introuvable (images/guides/clips/) — lancer clips-site.js.`);
    }
  }
}

/** Les textes des guides, par langue — seulement les langues qui en ont. */
const G = {};
for (const code of CODES) {
  const f = path.join(__dirname, 'textes', `guides-${code}.js`);
  if (fs.existsSync(f)) G[code] = require(f);
}
if (!G.en) throw new Error('textes/guides-en.js est introuvable : c’est la langue de référence des guides.');

// Chaque traduction doit avoir les mêmes guides et les mêmes captures que l'anglais : sinon une
// page annoncerait une traduction qui n'existe pas, ou poserait une image sans texte.
const clesGuides = G.en.guides.map((g) => g.cle).join(',');
for (const [code, T] of Object.entries(G)) {
  if (T.guides.map((g) => g.cle).join(',') !== clesGuides) {
    throw new Error(`textes/guides-${code}.js : les guides ne sont pas les mêmes que ceux de l'anglais (${clesGuides}).`);
  }
  for (const g of T.guides) {
    for (const [type, contenu] of g.corps) {
      if (type !== 'img') continue;
      for (const cle of contenu) {
        if (!CAPTURES[cle]) throw new Error(`textes/guides-${code}.js (${g.cle}) : capture inconnue « ${cle} ».`);
        if (!T.captures[cle]) throw new Error(`textes/guides-${code}.js : il manque le texte de la capture « ${cle} ».`);
      }
    }
  }
}

// Un clip se pose sur une capture : le bloc désigné doit en être une, dans chaque langue.
for (const [code, T] of Object.entries(G)) {
  for (const g of T.guides) {
    for (const [n] of CLIPS[g.cle] || []) {
      if (!g.corps[n] || g.corps[n][0] !== 'img') {
        throw new Error(`textes/guides-${code}.js (${g.cle}) : le bloc ${n} devait être une capture, pour y poser un clip.`);
      }
    }
  }
  if (!T.clip) throw new Error(`textes/guides-${code}.js : il manque la légende des clips (« clip »).`);
}

const presentes = () => CODES.filter((code) => G[code]);

/** L'adresse de la capture `cle` pour la langue `code` : la traduite si elle existe, l'anglaise sinon. */
function srcCapture(code, cle) {
  if (CAPTURES[cle].traduite && code !== 'en') {
    const traduite = `images/guides/${code}/${cle}.jpg`;
    if (fs.existsSync(path.join(__dirname, traduite))) return traduite;
  }
  return `images/guides/${cle}.jpg`;
}

/**
 * Un clip, posé comme une capture. Il porte `controls` : sans script, ou pour qui a demandé moins
 * d'animations, il attend qu'on appuie sur lecture. Sinon le script du bas de page retire les boutons
 * et le fait tourner en boucle, muet, comme une capture animée.
 */
function figureClip(code, prise, nom) {
  return [
    '  <figure class="guide-clip">',
    `    <video src="images/guides/clips/${prise}.mp4" poster="images/guides/clips/${prise}.jpg" width="560" height="1212" muted loop playsinline controls preload="none" aria-label="${echapper(nom)}"></video>`,
    `    <figcaption>${G[code].clip}</figcaption>`,
    '  </figure>',
  ].join('\n');
}

/** Le script qui fait tourner les clips d'une page. */
const SCRIPT_CLIPS = `<script>
// Les clips des guides : muets, en boucle, lancés d'emblée. Pour qui a demandé moins d'animations
// (la classe « anime » est alors absente), ils gardent leurs boutons et attendent qu'on les lance.
(function () {
  if (!document.documentElement.classList.contains("anime")) return;
  var clips = document.querySelectorAll(".guide-clip video");
  for (var i = 0; i < clips.length; i++) {
    var v = clips[i];
    v.controls = false;
    v.muted = true;
    v.autoplay = true;
    v.preload = "auto";
    var lancer = v.play();
    if (lancer && lancer.catch) lancer.catch(function () {});
  }
})();
</script>`;

const liste = (points) => '<ul>\n' + points.map((p) => `  <li>${p}</li>`).join('\n') + '\n</ul>';

/** Un bloc d'un guide — le format est expliqué en tête de textes/guides-en.js. */
function bloc(code, [type, contenu], clip = null, nom = '') {
  const T = G[code];
  if (type === 'h2') return `<h2>${contenu}</h2>`;
  if (type === 'p') return `<p>${contenu}</p>`;
  if (type === 'note') return `<p class="guide-note">${contenu}</p>`;
  if (type === 'ul') return liste(contenu);
  if (type === 'ol') return '<ol>\n' + contenu.map((p) => `  <li>${p}</li>`).join('\n') + '\n</ol>';
  // Une ou deux captures côte à côte, chacune avec sa légende. Largeur et hauteur écrites :
  // la page ne saute pas quand l'image arrive.
  if (type === 'img') {
    // Le clip à côté d'une capture seule, ou dans sa propre rangée au-dessus d'une paire.
    const voisin = clip && contenu.length === 1 ? [figureClip(code, clip, nom)] : [];
    const avant = clip && !voisin.length
      ? `<div class="guide-captures guide-captures--1">\n${figureClip(code, clip, nom)}\n</div>\n`
      : '';
    return avant + [
      `<div class="guide-captures guide-captures--${contenu.length + voisin.length}">`,
      ...contenu.map((cle) =>
        [
          '  <figure>',
          `    <img src="${srcCapture(code, cle)}" width="560" height="${CAPTURES[cle].hauteur}" alt="${echapper(T.captures[cle].alt)}" loading="lazy" decoding="async">`,
          `    <figcaption>${T.captures[cle].legende}</figcaption>`,
          '  </figure>',
        ].join('\n')
      ),
      ...voisin,
      '</div>',
    ].join('\n');
  }
  throw new Error(`Bloc de guide inconnu : « ${type} »`);
}

/** Le lien « Guides » du menu et du pied, dans la langue `code` — null si elle n'a pas de guides. */
function lienMenu(code, courant = false) {
  const T = G[code];
  return T ? { fichier: T.accueil.fichier, libelle: T.menu, courant } : null;
}

/** Le bloc de l'accueil, dans la langue `code` — vide si elle n'a pas de guides. */
function blocGuidesAccueil(code) {
  const T = G[code];
  if (!T) return '';
  return [
    '<section class="bloc revele">',
    `  <h2>${T.blocAccueil.titre}</h2>`,
    `  <p>${T.blocAccueil.texte}</p>`,
    '  <ul class="guide-liens">',
    ...T.guides.map((guide) => `    <li><a href="${guide.fichier}">${guide.h1}</a></li>`),
    '  </ul>',
    `  <p><a href="${T.accueil.fichier}">${T.blocAccueil.tous} →</a></p>`,
    '</section>',
  ].join('\n');
}

/** Code → fichier, pour la page des guides et pour chaque guide (selon sa clé). */
const cibleIndex = () => Object.fromEntries(presentes().map((code) => [code, G[code].accueil.fichier]));
const cibleGuide = (cle) =>
  Object.fromEntries(presentes().map((code) => [code, G[code].guides.find((g) => g.cle === cle).fichier]));

/** Le lien vers les tutos vidéo de la chaîne YouTube, sous les boutons des boutiques et sur la page des guides. */
const lienVideos = (T) =>
  `  <p class="guide-video"><a href="${YOUTUBE}">${icones.video(18)}<span>${T.pied.youtube}</span></a></p>`;

function pageGuide(L, langues, guide) {
  const T = G[L.code];
  const parCle = Object.fromEntries(T.guides.map((g) => [g.cle, g]));
  const url = adresse(guide.fichier);
  const entete = [
    '    <div class="entete-page">',
    `      <p class="guide-etiquette guide-etiquette--${guide.niveau}">${T.etiquette[guide.niveau]}</p>`,
    `      <h1>${guide.h1}</h1>`,
    `      <p class="lead">${guide.lead}</p>`,
    '    </div>',
  ].join('\n');

  const corps = [
    `<p class="guide-retour"><a href="${T.accueil.fichier}">← ${T.accueil.h1}</a></p>`,
    ...guide.corps.map((b, n) => {
      const clip = (CLIPS[guide.cle] || []).find(([k]) => k === n);
      return bloc(L.code, b, clip ? clip[1] : null, guide.h1);
    }),
    '',
    '<section class="bloc bloc--sombre guide-cta">',
    `  <h2>${T.pied.titre}</h2>`,
    `  <p>${T.pied.texte}</p>`,
    // Les deux boutiques côte à côte, comme sur l'accueil (Google Play ajouté le 5 novembre 2026).
    '  <div class="actions">',
    `    <a class="appstore" href="${APPSTORE}">${icones.apple(18)}${L.pied.appstore}</a>`,
    `    <a class="appstore" href="${GOOGLEPLAY}">${icones.googleplay(18)}${L.pied.googleplay}</a>`,
    '  </div>',
    lienVideos(T),
    '</section>',
    '',
    `<h2>${T.liees}</h2>`,
    liste(guide.suite.map((cle) => `<a href="${parCle[cle].fichier}">${parCle[cle].h1}</a>`)),
    ...(CLIPS[guide.cle] ? ['', SCRIPT_CLIPS] : []),
  ].join('\n');

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.h1,
    description: guide.description,
    inLanguage: L.code,
    mainEntityOfPage: url,
    url,
    image: SITE + 'images/partage.jpg',
    datePublished: '2026-10-19',
    dateModified: '2026-11-05',
    author: { '@type': 'Person', name: 'Pierre Trochet' },
    about: { '@type': 'SoftwareApplication', name: 'Scan Cam', operatingSystem: 'iOS', url: APPSTORE },
  };

  return page({
    langue: L,
    langues,
    cle: null,
    cible: cibleGuide(guide.cle),
    titre: guide.titre,
    description: guide.description,
    entete,
    corps,
    mesure: true,
    jsonld,
    guides: lienMenu(L.code),
  });
}

function pageIndex(L, langues) {
  const T = G[L.code];
  const a = T.accueil;
  const entete = [
    '    <div class="entete-page">',
    `      <h1>${a.h1}</h1>`,
    `      <p class="lead">${a.lead}</p>`,
    '    </div>',
  ].join('\n');
  const cartes = T.guides.map((guide) =>
    [
      `  <a class="carte guide-carte" href="${guide.fichier}">`,
      `    <span class="guide-niveau guide-niveau--${guide.niveau}">${guide.niveau === 'free' ? a.gratuit : a.pro}</span>`,
      `    <h2>${guide.h1}</h2>`,
      `    <p>${guide.carte}</p>`,
      '  </a>',
    ].join('\n')
  );
  // Un titre de section ordinaire (celui des pages de texte), pas le grand titre de l'accueil :
  // juste sous le bandeau, le grand titre paraissait collé et plus gros que tout le reste.
  const corps = [
    `<h2 class="guides-titre">${a.sectionTitre}</h2>`,
    '<div class="cartes">',
    ...cartes,
    '</div>',
    lienVideos(T),
  ].join('\n');
  return page({
    langue: L,
    langues,
    cle: null,
    cible: cibleIndex(),
    titre: a.titre,
    description: a.description,
    entete,
    corps,
    mesure: false,
    guides: lienMenu(L.code, true),
  });
}

/** Écrit, dans chaque langue qui en a, la page des guides et chaque guide. Rend le nombre de pages. */
function ecrireGuides(racine, langues) {
  let n = 0;
  for (const L of langues) {
    const T = G[L.code];
    if (!T) continue;
    fs.writeFileSync(path.join(racine, T.accueil.fichier), pageIndex(L, langues), 'utf8');
    n++;
    for (const guide of T.guides) {
      fs.writeFileSync(path.join(racine, guide.fichier), pageGuide(L, langues, guide), 'utf8');
      n++;
    }
  }
  return n;
}

/** Les pages des guides pour le plan du site : chacune avec ses traductions. */
function entreesPlan() {
  const entrees = [];
  const ajouter = (cible) => {
    for (const code of Object.keys(cible)) {
      entrees.push({
        loc: adresse(cible[code]),
        alternatives: [
          ...Object.entries(cible).map(([c, f]) => ({ code: c, href: adresse(f) })),
          { code: 'x-default', href: adresse(cible.en) },
        ],
      });
    }
  };
  ajouter(cibleIndex());
  for (const g of G.en.guides) ajouter(cibleGuide(g.cle));
  return entrees;
}

module.exports = { ecrireGuides, blocGuidesAccueil, lienMenu, entreesPlan, CAPTURES, CLIPS };
