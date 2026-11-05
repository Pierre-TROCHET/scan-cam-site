// Les guides de Scan Cam en anglais — la langue de référence : les huit autres fichiers
// `guides-<langue>.js` en sont la traduction, avec exactement la même structure.
//
// Règles d'écriture, pour que ces pages restent vraies :
//  · chaque geste décrit existe dans l'application, et les noms des boutons sont ceux de
//    l'interface dans cette langue (cam-scan/i18n/<langue>.ts). Si un écran change, la page change.
//  · on dit toujours ce qui est gratuit et ce qui demande Pro. Aucun prix n'est cité : il change
//    d'un pays à l'autre (voir prix.js).
//  · pas de promesse que l'application ne tient pas (la recherche porte sur les NOMS des fichiers
//    et des dossiers, pas sur leur contenu).
//
// `cle` relie les traductions d'un même guide entre elles (hreflang, sélecteur de langue).
// `fichier` est le nom du fichier HTML engendré ; son adresse publique est la même sans « .html ».
// Dans `corps`, chaque bloc est un tableau : ['h2', 'texte'], ['p', 'html'], ['ol', ['html', ...]],
// ['ul', ['html', ...]], ['note', 'html'], ['clip', 'prise'] (un clip muet de images/guides/clips/).
// Depuis le 5 novembre 2026 : des textes courts (Pierre trouvait les guides trop verbeux), des clips
// à la place des captures fixes, et une note « Free or Pro? » à la fin de chaque guide.

