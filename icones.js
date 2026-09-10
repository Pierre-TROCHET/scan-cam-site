// Les icônes du site, dessinées à la main en SVG.
//
// Pas d'emoji et pas de police d'icônes : du trait, sur une grille de 24, qui
// prend la couleur du texte autour de lui (`currentColor`) et reste net à
// n'importe quelle taille. Le style suit celui de l'application — trait fin,
// bouts arrondis.

const dessin = (corps, taille, remplissage) =>
  `<svg width="${taille}" height="${taille}" viewBox="0 0 24 24" fill="${remplissage || 'none'}" ` +
  `stroke="${remplissage ? 'none' : 'currentColor'}" stroke-width="1.8" stroke-linecap="round" ` +
  `stroke-linejoin="round" aria-hidden="true">${corps}</svg>`;

const icones = {
  /** Le globe du sélecteur de langue. */
  langue: (t = 14) =>
    dessin(
      '<circle cx="12" cy="12" r="9"></circle>' +
        '<path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"></path>',
      t
    ),

  /** La pomme du bouton App Store. Une forme pleine, pas un trait. */
  apple: (t = 18) =>
    dessin(
      '<path d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.7-.8-2.9-.8' +
        '-1.5 0-2.9.9-3.6 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.3 2.8 2.2 1.1 0 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7' +
        '1.2 0 2-1.1 2.7-2.1.8-1.2 1.2-2.4 1.2-2.5-.1 0-2.3-.9-2.4-3.6zM14.2 5.9c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.6' +
        '1.3-.6.7-1.1 1.7-.9 2.7 1 .1 2-.4 2.6-1.1z"></path>',
      t,
      'currentColor'
    ),

  /** L'étincelle du bandeau d'ouverture. */
  etincelle: (t = 14) => dessin('<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"></path>', t),

  /** La flèche entre la photo et le scan. */
  fleche: (t = 26) => dessin('<path d="M4 12h15"></path><path d="M14 7l5 5-5 5"></path>', t),

  /** Le viseur : scanner. */
  scanner: (t = 22) =>
    dessin(
      '<path d="M3 8V5.5A2.5 2.5 0 0 1 5.5 3H8"></path><path d="M16 3h2.5A2.5 2.5 0 0 1 21 5.5V8"></path>' +
        '<path d="M21 16v2.5a2.5 2.5 0 0 1-2.5 2.5H16"></path><path d="M8 21H5.5A2.5 2.5 0 0 1 3 18.5V16"></path>' +
        '<circle cx="12" cy="12" r="3.2"></circle>',
      t
    ),

  /** Le dossier : ranger. */
  dossier: (t = 22) =>
    dessin(
      '<path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4L11 8.5h8.5A1.5 1.5 0 0 1 21 10v7.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z"></path>',
      t
    ),

  /** La flèche qui sort de la boîte : partager. */
  partager: (t = 22) =>
    dessin(
      '<path d="M12 15V3.5"></path><path d="M8.5 7 12 3.5 15.5 7"></path>' +
        '<path d="M5 13v5.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V13"></path>',
      t
    ),

  /** Le bouclier coché : rien ne quitte le téléphone. */
  bouclier: (t = 22) =>
    dessin(
      '<path d="M12 3l7 3v5.5c0 4.2-2.9 7.6-7 9.5-4.1-1.9-7-5.3-7-9.5V6z"></path>' +
        '<path d="M9.2 12.2l2 2 3.6-3.8"></path>',
      t
    ),

  /** La couronne du Pro. */
  couronne: (t = 22) =>
    dessin('<path d="M4 17.5 3 7l5 3.5L12 4l4 6.5L21 7l-1 10.5z"></path><path d="M4 20.5h16"></path>', t),
};

// ------------------------------------------------------------- les drapeaux
//
// Dessinés, et non pris dans les emoji. Les drapeaux en emoji **ne s'affichent
// pas sur Windows** : le système y remplace 🇫🇷 par les deux lettres « FR », et
// la liste des langues aurait l'air cassée sur l'ordinateur de Pierre alors
// qu'elle serait juste sur son iPhone. Dessinés, ils sont les mêmes partout.
//
// Le choix du drapeau par langue suit celui de l'application (`i18n/index.ts`) :
// c'est le drapeau américain qui représente l'anglais, comme dans les réglages.

// Chaque drapeau a son propre identifiant de decoupe : six drapeaux sur une page
// avec le meme id, et les navigateurs decoupent tout avec le premier.
const cadre = (corps, code) =>
  '<svg class="drapeau" width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">' +
  `<defs><clipPath id="coupe-${code}"><rect width="20" height="14" rx="2.5"></rect></clipPath></defs>` +
  `<g clip-path="url(#coupe-${code})">${corps}</g>` +
  '<rect width="20" height="14" rx="2.5" fill="none" stroke="rgba(0,0,0,0.14)"></rect>' +
  '</svg>';

const etoile = (x, y, r) => {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const rayon = i % 2 ? r * 0.42 : r;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    pts.push((x + rayon * Math.cos(angle)).toFixed(2) + ',' + (y + rayon * Math.sin(angle)).toFixed(2));
  }
  return `<polygon points="${pts.join(' ')}" fill="#FFDE00"></polygon>`;
};

const drapeaux = {
  fr:
    '<rect width="20" height="14" fill="#FFFFFF"></rect>' +
    '<rect width="6.67" height="14" fill="#0055A4"></rect>' +
    '<rect x="13.33" width="6.67" height="14" fill="#EF4135"></rect>',

  // L'anglais, comme dans l'application. Treize bandes ne se voient pas à cette
  // taille : sept suffisent à faire lire le drapeau.
  en:
    '<rect width="20" height="14" fill="#FFFFFF"></rect>' +
    [0, 2, 4, 6].map((i) => `<rect y="${i * 2}" width="20" height="2" fill="#B22234"></rect>`).join('') +
    '<rect width="9" height="8" fill="#3C3B6E"></rect>' +
    [
      [2, 2],
      [4.5, 2],
      [7, 2],
      [3.25, 4],
      [5.75, 4],
      [2, 6],
      [4.5, 6],
      [7, 6],
    ]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0.7" fill="#FFFFFF"></circle>`)
      .join(''),

  es:
    '<rect width="20" height="14" fill="#AA151B"></rect>' +
    '<rect y="3.5" width="20" height="7" fill="#F1BF00"></rect>',

  de:
    '<rect width="20" height="4.67" fill="#000000"></rect>' +
    '<rect y="4.67" width="20" height="4.67" fill="#DD0000"></rect>' +
    '<rect y="9.33" width="20" height="4.67" fill="#FFCE00"></rect>',

  ja: '<rect width="20" height="14" fill="#FFFFFF"></rect><circle cx="10" cy="7" r="4.2" fill="#BC002D"></circle>',

  zh:
    '<rect width="20" height="14" fill="#DE2910"></rect>' +
    etoile(4.2, 4, 2.4) +
    etoile(8.4, 1.9, 0.9) +
    etoile(9.6, 3.9, 0.9) +
    etoile(9.4, 6.3, 0.9) +
    etoile(7.8, 7.8, 0.9),
};

/** Le drapeau d'une langue, ou rien si elle n'en a pas. */
icones.drapeau = (code) => (drapeaux[code] ? cadre(drapeaux[code], code) : '');

module.exports = icones;
