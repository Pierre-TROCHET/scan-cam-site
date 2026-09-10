// Le troisième témoin : est-ce qu'une animation peut faire disparaître du
// contenu ?
//
//     node outils/rien-cache.js
//
// La règle du bloc S5 : **aucune règle ne doit pouvoir rendre quelque chose
// invisible en dehors de la classe « anime »**, qui n'est posée sur la page que
// par JavaScript, et seulement si le lecteur n'a pas demandé moins d'animations.
// Sans JavaScript, avec le réglage « Réduire les animations » de l'iPhone, ou
// si le script tombe en panne, la page doit s'afficher entière, tout de suite.
//
// Une page dont le contenu dépend d'une animation est une page qui peut rester
// vide sans que personne le sache. Ce fichier est là pour que ça n'arrive pas.
const fs = require('fs');
const path = require('path');

const css = fs
  .readFileSync(path.join(__dirname, '..', 'style.css'), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, ''); // les commentaires ne sont pas des règles

/** Les images-clés (@keyframes) : leur contenu ne s'applique que par une animation. */
const nomsKeyframes = [...css.matchAll(/@keyframes\s+([\w-]+)/g)].map((m) => m[1]);
const sansKeyframes = css.replace(/@keyframes\s+[\w-]+\s*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/g, '');

const regles = [...sansKeyframes.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((m) => ({
  selecteur: m[1].trim().replace(/\s+/g, ' '),
  corps: m[2],
}));

const sousAnime = (selecteur) =>
  selecteur
    .split(',')
    .every((s) => s.trim().startsWith('.anime ') || s.trim().startsWith('.anime.'));

let fautes = 0;

// 1. Rien ne doit poser une opacité nulle hors de « anime ».
for (const r of regles) {
  if (!/opacity:\s*0(\.0*)?\s*(;|$)/.test(r.corps.trim())) continue;
  if (sousAnime(r.selecteur)) continue;
  console.log('✗ opacité nulle hors de « anime » : ' + r.selecteur);
  fautes++;
}

// 2. Aucune animation ne doit être déclenchée hors de « anime » : une image-clé
//    qui part de l'invisible cacherait le contenu le temps de se jouer, et
//    resterait dessus si l'animation ne se joue jamais.
for (const r of regles) {
  if (!/(^|;)\s*animation(-name)?\s*:/.test(r.corps)) continue;
  if (sousAnime(r.selecteur)) continue;
  console.log('✗ animation déclenchée hors de « anime » : ' + r.selecteur);
  fautes++;
}

// 3. Et rien ne doit escamoter un élément autrement (visibility, display).
for (const r of regles) {
  if (!/visibility:\s*hidden|display:\s*none/.test(r.corps)) continue;
  if (sousAnime(r.selecteur)) continue;
  console.log('⚠ élément escamoté hors de « anime » (à vérifier à la main) : ' + r.selecteur);
}

console.log(
  fautes === 0
    ? `✔ ${regles.length} règles relues, ${nomsKeyframes.length} images-clés (${nomsKeyframes.join(', ')}).\n` +
        "  Aucune ne peut cacher du contenu sans la classe « anime » : sans JavaScript, ou avec\n" +
        "  « Réduire les animations », la page s'affiche entière et tout de suite."
    : `\n${fautes} règle(s) peuvent cacher du contenu sans condition.`
);
process.exit(fautes === 0 ? 0 : 1);