module.exports = {
  "code": "en",
  "menu": "Guides",
  "accueil": {
    "fichier": "guides.html",
    "titre": "Guides — Scan Cam",
    "description": "Step-by-step guides for scanning, signing, merging and reading documents on your iPhone with Scan Cam.",
    "h1": "Guides",
    "lead": "Short, step-by-step answers for the things people most often want to do with a scanner on their iPhone.",
    "sectionTitre": "Pick a guide",
    "gratuit": "Free",
    "pro": "Pro"
  },
  "etiquette": {
    "free": "Free in Scan Cam",
    "pro": "Pro feature · 7-day free trial"
  },
  "blocAccueil": {
    "titre": "Guides",
    "texte": "Step-by-step answers for scanning, signing, merging and reading documents on your iPhone.",
    "tous": "All guides"
  },
  "pied": {
    "titre": "Try Scan Cam",
    "texte": "Scan Cam is free to download. Scanning, folders, filters and PDF export are free with no time limit; the Pro subscription adds the extra tools, and starts with a 7-day free trial.",
    "youtube": "Prefer video? Watch the short tutorials on YouTube"
  },
  "liees": "More guides",
  "guides": [
    {
      "cle": "multi-page",
      "fichier": "guide-scan-multiple-pages-to-one-pdf-iphone.html",
      "niveau": "free",
      "titre": "How to scan multiple pages into one PDF on iPhone — Scan Cam",
      "description": "Scan every page of a contract, form or homework into a single PDF on your iPhone, then reorder, add a missing page and share it. Free, with no account.",
      "h1": "How to scan multiple pages into one PDF on iPhone",
      "lead": "Scan every sheet of a contract, form or homework into one PDF, for free and without an account.",
      "carte": "Scan every sheet into one document, then share it as a single PDF.",
      "corps": [
        [
          "h2",
          "Scan the pages"
        ],
        [
          "ol",
          [
            "Tap <strong>Scan a document</strong> and frame the first sheet: the edges are found and the page is straightened.",
            "Capture the other sheets, then confirm. They make one document.",
            "Forgot one? Open the document and tap <strong>Add a page</strong>."
          ]
        ],
        [
          "clip",
          "scan"
        ],
        [
          "h2",
          "Tidy the document"
        ],
        [
          "p",
          "Hold a thumbnail and drag it to reorder the pages; the cross removes a page. A shadow on a page? Open <strong>Filters</strong> and turn on <strong>Remove shadows</strong>."
        ],
        [
          "clip",
          "reordonner"
        ],
        [
          "h2",
          "Send it as one PDF"
        ],
        [
          "p",
          "Tap <strong>Share</strong>, choose <strong>PDF</strong>, then send, save or print it."
        ],
        [
          "note",
          "<strong>Free or Pro?</strong> All of this is free, with no page limit. Pro removes the small “Scanned with Scan Cam” line from PDFs."
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
      "fichier": "guide-scan-receipts-iphone.html",
      "niveau": "free",
      "titre": "How to scan receipts on your iPhone and keep them organized — Scan Cam",
      "description": "Turn paper receipts into clean, sharp PDFs on your iPhone, file them in folders, and send them to your accountant. Free to scan and file.",
      "h1": "How to scan receipts on your iPhone and keep them organized",
      "lead": "Thermal receipts fade within months. Scan them the day you get them and file them where you will find them.",
      "carte": "Make sharp, filed copies of paper receipts and send them to whoever needs them.",
      "corps": [
        [
          "h2",
          "Scan a receipt"
        ],
        [
          "ol",
          [
            "Tap <strong>Scan a document</strong> and frame the receipt on a dark surface.",
            "Open <strong>Filters</strong>, choose <strong>Black and white</strong>, set the strength, then tap <strong>Apply</strong>."
          ]
        ],
        [
          "clip",
          "filtres"
        ],
        [
          "h2",
          "File it so you can find it"
        ],
        [
          "p",
          "Tap <strong>New folder</strong> to make a folder such as “Receipts 2026”, and name each receipt after the shop and the date. The search finds files and folders by name."
        ],
        [
          "clip",
          "ranger"
        ],
        [
          "h2",
          "Send them to your accountant"
        ],
        [
          "p",
          "<strong>Share</strong> sends a receipt as a PDF. <strong>Settings → Export everything</strong> exports all your documents, folder by folder."
        ],
        [
          "note",
          "<strong>Free or Pro?</strong> Scanning, filters, folders, search and PDF export are free. Pro adds <strong>Extract the text</strong>, to copy a total or a date."
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
      "fichier": "guide-sign-a-document-on-iphone.html",
      "niveau": "pro",
      "titre": "How to sign a document on your iPhone with your finger — Scan Cam",
      "description": "Draw your signature once, then place it on any scanned document or PDF on your iPhone. Step by step with Scan Cam Pro.",
      "h1": "How to sign a document on your iPhone with your finger",
      "lead": "No printer, no pen: draw your signature once, then place it on any document.",
      "carte": "Draw or photograph your signature once, then place it on any document.",
      "corps": [
        [
          "h2",
          "Create your signature"
        ],
        [
          "ol",
          [
            "Open the document, tap <strong>Signature</strong>, then <strong>New signature</strong>.",
            "Sign with your finger (<strong>Draw</strong>) or photograph a signature on paper (<strong>Photo</strong>), then tap <strong>Save</strong>. It is kept for next time."
          ]
        ],
        [
          "h2",
          "Place it on the page"
        ],
        [
          "ol",
          [
            "Choose the page, drag the signature into place and adjust its <strong>Size</strong>.",
            "Tap <strong>Done</strong>: the signature is written into the PDF."
          ]
        ],
        [
          "clip",
          "signature"
        ],
        [
          "note",
          "<strong>Make a copy first</strong> if you want to keep an unsigned version: the signature cannot be removed. A drawn signature is an image, not a certified electronic signature."
        ],
        [
          "note",
          "<strong>Free or Pro?</strong> Signing is part of Pro, which starts with a 7-day free trial."
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
      "fichier": "guide-copy-text-from-a-scan-iphone.html",
      "niveau": "pro",
      "titre": "How to copy the text from a scanned document on iPhone (OCR) — Scan Cam",
      "description": "Read a scan or a PDF on your iPhone and copy its text, offline. Step by step text recognition with Scan Cam Pro.",
      "h1": "How to copy the text from a scanned document on iPhone",
      "lead": "Text recognition (OCR) reads a scanned page and gives you its text to copy.",
      "carte": "Read a page and copy its text, on the phone and without internet.",
      "corps": [
        [
          "h2",
          "Copy the text of a page"
        ],
        [
          "ol",
          [
            "Open a scan, or a PDF imported with <strong>Import → Files</strong>, and tap <strong>Extract the text</strong>.",
            "Choose the writing (Latin, Japanese, Chinese or Korean) and let Scan Cam read the pages.",
            "Select a passage, or tap <strong>Copy the text</strong> to copy everything."
          ]
        ],
        [
          "clip",
          "texte"
        ],
        [
          "p",
          "The text is read by the iPhone itself, without internet: your documents are never sent anywhere. Nothing recognised? Scan the page again with better light."
        ],
        [
          "note",
          "<strong>Free or Pro?</strong> Text recognition is part of Pro, which starts with a 7-day free trial. It also exports documents to Word and Excel."
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
      "fichier": "guide-merge-pdf-files-on-iphone.html",
      "niveau": "pro",
      "titre": "How to merge PDF files on iPhone — Scan Cam",
      "description": "Combine several scans or PDFs into one PDF on your iPhone, in the order you choose. Step by step with Scan Cam Pro.",
      "h1": "How to merge PDF files on iPhone",
      "lead": "Several documents, one file to send, in the order you want. The originals stay as they are.",
      "carte": "Join several documents into one PDF, in the order you choose.",
      "corps": [
        [
          "h2",
          "Merge them"
        ],
        [
          "ol",
          [
            "In the library, tick at least two documents: scans, or PDFs imported with <strong>Import → Files</strong>.",
            "Tap <strong>Merge</strong>, put them in order with the arrows, then tap <strong>Merge</strong> again."
          ]
        ],
        [
          "clip",
          "fusion"
        ],
        [
          "p",
          "The result is a new PDF in your library. Send it with <strong>Share</strong>."
        ],
        [
          "note",
          "<strong>Free or Pro?</strong> Merging is part of Pro, which starts with a 7-day free trial. Importing and exporting a PDF stay free."
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
      "fichier": "guide-extract-pages-from-a-pdf-on-iphone.html",
      "niveau": "pro",
      "titre": "How to extract pages from a PDF on iPhone — Scan Cam",
      "description": "Pull some pages out of a PDF or a scan into a new document on your iPhone, without changing the original. Step by step with Scan Cam Pro.",
      "h1": "How to extract pages from a PDF on iPhone",
      "lead": "Only some pages matter? Make a new document from them and leave the original as it is.",
      "carte": "Make a new document from the pages you pick, and keep the original.",
      "corps": [
        [
          "h2",
          "Pick the pages"
        ],
        [
          "ol",
          [
            "Open the document (import a PDF with <strong>Import → Files</strong>) and tap <strong>Extract pages</strong>.",
            "Tick the pages to keep, then tap <strong>Create a new document</strong>."
          ]
        ],
        [
          "clip",
          "pages"
        ],
        [
          "p",
          "The pages are copied into a new document, filed beside the original. Send it with <strong>Share</strong>."
        ],
        [
          "note",
          "<strong>Free or Pro?</strong> Extracting pages is part of Pro, which starts with a 7-day free trial."
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
      "fichier": "guide-add-a-watermark-to-a-pdf-on-iphone.html",
      "niveau": "pro",
      "titre": "How to add a watermark to a PDF on iPhone — Scan Cam",
      "description": "Stamp CONFIDENTIAL or your own text across every page of a scan or PDF on your iPhone. Step by step with Scan Cam Pro.",
      "h1": "How to add a watermark to a PDF on iPhone",
      "lead": "A copy of your ID for one purpose only, a draft that must not circulate: a watermark says what the document is for.",
      "carte": "Stamp your own text across every page of a document.",
      "corps": [
        [
          "h2",
          "Add the watermark"
        ],
        [
          "ol",
          [
            "Open the document and tap <strong>Watermark</strong>.",
            "Type your text, such as “For the rental application, 12 May” on a copy of an ID.",
            "Adjust <strong>Colour</strong>, <strong>Opacity</strong> and <strong>Size</strong>, then tap <strong>Done</strong>: every page is marked."
          ]
        ],
        [
          "clip",
          "filigrane"
        ],
        [
          "note",
          "<strong>Make a copy first.</strong> The watermark cannot be removed afterwards."
        ],
        [
          "note",
          "<strong>Free or Pro?</strong> The watermark is part of Pro, which starts with a 7-day free trial."
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
      "fichier": "guide-scan-a-document-on-iphone-without-a-subscription.html",
      "niveau": "free",
      "titre": "How to scan a document on iPhone without a subscription — Scan Cam",
      "description": "Scanning a document on iPhone without paying: Apple’s Notes and Files apps already do it, and QuickScan is free. What Scan Cam adds, and what is free in it.",
      "h1": "How to scan a document on iPhone without a subscription",
      "lead": "You need no subscription, not even an app to download. The free options first, then what Scan Cam adds.",
      "carte": "The free options first — Notes, Files, QuickScan — then what Scan Cam adds.",
      "corps": [
        [
          "h2",
          "With the Notes app"
        ],
        [
          "ol",
          [
            "In a note, tap the camera button (or the paper clip), then “Scan Documents”.",
            "Frame the sheet: the iPhone takes it by itself. Tap “Save”, then share it as a PDF."
          ]
        ],
        [
          "p",
          "Free, with no account and no ads."
        ],
        [
          "h2",
          "With the Files app"
        ],
        [
          "p",
          "Tap the three dots at the top, then “Scan Documents”: the PDF is saved in the folder you are in."
        ],
        [
          "h2",
          "With a free app: QuickScan"
        ],
        [
          "p",
          "“OCR Text Scanner: QuickScan” is free, has no ads and reads the text too. Check its price on the App Store first: it can change."
        ],
        [
          "h2",
          "What Scan Cam adds"
        ],
        [
          "p",
          "For frequent scanning: folders, clean pages, several pages in one PDF, and a copy in your own iCloud. Scanning, folders, filters and PDF export are free, with no limit."
        ],
        [
          "clip",
          "scan"
        ],
        [
          "note",
          "<strong>Free or Pro?</strong> Pro adds signing, text extraction, watermarks, merging and Word or Excel export; it starts with a 7-day free trial."
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
