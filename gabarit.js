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

/** Les liens vers les autres langues, pour la MÊME page — jamais vers l'accueil. */
function liensLangues(langue, langues, cle) {
  return langues
    .filter((autre) => autre.code !== langue.code)
    .map(
      (autre) =>
        `<a class="lang" href="${autre.fichiers[cle]}" hreflang="${autre.code}" lang="${autre.code}">` +
        `${icones.drapeau(autre.code)}<span>${autre.nom}</span></a>`
    );
}

/**
 * Le sélecteur de langue de l'en-tête. À six langues, cinq liens posés à la
 * suite ne tiennent plus dans la barre : c'est devenu une liste qui s'ouvre.
 * Elle est faite avec <details>, donc **elle fonctionne sans JavaScript**, au
 * doigt comme au clavier.
 */
function selecteurLangues(langue, langues, cle) {
  return [
    '<details class="langues">',
    `        <summary>${icones.drapeau(langue.code)}<span>${langue.nom}</span></summary>`,
    '        <ul>',
    ...liensLangues(langue, langues, cle).map((l) => `          <li>${l}</li>`),
    '        </ul>',
    '      </details>',
  ].join('\n');
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
  liens.push('      ' + selecteurLangues(langue, langues, cle));
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
  for (const l of liensLangues(langue, langues, cle)) liens.push(l);

  return [
    '<footer class="pied">',
    '  <div class="dedans">',
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

  // Ce que la page sait des autres langues : de quoi proposer la sienne au
  // visiteur, dans SA langue. Déposé en JSON plutôt qu'écrit dans le script,
  // pour que le script reste le même sur les 24 pages. Les « < » sont échappés :
  // c'est du contenu posé à l'intérieur d'une balise <script>.
  const donneesLangues = JSON.stringify(
    langues
      .filter((autre) => autre.code !== langue.code)
      .map((autre) => ({
        code: autre.code,
        nom: autre.nom,
        url: autre.fichiers[cle],
        phrase: autre.suggestion.phrase,
        fermer: autre.suggestion.fermer,
        drapeau: icones.drapeau(autre.code),
      }))
  ).replace(/</g, '\\u003c');

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
<script>if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("anime");</script>
</head>
<body>

<div class="bande">
  <div class="dedans">
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

<main class="dedans">
${mesure ? '<div class="colonne">\n' + corps.trim() + '\n</div>' : corps.trim()}
</main>

${pied(langue, cle, langues, mesure)}

<script>
// Les sections marquées « revele » se posent quand on descend jusqu'à elles.
//
// Si le lecteur a demandé moins d'animations, ou si ce script ne s'exécute pas,
// la classe « anime » est absente et tout est visible d'emblée : le contenu ne
// dépend jamais de l'animation.
//
// On mesure à l'écoute du défilement plutôt qu'avec IntersectionObserver, qui
// est pourtant l'outil prévu pour ça : il ne se déclenche jamais dans le
// navigateur d'aperçu qui sert à vérifier ce site, donc son résultat n'y est
// pas contrôlable. Livrer un mécanisme qu'on ne peut pas essayer, quand ce
// mécanisme décide de ce qui s'affiche, c'est accepter que la page reste vide
// sans le savoir. Ceci se mesure, se vérifie, et coûte huit calculs par image.
(function () {
  var cibles = [].slice.call(document.querySelectorAll(".revele"));
  var i;
  if (!document.documentElement.classList.contains("anime")) {
    for (i = 0; i < cibles.length; i++) cibles[i].classList.add("vu");
    return;
  }
  var battement = null;

  function regarde() {
    var limite = (window.innerHeight || document.documentElement.clientHeight) * 0.92;
    for (var j = cibles.length - 1; j >= 0; j--) {
      if (cibles[j].getBoundingClientRect().top > limite) continue;
      cibles[j].classList.add("vu");
      cibles.splice(j, 1);
    }
    if (cibles.length) return;
    // Plus rien à attendre : on débranche tout.
    window.removeEventListener("scroll", regarde);
    window.removeEventListener("resize", regarde);
    if (battement) clearInterval(battement);
  }

  // Deux déclencheurs, et c'est volontaire. Le défilement répond tout de suite,
  // mais il ne parvient pas partout : dans le navigateur d'aperçu qui sert à
  // vérifier ce site, aucun événement de défilement n'est émis, et
  // requestAnimationFrame y est suspendu par-dessus le marché. Le battement,
  // lui, se déclenche partout — c'est le seul des deux qui soit contrôlable
  // ici, donc c'est lui qui garantit que rien ne reste invisible. Il s'arrête
  // de lui-même dès que toutes les sections sont posées.
  window.addEventListener("scroll", regarde, { passive: true });
  window.addEventListener("resize", regarde);
  battement = setInterval(regarde, 250);
  regarde();
})();
</script>

<script type="application/json" id="autres-langues">${donneesLangues}</script>
<script>
// Proposer au visiteur la page dans SA langue — proposer, jamais l'imposer.
//
// Trois règles :
//  1. On ne redirige JAMAIS tout seul. Une redirection automatique enferme :
//     quelqu'un qui veut lire l'anglais sur un téléphone réglé en japonais n'en
//     sortirait plus. On pose une carte, il décide.
//  2. Dès qu'il a choisi une langue — ici ou dans le menu — on s'en souvient et
//     on ne propose plus rien.
//  3. La carte est POSÉE PAR-DESSUS la page, jamais insérée dedans : rien ne se
//     décale sous les yeux du lecteur. C'est la règle du bloc S5.
(function () {
  var noeud = document.getElementById('autres-langues');
  if (!noeud) return;
  var autres;
  try {
    autres = JSON.parse(noeud.textContent);
  } catch (e) {
    return;
  }
  var ici = document.documentElement.lang;
  var CLE = 'scancam-langue';

  function retenir(code) {
    try {
      localStorage.setItem(CLE, code);
    } catch (e) {
      /* navigation privée, réglages verrouillés : tant pis, on ne retient pas. */
    }
  }

  // Un clic sur n'importe quel lien de langue vaut choix, où qu'il soit.
  document.addEventListener('click', function (e) {
    var n = e.target;
    while (n && n !== document) {
      if (n.tagName === 'A' && n.getAttribute('hreflang')) {
        retenir(n.getAttribute('hreflang'));
        return;
      }
      n = n.parentNode;
    }
  });

  var deja = null;
  try {
    deja = localStorage.getItem(CLE);
  } catch (e) {}
  if (deja) return; // il a déjà tranché une fois

  var demandees = navigator.languages || [navigator.language || ''];
  var voulue = null;
  for (var i = 0; i < demandees.length; i++) {
    var code = String(demandees[i]).toLowerCase().split('-')[0];
    if (code === ici) return; // sa langue est déjà celle de la page
    for (var j = 0; j < autres.length; j++) {
      if (autres[j].code === code) {
        voulue = autres[j];
        break;
      }
    }
    if (voulue) break;
  }
  if (!voulue) return; // aucune des six : on ne dit rien

  var carte = document.createElement('div');
  carte.className = 'suggestion';
  carte.style.opacity = '0';
  carte.style.transform = 'translateY(10px)';
  carte.setAttribute('lang', voulue.code);
  var lien = document.createElement('a');
  lien.href = voulue.url;
  lien.setAttribute('hreflang', voulue.code);
  lien.innerHTML = voulue.drapeau + '<span>' + voulue.nom + '</span>';
  var texte = document.createElement('p');
  texte.textContent = voulue.phrase;
  var fermer = document.createElement('button');
  fermer.type = 'button';
  fermer.className = 'suggestion-fermer';
  fermer.textContent = voulue.fermer;
  fermer.addEventListener('click', function () {
    retenir(ici); // fermer, c'est choisir de rester
    carte.parentNode.removeChild(carte);
  });
  carte.appendChild(texte);
  carte.appendChild(lien);
  carte.appendChild(fermer);
  document.body.appendChild(carte);
  setTimeout(function () {
    carte.style.opacity = '';
    carte.style.transform = '';
    carte.classList.add('vue');
  }, 60);
})();
</script>

</body>
</html>
`;
}

module.exports = { page, menu, pied, echapper, PAGES, APPSTORE };
