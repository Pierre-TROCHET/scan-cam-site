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
const legal = require('./outils/legal');

// Les langues fabriquées aujourd'hui. En ajouter une, c'est déposer son fichier
// dans `textes/` et l'ajouter ici — rien d'autre (bloc S6).
const LANGUES = ['fr', 'en'];

// ---------------------------------------------------------------- les corps

function listeHtml(points) {
  return '<ul>\n' + points.map((p) => `  <li>${p}</li>`).join('\n') + '\n</ul>';
}

function imageHtml(img, classe) {
  return [
    `<figure class="${classe}">`,
    `  <img src="${img.src}" width="${img.largeur}" height="${img.hauteur}" alt="${echapper(img.alt)}">`,
    `  <figcaption>${img.legende}</figcaption>`,
    '</figure>',
  ].join('\n');
}

function corpsAccueil(L, contact) {
  const c = L.accueil;
  const morceaux = [
    `<h1>${c.h1}</h1>`,
    '',
    `<p class="lead">\n  ${c.lead}\n</p>`,
    '',
    '<figure class="avant-apres">',
    '  <div>',
    `    <img src="${c.comparaison.avant.src}" width="${c.comparaison.avant.largeur}" height="${c.comparaison.avant.hauteur}" alt="${echapper(c.comparaison.avant.alt)}">`,
    `    <span>${c.comparaison.avant.legende}</span>`,
    '  </div>',
    '  <div>',
    `    <img src="${c.comparaison.apres.src}" width="${c.comparaison.apres.largeur}" height="${c.comparaison.apres.hauteur}" alt="${echapper(c.comparaison.apres.alt)}">`,
    `    <span>${c.comparaison.apres.legende}</span>`,
    '  </div>',
    `  <figcaption>${c.comparaison.legende}</figcaption>`,
    '</figure>',
    '',
    `<a class="appstore" href="${APPSTORE}">${L.pied.appstore}</a>`,
    `<p class="appstore-note">${c.appstore.note}</p>`,
    '',
    `<p>\n  ${c.promesse}\n</p>`,
  ];

  for (const s of c.sections) {
    morceaux.push('', `<h2>${s.titre}</h2>`, listeHtml(s.points));
    if (s.ecran) morceaux.push('', imageHtml(s.ecran, 'ecran'));
  }

  morceaux.push(
    '',
    `<h2>${c.pro.titre}</h2>`,
    `<p>\n  ${c.pro.gratuit}\n</p>`,
    `<p>${c.pro.intro}</p>`,
    listeHtml(c.pro.points),
    `<p>\n  ${c.pro.note}\n</p>`,
    '',
    '<div class="card">',
    `  <h3 style="margin-top:0">${c.contact.titre}</h3>`,
    `  <p>${c.contact.texte}</p>`,
    `  <a class="contact" href="mailto:${contact}">${contact}</a>`,
    '</div>'
  );

  return morceaux.join('\n');
}

function corpsAssistance(L, contact) {
  const a = L.assistance;
  const morceaux = [
    `<h1>${a.h1}</h1>`,
    '',
    `<p class="lead">\n  ${a.lead}\n</p>`,
    '',
    '<div class="card">',
    `  <a class="contact" href="mailto:${contact}">${contact}</a>`,
    `  <p style="margin-bottom:0">\n    ${a.carte.note}\n  </p>`,
    '</div>',
    '',
    `<h2>${a.faqTitre}</h2>`,
  ];
  for (const item of a.faq) {
    morceaux.push('', `<h3>${item.q}</h3>`);
    for (const paragraphe of item.r) morceaux.push(`<p>\n  ${paragraphe}\n</p>`);
  }
  return morceaux.join('\n');
}

/**
 * Une page juridique, montée depuis les parties que l'application affiche.
 * Les parties d'ouverture — celles qui n'ont pas de titre — forment le chapeau ;
 * les suivantes deviennent un titre et son texte. Un `\n\n` dans une partie
 * sépare deux paragraphes.
 */
function corpsJuridique(L, parties, h1, contact) {
  const apple = L.juridique.apple;

  // Le texte, échappé, puis rendu cliquable là où il faut :
  // — l'adresse à laquelle on écrit. La politique de confidentialité demande
  //   d'écrire à cette adresse pour faire valoir ses droits sur ses données :
  //   elle doit s'ouvrir d'une tape, pas se recopier à la main.
  // — le renvoi vers le contrat d'Apple. L'application dit « en appuyant sur le
  //   lien au bas de cette page » parce qu'elle a ce lien sous l'écran ; le
  //   site, lui, peut poser un vrai lien.
  const texte = (t) => {
    let e = echapper(t);
    if (apple && e.includes(apple.cherche)) {
      e = e.replace(apple.cherche, `<a href="${apple.href}">${apple.remplace}</a>`);
    }
    return e.split(contact).join(`<a href="mailto:${contact}">${contact}</a>`);
  };

  const morceaux = [`<h1>${h1}</h1>`, ''];
  let chapeauFini = false;
  for (const partie of parties) {
    if (!partie.heading && !chapeauFini) {
      morceaux.push(`<p class="lead">\n  ${texte(partie.body)}\n</p>`);
      continue;
    }
    chapeauFini = true;
    if (partie.heading) morceaux.push('', `<h2>${echapper(partie.heading)}</h2>`);
    for (const p of partie.body.split('\n\n')) morceaux.push(`<p>\n  ${texte(p)}\n</p>`);
  }
  return morceaux.join('\n');
}

// ------------------------------------------------------------- l'assemblage

function main() {
  const { LEGAL_TEXT, CONTACT, origine } = legal.lire();
  if (origine === 'copie') {
    console.warn(
      "⚠️  L'application n'est pas à côté : les textes juridiques viennent de la copie " +
        'déposée dans textes/legal.json, qui peut avoir pris du retard.'
    );
  }

  const langues = LANGUES.map((code) => require(`./textes/${code}.js`));

  let ecrites = 0;
  for (const L of langues) {
    const juridique = LEGAL_TEXT[L.code];
    if (!juridique) throw new Error(`Pas de texte juridique pour la langue « ${L.code} ».`);

    const corps = {
      accueil: corpsAccueil(L, CONTACT),
      assistance: corpsAssistance(L, CONTACT),
      conditions: corpsJuridique(L, juridique.terms, L.juridique.conditions.h1, CONTACT),
      confidentialite: corpsJuridique(L, juridique.privacy, L.juridique.confidentialite.h1, CONTACT),
    };

    for (const cle of PAGES) {
      const html = page({
        langue: L,
        langues,
        cle,
        titre: L.meta[cle].titre,
        description: L.meta[cle].description,
        corps: corps[cle],
      });
      fs.writeFileSync(path.join(__dirname, L.fichiers[cle]), html, 'utf8');
      ecrites++;
    }
  }

  console.log(
    `${ecrites} pages écrites — ${langues.length} langue(s) × ${PAGES.length} pages. ` +
      `Textes juridiques : ${origine === 'application' ? "lus dans l'application" : 'copie locale'}.`
  );
}

main();
