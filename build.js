// Le programme qui fabrique le site.
//
//     node build.js
//
// Il lit les textes dans `textes/`, les deux pages juridiques dans
// l'application, passe le tout dans le gabarit, et écrit les pages HTML à la
// racine. Ces pages sont ENGENDRÉES : les modifier à la main ne sert à rien,
// le prochain passage les écrasera. Ce qui se modifie, c'est `textes/*.js`
// pour les mots, `gabarit.js` pour la structure, `style.css` pour l'habillage.
const fs = require('fs');
const path = require('path');
const { page, echapper, PAGES, APPSTORE } = require('./gabarit');
const icones = require('./icones');
const legal = require('./outils/legal');
const { CODES, charger } = require('./langues');
const { formaterPrix, nomDuPays, lireTableau } = require('./prix');

const TABLEAU = lireTableau();


// ---------------------------------------------------------------- les corps

const liste = (points, indent = '') =>
  `${indent}<ul>\n` + points.map((p) => `${indent}  <li>${p}</li>`).join('\n') + `\n${indent}</ul>`;

const image = (img, attributs) =>
  `<img ${attributs} src="${img.src}" width="${img.largeur}" height="${img.hauteur}" alt="${echapper(img.alt)}">`;

/**
 * Le prix, avec le pays auquel il s'applique. Écrit en dur pour le pays par
 * défaut de la langue, puis recalculé sur le téléphone du visiteur d'après le
 * pays de ses réglages — voir prix.js pour le pourquoi.
 */
function blocPrix(L) {
  const pro = L.accueil.pro;
  const defaut = pro.paysParDefaut;
  const [montant, devise] = TABLEAU[defaut];
  const donnees = JSON.stringify({ defaut, prix: TABLEAU }).replace(/</g, '\\u003c');
  return [
    `    <p class="prix">${pro.prix.split('{prix}').join(
      `<span id="prix-montant">${formaterPrix(montant, devise, L.code, defaut)}</span>`
    )}</p>`,
    `    <p class="prix-pays">${pro.prixPays.split('{pays}').join(
      `<span id="prix-pays-nom">${nomDuPays(L.code, defaut)}</span>`
    )}</p>`,
    `<script type="application/json" id="prix-par-pays">${donnees}</script>`,
    '<script>',
    formaterPrix.toString(),
    nomDuPays.toString(),
    '(function () {',
    "  var noeud = document.getElementById('prix-par-pays');",
    '  var d;',
    '  try { d = JSON.parse(noeud.textContent); } catch (e) { return; }',
    '  var langue = document.documentElement.lang;',
    '  var demandees = navigator.languages || [navigator.language || ""];',
    '  for (var i = 0; i < demandees.length; i++) {',
    '    // « en-GB », « zh-Hans-CN » : le pays est la partie de deux lettres après la langue.',
    '    var parties = String(demandees[i]).split("-");',
    '    for (var j = 1; j < parties.length; j++) {',
    '      var region = parties[j].toUpperCase();',
    '      if (parties[j].length !== 2 || !d.prix[region]) continue;',
    '      if (region === d.defaut) return;',
    "      document.getElementById('prix-montant').textContent = formaterPrix(d.prix[region][0], d.prix[region][1], langue, region);",
    "      document.getElementById('prix-pays-nom').textContent = nomDuPays(langue, region);",
    '      return;',
    '    }',
    '  }',
    '})();',
    '</script>',
  ].join('\n');
}

