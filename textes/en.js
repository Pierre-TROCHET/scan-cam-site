// Every text of the site, in English. See `fr.js` for the French one — that
// file carries the notes that apply to both.

module.exports = {
  code: 'en',
  nom: 'English',

  // La phrase proposee au visiteur dont le navigateur parle cette langue,
  // quand il arrive sur une page qui n en est pas. Elle est donc ecrite DANS
  // cette langue, pour quelqu un qui ne lit peut-etre aucune des autres.
  suggestion: {
    phrase: 'This page is also available in English.',
    fermer: 'Dismiss',
  },

  // ⚠️ Declared at Apple in nine of the ten listings: `support.html` and
  // `privacy.html`. Do not rename without changing the listings first.
  fichiers: {
    accueil: 'home.html',
    assistance: 'support.html',
    conditions: 'terms.html',
    confidentialite: 'privacy.html',
  },

  menu: {
    accueil: 'Home',
    assistance: 'Support',
    conditions: 'Terms of Use',
    confidentialite: 'Privacy Policy',
  },

  pied: {
    editeur: 'Scan Cam is published by Pierre Trochet.',
    appstore: 'Download on the App Store',
    liens: {
      accueil: 'Home',
      assistance: 'Support',
      conditions: 'Terms of Use',
      confidentialite: 'Privacy Policy',
    },
  },

  meta: {
    accueil: {
      titre: 'Scan Cam — the document scanner with no account and no server',
      description:
        'Scan Cam turns your iPhone into a document scanner. No account, no server of ours, no advertising.',
    },
    assistance: {
      titre: 'Support — Scan Cam',
      description: 'Help and contact for the Scan Cam app.',
    },
    conditions: {
      titre: 'Terms of Use — Scan Cam',
      description: 'The terms of use of Scan Cam and of the Scan Cam Pro subscription.',
    },
    confidentialite: {
      titre: 'Privacy Policy — Scan Cam',
      description:
        'Your documents stay on your iPhone and in your own iCloud, never on a server of ours: no account, no analytics, no advertising.',
    },
  },

  accueil: {
    badge: 'Free, no account, no advertising',
    h1: 'The document scanner that keeps your papers yours.',
    lead:
      'You photograph a sheet of paper, the app finds its edges, straightens it and cleans up the text: what you get is a real scan, not a photo of a piece of paper.',
    image: {
      src: 'images/filtres-en.jpg',
      largeur: 560,
      hauteur: 1212,
      alt:
        'Scan Cam s filter screen: the document pages scroll along the top, the four renderings below, an intensity slider and a switch to remove shadows.',
    },
    comparaison: {
      titre: 'The same page, as Scan Cam returns it.',
      avant: {
        src: 'images/avant.jpg',
        largeur: 760,
        hauteur: 1013,
        alt:
          'The whole contract, crumpled, photographed on a wooden table: the paper is grey, creased and slightly skewed.',
        legende: 'The photo',
      },
      apres: {
        src: 'images/apres.jpg',
        largeur: 760,
        hauteur: 1003,
        alt:
          'The same whole contract after Scan Cam: the page is straight, white, free of creases and shadows, and the text is sharp.',
        legende: 'The scan',
      },
      legende:
        'Photographed crumpled on a table, and returned straight, white and sharp. Both pages are whole: nothing is cropped.',
    },
    appstore: {
      note: 'iPhone and iPad.',
    },
    confidentialite: {
      titre: 'Never on a server of ours.',
    },
    promesse:
      'Your documents stay on your iPhone and in your own iCloud, never on a server of ours. No account to create, no analytics, no adverts. Your invoices, your contracts and your identity papers go nowhere else — except on the day you decide to share them yourself.',

    sectionsTitre: 'Everything it can do',
    sections: [
      {
        icone: 'scanner',
        titre: 'Scanning',
        points: [
          'Edges detected and the page straightened, even shot at an angle',
          'Four looks: original photo, colour, greyscale, black and white',
          'Strength adjustable with your finger, with a preview that follows',
          'Shadows removed in one tap, for pages shot under a lamp or a hand',
          'Several pages in one document, to reorder, rotate or remove',
          'Import photos and PDFs, up to 100 pages',
        ],
      },
      {
        icone: 'dossier',
        titre: 'Organizing',
        points: [
          'Folders and subfolders, like on a computer',
          'A search that also finds what is filed deep inside a folder, and tells you where',
          'Rename, move, duplicate, delete',
          'A copy in your iCloud that brings your documents back if you reinstall the app or change iPhones',
        ],
      },
      {
        icone: 'partager',
        titre: 'Finishing and sharing',
        points: [
          'Export to PDF or JPEG',
          'Add text on a page',
          'Print straight from the app',
          'Save to the Files app, or send through the iPhone’s share sheet',
        ],
      },
    ],

    pro: {
      titre: 'Scan Cam Pro',
      image: {
        src: 'images/document-en.jpg',
        largeur: 560,
        hauteur: 1212,
        alt:
          'A document open in Scan Cam: the page preview, the page thumbnails below, and the row of tools — share, filters, extract text, watermark, signature, print.',
      },
      // {prix} reçoit le prix du pays du visiteur, écrit à sa façon (voir prix.js).
      // Le pays par défaut est celui d’un navigateur qui ne dit pas le sien.
      prix: '{prix} a year, after a 7-day free trial.',
      prixPays: 'App Store price · {pays}',
      paysParDefaut: 'US',
      gratuit:
        'The free version is complete and never expires: scan, organize, filter, annotate, print and export to PDF as much as you like. Free PDFs carry a small “Scanned with Scan Cam” line at the foot of the page.',
      intro: 'The Pro subscription adds:',
      points: [
        'PDF with no line at the foot',
        'Text recognition, which reads your pages and hands you the text to copy',
        'Signature, drawn with your finger and placed where you want it',
        'Watermark, across the page',
        'Merging several documents into one',
        'Pulling pages out into a new document',
        'Export to Word (.docx) and Excel (.xlsx)',
      ],
      note:
        'Text recognition runs on the phone, with no internet: it reads the Latin alphabet, Japanese, Chinese and Korean.',
    },

    contact: {
      titre: 'A question?',
      texte: 'Write to me: I answer myself.',
    },
  },

  assistance: {
    h1: 'Support',
    lead:
      'A question, a problem, an idea? Write to me. There is no support desk behind Scan Cam: I read and answer myself.',
    carte: {
      note:
        'For a display problem, a screenshot helps a great deal: side button + volume up, at the same time.',
    },
    faqTitre: 'Frequently asked questions',
    faq: [
      {
        q: 'How do I scan a document?',
        r: [
          'Tap the camera button and frame the sheet. The iPhone finds the edges on its own and straightens the page, even if you photograph it at an angle. You can put several pages into the same document.',
        ],
      },
      {
        q: 'Where are my documents saved?',
        r: [
          'On your iPhone, in the app’s private space, with a copy in your own iCloud, updated a few seconds after each change. Nobody else can reach it: there is no server of ours. You can turn this copy off in <strong>Settings</strong> → <strong>iCloud backup</strong>; your documents then stay on the iPhone only. This copy does not show in the Files app or on icloud.com: it is there for Scan Cam alone. To get your documents as PDFs, open <strong>Settings</strong> → <strong>Export everything</strong>.',
        ],
      },
      {
        q: 'There is a shadow on my page. What can I do?',
        r: [
          'Open the document, go to <strong>Filters</strong> and turn on <strong>Remove shadows</strong>. The shadow goes and the paper is white again all over. You can turn it off straight away if you do not like the result: the original photograph is always kept.',
        ],
      },
      {
        q: 'How do I export to PDF?',
        r: [
          'Open the document and tap <strong>Share</strong>, then choose the format. PDF and JPEG are free; Word and Excel are part of the Pro subscription. From there you can send the file, save it to the Files app, or print it.',
        ],
      },
      {
        q: 'What is free and what is paid for?',
        r: [
          'Scanning, filing, folders, search, filters, adding text, printing and exporting to PDF are free, with no time limit and no limit on how many. Free PDFs carry a small “Scanned with Scan Cam” line at the foot of the page.',
          'The Pro subscription removes that line and adds text recognition, signature, watermark, merging documents, pulling pages out, and export to Word and Excel.',
        ],
      },
      {
        q: 'How do I manage or cancel my subscription?',
        r: [
          'From your Apple Account settings, on your iPhone: that is where, and only where, a subscription is managed and cancelled. The app cannot do it for you, since Apple takes the payment. Cancelling before the end of the free trial costs nothing.',
        ],
      },
      {
        q: 'Can I import a PDF I already have?',
        r: [
          'Yes. In the library, tap <strong>Import</strong> → <strong>Files</strong> and pick the PDF: each page becomes a page of the document, just like a scanned page, and every tool works on it. Importing is free. A password-protected PDF, or one of more than 100 pages, is refused.',
        ],
      },
      {
        q: 'Does text recognition need the internet?',
        r: [
          'No. The text is read by your iPhone itself, with no connection, and the contents of your documents are never sent to an outside service. It reads the Latin alphabet, Japanese, Chinese and Korean.',
        ],
      },
      {
        q: 'What languages is the app available in?',
        r: [
          'French, English, Spanish, German, Italian, Portuguese (Brazil), Japanese, Chinese and Korean. The language is changed in the app’s settings.',
        ],
      },
      {
        q: 'I deleted a document by mistake.',
        r: [
          'Deleting a document erases it from the phone and, a few seconds later, from its copy in iCloud: there is no bin. If your iPhone’s backup by Apple was on, a full restore of the phone can bring it back.',
        ],
      },
      {
        q: 'What happens to my documents if I delete the app?',
        r: [
          'If Scan Cam’s <strong>iCloud backup</strong> is on — it is by default —, they are waiting in your iCloud: reinstall the app, or install it on a new iPhone signed in to the same Apple Account, and they come back on their own. If you turned it off, they are erased with the app, because iOS erases its private space when it is deleted.',
          'Before deleting the app, open <strong>Settings</strong> → <strong>Export everything</strong>: all your documents are gathered into a single file, each one as a PDF filed in its folder, which you can save to Files, to iCloud Drive or to a computer. And if you only want to free up space, “Offload App” in the iPhone’s settings removes the app while keeping your documents.',
        ],
      },
    ],
  },

  juridique: {
    conditions: { h1: 'Terms of Use' },
    confidentialite: { h1: 'Privacy Policy' },
    apple: {
      href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
      cherche: 'by tapping the link at the foot of this page',
      remplace: '<a href="{lien}">on Apple’s website</a>',
    },
  },
};
