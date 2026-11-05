// Les icônes du site (onglet du navigateur, résultats de Google, écran d'accueil de l'iPhone), tirées de
// l'icône de l'application : cam-scan/assets/images/icon.png. Demandé par Pierre le 5 novembre 2026.
//
//     node outils/favicon.js
//
// Écrit à la racine du site :
//   favicon.ico            16, 32 et 48 px dans un seul fichier — l'adresse que tout navigateur essaie
//                          de lui-même, même sans balise ;
//   icone-192.png          pour Chrome, Android et Google (qui veut un multiple de 48 px) ;
//   apple-touch-icon.png   180 px, carré plein : l'iPhone arrondit les coins lui-même.
// Les icônes d'onglet ont les coins arrondis comme sur l'iPhone ; le contour est lissé en dessinant à
// 1024 px puis en réduisant. Les balises sont dans gabarit.js.
// Si l'icône de l'app change, relancer ce script puis `node build.js`.
const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const RACINE = path.join(__dirname, '..');
const SOURCE = path.join(RACINE, '..', 'cam-scan', 'assets', 'images', 'icon.png');
if (!fs.existsSync(SOURCE)) throw new Error(`icône de l'app introuvable : ${SOURCE}`);

const TRAVAIL = fs.mkdtempSync(path.join(os.tmpdir(), 'favicon-'));
const ffmpeg = (...args) => execFileSync('ffmpeg', ['-v', 'error', '-y', ...args]);

// L'icône à 1024 px, coins arrondis (rayon 22,5 % du côté, celui des icônes d'iPhone).
const GRAND = path.join(TRAVAIL, 'arrondie.png');
const N = 1024, R = 0.225 * N, D = N / 2 - R;
ffmpeg('-i', SOURCE, '-vf',
  `scale=${N}:${N}:flags=lanczos,format=rgba,` +
  `geq=r='r(X,Y)':g='g(X,Y)':b='b(X,Y)':a='255*lte(hypot(max(abs(X+0.5-${N / 2})-${D},0),max(abs(Y+0.5-${N / 2})-${D},0)),${R})'`,
  GRAND);

const reduite = (source, cote, sortie) =>
  ffmpeg('-i', source, '-vf', `scale=${cote}:${cote}:flags=lanczos`, '-pix_fmt', source === SOURCE ? 'rgb24' : 'rgba', sortie);

reduite(GRAND, 192, path.join(RACINE, 'icone-192.png'));
reduite(SOURCE, 180, path.join(RACINE, 'apple-touch-icon.png'));

// favicon.ico : un en-tête, une entrée par taille, puis les PNG tels quels (format admis depuis Windows Vista).
const tailles = [16, 32, 48];
const pngs = tailles.map((t) => {
  const f = path.join(TRAVAIL, `${t}.png`);
  reduite(GRAND, t, f);
  return fs.readFileSync(f);
});
const entete = Buffer.alloc(6 + 16 * tailles.length);
entete.writeUInt16LE(0, 0);
entete.writeUInt16LE(1, 2); // icône
entete.writeUInt16LE(tailles.length, 4);
let decalage = entete.length;
tailles.forEach((t, k) => {
  const o = 6 + 16 * k;
  entete.writeUInt8(t, o);
  entete.writeUInt8(t, o + 1);
  entete.writeUInt16LE(1, o + 4);  // plans
  entete.writeUInt16LE(32, o + 6); // bits par pixel
  entete.writeUInt32LE(pngs[k].length, o + 8);
  entete.writeUInt32LE(decalage, o + 12);
  decalage += pngs[k].length;
});
fs.writeFileSync(path.join(RACINE, 'favicon.ico'), Buffer.concat([entete, ...pngs]));
fs.rmSync(TRAVAIL, { recursive: true, force: true });

for (const f of ['favicon.ico', 'icone-192.png', 'apple-touch-icon.png']) {
  console.log(`${f} : ${Math.round(fs.statSync(path.join(RACINE, f)).size / 1024)} Ko`);
}
