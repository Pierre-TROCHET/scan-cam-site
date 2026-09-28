// Tous les textes du site en français.
//
// C'est le seul fichier à ouvrir pour corriger une phrase de la vitrine ou une
// réponse de l'assistance : le programme (`build.js`) refabrique les pages
// à partir d'ici. Les conditions d'utilisation et la politique de
// confidentialité ne sont PAS dans ce fichier — elles sont lues directement
// dans l'application, dans `cam-scan/i18n/legal.ts`, pour que les deux ne
// puissent jamais dire deux choses différentes.
//
// Quelques mots de HTML sont admis à l'intérieur des phrases : <strong>gras</strong>
// et <a href="…">lien</a>. Le reste du texte s'écrit normalement.

module.exports = {
  code: 'fr',
  nom: 'Français',

  // La phrase proposee au visiteur dont le navigateur parle cette langue,
  // quand il arrive sur une page qui n en est pas. Elle est donc ecrite DANS
  // cette langue, pour quelqu un qui ne lit peut-etre aucune des autres.
  suggestion: {
    phrase: 'Cette page existe aussi en français.',
    fermer: 'Fermer',
  },

  // Les noms de fichiers. ⚠️ Ils sont DÉCLARÉS CHEZ APPLE dans les dix fiches :
  // `assistance.html` et `confidentialite.html` pour la fiche française. Une
  // adresse d'assistance qui ne répond plus est un motif de refus — on ne les
  // renomme pas sans changer d'abord la fiche.
  fichiers: {
    accueil: 'index.html',
    assistance: 'assistance.html',
    conditions: 'conditions.html',
    confidentialite: 'confidentialite.html',
  },

  // Les libellés courts, dans le menu du haut.
  menu: {
    accueil: 'Accueil',
    assistance: 'Assistance',
    conditions: 'Conditions',
    confidentialite: 'Confidentialité',
  },

  pied: {
    editeur: 'Scan Cam est éditée par Pierre Trochet.',
    appstore: 'Télécharger sur l’App Store',
    // Les libellés longs, en bas de page.
    liens: {
      accueil: 'Accueil',
      assistance: 'Assistance',
      conditions: 'Conditions d’utilisation',
      confidentialite: 'Politique de confidentialité',
    },
  },

  meta: {
    accueil: {
      titre: 'Scan Cam — le scanner de documents sans compte ni serveur',
      description:
        'Scan Cam transforme votre iPhone en scanner de documents. Aucun compte, aucun serveur à nous, aucune publicité.',
    },
    assistance: {
      titre: 'Assistance — Scan Cam',
      description: 'Aide et contact pour l’application Scan Cam.',
    },
    conditions: {
      titre: 'Conditions d’utilisation — Scan Cam',
      description: 'Les conditions d’utilisation de Scan Cam et de l’abonnement Scan Cam Pro.',
    },
    confidentialite: {
      titre: 'Politique de confidentialité — Scan Cam',
      description:
        'Vos documents restent sur votre iPhone et dans votre propre iCloud, jamais sur un serveur à nous : ni compte, ni mesure d’audience, ni publicité.',
    },
  },

  accueil: {
    badge: 'Gratuit, sans compte, sans publicité',
    h1: 'Le scanner de documents qui garde vos papiers chez vous.',
    lead:
      'Vous photographiez une feuille, l’application détecte ses bords, la redresse et rend le texte net : vous obtenez un vrai scan, pas une photo de papier.',
    // La capture qui accompagne l'ouverture, dans le bandeau bleu.
    image: {
      src: 'images/filtres-fr.jpg',
      largeur: 560,
      hauteur: 1212,
      alt:
        'L’écran des filtres de Scan Cam : les pages du document défilent en haut, les quatre rendus en dessous, un curseur d’intensité et un interrupteur pour retirer les ombres.',
    },
    comparaison: {
      titre: 'La même page, telle que Scan Cam la rend.',
      avant: {
        src: 'images/avant.jpg',
        largeur: 760,
        hauteur: 1013,
        alt:
          'Le contrat entier, froissé, photographié posé sur une table en bois : le papier est gris, plissé et légèrement de travers.',
        legende: 'La photo',
      },
      apres: {
        src: 'images/apres.jpg',
        largeur: 760,
        hauteur: 1003,
        alt:
          'Le même contrat entier après Scan Cam : la page est droite, blanche, sans pli ni ombre, et le texte est net.',
        legende: 'Le scan',
      },
      legende:
        'Photographiée froissée sur une table, et rendue droite, blanche et nette. Les deux pages sont entières : rien n’est recadré.',
    },
    appstore: {
      note: 'iPhone et iPad.',
    },
    confidentialite: {
      titre: 'Jamais sur un serveur à nous.',
    },
    promesse:
      'Vos documents restent sur votre iPhone et dans votre propre iCloud, jamais sur un serveur à nous. Aucun compte à créer, aucune mesure d’audience, aucune publicité. Vos factures, vos contrats et vos papiers d’identité ne vont nulle part ailleurs — sauf le jour où vous décidez vous-même de les partager.',

    sectionsTitre: 'Tout ce qu’elle sait faire',
    sections: [
      {
        icone: 'scanner',
        titre: 'Scanner',
        points: [
          'Bords détectés et page redressée, même photographiée de travers',
          'Quatre rendus : photo d’origine, couleur, niveaux de gris, noir et blanc',
          'Intensité réglable au doigt, avec un aperçu qui suit',
          'Retrait des ombres en une tape, pour les pages photographiées sous une lampe ou une main',
          'Plusieurs pages dans un même document, à réordonner, pivoter ou retirer',
          'Import de photos et de PDF, jusqu’à 100 pages',
        ],
      },
      {
        icone: 'dossier',
        titre: 'Ranger',
        points: [
          'Des dossiers et des sous-dossiers, comme sur un ordinateur',
          'Une recherche qui trouve aussi ce qui est rangé au fond d’un dossier, et qui dit où',
          'Renommer, déplacer, dupliquer, supprimer',
          'Une copie dans votre iCloud, qui ramène vos documents si vous réinstallez l’app ou changez d’iPhone',
        ],
      },
      {
        icone: 'partager',
        titre: 'Finir et partager',
        points: [
          'Exporter en PDF ou en JPEG',
          'Ajouter du texte sur une page',
          'Imprimer directement depuis l’application',
          'Enregistrer dans l’app Fichiers, ou envoyer par la fenêtre de partage de l’iPhone',
        ],
      },
    ],

    pro: {
      titre: 'Scan Cam Pro',
      image: {
        src: 'images/document-fr.jpg',
        largeur: 560,
        hauteur: 1212,
        alt:
          'L’écran d’un document dans Scan Cam : l’aperçu de la page, les miniatures des pages en bas, et la rangée d’outils — partager, filtres, extraire le texte, filigrane, signature, imprimer.',
      },
      // {prix} reçoit le prix du pays du visiteur, écrit à sa façon (voir prix.js).
      // Le pays par défaut est celui d’un navigateur qui ne dit pas le sien.
      prix: '{prix} par an, après 7 jours d’essai gratuit.',
      prixPays: 'Prix de l’App Store · {pays}',
      paysParDefaut: 'FR',
      gratuit:
        'La version gratuite est complète et sans limite de temps : scanner, ranger, filtrer, annoter, imprimer et exporter en PDF autant que vous voulez. Les PDF gratuits portent une petite mention « Numérisé avec Scan Cam » en bas de page.',
      intro: 'L’abonnement Pro ajoute :',
      points: [
        'Le PDF sans aucune mention',
        'La reconnaissance de texte, qui lit vos pages et vous rend le texte à copier',
        'La signature, dessinée du doigt et posée où vous voulez',
        'Le filigrane, en travers de la page',
        'La fusion de plusieurs documents en un seul',
        'L’extraction de pages vers un nouveau document',
        'L’export en Word (.docx) et en Excel (.xlsx)',
      ],
      note:
        'La reconnaissance de texte fonctionne sur le téléphone, sans internet : elle lit l’alphabet latin, le japonais, le chinois et le coréen.',
    },

    contact: {
      titre: 'Une question ?',
      texte: 'Écrivez-moi : je réponds moi-même.',
    },
  },

  assistance: {
    h1: 'Assistance',
    lead:
      'Une question, un problème, une idée ? Écrivez-moi. Il n’y a pas de service client derrière Scan Cam : c’est moi qui lis et qui réponds.',
    carte: {
      note:
        'Pour un problème d’affichage, une capture d’écran aide beaucoup : bouton latéral + volume haut, en même temps.',
    },
    faqTitre: 'Questions fréquentes',
    faq: [
      {
        q: 'Comment scanner un document ?',
        r: [
          'Appuyez sur le bouton de l’appareil photo et cadrez la feuille. L’iPhone repère les bords tout seul et redresse la page, même si vous photographiez de travers. Vous pouvez enchaîner plusieurs pages dans le même document.',
        ],
      },
      {
        q: 'Où sont enregistrés mes documents ?',
        r: [
          'Sur votre iPhone, dans l’espace privé de l’application, avec une copie dans votre propre iCloud, mise à jour quelques secondes après chaque changement. Personne d’autre n’y a accès : il n’y a pas de serveur à nous. Cette copie se coupe dans <strong>Réglages</strong> → <strong>Sauvegarde iCloud</strong> ; vos documents restent alors seulement sur l’iPhone. Cette copie n’apparaît ni dans l’app Fichiers ni sur icloud.com : elle ne sert qu’à Scan Cam. Pour avoir vos documents en PDF, ouvrez <strong>Réglages</strong> → <strong>Tout exporter</strong>.',
        ],
      },
      {
        q: 'Il y a une ombre sur ma page. Que faire ?',
        r: [
          'Ouvrez le document, allez dans <strong>Filtres</strong> et allumez <strong>Retirer les ombres</strong>. L’ombre s’en va et le papier redevient blanc partout. Vous pouvez l’éteindre aussitôt si le résultat ne vous plaît pas : la photo d’origine est toujours conservée.',
        ],
      },
      {
        q: 'Comment exporter en PDF ?',
        r: [
          'Ouvrez le document et appuyez sur <strong>Partager</strong>, puis choisissez le format. PDF et JPEG sont gratuits ; Word et Excel font partie de l’abonnement Pro. De là, vous pouvez envoyer le fichier, l’enregistrer dans l’app Fichiers, ou l’imprimer.',
        ],
      },
      {
        q: 'Qu’est-ce qui est gratuit et qu’est-ce qui est payant ?',
        r: [
          'Scanner, ranger, les dossiers, la recherche, les filtres, l’ajout de texte, l’impression et l’export en PDF sont gratuits, sans limite de temps ni de nombre. Les PDF gratuits portent une petite mention « Numérisé avec Scan Cam » en bas de page.',
          'L’abonnement Pro enlève cette mention et ajoute la reconnaissance de texte, la signature, le filigrane, la fusion de documents, l’extraction de pages et l’export en Word et Excel.',
        ],
      },
      {
        q: 'Comment gérer ou résilier mon abonnement ?',
        r: [
          'Depuis les réglages de votre compte Apple, sur votre iPhone : c’est là, et seulement là, que l’abonnement se gère et se résilie. L’application ne peut pas le faire à votre place, puisque c’est Apple qui encaisse. Résilier avant la fin de l’essai gratuit n’entraîne aucun paiement.',
        ],
      },
      {
        q: 'Puis-je importer un PDF déjà existant ?',
        r: [
          'Oui. Dans la bibliothèque, appuyez sur <strong>Importer</strong> → <strong>Fichiers</strong> et choisissez le PDF : chaque page devient une page du document, comme une page scannée, et tous les outils s’y appliquent. L’import est gratuit. Un PDF protégé par un mot de passe, ou de plus de 100 pages, est refusé.',
        ],
      },
      {
        q: 'La reconnaissance de texte a-t-elle besoin d’internet ?',
        r: [
          'Non. Le texte est lu par votre iPhone lui-même, sans connexion, et le contenu de vos documents n’est jamais envoyé à un service extérieur. Elle lit l’alphabet latin, le japonais, le chinois et le coréen.',
        ],
      },
      {
        q: 'Dans quelles langues l’application est-elle disponible ?',
        r: [
          'Français, anglais, espagnol, allemand, italien, portugais (Brésil), japonais, chinois et coréen. La langue se change dans les réglages de l’application.',
        ],
      },
      {
        q: 'J’ai supprimé un document par erreur.',
        r: [
          'Supprimer un document l’efface du téléphone et, quelques secondes plus tard, de sa copie dans iCloud : il n’y a pas de corbeille. Si la sauvegarde de votre iPhone par Apple était activée, une restauration complète du téléphone peut le ramener.',
        ],
      },
      {
        q: 'Que deviennent mes documents si je supprime l’application ?',
        r: [
          'Si la <strong>Sauvegarde iCloud</strong> de Scan Cam est allumée — c’est le réglage de départ —, ils vous attendent dans votre iCloud : réinstallez l’app, ou installez-la sur un nouvel iPhone connecté au même compte Apple, et ils reviennent tout seuls. Si vous l’avez coupée, ils sont effacés avec l’application, car iOS efface son espace privé quand elle est supprimée.',
          'Avant de supprimer l’application, ouvrez <strong>Réglages</strong> → <strong>Tout exporter</strong> : tous vos documents sont rassemblés dans un seul fichier, chaque document en PDF rangé dans son dossier, que vous pouvez enregistrer dans Fichiers, dans iCloud Drive ou sur un ordinateur. Et si vous voulez seulement libérer de la place, « Décharger l’app » dans les réglages de l’iPhone retire l’application en gardant vos documents.',
        ],
      },
    ],
  },

  juridique: {
    conditions: { h1: 'Conditions d’utilisation' },
    confidentialite: { h1: 'Politique de confidentialité' },
    // L'application dit « en appuyant sur le lien au bas de cette page », parce
    // qu'elle a ce lien en bas de son écran. Sur le site, on met un vrai lien.
    apple: {
      href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
      cherche: 'en appuyant sur le lien au bas de cette page',
      remplace: '<a href="{lien}">sur le site d’Apple</a>',
    },
  },
};
