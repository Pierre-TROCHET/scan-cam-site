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
    "texte": "Scan Cam se télécharge gratuitement. Le scan, les dossiers, les filtres et l’export en PDF sont gratuits, sans limite de temps ; l’abonnement Pro ajoute les outils supplémentaires, et commence par un essai gratuit de 7 jours."
  },
  "liees": "Autres guides",
  "captures": {
    "scanner": {
      "alt": "Le scanner de Scan Cam : une facture posée sur une table, la page entourée de bleu, et le déclencheur en dessous.",
      "legende": "Le scanner trouve la page et l’entoure."
    },
    "propre": {
      "alt": "Un contrat froissé photographié sur une table en bois, et la même page après Scan Cam : droite, blanche et nette.",
      "legende": "D’une feuille froissée à une page propre."
    },
    "document": {
      "alt": "L’écran du document : une page de partition, le bouton pour tourner la page sur le grand aperçu, la miniature de la page en dessous, et les outils Ajouter une page, Partager, Filtres, Extraire le texte, Ajouter du texte, Filigrane, Signature, Extraire des pages et Imprimer.",
      "legende": "Les miniatures des pages, et tous les outils, sur un seul écran."
    },
    "partage": {
      "alt": "L’écran de partage de Scan Cam : PDF est sélectionné ; Word, Excel et JPEG sont les autres formats.",
      "legende": "Choisissez le format, puis envoyez."
    },
    "filtres": {
      "alt": "L’écran des filtres : une page de partition, le rendu Noir et blanc sélectionné, et le curseur Intensité à 50 %.",
      "legende": "Du noir et blanc, avec l’intensité que vous choisissez."
    },
    "dossiers": {
      "alt": "Un dossier Impôts dans la bibliothèque de Scan Cam, avec les sous-dossiers Impôts 2024, Impôts 2025 et Impôts 2026.",
      "legende": "Des dossiers et des sous-dossiers, comme sur un ordinateur."
    },
    "recherche": {
      "alt": "La recherche dans la bibliothèque : le nom d’une facture d’eau est tapé, et trois factures d’eau sont trouvées.",
      "legende": "La recherche trouve les fichiers et les dossiers par leur nom."
    },
    "nouvelle-signature": {
      "alt": "L’écran Nouvelle signature : l’onglet Dessiner est sélectionné et le prénom John est signé au doigt au-dessus de la ligne.",
      "legende": "Signez avec le doigt, comme sur papier."
    },
    "signature": {
      "alt": "L’écran Positionner la signature : une facture, une signature dans un cadre en pointillés, et le curseur Taille en dessous.",
      "legende": "Faites glisser la signature et réglez sa taille."
    },
    "texte": {
      "alt": "L’écran Texte extrait : l’alphabet latin est sélectionné et le texte d’une recette a été lu sur la page.",
      "legende": "Le texte, prêt à être sélectionné ou copié."
    },
    "bibliotheque": {
      "alt": "La bibliothèque de Scan Cam : les boutons Importer et Créer un dossier, deux dossiers et les documents, chacun avec une case à cocher.",
      "legende": "Importez un PDF, ou cochez des documents dans la bibliothèque."
    },
    "fusion": {
      "alt": "L’écran de fusion : deux documents numérotés 1 et 2, chacun avec des flèches vers le haut et vers le bas et une croix, au-dessus du bouton Fusionner.",
      "legende": "Réglez l’ordre, puis appuyez sur Fusionner."
    },
    "extraction": {
      "alt": "L’écran Extraire des pages : la page 1 sur 2 est cochée, avec Tout sélectionner en haut et Créer un nouveau document en bas.",
      "legende": "Cochez les pages à garder."
    },
    "filigrane": {
      "alt": "L’écran Filigrane : une facture barrée du mot CONFIDENTIEL écrit en rouge.",
      "legende": "L’aperçu suit vos réglages."
    }
  },
  "guides": [
    {
      "cle": "multi-page",
      "fichier": "guide-scanner-plusieurs-pages-en-un-pdf-iphone-fr.html",
      "niveau": "free",
      "titre": "Comment scanner plusieurs pages en un seul PDF sur iPhone — Scan Cam",
      "description": "Scannez toutes les pages d’un contrat, d’un formulaire ou d’un devoir en un seul PDF sur iPhone, remettez-les en ordre et partagez-le. Gratuit, sans compte.",
      "h1": "Comment scanner plusieurs pages en un seul PDF sur iPhone",
      "lead": "Contrats, formulaires et devoirs tiennent rarement sur une seule feuille. Voici comment les scanner toutes dans un seul PDF avec Scan Cam, gratuitement et sans compte.",
      "carte": "Scannez chaque feuille dans un même document, puis partagez-le en un seul PDF.",
      "corps": [
        [
          "h2",
          "Scanner les pages"
        ],
        [
          "ol",
          [
            "Ouvrez Scan Cam et appuyez sur <strong>Scanner un document</strong>. La première fois, l’iPhone demande une seule fois l’autorisation d’utiliser l’appareil photo.",
            "Cadrez la première feuille. Scan Cam trouve les bords et redresse la page tout seul, même si vous tenez le téléphone de biais.",
            "Prenez les feuilles suivantes l’une après l’autre, puis confirmez. Vos pages sont réunies en un seul document PDF, sur le téléphone.",
            "Une page oubliée ? Ouvrez le document et appuyez sur <strong>Ajouter une page</strong> : elle rejoint le même document."
          ]
        ],
        [
          "img",
          [
            "scanner",
            "propre"
          ]
        ],
        [
          "h2",
          "Mettre le document en ordre"
        ],
        [
          "p",
          "Les miniatures des pages se trouvent sous le grand aperçu. Maintenez le doigt sur une miniature et faites-la glisser pour changer l’ordre des pages. La croix d’une miniature retire cette page ; elle ne peut pas être récupérée, alors Scan Cam vous le demande d’abord. Une page qui est sortie de travers se tourne avec le bouton du grand aperçu."
        ],
        [
          "img",
          [
            "document"
          ]
        ],
        [
          "p",
          "Si une ombre traverse une page, ouvrez <strong>Filtres</strong> et activez <strong>Retirer les ombres</strong>. La photo d’origine est toujours gardée, vous pouvez donc désactiver ce réglage ensuite."
        ],
        [
          "h2",
          "L’envoyer en un seul PDF"
        ],
        [
          "ol",
          [
            "Ouvrez le document et appuyez sur <strong>Partager</strong>.",
            "Choisissez <strong>PDF</strong> (le JPEG est gratuit lui aussi).",
            "Envoyez le fichier, enregistrez-le dans l’app Fichiers, ou imprimez-le."
          ]
        ],
        [
          "img",
          [
            "partage"
          ]
        ],
        [
          "note",
          "<strong>Gratuit ou Pro ?</strong> Tout cela est gratuit, sans limite de pages ni de documents. Les PDF gratuits portent une petite mention « Numérisé avec Scan Cam » en bas de page ; l’abonnement Pro la retire."
        ],
        [
          "h2",
          "Conseils pour un scan propre"
        ],
        [
          "ul",
          [
            "Posez la feuille sur une surface plane et sombre, pour que les bords ressortent.",
            "Éclairez la page par le côté ou par le dessus, pour que votre main et le téléphone ne fassent pas d’ombre.",
            "Scannez un document à la fois, pour que chaque PDF ait son propre nom et sa propre place."
          ]
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
      "lead": "Les tickets de caisse décolorés sont les premiers à disparaître quand on en a besoin. Scannez-les le jour même, et rangez-les là où vous les retrouverez.",
      "carte": "Faites des copies nettes et rangées de vos tickets, et envoyez-les à qui en a besoin.",
      "corps": [
        [
          "h2",
          "Scanner un ticket"
        ],
        [
          "ol",
          [
            "Ouvrez Scan Cam et appuyez sur <strong>Scanner un document</strong>.",
            "Posez le ticket à plat sur une surface sombre et cadrez-le. Les bords sont trouvés et la page est redressée pour vous.",
            "Ouvrez <strong>Filtres</strong>. <strong>Noir et blanc</strong> donne en général le résultat le plus lisible sur du papier thermique ; si le papier est gris ou froissé, activez aussi <strong>Retirer les ombres</strong>.",
            "Réglez l’intensité avec le curseur jusqu’à ce que l’impression soit bien nette, puis appuyez sur <strong>Appliquer</strong>. La photo d’origine est gardée : vous pourrez changer d’avis plus tard."
          ]
        ],
        [
          "img",
          [
            "filtres"
          ]
        ],
        [
          "h2",
          "Le ranger pour le retrouver"
        ],
        [
          "p",
          "Ouvrez la <strong>Bibliothèque</strong> et appuyez sur <strong>Créer un dossier</strong> pour faire un dossier comme « Tickets 2026 », avec des sous-dossiers par mois ou par catégorie si vous voulez. Déplacez chaque scan dans le bon dossier."
        ],
        [
          "p",
          "Donnez à chaque document un nom que vous reconnaîtrez, comme le magasin et la date. Le champ de recherche de la bibliothèque trouve les fichiers et les dossiers par leur nom, y compris ceux rangés tout au fond d’un dossier."
        ],
        [
          "img",
          [
            "dossiers",
            "recherche"
          ]
        ],
        [
          "h2",
          "Les envoyer à votre comptable"
        ],
        [
          "p",
          "Ouvrez un ticket, appuyez sur <strong>Partager</strong>, et envoyez-le en PDF par mail ou par message, ou enregistrez-le dans l’app Fichiers. Pour tout un dossier de documents, utilisez <strong>Réglages → Tout exporter</strong> : chaque document sort en PDF, rangé dans son dossier."
        ],
        [
          "note",
          "<strong>Gratuit ou Pro ?</strong> Le scan, les filtres, les dossiers, la recherche et l’export en PDF sont gratuits. Avec Pro, <strong>Extraire le texte</strong> lit un ticket sur le téléphone, sans internet, pour copier le total ou la date dans un tableur."
        ],
        [
          "h2",
          "Conseils"
        ],
        [
          "ul",
          [
            "Scannez les tickets le jour même : le papier thermique s’efface en quelques mois.",
            "Un ticket par document, c’est plus simple pour les nommer et les ranger.",
            "Gardez l’original papier quand la loi de votre pays l’exige ; un scan est une copie pratique, pas toujours un remplacement légal."
          ]
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
      "lead": "Ni imprimante, ni stylo, ni scanner : dessinez votre signature une fois, puis placez-la au bon endroit sur n’importe quel document.",
      "carte": "Dessinez ou photographiez votre signature une fois, puis placez-la sur n’importe quel document.",
      "corps": [
        [
          "h2",
          "Créer votre signature"
        ],
        [
          "ol",
          [
            "Ouvrez le document et appuyez sur <strong>Signature</strong> dans la rangée d’outils.",
            "Appuyez sur <strong>Nouvelle signature</strong>.",
            "Choisissez <strong>Dessiner</strong> et signez avec le doigt au-dessus de la ligne, ou choisissez <strong>Photo</strong> et photographiez votre signature écrite sur une feuille de papier. Avec une photo, tirez les coins du rectangle autour de la signature, puis réglez le curseur jusqu’à ce qu’il ne reste que le trait, sans voile gris.",
            "Appuyez sur <strong>Enregistrer</strong>. Votre signature est gardée pour vos prochains documents."
          ]
        ],
        [
          "img",
          [
            "nouvelle-signature"
          ]
        ],
        [
          "h2",
          "La placer sur la page"
        ],
        [
          "ol",
          [
            "Choisissez la page à signer.",
            "Faites glisser la signature au bon endroit. Écartez deux doigts pour agrandir la page et la placer précisément.",
            "Utilisez <strong>Taille</strong> pour l’agrandir ou la réduire. Le cadre en pointillés aide à la placer et n’est pas écrit sur la page.",
            "Appuyez sur <strong>Valider</strong>. La signature est écrite sur la page et le PDF est refait autour d’elle."
          ]
        ],
        [
          "img",
          [
            "signature"
          ]
        ],
        [
          "note",
          "<strong>Faites d’abord une copie.</strong> La signature est écrite dans le document lui-même. Si vous voulez garder une version non signée, copiez le document depuis la bibliothèque avant de signer, puis signez la copie."
        ],
        [
          "h2",
          "Envoyer le document signé"
        ],
        [
          "p",
          "Appuyez sur <strong>Partager</strong>, choisissez PDF, et envoyez-le par mail ou par message, ou enregistrez-le dans l’app Fichiers."
        ],
        [
          "note",
          "<strong>Gratuit ou Pro ?</strong> La signature fait partie de l’abonnement Pro, qui commence par un essai gratuit de 7 jours ; résilier avant la fin de l’essai ne coûte rien. Les PDF Pro n’ont pas non plus la mention « Numérisé avec Scan Cam »."
        ],
        [
          "h2",
          "Bon à savoir"
        ],
        [
          "ul",
          [
            "Vous pouvez garder plusieurs signatures et choisir celle que vous voulez à chaque fois ; supprimez-en une depuis le même écran si vous n’en avez plus besoin.",
            "Une signature dessinée est gardée sous forme de tracé : elle reste nette quelle que soit la taille à laquelle vous la placez.",
            "Une signature dessinée sur un téléphone est une image sur la page. Certains contrats et certaines administrations exigent une signature électronique certifiée : vérifiez ce que le destinataire accepte."
          ]
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
      "lead": "Un scan est une image de la page : on ne peut pas en sélectionner les mots. La reconnaissance de texte (OCR) lit l’image et vous donne le texte à copier.",
      "carte": "Lisez une page et copiez son texte, sur le téléphone et sans internet.",
      "corps": [
        [
          "h2",
          "Lire un document"
        ],
        [
          "ol",
          [
            "Scannez le document, ou importez un PDF depuis la bibliothèque avec <strong>Importer → Fichiers</strong>.",
            "Ouvrez le document et appuyez sur <strong>Extraire le texte</strong>.",
            "Choisissez l’écriture de la page. L’alphabet latin couvre le français, l’anglais, l’espagnol et l’allemand ; le japonais, le chinois et le coréen sont aussi disponibles.",
            "Patientez pendant que Scan Cam lit chaque page. Le texte apparaît quand c’est fini."
          ]
        ],
        [
          "h2",
          "Copier ce dont vous avez besoin"
        ],
        [
          "p",
          "Maintenez le doigt sur le texte pour sélectionner un passage, ou appuyez sur <strong>Copier le texte</strong> pour tout copier, puis collez-le dans un message, une note ou un tableur."
        ],
        [
          "img",
          [
            "texte"
          ]
        ],
        [
          "h2",
          "Tout reste sur votre téléphone"
        ],
        [
          "p",
          "Le texte est lu par l’iPhone lui-même, sans connexion internet, et le contenu de vos documents n’est jamais envoyé à un service extérieur."
        ],
        [
          "note",
          "<strong>Gratuit ou Pro ?</strong> La reconnaissance de texte fait partie de l’abonnement Pro, avec un essai gratuit de 7 jours ; résilier avant la fin ne coûte rien."
        ],
        [
          "h2",
          "Obtenir un meilleur résultat"
        ],
        [
          "ul",
          [
            "Si rien n’est reconnu, scannez de nouveau la page : un scan plus net et mieux éclairé donne souvent un meilleur résultat.",
            "Utilisez <strong>Filtres</strong> pour retirer les ombres avant la lecture.",
            "Un PDF importé devient des pages, comme un scan : son texte d’origine ne se sélectionne plus, mais la reconnaissance de texte peut le relire.",
            "Appuyez sur <strong>Refaire la reconnaissance</strong> après avoir changé l’écriture choisie."
          ]
        ],
        [
          "p",
          "La même lecture sert à exporter un document en Word (.docx) ou en Excel (.xlsx) avec Pro."
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
      "lead": "Plusieurs documents, un seul fichier à envoyer. Voici comment les réunir dans l’ordre voulu, sans toucher aux originaux.",
      "carte": "Réunissez plusieurs documents en un seul PDF, dans l’ordre que vous choisissez.",
      "corps": [
        [
          "h2",
          "Mettre les PDF dans Scan Cam"
        ],
        [
          "p",
          "Les documents que vous avez scannés sont déjà dans la bibliothèque. Pour ajouter un PDF que vous avez déjà, appuyez sur <strong>Importer → Fichiers</strong> dans la bibliothèque et choisissez-le : chaque page devient une page d’un document, et l’import est gratuit. Un PDF protégé par un mot de passe, ou de plus de 100 pages, est refusé."
        ],
        [
          "img",
          [
            "bibliotheque"
          ]
        ],
        [
          "h2",
          "Les fusionner"
        ],
        [
          "ol",
          [
            "Dans la bibliothèque, cochez au moins deux documents. Vous pouvez ouvrir un dossier pour en cocher d’autres : ce qui est déjà coché le reste.",
            "Appuyez sur <strong>Fusionner</strong> dans la barre qui apparaît. (Vous pouvez aussi partir de <strong>Outils → Fusionner</strong> : cochez-y les documents et appuyez sur <strong>Continuer</strong>.)",
            "Mettez les documents en ordre avec les flèches, et retirez-en un avec la croix. Scan Cam vous indique combien de pages aura le nouveau document.",
            "Appuyez sur <strong>Fusionner</strong> pour confirmer. Rien n’est créé tant que vous ne l’avez pas fait."
          ]
        ],
        [
          "img",
          [
            "fusion"
          ]
        ],
        [
          "p",
          "Le résultat est un nouveau document PDF dans votre bibliothèque. Vos documents d’origine gardent toutes leurs pages : la fusion copie, elle ne coupe pas."
        ],
        [
          "h2",
          "L’envoyer"
        ],
        [
          "p",
          "Ouvrez le document fusionné, appuyez sur <strong>Partager</strong>, choisissez PDF, et envoyez-le ou enregistrez-le dans l’app Fichiers."
        ],
        [
          "note",
          "<strong>Gratuit ou Pro ?</strong> La fusion fait partie de l’abonnement Pro, qui commence par un essai gratuit de 7 jours ; résilier avant la fin ne coûte rien. L’import, le scan et l’export d’un seul PDF restent gratuits."
        ],
        [
          "h2",
          "Conseils"
        ],
        [
          "ul",
          [
            "Quels que soient les documents (scans, photos, PDF importés), le résultat de la fusion est toujours un PDF.",
            "Besoin de quelques pages seulement du résultat ? Consultez le guide sur l’extraction de pages."
          ]
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
      "lead": "Seules les pages 3 et 4 comptent ? Faites un nouveau document avec les pages choisies et laissez l’original tel quel.",
      "carte": "Faites un nouveau document avec les pages choisies, et gardez l’original.",
      "corps": [
        [
          "h2",
          "Ouvrir le PDF dans Scan Cam"
        ],
        [
          "p",
          "Si le PDF n’est pas encore dans votre bibliothèque, appuyez sur <strong>Importer → Fichiers</strong> et choisissez-le. Chaque page devient une page du document, comme une page scannée. Un PDF protégé par un mot de passe, ou de plus de 100 pages, est refusé."
        ],
        [
          "img",
          [
            "bibliotheque"
          ]
        ],
        [
          "h2",
          "Choisir les pages"
        ],
        [
          "ol",
          [
            "Ouvrez le document et appuyez sur <strong>Extraire des pages</strong>.",
            "Cochez les pages à garder. <strong>Tout sélectionner</strong> et <strong>Tout désélectionner</strong> font gagner du temps sur les longs documents.",
            "Appuyez sur <strong>Créer un nouveau document</strong>."
          ]
        ],
        [
          "img",
          [
            "extraction"
          ]
        ],
        [
          "p",
          "Les pages choisies sont copiées dans un nouveau document, rangé à côté de l’original, qui reste tel quel. Garder toutes les pages est refusé exprès : ce ne serait qu’une copie."
        ],
        [
          "h2",
          "Envoyer le nouveau document"
        ],
        [
          "p",
          "Ouvrez-le, appuyez sur <strong>Partager</strong>, choisissez PDF, et envoyez-le ou enregistrez-le dans l’app Fichiers."
        ],
        [
          "note",
          "<strong>Gratuit ou Pro ?</strong> L’extraction de pages fait partie de l’abonnement Pro, qui commence par un essai gratuit de 7 jours ; résilier avant la fin ne coûte rien. Le scan, l’import et l’export d’un PDF restent gratuits."
        ],
        [
          "h2",
          "Bon à savoir"
        ],
        [
          "ul",
          [
            "Comme les pages sont copiées, supprimer plus tard le nouveau document ne touche pas l’original, et inversement.",
            "Pour n’envoyer qu’une page en image, extrayez-la d’abord, puis partagez-la en JPEG."
          ]
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
      "lead": "La copie d’une pièce d’identité pour un seul usage, un brouillon qui ne doit pas circuler : un filigrane en travers de la page dit à quoi sert le document.",
      "carte": "Inscrivez votre propre texte en travers de chaque page d’un document.",
      "corps": [
        [
          "h2",
          "Ajouter le filigrane"
        ],
        [
          "ol",
          [
            "Ouvrez le document et appuyez sur <strong>Filigrane</strong> dans la rangée d’outils.",
            "Tapez votre texte. La suggestion est « CONFIDENTIEL » ; pour la copie d’une pièce d’identité, écrivez à quoi elle sert et la date, par exemple « Pour le dossier de location, 12 mai ».",
            "Réglez <strong>Répétition</strong>, <strong>Couleur</strong>, <strong>Opacité</strong>, <strong>Taille</strong> et <strong>Inclinaison</strong>. L’aperçu de la page 1 suit vos choix.",
            "Appuyez sur <strong>Valider</strong>. Le filigrane est posé sur chaque page du document."
          ]
        ],
        [
          "img",
          [
            "filigrane"
          ]
        ],
        [
          "note",
          "<strong>Faites d’abord une copie.</strong> Une fois que vous avez appuyé sur Valider, le filigrane est gravé dans les pages : pour l’enlever, il faudrait les scanner de nouveau. Copiez le document depuis la bibliothèque, et mettez le filigrane sur la copie."
        ],
        [
          "h2",
          "Le partager"
        ],
        [
          "p",
          "Appuyez sur <strong>Partager</strong>, choisissez PDF, et envoyez-le ou enregistrez-le dans l’app Fichiers."
        ],
        [
          "note",
          "<strong>Gratuit ou Pro ?</strong> Le filigrane fait partie de l’abonnement Pro, qui commence par un essai gratuit de 7 jours ; résilier avant la fin ne coûte rien."
        ],
        [
          "h2",
          "Conseils"
        ],
        [
          "ul",
          [
            "Un filigrane répété et incliné est plus difficile à recadrer qu’une seule ligne dans un coin.",
            "Gardez une opacité assez faible pour lire le document à travers le texte."
          ]
        ]
      ],
      "suite": [
        "sign",
        "merge",
        "multi-page"
      ]
    }
  ]
};
