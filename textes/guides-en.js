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
// ['ul', ['html', ...]], ['note', 'html'], ['img', ['cle de capture', ...]] (une ou deux captures).
// Les captures elles-mêmes sont décrites dans guides.js (CAPTURES) ; ici, seulement leurs textes.

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
    "texte": "Scan Cam is free to download. Scanning, folders, filters and PDF export are free with no time limit; the Pro subscription adds the extra tools, and starts with a 7-day free trial."
  },
  "liees": "More guides",
  "captures": {
    "scanner": {
      "alt": "The Scan Cam scanner: an invoice lies on a table, the page is outlined in blue, with the shutter button below.",
      "legende": "The scanner finds the page and outlines it."
    },
    "propre": {
      "alt": "A crumpled contract photographed on a wooden table, and the same page after Scan Cam: straight, white and sharp.",
      "legende": "From a crumpled sheet to a clean page."
    },
    "document": {
      "alt": "The Document screen: a page of sheet music, the turn button on the large preview, the page thumbnail below, and the tools Add a page, Share, Filters, Extract the text, Add text, Watermark, Signature, Extract pages and Print.",
      "legende": "The page thumbnails, and every tool, on one screen."
    },
    "partage": {
      "alt": "The Share screen of Scan Cam: PDF is selected; Word, Excel and JPEG are the other formats.",
      "legende": "Choose the format, then send."
    },
    "filtres": {
      "alt": "The Filters screen: a page of sheet music, the Black and white look selected, and the Strength slider at 50 %.",
      "legende": "Black and white, with the strength you choose."
    },
    "dossiers": {
      "alt": "A Taxes folder in the Scan Cam library, with subfolders Taxes 2024, Taxes 2025 and Taxes 2026.",
      "legende": "Folders and subfolders, like on a computer."
    },
    "recherche": {
      "alt": "The library search: “water bill” is typed and three water bills are found.",
      "legende": "The search finds files and folders by name."
    },
    "nouvelle-signature": {
      "alt": "The New signature screen: the Draw tab is selected and the name John is signed with a finger above the line.",
      "legende": "Sign with your finger, as on paper."
    },
    "signature": {
      "alt": "The Place the signature screen: an invoice, a signature in a dashed frame, and the Size slider below.",
      "legende": "Drag the signature and set its size."
    },
    "texte": {
      "alt": "The Extracted text screen: the Latin alphabet is selected and the text of a recipe has been read from the page.",
      "legende": "The text, ready to select or copy."
    },
    "bibliotheque": {
      "alt": "The Scan Cam library: Import and New folder buttons, two folders and the documents, each with a box to tick.",
      "legende": "Import a PDF, or tick documents in the library."
    },
    "fusion": {
      "alt": "The Merge screen: two documents numbered 1 and 2, each with up and down arrows and a cross, above the Merge button.",
      "legende": "Set the order, then tap Merge."
    },
    "extraction": {
      "alt": "The Extract pages screen: page 1 of 2 is ticked, with Select all at the top and Create a new document below.",
      "legende": "Tick the pages to keep."
    },
    "filigrane": {
      "alt": "The Watermark screen: an invoice with CONFIDENTIAL written across it in red.",
      "legende": "The preview follows your settings."
    }
  },
  "guides": [
    {
      "cle": "multi-page",
      "fichier": "guide-scan-multiple-pages-to-one-pdf-iphone.html",
      "niveau": "free",
      "titre": "How to scan multiple pages into one PDF on iPhone — Scan Cam",
      "description": "Scan every page of a contract, form or homework into a single PDF on your iPhone, then reorder, add a missing page and share it. Free, with no account.",
      "h1": "How to scan multiple pages into one PDF on iPhone",
      "lead": "Contracts, forms and homework rarely fit on one sheet. Here is how to scan them all into a single PDF with Scan Cam, for free and without an account.",
      "carte": "Scan every sheet into one document, then share it as a single PDF.",
      "corps": [
        [
          "h2",
          "Scan the pages"
        ],
        [
          "ol",
          [
            "Open Scan Cam and tap <strong>Scan a document</strong>. The first time, the iPhone asks once for permission to use the camera.",
            "Frame the first sheet. Scan Cam finds the edges and straightens the page on its own, even if you hold the phone at an angle.",
            "Capture the next sheets one after another, then confirm. Your pages are assembled into one PDF document on the phone.",
            "Forgot a page? Open the document and tap <strong>Add a page</strong>: it joins the same document."
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
          "Tidy the document"
        ],
        [
          "p",
          "The page thumbnails sit under the large preview. Hold a thumbnail and drag it to put the pages in another order. The cross on a thumbnail takes that page out; it cannot be brought back, so Scan Cam asks first. A page that came out sideways is turned with the button on the large preview."
        ],
        [
          "img",
          [
            "document"
          ]
        ],
        [
          "p",
          "If a page has a shadow across it, open <strong>Filters</strong> and turn on <strong>Remove shadows</strong>. The original photograph is always kept, so you can switch it off again."
        ],
        [
          "h2",
          "Send it as one PDF"
        ],
        [
          "ol",
          [
            "Open the document and tap <strong>Share</strong>.",
            "Choose <strong>PDF</strong> (JPEG is also free).",
            "Send the file, save it to the Files app, or print it."
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
          "<strong>Free or Pro?</strong> All of this is free, with no limit on pages or documents. Free PDFs carry a small “Scanned with Scan Cam” line at the foot of the page; the Pro subscription removes it."
        ],
        [
          "h2",
          "Tips for a clean scan"
        ],
        [
          "ul",
          [
            "Put the paper on a flat, dark surface, so the edges stand out.",
            "Light the page from the side or from above, so your hand and the phone do not cast a shadow.",
            "Scan one document at a time, so each PDF is named and filed on its own."
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
      "fichier": "guide-scan-receipts-iphone.html",
      "niveau": "free",
      "titre": "How to scan receipts on your iPhone and keep them organized — Scan Cam",
      "description": "Turn paper receipts into clean, sharp PDFs on your iPhone, file them in folders, and send them to your accountant. Free to scan and file.",
      "h1": "How to scan receipts on your iPhone and keep them organized",
      "lead": "Faded till receipts are the first thing to disappear when you need them. Scan them the day you get them, and file them where you will find them.",
      "carte": "Make sharp, filed copies of paper receipts and send them to whoever needs them.",
      "corps": [
        [
          "h2",
          "Scan a receipt"
        ],
        [
          "ol",
          [
            "Open Scan Cam and tap <strong>Scan a document</strong>.",
            "Lay the receipt flat on a dark surface and frame it. The edges are found and the page is straightened for you.",
            "Open <strong>Filters</strong>. <strong>Black and white</strong> usually gives the most readable result on thermal paper; if the paper is grey or creased, turn on <strong>Remove shadows</strong> too.",
            "Adjust the strength with the slider until the printing is crisp, then tap <strong>Apply</strong>. The original photograph is kept, so you can change your mind later."
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
          "File it so you can find it"
        ],
        [
          "p",
          "Open <strong>Library</strong> and tap <strong>New folder</strong> to make a folder such as “Receipts 2026”, with subfolders by month or by category if you like. Move each scan into the right folder."
        ],
        [
          "p",
          "Give each document a name you will recognise, such as the shop and the date. The search box in the library finds files and folders by name, including those filed deep inside a folder."
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
          "Send them to your accountant"
        ],
        [
          "p",
          "Open a receipt, tap <strong>Share</strong>, and send it as a PDF by mail or message, or save it to the Files app. For a whole folder of documents, use <strong>Settings → Export everything</strong>: every document comes out as a PDF, filed in its folder."
        ],
        [
          "note",
          "<strong>Free or Pro?</strong> Scanning, filters, folders, search and PDF export are free. With Pro, <strong>Extract the text</strong> reads a receipt on the phone, with no internet, so you can copy the total or the date into a spreadsheet."
        ],
        [
          "h2",
          "Tips"
        ],
        [
          "ul",
          [
            "Scan receipts the same day: thermal paper fades within months.",
            "One receipt per document keeps naming and filing simple.",
            "Keep the paper original when the law of your country requires it; a scan is a convenient copy, not always a legal replacement."
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
      "fichier": "guide-sign-a-document-on-iphone.html",
      "niveau": "pro",
      "titre": "How to sign a document on your iPhone with your finger — Scan Cam",
      "description": "Draw your signature once, then place it on any scanned document or PDF on your iPhone. Step by step with Scan Cam Pro.",
      "h1": "How to sign a document on your iPhone with your finger",
      "lead": "No printer, no pen, no scanner: draw your signature once, then place it where it belongs on any document.",
      "carte": "Draw or photograph your signature once, then place it on any document.",
      "corps": [
        [
          "h2",
          "Create your signature"
        ],
        [
          "ol",
          [
            "Open the document and tap <strong>Signature</strong> in the row of tools.",
            "Tap <strong>New signature</strong>.",
            "Choose <strong>Draw</strong> and sign with your finger above the line, or choose <strong>Photo</strong> and photograph your signature written on a sheet of paper. With a photo, pull the corners of the rectangle around the signature, then adjust the slider until only the stroke is left, with no grey haze.",
            "Tap <strong>Save</strong>. Your signature is kept for your next documents."
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
          "Place it on the page"
        ],
        [
          "ol",
          [
            "Choose the page you want to sign.",
            "Drag the signature where it belongs. Spread two fingers to magnify the page and place it precisely.",
            "Use <strong>Size</strong> to make it bigger or smaller. The dashed frame helps you position it and is not written onto the page.",
            "Tap <strong>Done</strong>. The signature is written onto the page and the PDF is rebuilt around it."
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
          "<strong>Make a copy first.</strong> The signature is written into the document itself. If you want to keep an unsigned version, copy the document from the library before signing, then sign the copy."
        ],
        [
          "h2",
          "Send the signed document"
        ],
        [
          "p",
          "Tap <strong>Share</strong>, choose PDF, and send it by mail or message, or save it to the Files app."
        ],
        [
          "note",
          "<strong>Free or Pro?</strong> Signing is part of the Pro subscription, which starts with a 7-day free trial; cancelling before the end of the trial costs nothing. Pro PDFs also have no “Scanned with Scan Cam” line."
        ],
        [
          "h2",
          "Good to know"
        ],
        [
          "ul",
          [
            "You can keep several signatures and pick the one you want each time; delete one from the same screen if you no longer need it.",
            "A drawn signature is kept as a stroke, so it stays sharp at whatever size you place it.",
            "A signature drawn on a phone is an image on the page. Some contracts and administrations require a certified electronic signature: check what the recipient accepts."
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
      "fichier": "guide-copy-text-from-a-scan-iphone.html",
      "niveau": "pro",
      "titre": "How to copy the text from a scanned document on iPhone (OCR) — Scan Cam",
      "description": "Read a scan or a PDF on your iPhone and copy its text, offline. Step by step text recognition with Scan Cam Pro.",
      "h1": "How to copy the text from a scanned document on iPhone",
      "lead": "A scan is a picture of a page: you cannot select its words. Text recognition (OCR) reads the picture and gives you the text to copy.",
      "carte": "Read a page and copy its text, on the phone and without internet.",
      "corps": [
        [
          "h2",
          "Read a document"
        ],
        [
          "ol",
          [
            "Scan the document, or import a PDF from the library with <strong>Import → Files</strong>.",
            "Open the document and tap <strong>Extract the text</strong>.",
            "Choose the writing on the page. The Latin alphabet covers French, English, Spanish and German; Japanese, Chinese and Korean are also available.",
            "Wait while Scan Cam reads each page. The text appears when it is done."
          ]
        ],
        [
          "h2",
          "Copy what you need"
        ],
        [
          "p",
          "Press and hold the text to select a passage, or tap <strong>Copy the text</strong> to copy all of it, then paste it into a message, a note or a spreadsheet."
        ],
        [
          "img",
          [
            "texte"
          ]
        ],
        [
          "h2",
          "It stays on your phone"
        ],
        [
          "p",
          "The text is read by the iPhone itself, with no internet connection, and the contents of your documents are never sent to an outside service."
        ],
        [
          "note",
          "<strong>Free or Pro?</strong> Text recognition is part of the Pro subscription, with a 7-day free trial; cancelling before it ends costs nothing."
        ],
        [
          "h2",
          "Getting a better result"
        ],
        [
          "ul",
          [
            "If nothing is recognised, scan the page again: a sharper, better-lit scan often gives a better result.",
            "Use <strong>Filters</strong> to remove shadows before reading.",
            "An imported PDF becomes pages, like a scan: its original text can no longer be selected, but text recognition can read it again.",
            "Tap <strong>Read the document again</strong> after changing the writing you selected."
          ]
        ],
        [
          "p",
          "The same reading is used to export a document to Word (.docx) or Excel (.xlsx) with Pro."
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
      "lead": "Several documents, one file to send. Here is how to join them in the order you want, without touching the originals.",
      "carte": "Join several documents into one PDF, in the order you choose.",
      "corps": [
        [
          "h2",
          "Bring the PDFs into Scan Cam"
        ],
        [
          "p",
          "Documents you scanned are already in the library. To add a PDF you already have, tap <strong>Import → Files</strong> in the library and pick it: each page becomes a page of a document, and importing is free. A password-protected PDF, or one of more than 100 pages, is refused."
        ],
        [
          "img",
          [
            "bibliotheque"
          ]
        ],
        [
          "h2",
          "Merge them"
        ],
        [
          "ol",
          [
            "In the library, tick at least two documents. You can open a folder to tick more: what is already ticked stays ticked.",
            "Tap <strong>Merge</strong> in the bar that appears. (You can also start from <strong>Tools → Merge</strong>: tick the documents there and tap <strong>Continue</strong>.)",
            "Put the documents in order with the arrows, and use the cross to take one out. Scan Cam tells you how many pages the new document will have.",
            "Tap <strong>Merge</strong> to confirm. Nothing is created until you do."
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
          "The result is a new PDF document in your library. Your original documents keep all their pages: merging copies, it does not cut."
        ],
        [
          "h2",
          "Send it"
        ],
        [
          "p",
          "Open the merged document, tap <strong>Share</strong>, choose PDF, and send it or save it to the Files app."
        ],
        [
          "note",
          "<strong>Free or Pro?</strong> Merging is part of the Pro subscription, which starts with a 7-day free trial; cancelling before it ends costs nothing. Importing, scanning and exporting a single PDF stay free."
        ],
        [
          "h2",
          "Tips"
        ],
        [
          "ul",
          [
            "Whatever the documents were (scans, photos, imported PDFs), the merged result is always a PDF.",
            "Need only some pages of the result? See the guide on extracting pages."
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
      "fichier": "guide-extract-pages-from-a-pdf-on-iphone.html",
      "niveau": "pro",
      "titre": "How to extract pages from a PDF on iPhone — Scan Cam",
      "description": "Pull some pages out of a PDF or a scan into a new document on your iPhone, without changing the original. Step by step with Scan Cam Pro.",
      "h1": "How to extract pages from a PDF on iPhone",
      "lead": "Only pages 3 and 4 matter? Make a new document from the pages you pick and leave the original as it is.",
      "carte": "Make a new document from the pages you pick, and keep the original.",
      "corps": [
        [
          "h2",
          "Open the PDF in Scan Cam"
        ],
        [
          "p",
          "If the PDF is not in your library yet, tap <strong>Import → Files</strong> and pick it. Each page becomes a page of the document, like a scanned page. A password-protected PDF, or one of more than 100 pages, is refused."
        ],
        [
          "img",
          [
            "bibliotheque"
          ]
        ],
        [
          "h2",
          "Pick the pages"
        ],
        [
          "ol",
          [
            "Open the document and tap <strong>Extract pages</strong>.",
            "Tick the pages you want to keep. <strong>Select all</strong> and <strong>Deselect all</strong> save time on long documents.",
            "Tap <strong>Create a new document</strong>."
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
          "The chosen pages are copied into a new document, filed beside the original, which is left as it is. Keeping every page is refused on purpose: that would simply be a copy."
        ],
        [
          "h2",
          "Send the new document"
        ],
        [
          "p",
          "Open it, tap <strong>Share</strong>, choose PDF, and send it or save it to the Files app."
        ],
        [
          "note",
          "<strong>Free or Pro?</strong> Extracting pages is part of the Pro subscription, which starts with a 7-day free trial; cancelling before it ends costs nothing. Scanning, importing and exporting a PDF stay free."
        ],
        [
          "h2",
          "Good to know"
        ],
        [
          "ul",
          [
            "Because pages are copied, deleting the new document later does not affect the original, and the other way round.",
            "To send only one page as an image, extract it first, then share it as JPEG."
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
      "fichier": "guide-add-a-watermark-to-a-pdf-on-iphone.html",
      "niveau": "pro",
      "titre": "How to add a watermark to a PDF on iPhone — Scan Cam",
      "description": "Stamp CONFIDENTIAL or your own text across every page of a scan or PDF on your iPhone. Step by step with Scan Cam Pro.",
      "h1": "How to add a watermark to a PDF on iPhone",
      "lead": "A copy of your ID for one purpose only, a draft that must not circulate: a watermark across the page says what the document is for.",
      "carte": "Stamp your own text across every page of a document.",
      "corps": [
        [
          "h2",
          "Add the watermark"
        ],
        [
          "ol",
          [
            "Open the document and tap <strong>Watermark</strong> in the row of tools.",
            "Type your text. The suggestion is “CONFIDENTIAL”; for a copy of an ID, write what it is for and the date, such as “For the rental application, 12 May”.",
            "Adjust <strong>Repetition</strong>, <strong>Colour</strong>, <strong>Opacity</strong>, <strong>Size</strong> and <strong>Slant</strong>. The preview of page 1 follows your choices.",
            "Tap <strong>Done</strong>. The watermark is laid on every page of the document."
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
          "<strong>Make a copy first.</strong> Once you tap Done, the watermark is burnt into the pages: to remove it you would have to scan them again. Copy the document from the library, and watermark the copy."
        ],
        [
          "h2",
          "Share it"
        ],
        [
          "p",
          "Tap <strong>Share</strong>, choose PDF, and send it or save it to the Files app."
        ],
        [
          "note",
          "<strong>Free or Pro?</strong> The watermark is part of the Pro subscription, which starts with a 7-day free trial; cancelling before it ends costs nothing."
        ],
        [
          "h2",
          "Tips"
        ],
        [
          "ul",
          [
            "A repeated, slanted watermark is harder to crop out than a single line in a corner.",
            "Keep the opacity low enough to read the document through the text."
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
