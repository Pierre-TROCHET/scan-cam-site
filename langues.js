// Les langues du site, dans l'ordre où elles s'affichent — le même que dans
// l'application (`i18n/index.ts`).
//
// Un seul endroit, pour que le programme qui fabrique le site et les quatre
// témoins qui le vérifient ne puissent pas être en désaccord sur ce qu'ils
// doivent regarder. Ajouter une langue, c'est déposer son fichier dans
// `textes/` et ajouter son code ici.
const CODES = ['fr', 'en', 'es', 'de', 'ja', 'zh'];

/** Les six fichiers de textes, chargés. */
const charger = () => CODES.map((code) => require(`./textes/${code}.js`));

/** Les 24 noms de fichiers HTML engendrés, dans l'ordre. */
const fichiers = () => charger().flatMap((L) => Object.values(L.fichiers));

module.exports = { CODES, charger, fichiers };
