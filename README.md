# Le site de Scan Cam

Quatre pages, écrites le 26 août 2026, pour remplir les cases que l'App Store réclame :

| Fichier | Sert à | Obligatoire pour Apple |
|---|---|---|
| `index.html` | l'URL marketing | non |
| `assistance.html` | l'URL d'assistance | **oui** |
| `confidentialite.html` | l'URL de la politique de confidentialité | **oui** |
| `conditions.html` | les conditions d'utilisation | recommandé |

`style.css` habille les quatre. Il n'y a rien d'autre : pas de code qui tourne, pas de compte,
pas de dépendance. Les pages s'ouvrent telles quelles dans n'importe quel navigateur.

## ⚠️ Ce site doit rester d'accord avec l'application

Les textes de `confidentialite.html` et de `conditions.html` sont **la copie exacte** de ce que
l'application affiche dans ses réglages (`i18n/legal.ts` du projet `cam-scan`, version
française, qui est le texte de référence). Le jour où l'un des deux change, **les deux
changent** : une politique de confidentialité qui dit deux choses différentes à deux endroits
est pire que pas de politique du tout.

Même règle pour le prix, qui est écrit dans `conditions.html` : s'il change, il change aussi
dans le paywall de l'application, dans les six langues de `i18n/legal.ts`, et dans la
description de la fiche (`BOUTIQUE.md`).

## Mettre en ligne, avec l'hébergement gratuit de GitHub

1. Sur **github.com**, bouton **New repository**. Nom : `scan-cam-site`. Cochez **Public** —
   c'est obligatoire pour l'hébergement gratuit, et ça n'ouvre en rien le dépôt de
   l'application, qui reste privé de son côté.
2. Sur la page du dépôt vide, cliquez **uploading an existing file**, puis faites glisser les
   cinq fichiers de ce dossier. Bouton vert **Commit changes**.
3. Onglet **Settings** → **Pages** dans la colonne de gauche. Sous *Build and deployment* →
   *Source*, laissez **Deploy from a branch** ; sous *Branch*, choisissez **main** et le dossier
   **/ (root)**. **Save**.
4. Attendez une à deux minutes, puis rechargez la page : GitHub affiche l'adresse du site.

Les quatre adresses à recopier dans App Store Connect seront alors :

    https://<votre-compte>.github.io/scan-cam-site/
    https://<votre-compte>.github.io/scan-cam-site/assistance.html
    https://<votre-compte>.github.io/scan-cam-site/confidentialite.html
    https://<votre-compte>.github.io/scan-cam-site/conditions.html

**Vérifiez que chacune s'ouvre depuis un téléphone** avant de les coller dans la fiche : une
adresse d'assistance qui ne répond pas est un motif de refus.

## Ce qui reste à ajouter le jour de la publication

- Le **lien vers la fiche de l'App Store** sur la page d'accueil. Un commentaire marque
  l'endroit dans `index.html`. Rien ne l'annonce pour l'instant, puisque l'application n'y est
  pas encore.
- La **date de mise à jour** de la politique de confidentialité, si son texte bouge d'ici là.
