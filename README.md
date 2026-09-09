# Le site de Scan Cam — scancam.app

Le site public de l'application, hébergé gratuitement par GitHub Pages sur le domaine
**scancam.app** (certificat HTTPS fourni et renouvelé par GitHub, rien à faire).

## ⚠️ Les pages HTML sont ENGENDRÉES : ne les modifiez pas à la main

`index.html`, `assistance.html`, `conditions.html`, `confidentialite.html`, `home.html`,
`support.html`, `terms.html` et `privacy.html` sont **fabriquées par un programme**. Les
corriger directement ne sert à rien : la prochaine fabrication les écrasera sans prévenir.

Pour refabriquer le site, depuis ce dossier :

    node build.js

Ce qui se modifie, c'est :

| Fichier | Ce qu'il contient |
|---|---|
| `textes/fr.js`, `textes/en.js` | **tous les mots** de la vitrine et de l'assistance |
| `gabarit.js` | l'en-tête, le menu, le pied de page, l'ossature HTML |
| `style.css` | l'habillage |
| `images/` | les captures |

**Pourquoi ce détour**, alors que le site n'a que quatre pages : il en aura vingt-quatre quand
les six langues de l'application seront là. Écrites à la main, elles cesseraient d'être d'accord
entre elles au bout d'un mois — c'est déjà arrivé deux fois en petit, le 9 septembre 2026 : le
menu retirait le lien de sa propre page, deux pages avaient perdu leur lien App Store, et une
phrase de la politique de confidentialité était coupée en deux par un lien égaré.

## Les deux pages juridiques ne sont pas ici

Les **conditions d'utilisation** et la **politique de confidentialité** sont lues directement
dans l'application, dans `cam-scan/i18n/legal.ts` — le fichier que l'application affiche
elle-même, dans les six langues. Elles ne sont donc jamais recopiées, et les deux ne peuvent pas
diverger.

Le programme dépose au passage une copie dans `textes/legal.json`. Elle sert de secours si le
dossier `cam-scan` n'est pas à côté ; dans ce cas le programme le dit à voix haute.

**Conséquence :** pour corriger un texte juridique, on ouvre `i18n/legal.ts` dans l'application,
dans les six langues, puis on relance `node build.js` ici. Jamais l'inverse.

## ⚠️ Les noms de fichiers sont déclarés chez Apple

Quatre d'entre eux sont inscrits dans les dix fiches de l'App Store :

| Case de la fiche | Fiche française | Les neuf autres |
|---|---|---|
| URL d'assistance | `assistance.html` | `support.html` |
| URL de la politique de confidentialité | `confidentialite.html` | `privacy.html` |

**Une adresse d'assistance qui ne répond pas est un motif de refus.** On ne renomme donc aucun
de ces fichiers sans avoir changé la fiche d'abord. Les noms sont déclarés dans `textes/*.js`,
dans le bloc `fichiers`.

## Vérifier qu'on n'a rien cassé

    node outils/empreinte.js avant.json      # avant de toucher à quoi que ce soit
    node build.js
    node outils/empreinte.js apres.json
    node outils/empreinte.js --comparer avant.json apres.json

L'empreinte relève de chaque page son titre, sa description, son texte visible et tous ses
liens, en ignorant la mise en forme du HTML. Si elle est identique avant et après, le contenu
n'a pas bougé — c'est prouvé plutôt que supposé. C'est ce témoin qui a rattrapé, le
9 septembre 2026, deux adresses de courriel devenues non cliquables dans la politique de
confidentialité.

## Mettre en ligne

Un `git push` sur `main` suffit : GitHub Pages reconstruit tout seul en une minute environ.
Attention, la feuille de style est gardée **dix minutes** en mémoire par les navigateurs — une
page neuve peut donc s'afficher un moment avec l'ancien habillage. `Ctrl + Maj + R` pour forcer.

## Le plan du site

Les travaux en cours et à venir — le gabarit, l'habillage, les animations, les six langues —
sont dans la section **« Le site scancam.app — son plan à lui »** de `PLAN.md`, dans le dépôt de
l'application. Les blocs y sont numérotés S1, S2, S3…
