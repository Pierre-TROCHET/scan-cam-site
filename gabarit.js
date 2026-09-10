// Le gabarit : la coquille commune à toutes les pages du site.
//
// L'en-tête, le menu, le pied de page et l'ossature HTML sont écrits ICI, une
// fois. Chaque page n'apporte que son titre et son corps. C'est tout l'objet du
// bloc S3 : avant, ces trois morceaux étaient recopiés à la main dans chaque
// fichier, et ils avaient fini par ne plus se ressembler — un menu qui retirait
// le lien de sa propre page, deux pages qui avaient perdu le lien App Store,
// une apostrophe droite ici et courbe là.
//
// Le bloc S4 y a ajouté l'habillage : le bandeau bleu porte l'en-tête et
// l'ouverture, le corps vient dessous, le pied ferme la page.

const icones = require('./icones');

const APPSTORE = 'https://apps.apple.com/app/id6805626898';

/** L'ordre du menu, et donc l'ordre du pied de page. Le même partout. */
const PAGES = ['accueil', 'assistance', 'conditions', 'confidentialite'];

/** Le texte tel quel, mais sans pouvoir refermer une balise par surprise. */
function echapper(texte) {
  return String(texte)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Les liens vers les autres langues, pour la même page. */
function liensLangues(langue, langues, cle, avecIcone) {
  return langues
    .filter((autre) => autre.code !== langue.code)
    .map(
      (autre) =>
        `<a class="lang" href="${autre.fichiers[cle]}" hreflang="${autre.code}" lang="${autre.code}">` +
        (avecIcone ? icones.langue(14) : '') +
        `${autre.nom}</a>`
    );
}

/**
 * Le menu, vu depuis la page `cle`.
 * La page où l'on se trouve est MARQUÉE, jamais retirée.
 */
function menu(langue, cle, langues) {
  const liens = PAGES.map((p) =>
    p === cle
      ? `      <span class="current" aria-current="page">${langue.menu[p]}</span>`
      : `      <a href="${langue.fichiers[p]}">${langue.menu[p]}</a>`
  );
  for (const l of liensLangues(langue, langues, cle, true)) liens.push('      ' + l);
  return `<nav>\n${liens.join('\n')}\n    </nav>`;
}

/** Le pied de page. Mêmes liens que le menu, plus l'App Store, toujours en tête. */
function pied(langue, cle, langues, mesure) {
  const liens = [`<a href="${APPSTORE}">${langue.pied.appstore}</a>`];
  for (const p of PAGES) {
    liens.push(
      p === cle
        ? `<span class="current" aria-current="page">${langue.pied.liens[p]}</span>`
        : `<a href="${langue.fichiers[p]}">${langue.pied.liens[p]}</a>`
    );
  }
  for (const l of liensLangues(langue, langues, cle, false)) liens.push(l);

  return [
    '<footer class="pied">',
    `  <div class="dedans${mesure ? ' mesure' : ''}">`,
    `    <div>${langue.pied.editeur}</div>`,
    '    <div class="pied-liens">',
    ...liens.map((l) => '      ' + l),
    '    </div>',
    '  </div>',
    '</footer>',
  ].join('\n');
}

/**
 * Une page entière.
 * `entete` est ce qui s'affiche DANS le bandeau bleu, sous le menu : l'ouverture
 * pour l'accueil, le titre et son chapeau pour les autres pages.
 * `corps` est le contenu qui vient dessous.
 * Les deux sont du HTML déjà fabriqué par le programme : ils arrivent tels
 * quels, sans échappement, parce qu'ils viennent de nos propres fichiers.
 */
function page({ langue, langues, cle, titre, description, entete, corps, mesure }) {
  // Les autres langues de la même page, annoncées aux navigateurs et aux
  // moteurs de recherche. Les pages anglaises en avaient une, les françaises
  // n'en avaient aucune ; maintenant chacune les a toutes.
  const alternatives = langues
    .filter((autre) => autre.code !== langue.code)
    .map((autre) => `<link rel="alternate" hreflang="${autre.code}" href="${autre.fichiers[cle]}">`)
    .join('\n');

  return `<!doctype html>
<html lang="${langue.code}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${echapper(titre)}</title>
<meta name="description" content="${echapper(description)}">
<meta name="theme-color" content="#1250C8">
${alternatives}
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="bande">
  <div class="dedans${mesure ? ' mesure' : ''}">
    <header class="entete">
      <a class="logo" href="${langue.fichiers.accueil}">
        <span class="mark">SC</span>
        <span class="name">Scan Cam</span>
      </a>
      ${menu(langue, cle, langues)}
    </header>

${entete.trim()}
  </div>
</div>

<main class="dedans${mesure ? ' mesure' : ''}">
${corps.trim()}
</main>

${pied(langue, cle, langues, mesure)}

</body>
</html>
`;
}

module.exports = { page, menu, pied, echapper, PAGES, APPSTORE };
