# Le site de Scan Cam — scancam.app

Le site public de l'application, hébergé gratuitement par GitHub Pages sur le domaine
**scancam.app** (certificat HTTPS fourni et renouvelé par GitHub, rien à faire).

## ⚠️ Les pages HTML sont ENGENDRÉES : ne les modifiez pas à la main

Les **24 pages HTML** de la racine — quatre pages dans chacune des six langues — sont
**fabriquées par un programme**. Les corriger directement ne sert à rien : la prochaine
fabrication les écrasera sans prévenir.

Pour refabriquer le site, depuis ce dossier :

    node build.js

Ce qui se modifie, c'est :

| Fichier | Ce qu'il contient |
|---|---|
| `textes/<langue>.js` | **tous les mots** de la vitrine et de l'assistance, une langue par fichier |
| `langues.js` | la liste des six langues — le seul endroit qui la déclare |
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

Depuis le 10 septembre 2026, **chaque langue de fiche pointe vers ses propres pages** — c'est le
bloc S7. Les dix fiches déclarent :

| Fiche | Assistance | Confidentialité | Marketing |
|---|---|---|---|
| fr-FR, fr-CA | `assistance.html` | `confidentialite.html` | `index.html` |
| en-US, en-GB, en-AU | `support.html` | `privacy.html` | `home.html` |
| es-ES, es-MX | `support-es.html` | `privacy-es.html` | `home-es.html` |
| de-DE | `support-de.html` | `privacy-de.html` | `home-de.html` |
| ja | `support-ja.html` | `privacy-ja.html` | `home-ja.html` |
| zh-Hans | `support-zh.html` | `privacy-zh.html` | `home-zh.html` |

Toutes préfixées de `https://scancam.app/`. **Ces adresses sont écrites dans la version 1.3, qui
est en préparation :** la version en vente garde encore les anciennes, qui redirigent.

**Une adresse d'assistance qui ne répond pas est un motif de refus.** On ne renomme donc aucun
de ces fichiers sans avoir changé la fiche d'abord. Les noms sont déclarés dans `textes/*.js`,
dans le bloc `fichiers`.

## Vérifier qu'on n'a rien cassé

Cinq témoins, qui répondent à cinq questions différentes. Chacun a déjà rattrapé quelque chose.

**« Est-ce que rien n'a bougé ? »** — pour un changement qui ne doit RIEN changer à ce que le
lecteur voit (la refonte de la charpente, par exemple) :

    node outils/empreinte.js avant.json      # avant de toucher à quoi que ce soit
    node build.js
    node outils/empreinte.js apres.json
    node outils/empreinte.js --comparer avant.json apres.json

Il relève de chaque page son titre, sa description, son texte visible et tous ses liens, en
ignorant la mise en forme du HTML. C'est lui qui a rattrapé, le 9 septembre 2026, deux adresses
de courriel devenues non cliquables dans la politique de confidentialité.

**« Est-ce qu'une phrase est tombée derrière un meuble ? »** — pour un changement d'habillage,
où la mise en page bouge exprès :

    node outils/rien-perdu.js

Il cherche chacune des phrases de `textes/` dans les pages fabriquées.

**« L’en-tête est-il le même partout ? »** — c’est le défaut qui revient :

    node outils/entete-identique.js

Il compare, d’une page à l’autre, la structure du bandeau, de l’en-tête et du pied, en mettant
de côté ce qui DOIT varier : les adresses des liens et la marque de la page courante. Trois fois
le 9 septembre 2026, quelque chose qui devait être identique partout ne l’était pas — un menu qui
retirait son propre lien, deux pieds de page privés de leur lien App Store, puis un bandeau plus
étroit sur les pages de texte, qui faisait **sauter le menu** en passant de l’accueil aux autres
pages. Ce contrôle a été essayé en remettant le défaut en place : il le voit.

**« Est-ce qu'une animation peut faire disparaître du contenu ? »** :

    node outils/rien-cache.js

Il vérifie qu'aucune règle ne peut rendre quelque chose invisible en dehors de la classe
`anime` — celle que le JavaScript pose sur la page, et seulement si le lecteur n'a pas demandé
moins d'animations. **Sans JavaScript, avec le réglage « Réduire les animations » de l'iPhone,
ou si le script tombe en panne, la page s'affiche entière et tout de suite.** Une page dont le
contenu dépend d'une animation est une page qui peut rester vide sans que personne le sache.

**« Est-ce que ce qui est EN LIGNE est juste ? »** — les quatre autres relisent les fichiers ;
celui-ci va voir le site publié, ce qui n’est pas la même chose :

    node outils/verifier-en-ligne.js

Il vérifie que les 24 pages répondent et annoncent leur langue, que chacune mène à ses cinq
sœurs et vers la bonne page, qu'aucun lien ni aucune image ne manque, que le bouton App Store
est partout, qu'aucune adresse ne part en http non sécurisé, que les 18 adresses déclarables
chez Apple répondent, et que les anciennes adresses `github.io` redirigent toujours — ce sont
celles que porte encore la version en vente. **Une adresse d’assistance qui ne répond pas est
un motif de refus.**

On peut aussi le lancer sur l’aperçu local : `node outils/verifier-en-ligne.js http://localhost:4173/`

## Mettre en ligne

Un `git push` sur `main` suffit : GitHub Pages reconstruit tout seul en une minute environ.
Attention, la feuille de style est gardée **dix minutes** en mémoire par les navigateurs — une
page neuve peut donc s'afficher un moment avec l'ancien habillage. `Ctrl + Maj + R` pour forcer.

## Le plan du site

Les travaux en cours et à venir — le gabarit, l'habillage, les animations, les six langues —
sont dans la section **« Le site scancam.app — son plan à lui »** de `PLAN.md`, dans le dépôt de
l'application. Les blocs y sont numérotés S1, S2, S3…
