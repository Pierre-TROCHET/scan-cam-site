// Les guides de Scan Cam en italien — traduction de `guides-en.js`, même structure.
// Tutoiement, comme le reste du site et le dictionnaire de l'application.
// Les mots en gras sont les libellés de l'interface italienne (cam-scan/i18n/it.ts).

module.exports = {
  "code": "it",
  "menu": "Guide",
  "accueil": {
    "fichier": "guides-it.html",
    "titre": "Guide — Scan Cam",
    "description": "Guide passo passo per scansionare, firmare, unire e leggere documenti sul tuo telefono con Scan Cam.",
    "h1": "Guide",
    "lead": "Risposte brevi, passo passo, alle cose che si vogliono fare più spesso con uno scanner sul telefono.",
    "sectionTitre": "Scegli una guida",
    "gratuit": "Gratis",
    "pro": "Pro"
  },
  "etiquette": {
    "free": "Gratis in Scan Cam",
    "pro": "Funzione Pro · 7 giorni di prova gratuita"
  },
  "blocAccueil": {
    "titre": "Guide",
    "texte": "Risposte passo passo per scansionare, firmare, unire e leggere documenti sul tuo telefono.",
    "tous": "Tutte le guide"
  },
  "pied": {
    "titre": "Prova Scan Cam",
    "texte": "Scan Cam si scarica gratis. Scansione, cartelle, filtri ed esportazione in PDF sono gratuiti e senza limiti di tempo; l’abbonamento Pro aggiunge gli strumenti in più e inizia con 7 giorni di prova gratuita.",
    "youtube": "Preferisci un video? Guarda i brevi tutorial su YouTube (in inglese)"
  },
  "liees": "Altre guide",
  "guides": [
    {
      "cle": "multi-page",
      "fichier": "guide-scansionare-piu-pagine-in-un-pdf-iphone-it.html",
      "niveau": "free",
      "titre": "Come scansionare più pagine in un unico PDF sul telefono — Scan Cam",
      "description": "Tutte le pagine di un contratto, un modulo o dei compiti in un unico PDF sul telefono: riordinale, aggiungi quella mancante, condividi. Gratis, senza account.",
      "h1": "Come scansionare più pagine in un unico PDF sul telefono",
      "lead": "Scansiona tutti i fogli di un contratto, di un modulo o di un compito in un unico PDF, gratis e senza account.",
      "carte": "Scansiona ogni foglio in un solo documento, poi condividilo come un unico PDF.",
      "corps": [
        [
          "h2",
          "Scansiona le pagine"
        ],
        [
          "ol",
          [
            "Tocca <strong>Scansiona un documento</strong> e inquadra il primo foglio: i bordi vengono trovati e la pagina viene raddrizzata.",
            "Scatta gli altri fogli, poi conferma. Formano un unico documento.",
            "Ne hai dimenticato uno? Apri il documento e tocca <strong>Aggiungi una pagina</strong>."
          ]
        ],
        [
          "clip",
          "scan"
        ],
        [
          "h2",
          "Metti in ordine il documento"
        ],
        [
          "p",
          "Tieni premuta una miniatura e trascinala per cambiare l’ordine delle pagine; la croce toglie una pagina. Un’ombra su una pagina? Apri <strong>Filtri</strong> e attiva <strong>Rimuovi le ombre</strong>."
        ],
        [
          "clip",
          "reordonner"
        ],
        [
          "h2",
          "Invialo come un unico PDF"
        ],
        [
          "p",
          "Tocca <strong>Condividi</strong>, scegli <strong>PDF</strong>, poi invialo, salvalo o stampalo."
        ],
        [
          "note",
          "<strong>Gratis o Pro?</strong> Tutto questo è gratuito, senza limiti di pagine. Pro toglie dai PDF la piccola scritta «Scansionato con Scan Cam»."
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
      "fichier": "guide-scansionare-scontrini-iphone-it.html",
      "niveau": "free",
      "titre": "Come scansionare gli scontrini con il telefono e tenerli in ordine — Scan Cam",
      "description": "Trasforma gli scontrini di carta in PDF nitidi sul tuo telefono, archiviali in cartelle e inviali al commercialista. Scansione e archiviazione gratuite.",
      "h1": "Come scansionare gli scontrini con il telefono e tenerli in ordine",
      "lead": "Gli scontrini su carta termica sbiadiscono nel giro di qualche mese. Scansionali il giorno stesso in cui li ricevi, e mettili dove li ritroverai.",
      "carte": "Fai copie nitide e ordinate degli scontrini di carta e inviale a chi ne ha bisogno.",
      "corps": [
        [
          "h2",
          "Scansiona uno scontrino"
        ],
        [
          "ol",
          [
            "Tocca <strong>Scansiona un documento</strong> e inquadra lo scontrino su una superficie scura.",
            "Apri <strong>Filtri</strong>, scegli <strong>Bianco e nero</strong>, regola l’intensità, poi tocca <strong>Applica</strong>."
          ]
        ],
        [
          "clip",
          "filtres"
        ],
        [
          "h2",
          "Archivialo per ritrovarlo"
        ],
        [
          "p",
          "Tocca <strong>Nuova cartella</strong> per creare una cartella come «Scontrini 2026», e dai a ogni scontrino il nome del negozio e la data. La ricerca trova file e cartelle per nome."
        ],
        [
          "clip",
          "ranger"
        ],
        [
          "h2",
          "Inviali al commercialista"
        ],
        [
          "p",
          "<strong>Condividi</strong> invia uno scontrino come PDF. <strong>Impostazioni → Esporta tutto</strong> esporta tutti i tuoi documenti, cartella per cartella."
        ],
        [
          "note",
          "<strong>Gratis o Pro?</strong> Scansione, filtri, cartelle, ricerca ed esportazione in PDF sono gratuiti. Pro aggiunge <strong>Estrai il testo</strong>, per copiare un totale o una data."
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
      "fichier": "guide-firmare-un-documento-su-iphone-it.html",
      "niveau": "pro",
      "titre": "Come firmare un documento sul telefono con il dito — Scan Cam",
      "description": "Disegna la tua firma una volta, poi posizionala su qualsiasi documento scansionato o PDF sul tuo telefono. Passo passo con Scan Cam Pro.",
      "h1": "Come firmare un documento sul telefono con il dito",
      "lead": "Niente stampante, niente penna: disegna la tua firma una volta, poi posizionala su qualsiasi documento.",
      "carte": "Disegna o fotografa la tua firma una volta, poi posizionala su qualsiasi documento.",
      "corps": [
        [
          "h2",
          "Crea la tua firma"
        ],
        [
          "ol",
          [
            "Apri il documento, tocca <strong>Firma</strong>, poi <strong>Nuova firma</strong>.",
            "Firma con il dito (<strong>Disegna</strong>) o fotografa una firma su carta (<strong>Foto</strong>), poi tocca <strong>Salva</strong>. Viene conservata per la prossima volta."
          ]
        ],
        [
          "h2",
          "Posizionala sulla pagina"
        ],
        [
          "ol",
          [
            "Scegli la pagina, trascina la firma al suo posto e regola la <strong>Dimensione</strong>.",
            "Tocca <strong>Fine</strong>: la firma viene scritta nel PDF."
          ]
        ],
        [
          "clip",
          "signature"
        ],
        [
          "note",
          "<strong>Prima fai una copia</strong> se vuoi conservare una versione non firmata: la firma non si può più togliere. Una firma disegnata è un’immagine, non una firma elettronica certificata."
        ],
        [
          "note",
          "<strong>Gratis o Pro?</strong> La firma fa parte di Pro, che inizia con 7 giorni di prova gratuita."
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
      "fichier": "guide-copiare-il-testo-da-una-scansione-iphone-it.html",
      "niveau": "pro",
      "titre": "Come copiare il testo di un documento scansionato sul telefono (OCR) — Scan Cam",
      "description": "Leggi una scansione o un PDF sul tuo telefono e copiane il testo, offline. Riconoscimento del testo passo passo con Scan Cam Pro.",
      "h1": "Come copiare il testo di un documento scansionato sul telefono",
      "lead": "Il riconoscimento del testo (OCR) legge una pagina scansionata e ti dà il suo testo da copiare.",
      "carte": "Leggi una pagina e copiane il testo, sul telefono e senza internet.",
      "corps": [
        [
          "h2",
          "Copia il testo di una pagina"
        ],
        [
          "ol",
          [
            "Apri una scansione, o un PDF importato con <strong>Importa → File</strong>, e tocca <strong>Estrai il testo</strong>.",
            "Scegli la scrittura (latina, giapponese, cinese o coreana) e lascia che Scan Cam legga le pagine.",
            "Seleziona un passaggio, oppure tocca <strong>Copia il testo</strong> per copiare tutto."
          ]
        ],
        [
          "clip",
          "texte"
        ],
        [
          "p",
          "Il testo viene letto dal telefono stesso, senza internet: i tuoi documenti non vengono mai inviati da nessuna parte. Non viene riconosciuto nulla? Scansiona di nuovo la pagina con una luce migliore."
        ],
        [
          "note",
          "<strong>Gratis o Pro?</strong> Il riconoscimento del testo fa parte di Pro, che inizia con 7 giorni di prova gratuita. Serve anche a esportare i documenti in Word ed Excel."
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
      "fichier": "guide-unire-file-pdf-su-iphone-it.html",
      "niveau": "pro",
      "titre": "Come unire file PDF sul telefono — Scan Cam",
      "description": "Riunisci più scansioni o PDF in un unico PDF sul tuo telefono, nell’ordine che scegli. Passo passo con Scan Cam Pro.",
      "h1": "Come unire file PDF sul telefono",
      "lead": "Più documenti, un solo file da inviare, nell’ordine che vuoi. Gli originali restano come sono.",
      "carte": "Unisci più documenti in un unico PDF, nell’ordine che scegli.",
      "corps": [
        [
          "h2",
          "Uniscili"
        ],
        [
          "ol",
          [
            "Nella libreria, spunta almeno due documenti: scansioni, o PDF importati con <strong>Importa → File</strong>.",
            "Tocca <strong>Unisci</strong>, mettili in ordine con le frecce, poi tocca di nuovo <strong>Unisci</strong>."
          ]
        ],
        [
          "clip",
          "fusion"
        ],
        [
          "p",
          "Il risultato è un nuovo PDF nella tua libreria. Invialo con <strong>Condividi</strong>."
        ],
        [
          "note",
          "<strong>Gratis o Pro?</strong> L’unione fa parte di Pro, che inizia con 7 giorni di prova gratuita. Importare ed esportare un PDF restano gratuiti."
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
      "fichier": "guide-estrarre-pagine-da-un-pdf-su-iphone-it.html",
      "niveau": "pro",
      "titre": "Come estrarre pagine da un PDF sul telefono — Scan Cam",
      "description": "Estrai alcune pagine di un PDF o di una scansione in un nuovo documento sul tuo telefono, senza modificare l’originale. Passo passo con Scan Cam Pro.",
      "h1": "Come estrarre pagine da un PDF sul telefono",
      "lead": "Contano solo alcune pagine? Crea con quelle un nuovo documento e lascia l’originale com’è.",
      "carte": "Crea un nuovo documento con le pagine che scegli, e conserva l’originale.",
      "corps": [
        [
          "h2",
          "Scegli le pagine"
        ],
        [
          "ol",
          [
            "Apri il documento (importa un PDF con <strong>Importa → File</strong>) e tocca <strong>Estrai pagine</strong>.",
            "Spunta le pagine da tenere, poi tocca <strong>Crea un nuovo documento</strong>."
          ]
        ],
        [
          "clip",
          "pages"
        ],
        [
          "p",
          "Le pagine vengono copiate in un nuovo documento, archiviato accanto all’originale. Invialo con <strong>Condividi</strong>."
        ],
        [
          "note",
          "<strong>Gratis o Pro?</strong> L’estrazione di pagine fa parte di Pro, che inizia con 7 giorni di prova gratuita."
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
      "fichier": "guide-aggiungere-una-filigrana-a-un-pdf-su-iphone-it.html",
      "niveau": "pro",
      "titre": "Come aggiungere una filigrana a un PDF sul telefono — Scan Cam",
      "description": "Applica RISERVATO o un tuo testo su ogni pagina di una scansione o di un PDF sul tuo telefono. Passo passo con Scan Cam Pro.",
      "h1": "Come aggiungere una filigrana a un PDF sul telefono",
      "lead": "Una copia del documento d’identità per un solo scopo, una bozza che non deve circolare: una filigrana dice a cosa serve il documento.",
      "carte": "Applica un tuo testo su ogni pagina di un documento.",
      "corps": [
        [
          "h2",
          "Aggiungi la filigrana"
        ],
        [
          "ol",
          [
            "Apri il documento e tocca <strong>Filigrana</strong>.",
            "Scrivi il tuo testo, ad esempio «Per la domanda di affitto, 12 maggio» sulla copia di un documento d’identità.",
            "Regola <strong>Colore</strong>, <strong>Opacità</strong> e <strong>Dimensione</strong>, poi tocca <strong>Fine</strong>: ogni pagina viene contrassegnata."
          ]
        ],
        [
          "clip",
          "filigrane"
        ],
        [
          "note",
          "<strong>Prima fai una copia.</strong> La filigrana non si può più togliere dopo."
        ],
        [
          "note",
          "<strong>Gratis o Pro?</strong> La filigrana fa parte di Pro, che inizia con 7 giorni di prova gratuita."
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
      "fichier": "guide-scansionare-un-documento-su-iphone-senza-abbonamento-it.html",
      "niveau": "free",
      "titre": "Come scansionare un documento su iPhone senza abbonamento — Scan Cam",
      "description": "Scansionare un documento su iPhone senza pagare: le app Note e File di Apple lo fanno già, e QuickScan è gratuita. Cosa aggiunge Scan Cam, e cosa vi è gratuito.",
      "h1": "Come scansionare un documento su iPhone senza abbonamento",
      "lead": "Non serve un abbonamento, e nemmeno un’app da scaricare. Prima le soluzioni gratuite, poi cosa aggiunge Scan Cam.",
      "carte": "Prima le soluzioni gratuite — Note, File, QuickScan —, poi cosa aggiunge Scan Cam.",
      "corps": [
        [
          "h2",
          "Con l’app Note"
        ],
        [
          "ol",
          [
            "In una nota, tocca il pulsante della fotocamera (o la graffetta), poi «Scansiona documenti».",
            "Inquadra il foglio: l’iPhone lo scatta da solo. Tocca «Salva», poi condividilo in PDF."
          ]
        ],
        [
          "p",
          "Gratis, senza account e senza pubblicità."
        ],
        [
          "h2",
          "Con l’app File"
        ],
        [
          "p",
          "Tocca i tre puntini in alto, poi «Scansiona documenti»: il PDF viene salvato nella cartella in cui ti trovi."
        ],
        [
          "h2",
          "Con un’app gratuita: QuickScan"
        ],
        [
          "p",
          "«OCR Text Scanner: QuickScan» è gratuita, senza pubblicità, e legge anche il testo. Controlla prima il prezzo sull’App Store: può cambiare."
        ],
        [
          "h2",
          "Cosa aggiunge Scan Cam"
        ],
        [
          "p",
          "Per chi scansiona spesso: cartelle, pagine pulite, più pagine in un solo PDF e una copia nel tuo iCloud. Scansione, cartelle, filtri ed esportazione in PDF sono gratuiti, senza limiti."
        ],
        [
          "clip",
          "scan"
        ],
        [
          "note",
          "<strong>Gratis o Pro?</strong> Pro aggiunge la firma, l’estrazione del testo, la filigrana, l’unione e l’esportazione in Word o Excel; inizia con 7 giorni di prova gratuita."
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
