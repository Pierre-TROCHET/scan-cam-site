// Every text of the site, in English. See `fr.js` for the French one — that
// file carries the notes that apply to both.

module.exports = {
  code: 'en',
  nom: 'English',

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
      titre: 'Scan Cam — the document scanner that stays on your iPhone',
      description:
        'Scan Cam turns your iPhone into a document scanner. No account, no server, no advertising.',
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
        'Your documents stay on your phone: no account, no server of ours, no analytics, no advertising.',
    },
  },

  accueil: {
    badge: 'Free, no account, no advertising',
    h1: 'The document scanner that never leaves your iPhone.',
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
      titre: 'Nothing leaves your iPhone.',
    },
    promesse:
      'And it all happens on your phone. No account to create, nothing sent to a server, no adverts. Your invoices, your contracts and your identity papers never leave your iPhone — except on the day you decide to share them yourself.',

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
        ],
      },
      {
        icone: 'dossier',
        titre: 'Organizing',
        points: [
          'Folders and subfolders, like on a computer',
          'A search that also finds what is filed deep inside a folder, and tells you where',
          'Rename, move, duplicate, delete',
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
      // ⚠️ See fr.js: build.js refuses to build if this price is not found
      // word for word in the terms of use, which come from the app itself.
      prix: '€24.99 a year, after a 7-day free trial.',
      prixControle: '€24.99',
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
        'Text recognition runs on the phone, with no internet: it reads the Latin alphabet, Japanese and Chinese.',
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
          'On your iPhone, in the app’s private space. They are sent nowhere. If your phone’s iCloud backup is on, they are backed up along with the rest of your phone, by Apple.',
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
          'No. Import takes images — photographs from your camera roll, or images chosen in Files. PDFs appear greyed out.',
        ],
      },
      {
        q: 'Does text recognition need the internet?',
        r: [
          'No. The text is read by your iPhone itself, with no connection, and the contents of your documents are never sent to an outside service. It reads the Latin alphabet, Japanese and Chinese.',
        ],
      },
      {
        q: 'What languages is the app available in?',
        r: [
          'French, English, Spanish, German, Japanese and Chinese. The language is changed in the app’s settings.',
        ],
      },
      {
        q: 'I deleted a document by mistake.',
        r: [
          'Deleting a document erases it from the phone, and there is no bin: as nothing was ever sent anywhere else, it exists nowhere else. If your iPhone’s iCloud backup was on, a full restore of the phone can bring it back.',
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
