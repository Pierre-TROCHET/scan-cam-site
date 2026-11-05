// Les guides de Scan Cam en français — traduction de `guides-en.js`, avec exactement la même
// structure (mêmes guides, mêmes blocs, mêmes captures). Les mots en gras sont les libellés de
// l'application en français (les clés de cam-scan/i18n/en.ts). Vouvoiement, comme le reste du site.
// Les règles d'écriture sont dans l'en-tête de `guides-en.js`.

module.exports = {
  "code": "fr",
  "menu": "Guides",
  "accueil": {
    "fichier": "guides-fr.html",
    "titre": "Guides — Scan Cam",
    "description": "Des guides pas à pas pour scanner, signer, fusionner et lire vos documents sur iPhone avec Scan Cam.",
    "h1": "Guides",
    "lead": "Des réponses courtes, pas à pas, pour ce qu’on veut le plus souvent faire avec un scanner sur son iPhone.",
    "sectionTitre": "Choisissez un guide",
    "gratuit": "Gratuit",
    "pro": "Pro"
  },
  "etiquette": {
    "free": "Gratuit dans Scan Cam",
    "pro": "Fonction Pro · essai gratuit de 7 jours"
  },
  "blocAccueil": {
    "titre": "Guides",
    "texte": "Des réponses pas à pas pour scanner, signer, fusionner et lire vos documents sur iPhone.",
    "tous": "Tous les guides"
  },
  "pied": {
    "titre": "Essayez Scan Cam",
    "texte": "Scan Cam se télécharge gratuitement. Le scan, les dossiers, les filtres et l’export en PDF sont gratuits, sans limite de temps ; l’abonnement Pro ajoute les outils supplémentaires, et commence par un essai gratuit de 7 jours.",
    "youtube": "Plutôt en vidéo ? Les tutos courts sont sur YouTube (en anglais)"
  },
  "liees": "Autres guides",
  "guides": [
    {
      "cle": "multi-page",
      "fichier": "guide-scanner-plusieurs-pages-en-un-pdf-iphone-fr.html",
      "niveau": "free",
      "titre": "Comment scanner plusieurs pages en un seul PDF sur iPhone — Scan Cam",
      "description": "Scannez toutes les pages d’un contrat, d’un formulaire ou d’un devoir en un seul PDF sur iPhone, remettez-les en ordre et partagez-le. Gratuit, sans compte.",
      "h1": "Comment scanner plusieurs pages en un seul PDF sur iPhone",
      "lead": "Scannez toutes les feuilles d’un contrat, d’un formulaire ou d’un devoir dans un seul PDF, gratuitement et sans compte.",
      "carte": "Scannez chaque feuille dans un même document, puis partagez-le en un seul PDF.",
      "corps": [
        [
          "h2",
          "Scanner les pages"
        ],
        [
          "ol",
          [
            "Touchez <strong>Scanner un document</strong> et cadrez la première feuille : les bords sont trouvés et la page est redressée.",
            "Prenez les autres feuilles, puis validez. Elles forment un seul document.",
            "Une page oubliée ? Ouvrez le document et touchez <strong>Ajouter une page</strong>."
          ]
        ],
        [
          "clip",
          "scan"
        ],
        [
          "h2",
          "Ranger le document"
        ],
        [
          "p",
          "Maintenez une vignette et faites-la glisser pour changer l’ordre des pages ; la croix retire une page. Une ombre sur la page ? Ouvrez <strong>Filtres</strong> et activez <strong>Retirer les ombres</strong>."
        ],
        [
          "clip",
          "reordonner"
        ],
        [
          "h2",
          "L’envoyer en un seul PDF"
        ],
        [
          "p",
          "Touchez <strong>Partager</strong>, choisissez <strong>PDF</strong>, puis envoyez, enregistrez ou imprimez."
        ],
        [
          "note",
          "<strong>Gratuit ou Pro ?</strong> Tout cela est gratuit, sans limite de pages. Pro retire la petite mention « Numérisé avec Scan Cam » des PDF."
        ]
      ],
      "suite": [
        "receipts",
        "merge",
        "extract-pages"
      ]
    },
    {
      "cle": "receipts",
      "fichier": "guide-scanner-ses-tickets-de-caisse-iphone-fr.html",
      "niveau": "free",
      "titre": "Comment scanner ses tickets de caisse sur iPhone et les ranger — Scan Cam",
      "description": "Transformez vos tickets de caisse en PDF propres et nets sur iPhone, rangez-les dans des dossiers et envoyez-les à votre comptable. Scan et rangement gratuits.",
      "h1": "Comment scanner ses tickets de caisse sur iPhone et les ranger",
      "lead": "Les tickets thermiques s’effacent en quelques mois. Scannez-les le jour même et rangez-les là où vous les retrouverez.",
      "carte": "Faites des copies nettes et rangées de vos tickets, et envoyez-les à qui en a besoin.",
      "corps": [
        [
          "h2",
          "Scanner un ticket"
        ],
        [
          "ol",
          [
            "Touchez <strong>Scanner un document</strong> et cadrez le ticket posé sur un fond sombre.",
            "Ouvrez <strong>Filtres</strong>, choisissez <strong>Noir et blanc</strong>, réglez l’intensité, puis touchez <strong>Appliquer</strong>."
          ]
        ],
        [
          "clip",
          "filtres"
        ],
        [
          "h2",
          "Le ranger pour le retrouver"
        ],
        [
          "p",
          "Touchez <strong>Créer un dossier</strong> pour faire un dossier comme « Tickets 2026 », et nommez chaque ticket d’après le magasin et la date. La recherche trouve fichiers et dossiers par leur nom."
        ],
        [
          "clip",
          "ranger"
        ],
        [
          "h2",
          "Les envoyer au comptable"
        ],
        [
          "p",
          "<strong>Partager</strong> envoie un ticket en PDF. <strong>Réglages → Tout exporter</strong> exporte tous vos documents, dossier par dossier."
        ],
        [
          "note",
          "<strong>Gratuit ou Pro ?</strong> Le scan, les filtres, les dossiers, la recherche et l’export en PDF sont gratuits. Pro ajoute <strong>Extraire le texte</strong>, pour copier un total ou une date."
        ]
      ],
      "suite": [
        "multi-page",
        "extract-text",
        "merge"
      ]
    },
    {
      "cle": "sign",
      "fichier": "guide-signer-un-document-sur-iphone-fr.html",
      "niveau": "pro",
      "titre": "Comment signer un document sur iPhone avec le doigt — Scan Cam",
      "description": "Dessinez votre signature une fois, puis placez-la sur n’importe quel document scanné ou PDF sur iPhone. Pas à pas avec Scan Cam Pro.",
      "h1": "Comment signer un document sur iPhone avec le doigt",
      "lead": "Ni imprimante, ni stylo : dessinez votre signature une fois, puis placez-la sur n’importe quel document.",
      "carte": "Dessinez ou photographiez votre signature une fois, puis placez-la sur n’importe quel document.",
      "corps": [
        [
          "h2",
          "Créer votre signature"
        ],
        [
          "ol",
          [
            "Ouvrez le document, touchez <strong>Signature</strong>, puis <strong>Nouvelle signature</strong>.",
            "Signez au doigt (<strong>Dessiner</strong>) ou photographiez une signature sur papier (<strong>Photo</strong>), puis touchez <strong>Enregistrer</strong>. Elle est gardée pour la prochaine fois."
          ]
        ],
        [
          "h2",
          "La placer sur la page"
        ],
        [
          "ol",
          [
            "Choisissez la page, faites glisser la signature à sa place et réglez sa <strong>Taille</strong>.",
            "Touchez <strong>Valider</strong> : la signature est écrite dans le PDF."
          ]
        ],
        [
          "clip",
          "signature"
        ],
        [
          "note",
          "<strong>Faites d’abord une copie</strong> si vous voulez garder une version non signée : la signature ne s’enlève plus. Une signature dessinée est une image, pas une signature électronique certifiée."
        ],
        [
          "note",
          "<strong>Gratuit ou Pro ?</strong> La signature fait partie de Pro, qui commence par un essai gratuit de 7 jours."
        ]
      ],
      "suite": [
        "multi-page",
        "watermark",
        "merge"
      ]
    },
    {
      "cle": "extract-text",
      "fichier": "guide-copier-le-texte-d-un-scan-iphone-fr.html",
      "niveau": "pro",
      "titre": "Comment copier le texte d’un document scanné sur iPhone (OCR) — Scan Cam",
      "description": "Lisez un scan ou un PDF sur iPhone et copiez son texte, sans internet. La reconnaissance de texte pas à pas avec Scan Cam Pro.",
      "h1": "Comment copier le texte d’un document scanné sur iPhone",
      "lead": "La reconnaissance de texte (OCR) lit une page scannée et vous donne son texte à copier.",
      "carte": "Lisez une page et copiez son texte, sur le téléphone et sans internet.",
      "corps": [
        [
          "h2",
          "Copier le texte d’une page"
        ],
        [
          "ol",
          [
            "Ouvrez un scan, ou un PDF importé avec <strong>Importer → Fichiers</strong>, et touchez <strong>Extraire le texte</strong>.",
            "Choisissez l’écriture (latine, japonaise, chinoise ou coréenne) et laissez Scan Cam lire les pages.",
            "Sélectionnez un passage, ou touchez <strong>Copier le texte</strong> pour tout copier."
          ]
        ],
        [
          "clip",
          "texte"
        ],
        [
          "p",
          "Le texte est lu par l’iPhone lui-même, sans internet : vos documents ne sont envoyés nulle part. Rien n’est reconnu ? Scannez la page à nouveau, mieux éclairée."
        ],
        [
          "note",
          "<strong>Gratuit ou Pro ?</strong> La reconnaissance de texte fait partie de Pro, qui commence par un essai gratuit de 7 jours. Elle sert aussi à exporter vers Word et Excel."
        ]
      ],
      "suite": [
        "receipts",
        "extract-pages",
        "multi-page"
      ]
    },
    {
      "cle": "merge",
      "fichier": "guide-fusionner-des-pdf-sur-iphone-fr.html",
      "niveau": "pro",
      "titre": "Comment fusionner des PDF sur iPhone — Scan Cam",
      "description": "Réunissez plusieurs scans ou PDF en un seul PDF sur iPhone, dans l’ordre que vous choisissez. Pas à pas avec Scan Cam Pro.",
      "h1": "Comment fusionner des PDF sur iPhone",
      "lead": "Plusieurs documents, un seul fichier à envoyer, dans l’ordre voulu. Les originaux restent tels quels.",
      "carte": "Réunissez plusieurs documents en un seul PDF, dans l’ordre que vous choisissez.",
      "corps": [
        [
          "h2",
          "Les fusionner"
        ],
        [
          "ol",
          [
            "Dans la bibliothèque, cochez au moins deux documents : des scans, ou des PDF importés avec <strong>Importer → Fichiers</strong>.",
            "Touchez <strong>Fusionner</strong>, mettez-les en ordre avec les flèches, puis touchez à nouveau <strong>Fusionner</strong>."
          ]
        ],
        [
          "clip",
          "fusion"
        ],
        [
          "p",
          "Le résultat est un nouveau PDF dans votre bibliothèque. Envoyez-le avec <strong>Partager</strong>."
        ],
        [
          "note",
          "<strong>Gratuit ou Pro ?</strong> La fusion fait partie de Pro, qui commence par un essai gratuit de 7 jours. Importer et exporter un PDF restent gratuits."
        ]
      ],
      "suite": [
        "extract-pages",
        "multi-page",
        "watermark"
      ]
    },
    {
      "cle": "extract-pages",
      "fichier": "guide-extraire-des-pages-d-un-pdf-sur-iphone-fr.html",
      "niveau": "pro",
      "titre": "Comment extraire des pages d’un PDF sur iPhone — Scan Cam",
      "description": "Sortez quelques pages d’un PDF ou d’un scan dans un nouveau document sur iPhone, sans modifier l’original. Pas à pas avec Scan Cam Pro.",
      "h1": "Comment extraire des pages d’un PDF sur iPhone",
      "lead": "Seules quelques pages comptent ? Faites-en un nouveau document et laissez l’original tel quel.",
      "carte": "Faites un nouveau document avec les pages choisies, et gardez l’original.",
      "corps": [
        [
          "h2",
          "Choisir les pages"
        ],
        [
          "ol",
          [
            "Ouvrez le document (importez un PDF avec <strong>Importer → Fichiers</strong>) et touchez <strong>Extraire des pages</strong>.",
            "Cochez les pages à garder, puis touchez <strong>Créer un nouveau document</strong>."
          ]
        ],
        [
          "clip",
          "pages"
        ],
        [
          "p",
          "Les pages sont copiées dans un nouveau document, rangé à côté de l’original. Envoyez-le avec <strong>Partager</strong>."
        ],
        [
          "note",
          "<strong>Gratuit ou Pro ?</strong> L’extraction de pages fait partie de Pro, qui commence par un essai gratuit de 7 jours."
        ]
      ],
      "suite": [
        "merge",
        "extract-text",
        "multi-page"
      ]
    },
    {
      "cle": "watermark",
      "fichier": "guide-ajouter-un-filigrane-a-un-pdf-sur-iphone-fr.html",
      "niveau": "pro",
      "titre": "Comment ajouter un filigrane à un PDF sur iPhone — Scan Cam",
      "description": "Inscrivez CONFIDENTIEL ou votre propre texte en travers de chaque page d’un scan ou d’un PDF sur iPhone. Pas à pas avec Scan Cam Pro.",
      "h1": "Comment ajouter un filigrane à un PDF sur iPhone",
      "lead": "La copie d’une pièce d’identité pour un seul usage, un brouillon qui ne doit pas circuler : un filigrane dit à quoi sert le document.",
      "carte": "Inscrivez votre propre texte en travers de chaque page d’un document.",
      "corps": [
        [
          "h2",
          "Ajouter le filigrane"
        ],
        [
          "ol",
          [
            "Ouvrez le document et touchez <strong>Filigrane</strong>.",
            "Tapez votre texte, par exemple « Pour le dossier de location, 12 mai » sur la copie d’une pièce d’identité.",
            "Réglez <strong>Couleur</strong>, <strong>Opacité</strong> et <strong>Taille</strong>, puis touchez <strong>Valider</strong> : chaque page est marquée."
          ]
        ],
        [
          "clip",
          "filigrane"
        ],
        [
          "note",
          "<strong>Faites d’abord une copie.</strong> Le filigrane ne s’enlève plus ensuite."
        ],
        [
          "note",
          "<strong>Gratuit ou Pro ?</strong> Le filigrane fait partie de Pro, qui commence par un essai gratuit de 7 jours."
        ]
      ],
      "suite": [
        "sign",
        "merge",
        "multi-page"
      ]
    },
    {
      "cle": "without-subscription",
      "fichier": "guide-scanner-un-document-sur-iphone-sans-abonnement-fr.html",
      "niveau": "free",
      "titre": "Comment scanner un document sur iPhone sans abonnement — Scan Cam",
      "description": "Scanner un document sur iPhone sans payer : les apps Notes et Fichiers d’Apple le font déjà, et QuickScan est gratuite. Ce que Scan Cam fait de plus, et ce qui y est gratuit.",
      "h1": "Comment scanner un document sur iPhone sans abonnement",
      "lead": "Il ne faut ni abonnement, ni même une app à télécharger. D’abord les solutions gratuites, puis ce que Scan Cam ajoute.",
      "carte": "Les solutions gratuites d’abord — Notes, Fichiers, QuickScan —, puis ce que Scan Cam ajoute.",
      "corps": [
        [
          "h2",
          "Avec l’app Notes"
        ],
        [
          "ol",
          [
            "Dans une note, touchez le bouton de l’appareil photo (ou le trombone), puis « Scanner des documents ».",
            "Cadrez la feuille : l’iPhone la prend tout seul. Touchez « Enregistrer », puis partagez-la en PDF."
          ]
        ],
        [
          "p",
          "Gratuit, sans compte et sans publicité."
        ],
        [
          "h2",
          "Avec l’app Fichiers"
        ],
        [
          "p",
          "Touchez les trois points en haut, puis « Scanner des documents » : le PDF est enregistré dans le dossier où vous êtes."
        ],
        [
          "h2",
          "Avec une app gratuite : QuickScan"
        ],
        [
          "p",
          "« OCR Text Scanner: QuickScan » est gratuite, sans publicité, et lit aussi le texte. Vérifiez d’abord son prix sur l’App Store : il peut changer."
        ],
        [
          "h2",
          "Ce que Scan Cam fait de plus"
        ],
        [
          "p",
          "Pour scanner souvent : des dossiers, des pages nettoyées, plusieurs pages dans un seul PDF, et une copie dans votre propre iCloud. Le scan, les dossiers, les filtres et l’export en PDF sont gratuits, sans limite."
        ],
        [
          "clip",
          "scan"
        ],
        [
          "note",
          "<strong>Gratuit ou Pro ?</strong> Pro ajoute la signature, l’extraction du texte, le filigrane, la fusion et l’export vers Word ou Excel ; il commence par un essai gratuit de 7 jours."
        ]
      ],
      "suite": [
        "multi-page",
        "receipts",
        "extract-text"
      ]
    }
  ]
};
