// Lit les deux pages juridiques — conditions d'utilisation et politique de
// confidentialité — directement dans l'application, et non dans une copie.
//
// La source est `cam-scan/i18n/legal.ts`, le fichier que l'application affiche
// elle-même sur ses propres écrans. C'est voulu : si les deux textes vivaient
// chacun de leur côté, une correction faite d'un seul côté ferait dire deux
// choses différentes au même document, et c'est pire que de ne rien dire.
//
// Le fichier est du TypeScript, mais son contenu est de la donnée pure : des
// tableaux de { heading, body }. On lui retire donc les quelques marques de
// TypeScript et on le lit comme du JavaScript ordinaire.
const fs = require('fs');
const path = require('path');

const SOURCE = path.join(__dirname, '..', '..', 'cam-scan', 'i18n', 'legal.ts');
const COPIE = path.join(__dirname, '..', 'textes', 'legal.json');

/** Le TypeScript de `legal.ts`, ramené à du JavaScript exécutable. */
function enJavaScript(source) {
  return source
    .split('\n')
    .filter((l) => !/^import\s/.test(l))
    .filter((l) => !/^export type\s/.test(l))
    .join('\n')
    .replace(/^export const /gm, 'const ')
    .replace(/^const (\w+)\s*:\s*[^=]+=/gm, 'const $1 =');
}

/**
 * Les six langues, lues dans l'application quand elle est là, sinon dans la
 * copie déposée ici la dernière fois. Renvoie aussi d'où vient le texte, pour
 * que le programme puisse le dire à voix haute.
 */
function lire() {
  if (fs.existsSync(SOURCE)) {
    const js = enJavaScript(fs.readFileSync(SOURCE, 'utf8'));
    const { LEGAL_TEXT, CONTACT } = new Function(js + '\nreturn { LEGAL_TEXT, CONTACT };')();
    const contenu = { CONTACT, LEGAL_TEXT };
    // On dépose une copie dans le dépôt du site : le jour où l'application
    // n'est pas à côté, le site se fabrique quand même, avec le dernier texte
    // connu — et le programme prévient que c'est ce qu'il fait.
    fs.mkdirSync(path.dirname(COPIE), { recursive: true });
    fs.writeFileSync(COPIE, JSON.stringify(contenu, null, 2) + '\n', 'utf8');
    return { ...contenu, origine: 'application' };
  }

  if (fs.existsSync(COPIE)) {
    return { ...JSON.parse(fs.readFileSync(COPIE, 'utf8')), origine: 'copie' };
  }

  throw new Error(
    "Les textes juridiques sont introuvables : ni l'application (" + SOURCE + "), ni la copie (" + COPIE + ")."
  );
}

module.exports = { lire, SOURCE, COPIE };