function accueil(L, contact) {
  const c = L.accueil;

  const entete = [
    '    <div class="hero">',
    '      <div class="hero-mots">',
    `        <p class="badge">${icones.etincelle(14)}${c.badge}</p>`,
    `        <h1>${c.h1}</h1>`,
    `        <p class="lead">${c.lead}</p>`,
    '        <div class="actions">',
    `          <a class="appstore" href="${APPSTORE}">${icones.apple(18)}${L.pied.appstore}</a>`,
    `          <p class="appstore-note">${c.appstore.note}</p>`,
    '        </div>',
    '      </div>',
    `      ${image(c.image, 'class="hero-photo"')}`,
    '    </div>',
  ].join('\n');

  const cartes = c.sections.map((s) =>
    [
      '  <div class="carte revele">',
      `    <div class="puce">${icones[s.icone](22)}</div>`,
      `    <h2>${s.titre}</h2>`,
      liste(s.points, '    '),
      '  </div>',
    ].join('\n')
  );

  const corps = [
    '<section class="preuve revele">',
    `  <h2>${c.comparaison.titre}</h2>`,
    `  <p class="preuve-texte">${c.comparaison.legende}</p>`,
    '  <div class="preuve-images">',
    '    <figure class="avant">',
    `      ${image(c.comparaison.avant, '')}`,
    `      <figcaption>${c.comparaison.avant.legende}</figcaption>`,
    '    </figure>',
    `    <div class="fleche">${icones.fleche(26)}</div>`,
    '    <figure class="apres">',
    `      ${image(c.comparaison.apres, '')}`,
    `      <figcaption>${c.comparaison.apres.legende}</figcaption>`,
    '    </figure>',
    '  </div>',
    '</section>',
    '',
    `<h2 class="section-titre revele">${c.sectionsTitre}</h2>`,
    '<div class="cartes">',
    ...cartes,
    '</div>',
    '',
    '<section class="bloc revele">',
    `  <div class="puce">${icones.bouclier(22)}</div>`,
    `  <h2>${c.confidentialite.titre}</h2>`,
    `  <p>${c.promesse}</p>`,
    '</section>',
    '',
    '<section class="bloc bloc--sombre bloc-duo revele">',
    '  <div>',
    '    <div class="pro-titre">',
    '      <span class="pro-badge">PRO</span>',
    `      <h2>${c.pro.titre}</h2>`,
    '    </div>',
    `    <p>${c.pro.gratuit}</p>`,
    `    <p>${c.pro.intro}</p>`,
    liste(c.pro.points, '    '),
    `    <p>${c.pro.note}</p>`,
    blocPrix(L),
    '  </div>',
    `  ${image(c.pro.image, '')}`,
    '</section>',
    '',
    '<section class="contact-carte revele">',
    `  <h2>${c.contact.titre}</h2>`,
    `  <p>${c.contact.texte}</p>`,
    `  <a class="contact" href="mailto:${contact}">${contact}</a>`,
    '</section>',
  ].join('\n');

  return { entete, corps, mesure: false };
}

/** L'en-tête des pages qui ne sont pas l'accueil : le titre et son chapeau, dans le bandeau. */
const enteteSimple = (h1, chapeau) =>
  ['    <div class="entete-page">', `      <h1>${h1}</h1>`, `      <p class="lead">${chapeau}</p>`, '    </div>'].join(
    '\n'
  );

function assistance(L, contact) {
  const a = L.assistance;
  const corps = [
    '<section class="contact-carte revele">',
    `  <a class="contact" href="mailto:${contact}">${contact}</a>`,
    `  <p>${a.carte.note}</p>`,
    '</section>',
    '',
    `<h2 class="section-titre">${a.faqTitre}</h2>`,
  ];
  for (const item of a.faq) {
    corps.push('', `<h3>${item.q}</h3>`);
    for (const paragraphe of item.r) corps.push(`<p>${paragraphe}</p>`);
  }
  return { entete: enteteSimple(a.h1, a.lead), corps: corps.join('\n'), mesure: true };
}

/**
 * Une page juridique, montée depuis les parties que l'application affiche.
 * La partie d'ouverture — celle qui n'a pas de titre — devient le chapeau, dans
 * le bandeau ; les suivantes deviennent un titre et son texte. Un `\n\n` dans
 * une partie sépare deux paragraphes.
 */
