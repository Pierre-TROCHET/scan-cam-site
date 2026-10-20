// Lit les pages juridiques — conditions d'utilisation et politique de
// confidentialité — directement dans l'application, et non dans une copie.
//
// Les sources sont `cam-scan/i18n/legal.ts` (la version iPhone) et
// `cam-scan/i18n/legal-android.ts` (la version Android, 20 octobre 2026) : les
// fichiers que l'application affiche elle-même sur ses propres écrans. C'est
// voulu : si les deux textes vivaient chacun de leur côté, une correction faite
// d'un seul côté ferait dire deux choses différentes au même document, et c'est
// pire que de ne rien dire.
//
// Les fichiers sont du TypeScript, mais leur contenu est de la donnée pure : des
// tableaux de { heading, body }. On leur retire donc les quelques marques de
// TypeScript et on les lit comme du JavaScript ordinaire.
const fs = require('fs');
const path = require('path');

const APPLI = path.join(__dirname, '..', '..', 'cam-scan', 'i18n');
const TEXTES = path.join(__dirname, '..', 'textes');

const SOURCE = path.join(APPLI, 'legal.ts');
const COPIE = path.join(TEXTES, 'legal.json');
const SOURCE_ANDROID = path.join(APPLI, 'legal-android.ts');
const COPIE_ANDROID = path.join(TEXTES, 'legal-android.json');

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
 * Les noms `noms` du fichier `source`, lus dans l'application quand elle est
 * là, sinon dans la copie déposée ici la dernière fois. Renvoie aussi d'où
 * vient le texte, pour que le programme puisse le dire à voix haute.
 */
function lireUn(source, copie, noms) {
  if (fs.existsSync(source)) {
    const js = enJavaScript(fs.readFileSync(source, 'utf8'));
    const contenu = new Function(js + `\nreturn { ${noms.join(', ')} };`)();
    // On dépose une copie dans le dépôt du site : le jour où l'application
    // n'est pas à côté, le site se fabrique quand même, avec le dernier texte
    // connu — et le programme prévient que c'est ce qu'il fait.
    fs.mkdirSync(path.dirname(copie), { recursive: true });
    fs.writeFileSync(copie, JSON.stringify(contenu, null, 2) + '\n', 'utf8');
    return { contenu, origine: 'application' };
  }

  if (fs.existsSync(copie)) {
    return { contenu: JSON.parse(fs.readFileSync(copie, 'utf8')), origine: 'copie' };
  }

  throw new Error(
    "Les textes juridiques sont introuvables : ni l'application (" + source + '), ni la copie (' + copie + ').'
  );
}

/** Les deux versions, iPhone et Android, dans toutes les langues. */
function lire() {
  const iphone = lireUn(SOURCE, COPIE, ['CONTACT', 'LEGAL_TEXT']);
  const android = lireUn(SOURCE_ANDROID, COPIE_ANDROID, ['LEGAL_TEXT_ANDROID']);
  return {
    ...iphone.contenu,
    ...android.contenu,
    origine: iphone.origine === 'application' && android.origine === 'application' ? 'application' : 'copie',
  };
}

module.exports = { lire, SOURCE, COPIE, SOURCE_ANDROID, COPIE_ANDROID };
