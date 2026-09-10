// Tous les textes du site en allemand. Voir `fr.js` pour les notes générales.
//
// La vitrine reprend MOT POUR MOT la description de la fiche App Store
// allemande (`BOUTIQUE.md`), déjà relue et publiée. Les libellés de
// l'application cités dans l'assistance (Filter, Schatten entfernen, Teilen)
// viennent du dictionnaire `i18n/de.ts`.
//
// Vouvoiement (« Sie »), comme dans le dictionnaire allemand de l'application —
// à la différence de l'espagnol, qui tutoie.

module.exports = {
  code: 'de',
  nom: 'Deutsch',

  // La phrase proposee au visiteur dont le navigateur parle cette langue,
  // quand il arrive sur une page qui n en est pas. Elle est donc ecrite DANS
  // cette langue, pour quelqu un qui ne lit peut-etre aucune des autres.
  suggestion: {
    phrase: 'Diese Seite gibt es auch auf Deutsch.',
    fermer: 'Schließen',
  },

  fichiers: {
    accueil: 'home-de.html',
    assistance: 'support-de.html',
    conditions: 'terms-de.html',
    confidentialite: 'privacy-de.html',
  },

  menu: {
    accueil: 'Start',
    assistance: 'Hilfe',
    conditions: 'Bedingungen',
    confidentialite: 'Datenschutz',
  },

  pied: {
    editeur: 'Scan Cam wird herausgegeben von Pierre Trochet.',
    appstore: 'Im App Store laden',
    liens: {
      accueil: 'Start',
      assistance: 'Hilfe',
      conditions: 'Nutzungsbedingungen',
      confidentialite: 'Datenschutzerklärung',
    },
  },

  meta: {
    accueil: {
      titre: 'Scan Cam — der Dokumentenscanner, der auf Ihrem iPhone bleibt',
      description:
        'Scan Cam macht aus Ihrem iPhone einen Dokumentenscanner. Kein Konto, kein Server, keine Werbung.',
    },
    assistance: {
      titre: 'Hilfe — Scan Cam',
      description: 'Hilfe und Kontakt für die App Scan Cam.',
    },
    conditions: {
      titre: 'Nutzungsbedingungen — Scan Cam',
      description: 'Die Nutzungsbedingungen von Scan Cam und des Abonnements Scan Cam Pro.',
    },
    confidentialite: {
      titre: 'Datenschutzerklärung — Scan Cam',
      description:
        'Ihre Dokumente bleiben auf Ihrem Telefon: kein Konto, kein Server von uns, keine Messung, keine Werbung.',
    },
  },

  accueil: {
    badge: 'Kostenlos, ohne Konto, ohne Werbung',
    h1: 'Der Dokumentenscanner, der Ihr iPhone nie verlässt.',
    lead:
      'Sie fotografieren ein Blatt Papier, die App erkennt seine Ränder, richtet es gerade und macht den Text sauber: Sie erhalten einen echten Scan und nicht das Foto eines Blattes.',
    image: {
      src: 'images/filtres-en.jpg',
      largeur: 560,
      hauteur: 1212,
      alt:
        'Der Filter-Bildschirm von Scan Cam: oben laufen die Seiten des Dokuments, darunter die vier Anmutungen, ein Regler für die Stärke und ein Schalter, um Schatten zu entfernen.',
    },
    comparaison: {
      titre: 'Dieselbe Seite, so wie Scan Cam sie zurückgibt.',
      avant: {
        src: 'images/avant.jpg',
        largeur: 760,
        hauteur: 1013,
        alt:
          'Der ganze Vertrag, zerknittert, auf einem Holztisch fotografiert: das Papier ist grau, faltig und leicht schräg.',
        legende: 'Das Foto',
      },
      apres: {
        src: 'images/apres.jpg',
        largeur: 760,
        hauteur: 1003,
        alt:
          'Derselbe ganze Vertrag nach Scan Cam: die Seite ist gerade, weiß, ohne Falten und Schatten, und der Text ist scharf.',
        legende: 'Der Scan',
      },
      legende:
        'Zerknittert auf einem Tisch fotografiert und gerade, weiß und scharf zurückgegeben. Beide Seiten sind vollständig: nichts wird beschnitten.',
    },
    appstore: {
      note: 'iPhone und iPad.',
    },
    confidentialite: {
      titre: 'Nichts verlässt Ihr iPhone.',
    },
    promesse:
      'Und alles geschieht auf Ihrem Telefon. Kein Konto, das angelegt werden muss, nichts, was an einen Server geht, keine Werbung. Ihre Rechnungen, Ihre Verträge und Ihre Ausweispapiere verlassen Ihr iPhone nie — außer an dem Tag, an dem Sie selbst entscheiden, sie zu teilen.',

    sectionsTitre: 'Alles, was sie kann',
    sections: [
      {
        icone: 'scanner',
        titre: 'Scannen',
        points: [
          'Ränder erkannt und Seite geradegerückt, auch schräg fotografiert',
          'Vier Anmutungen: Originalfoto, Farbe, Graustufen, Schwarzweiß',
          'Stärke mit dem Finger regelbar, mit einer Vorschau, die mitgeht',
          'Schatten mit einem Tippen entfernt, für Seiten unter einer Lampe oder einer Hand',
          'Mehrere Seiten in einem Dokument, zum Umsortieren, Drehen oder Entfernen',
        ],
      },
      {
        icone: 'dossier',
        titre: 'Ordnen',
        points: [
          'Ordner und Unterordner, wie auf einem Computer',
          'Eine Suche, die auch findet, was tief in einem Ordner liegt, und sagt, wo es liegt',
          'Umbenennen, verschieben, duplizieren, löschen',
        ],
      },
      {
        icone: 'partager',
        titre: 'Fertigstellen und teilen',
        points: [
          'Export als PDF oder JPEG',
          'Text auf einer Seite hinzufügen',
          'Direkt aus der App drucken',
          'In der Dateien-App sichern oder über das Teilen-Fenster des iPhone senden',
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
          'Ein Dokument in Scan Cam geöffnet: die Vorschau der Seite, die Miniaturen darunter und die Werkzeugreihe — teilen, Filter, Text auslesen, Wasserzeichen, Unterschrift, drucken.',
      },
      prix: '24,99 € pro Jahr, nach 7 Tagen kostenlos zur Probe.',
      prixControle: '24,99 €',
      gratuit:
        'Die kostenlose Version ist vollständig und läuft nie ab: scannen, ordnen, filtern, beschriften, drucken und als PDF exportieren, so viel Sie möchten. Kostenlose PDFs tragen unten auf der Seite den kleinen Hinweis „Gescannt mit Scan Cam“.',
      intro: 'Das Pro-Abo ergänzt:',
      points: [
        'Das PDF ganz ohne Hinweis',
        'Die Texterkennung, die Ihre Seiten liest und Ihnen den Text zum Kopieren gibt',
        'Die Unterschrift, mit dem Finger gezeichnet und gesetzt, wohin Sie wollen',
        'Das Wasserzeichen, quer über die Seite',
        'Das Zusammenführen mehrerer Dokumente zu einem einzigen',
        'Das Herauslösen von Seiten in ein neues Dokument',
        'Den Export nach Word (.docx) und Excel (.xlsx)',
      ],
      note:
        'Die Texterkennung läuft auf dem Telefon, ohne Internet: Sie liest das lateinische Alphabet, Japanisch und Chinesisch.',
    },

    contact: {
      titre: 'Eine Frage?',
      texte: 'Schreiben Sie mir: ich antworte selbst.',
    },
  },

  assistance: {
    h1: 'Hilfe',
    lead:
      'Eine Frage, ein Problem, eine Idee? Schreiben Sie mir. Hinter Scan Cam steht kein Kundendienst: ich lese und antworte selbst.',
    carte: {
      note:
        'Bei einem Anzeigeproblem hilft ein Bildschirmfoto sehr: Seitentaste + Lauter, gleichzeitig.',
    },
    faqTitre: 'Häufige Fragen',
    faq: [
      {
        q: 'Wie scanne ich ein Dokument?',
        r: [
          'Tippen Sie auf die Kamerataste und richten Sie das Blatt aus. Das iPhone erkennt die Ränder von selbst und rückt die Seite gerade, auch wenn Sie schräg fotografieren. Sie können mehrere Seiten im selben Dokument aneinanderreihen.',
        ],
      },
      {
        q: 'Wo werden meine Dokumente gesichert?',
        r: [
          'Auf Ihrem iPhone, im privaten Bereich der App. Sie werden nirgendwohin gesendet. Wenn die iCloud-Sicherung Ihres Telefons eingeschaltet ist, werden sie mit dem Rest Ihres Telefons von Apple gesichert.',
        ],
      },
      {
        q: 'Auf meiner Seite ist ein Schatten. Was tun?',
        r: [
          'Öffnen Sie das Dokument, gehen Sie zu <strong>Filter</strong> und schalten Sie <strong>Schatten entfernen</strong> ein. Der Schatten verschwindet und das Papier wird überall wieder weiß. Sie können es sofort wieder ausschalten, wenn Ihnen das Ergebnis nicht gefällt: das Originalfoto bleibt immer erhalten.',
        ],
      },
      {
        q: 'Wie exportiere ich als PDF?',
        r: [
          'Öffnen Sie das Dokument und tippen Sie auf <strong>Teilen</strong>, dann wählen Sie das Format. PDF und JPEG sind kostenlos; Word und Excel gehören zum Pro-Abo. Von dort aus können Sie die Datei senden, in der Dateien-App sichern oder drucken.',
        ],
      },
      {
        q: 'Was ist kostenlos und was kostet etwas?',
        r: [
          'Scannen, ordnen, die Ordner, die Suche, die Filter, Text hinzufügen, drucken und als PDF exportieren sind kostenlos, ohne zeitliche und ohne mengenmäßige Begrenzung. Kostenlose PDFs tragen unten auf der Seite den kleinen Hinweis „Gescannt mit Scan Cam“.',
          'Das Pro-Abo entfernt diesen Hinweis und ergänzt die Texterkennung, die Unterschrift, das Wasserzeichen, das Zusammenführen von Dokumenten, das Herauslösen von Seiten und den Export nach Word und Excel.',
        ],
      },
      {
        q: 'Wie verwalte oder kündige ich mein Abo?',
        r: [
          'In den Einstellungen Ihres Apple-Kontos, auf Ihrem iPhone: dort, und nur dort, wird das Abo verwaltet und gekündigt. Die App kann das nicht für Sie tun, denn Apple zieht die Zahlung ein. Eine Kündigung vor Ende der kostenlosen Probezeit führt zu keiner Zahlung.',
        ],
      },
      {
        q: 'Kann ich ein vorhandenes PDF einlesen?',
        r: [
          'Nein. Der Import nimmt Bilder — Fotos aus Ihren Aufnahmen oder Bilder aus der Dateien-App. PDFs erscheinen ausgegraut.',
        ],
      },
      {
        q: 'Braucht die Texterkennung Internet?',
        r: [
          'Nein. Der Text wird von Ihrem iPhone selbst gelesen, ohne Verbindung, und der Inhalt Ihrer Dokumente wird nie an einen fremden Dienst gesendet. Sie liest das lateinische Alphabet, Japanisch und Chinesisch.',
        ],
      },
      {
        q: 'In welchen Sprachen gibt es die App?',
        r: [
          'Französisch, Englisch, Spanisch, Deutsch, Japanisch und Chinesisch. Die Sprache wird in den Einstellungen der App gewechselt.',
        ],
      },
      {
        q: 'Ich habe versehentlich ein Dokument gelöscht.',
        r: [
          'Ein gelöschtes Dokument verschwindet vom Telefon, und es gibt keinen Papierkorb: da nie etwas anderswohin gesendet wurde, existiert es nirgendwo sonst. Wenn die iCloud-Sicherung Ihres iPhone eingeschaltet war, kann eine vollständige Wiederherstellung des Telefons es zurückbringen.',
        ],
      },
    ],
  },

  juridique: {
    conditions: { h1: 'Nutzungsbedingungen' },
    confidentialite: { h1: 'Datenschutzerklärung' },
    apple: {
      href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
      // L'allemand rejette son verbe à la fin : on remplace donc un morceau plus
      // large que le seul libellé du lien, pour que la phrase reste correcte.
      cherche: 'vollständig lesen, indem Sie auf den Link am Ende dieser Seite tippen',
      remplace: 'vollständig <a href="{lien}">auf der Website von Apple</a> lesen',
    },
  },
};
