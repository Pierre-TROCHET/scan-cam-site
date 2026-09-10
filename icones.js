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

module.exports = icones;