function juridique(L, parties, h1, contact) {
  const apple = L.juridique.apple;

  // Le texte, échappé, puis rendu cliquable là où il faut :
  // — l'adresse à laquelle on écrit. La politique de confidentialité demande
  //   d'écrire à cette adresse pour faire valoir ses droits sur ses données :
  //   elle doit s'ouvrir d'une tape, pas se recopier à la main.
  // — le renvoi vers le contrat d'Apple. L'application dit « en appuyant sur le
  //   lien au bas de cette page » parce qu'elle a ce lien sous l'écran ; le
  //   site, lui, peut poser un vrai lien.
  // `remplace` est du HTML écrit par nous, où `{lien}` reçoit l'adresse du
  // contrat. C'est plus souple qu'un simple libellé de lien : la phrase ne se
  // coupe pas au même endroit selon la langue — l'allemand rejette son verbe à
  // la fin, le japonais et le chinois placent « lire le texte entier » autour
  // du lien. Chaque langue décrit donc sa propre coupure.
  const texte = (t) => {
    let e = echapper(t);
    if (apple && e.includes(apple.cherche)) {
      e = e.replace(apple.cherche, apple.remplace.split('{lien}').join(apple.href));
    }
    return e.split(contact).join(`<a href="mailto:${contact}">${contact}</a>`);
  };

  let chapeau = '';
  const corps = [];
  for (const partie of parties) {
    if (!partie.heading && !chapeau) {
      chapeau = texte(partie.body);
      continue;
    }
    if (partie.heading) corps.push('', `<h2>${echapper(partie.heading)}</h2>`);
    for (const p of partie.body.split('\n\n')) corps.push(`<p>${texte(p)}</p>`);
  }
  return { entete: enteteSimple(h1, chapeau), corps: corps.join('\n').trim(), mesure: true };
}

// ------------------------------------------------------------- l'assemblage

/**
 * Les conditions d'utilisation, qui viennent de l'application, écrivent encore
 * le prix en euros. Ce contrôle vérifie que ce chiffre est toujours celui
 * qu'Apple facture en France d'après `textes/prix.json` : le jour où le prix
 * change chez Apple et que le relevé est refait, le contrat périmé bloque la
 * fabrication au lieu de contredire l'accueil sans que personne le voie.
 */
function verifierLePrix(L, conditions) {
  const [montant, devise] = TABLEAU.FR;
  const chiffre = montant.toFixed(2);
  const dansLesConditions = conditions.map((p) => p.body).join(' ');
  if (devise !== 'EUR' || ![chiffre, chiffre.replace('.', ',')].some((c) => dansLesConditions.includes(c))) {
    throw new Error(
      `Apple facture ${chiffre} ${devise} en France, mais les conditions d'utilisation (langue ${L.code}) ` +
        "ne citent pas ce montant. Corrigez i18n/legal.ts dans l'application."
    );
  }
}

function main() {
  const { LEGAL_TEXT, CONTACT, origine } = legal.lire();
  if (origine === 'copie') {
    console.warn(
      "⚠️  L'application n'est pas à côté : les textes juridiques viennent de la copie " +
        'déposée dans textes/legal.json, qui peut avoir pris du retard.'
    );
  }

  const langues = charger();

  let ecrites = 0;
  for (const L of langues) {
    const j = LEGAL_TEXT[L.code];
    if (!j) throw new Error(`Pas de texte juridique pour la langue « ${L.code} ».`);
    verifierLePrix(L, j.terms);

    const morceaux = {
      accueil: accueil(L, CONTACT),
      assistance: assistance(L, CONTACT),
      conditions: juridique(L, j.terms, L.juridique.conditions.h1, CONTACT),
      confidentialite: juridique(L, j.privacy, L.juridique.confidentialite.h1, CONTACT),
    };

    for (const cle of PAGES) {
      const html = page({
        langue: L,
        langues,
        cle,
        titre: L.meta[cle].titre,
        description: L.meta[cle].description,
        entete: morceaux[cle].entete,
        corps: morceaux[cle].corps,
        mesure: morceaux[cle].mesure,
      });
      fs.writeFileSync(path.join(__dirname, L.fichiers[cle]), html, 'utf8');
      ecrites++;
    }
  }

  console.log(
    `${ecrites} pages écrites — ${langues.length} langues × ${PAGES.length} pages. ` +
      `Textes juridiques : ${origine === 'application' ? "lus dans l'application" : 'copie locale'}.`
  );
}

main();
