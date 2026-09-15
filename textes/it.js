// Tous les textes du site en italien. Voir `fr.js` pour les notes générales.
//
// Les libellés de l'application cités dans la vitrine et l'assistance (Filtri,
// Rimuovi le ombre, Condividi, Estrai il testo, Filigrana, Firma, Stampa) sont
// ceux du dictionnaire `i18n/it.ts` — ce sont les mots que l'utilisateur voit
// à l'écran. « app » plutôt que « applicazione », comme le dictionnaire.
//
// Tutoiement, comme dans les dictionnaires de l'application.

module.exports = {
  code: 'it',
  nom: 'Italiano',

  // La phrase proposee au visiteur dont le navigateur parle cette langue,
  // quand il arrive sur une page qui n en est pas. Elle est donc ecrite DANS
  // cette langue, pour quelqu un qui ne lit peut-etre aucune des autres.
  suggestion: {
    phrase: 'Questa pagina è disponibile anche in italiano.',
    fermer: 'Chiudi',
  },

  fichiers: {
    accueil: 'home-it.html',
    assistance: 'support-it.html',
    conditions: 'terms-it.html',
    confidentialite: 'privacy-it.html',
  },

  menu: {
    accueil: 'Home',
    assistance: 'Assistenza',
    conditions: 'Condizioni',
    confidentialite: 'Privacy',
  },

  pied: {
    editeur: 'Scan Cam è pubblicata da Pierre Trochet.',
    appstore: 'Scarica su App Store',
    liens: {
      accueil: 'Home',
      assistance: 'Assistenza',
      conditions: 'Condizioni d’uso',
      confidentialite: 'Informativa sulla privacy',
    },
  },

  meta: {
    accueil: {
      titre: 'Scan Cam — lo scanner di documenti che resta sul tuo iPhone',
      description:
        'Scan Cam trasforma il tuo iPhone in uno scanner di documenti. Niente account, niente server, niente pubblicità.',
    },
    assistance: {
      titre: 'Assistenza — Scan Cam',
      description: 'Aiuto e contatti per l’app Scan Cam.',
    },
    conditions: {
      titre: 'Condizioni d’uso — Scan Cam',
      description: 'Le condizioni d’uso di Scan Cam e dell’abbonamento Scan Cam Pro.',
    },
    confidentialite: {
      titre: 'Informativa sulla privacy — Scan Cam',
      description:
        'I tuoi documenti restano sul tuo telefono: niente account, nessun server nostro, nessuna statistica, nessuna pubblicità.',
    },
  },

  accueil: {
    badge: 'Gratis, senza account, senza pubblicità',
    h1: 'Lo scanner di documenti che non lascia mai il tuo iPhone.',
    lead:
      'Fotografi un foglio, l’app ne rileva i bordi, lo raddrizza e rende il testo nitido: ottieni una vera scansione, non la foto di un pezzo di carta.',
    image: {
      src: 'images/filtres-it.jpg',
      largeur: 560,
      hauteur: 1212,
      alt:
        'La schermata Filtri di Scan Cam: le pagine del documento in alto, i quattro stili sotto, un cursore di intensità e un interruttore per rimuovere le ombre.',
    },
    comparaison: {
      titre: 'La stessa pagina, così come la restituisce Scan Cam.',
      avant: {
        src: 'images/avant.jpg',
        largeur: 760,
        hauteur: 1013,
        alt:
          'Il contratto intero, stropicciato, fotografato su un tavolo di legno: la carta è grigia, piena di pieghe e un po’ storta.',
        legende: 'La foto',
      },
      apres: {
        src: 'images/apres.jpg',
        largeur: 760,
        hauteur: 1003,
        alt:
          'Lo stesso contratto intero dopo Scan Cam: la pagina è dritta, bianca, senza pieghe né ombre, e il testo è nitido.',
        legende: 'La scansione',
      },
      legende:
        'Fotografata stropicciata su un tavolo, e restituita dritta, bianca e nitida. Le due pagine sono intere: non viene tagliato nulla.',
    },
    appstore: {
      note: 'iPhone e iPad.',
    },
    confidentialite: {
      titre: 'Nulla lascia il tuo iPhone.',
    },
    promesse:
      'E tutto avviene sul tuo telefono. Nessun account da creare, nulla che venga inviato a un server, nessuna pubblicità. Le tue fatture, i tuoi contratti e i tuoi documenti d’identità non lasciano mai il tuo iPhone, tranne il giorno in cui decidi tu di condividerli.',

    sectionsTitre: 'Tutto quello che sa fare',
    sections: [
      {
        icone: 'scanner',
        titre: 'Scansiona',
        points: [
          'Bordi rilevati e pagina raddrizzata, anche se la fotografi storta',
          'Quattro stili: foto originale, colore, scala di grigi, bianco e nero',
          'Intensità regolabile con il dito, con un’anteprima che la segue',
          'Ombre rimosse con un tocco, per le pagine fotografiate sotto una lampada o una mano',
          'Più pagine nello stesso documento, da riordinare, ruotare o togliere',
        ],
      },
      {
        icone: 'dossier',
        titre: 'Organizza',
        points: [
          'Cartelle e sottocartelle, come su un computer',
          'Una ricerca che trova anche ciò che è archiviato in fondo a una cartella, e ti dice dove',
          'Rinomina, sposta, duplica, elimina',
        ],
      },
      {
        icone: 'partager',
        titre: 'Rifinisci e condividi',
        points: [
          'Esporta in PDF o JPEG',
          'Aggiungi testo su una pagina',
          'Stampa direttamente dall’app',
          'Salva nell’app File, o invia con il foglio di condivisione dell’iPhone',
        ],
      },
    ],

    pro: {
      titre: 'Scan Cam Pro',
      image: {
        src: 'images/document-it.jpg',
        largeur: 560,
        hauteur: 1212,
        alt:
          'Un documento aperto in Scan Cam: l’anteprima della pagina, le miniature sotto e la fila di strumenti — Condividi, Filtri, Estrai il testo, Filigrana, Firma, Stampa.',
      },
      // {prix} reçoit le prix du pays du visiteur, écrit à sa façon (voir prix.js).
      // Le pays par défaut est celui d’un navigateur qui ne dit pas le sien.
      prix: '{prix} all’anno, dopo 7 giorni di prova gratuita.',
      prixPays: 'Prezzo dell’App Store · {pays}',
      paysParDefaut: 'IT',
      gratuit:
        'La versione gratuita è completa e non scade: scansiona, organizza, filtra, annota, stampa ed esporta in PDF quanto vuoi. I PDF gratuiti riportano a piè di pagina una piccola scritta «Scansionato con Scan Cam».',
      intro: 'L’abbonamento Pro aggiunge:',
      points: [
        'Il PDF senza nessuna scritta',
        'Il riconoscimento del testo, che legge le tue pagine e ti restituisce il testo da copiare',
        'La firma, disegnata con il dito e posizionata dove vuoi',
        'La filigrana, di traverso sulla pagina',
        'L’unione di più documenti in uno solo',
        'L’estrazione di pagine in un nuovo documento',
        'L’esportazione in Word (.docx) ed Excel (.xlsx)',
      ],
      note:
        'Il riconoscimento del testo funziona sul telefono, senza internet: legge l’alfabeto latino, il giapponese, il cinese e il coreano.',
    },

    contact: {
      titre: 'Hai una domanda?',
      texte: 'Scrivimi: rispondo io stesso.',
    },
  },

  assistance: {
    h1: 'Assistenza',
    lead:
      'Una domanda, un problema, un’idea? Scrivimi. Dietro Scan Cam non c’è un servizio clienti: sono io che leggo e che rispondo.',
    carte: {
      note:
        'Per un problema di visualizzazione, un’istantanea dello schermo aiuta molto: tasto laterale + volume su, insieme.',
    },
    faqTitre: 'Domande frequenti',
    faq: [
      {
        q: 'Come scansiono un documento?',
        r: [
          'Tocca il pulsante della fotocamera e inquadra il foglio. L’iPhone rileva i bordi da solo e raddrizza la pagina, anche se la fotografi storta. Puoi aggiungere più pagine di seguito nello stesso documento.',
        ],
      },
      {
        q: 'Dove vengono salvati i miei documenti?',
        r: [
          'Sul tuo iPhone, nello spazio privato dell’app. Non vengono inviati da nessuna parte. Se il backup di iCloud del telefono è attivo, vengono salvati insieme al resto del telefono, da Apple.',
        ],
      },
      {
        q: 'C’è un’ombra sulla mia pagina. Cosa faccio?',
        r: [
          'Apri il documento, vai su <strong>Filtri</strong> e attiva <strong>Rimuovi le ombre</strong>. L’ombra sparisce e la carta torna bianca ovunque. Puoi disattivarlo subito se il risultato non ti piace: la foto originale viene sempre conservata.',
        ],
      },
      {
        q: 'Come esporto in PDF?',
        r: [
          'Apri il documento e tocca <strong>Condividi</strong>, poi scegli il formato. PDF e JPEG sono gratuiti; Word ed Excel fanno parte dell’abbonamento Pro. Da lì puoi inviare il file, salvarlo nell’app File o stamparlo.',
        ],
      },
      {
        q: 'Cosa è gratis e cosa è a pagamento?',
        r: [
          'Scansionare, organizzare, le cartelle, la ricerca, i filtri, aggiungere testo, stampare ed esportare in PDF sono gratuiti, senza limiti di tempo né di quantità. I PDF gratuiti riportano a piè di pagina una piccola scritta «Scansionato con Scan Cam».',
          'L’abbonamento Pro toglie quella scritta e aggiunge il riconoscimento del testo, la firma, la filigrana, l’unione di documenti, l’estrazione di pagine e l’esportazione in Word ed Excel.',
        ],
      },
      {
        q: 'Come gestisco o disdico il mio abbonamento?',
        r: [
          'Dalle impostazioni del tuo account Apple, sul tuo iPhone: è lì, e solo lì, che l’abbonamento si gestisce e si disdice. L’app non può farlo al posto tuo, perché è Apple a incassare. Disdire prima della fine della prova gratuita non comporta alcun pagamento.',
        ],
      },
      {
        q: 'Posso importare un PDF che ho già?',
        r: [
          'No. L’importazione accetta immagini: foto della libreria Foto o immagini scelte in File. I PDF appaiono in grigio.',
        ],
      },
      {
        q: 'Il riconoscimento del testo ha bisogno di internet?',
        r: [
          'No. Il testo viene letto dal tuo iPhone stesso, senza connessione, e il contenuto dei tuoi documenti non viene mai inviato a un servizio esterno. Legge l’alfabeto latino, il giapponese, il cinese e il coreano.',
        ],
      },
      {
        q: 'In quali lingue è disponibile l’app?',
        r: [
          'Francese, inglese, spagnolo, tedesco, italiano, portoghese (Brasile), giapponese, cinese e coreano. La lingua si cambia nelle impostazioni dell’app.',
        ],
      },
      {
        q: 'Ho eliminato un documento per sbaglio.',
        r: [
          'Eliminare un documento lo cancella dal telefono, e non c’è un cestino: dato che non è mai stato inviato altrove, non esiste da nessun’altra parte. Se il backup di iCloud del tuo iPhone era attivo, un ripristino completo del telefono può recuperarlo.',
        ],
      },
    ],
  },

  juridique: {
    conditions: { h1: 'Condizioni d’uso' },
    confidentialite: { h1: 'Informativa sulla privacy' },
    apple: {
      href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
      cherche: 'toccando il link in fondo a questa pagina',
      remplace: '<a href="{lien}">sul sito di Apple</a>',
    },
  },
};
