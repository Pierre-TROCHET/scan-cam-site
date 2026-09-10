// Tous les textes du site en espagnol. Voir `fr.js` pour les notes générales.
//
// La vitrine reprend MOT POUR MOT la description de la fiche App Store
// espagnole (`BOUTIQUE.md`), déjà relue et publiée : le site et la boutique
// disent donc exactement la même chose. Les libellés de l'application cités
// dans l'assistance (Filtros, Quitar las sombras, Compartir) sont ceux du
// dictionnaire `i18n/es.ts` — ce sont les mots que l'utilisateur voit à l'écran.
//
// Tutoiement, comme dans les six dictionnaires de l'application.

module.exports = {
  code: 'es',
  nom: 'Español',

  // La phrase proposee au visiteur dont le navigateur parle cette langue,
  // quand il arrive sur une page qui n en est pas. Elle est donc ecrite DANS
  // cette langue, pour quelqu un qui ne lit peut-etre aucune des autres.
  suggestion: {
    phrase: 'Esta página también está disponible en español.',
    fermer: 'Cerrar',
  },

  fichiers: {
    accueil: 'home-es.html',
    assistance: 'support-es.html',
    conditions: 'terms-es.html',
    confidentialite: 'privacy-es.html',
  },

  menu: {
    accueil: 'Inicio',
    assistance: 'Ayuda',
    conditions: 'Condiciones',
    confidentialite: 'Privacidad',
  },

  pied: {
    editeur: 'Scan Cam está editada por Pierre Trochet.',
    appstore: 'Descargar en el App Store',
    liens: {
      accueil: 'Inicio',
      assistance: 'Ayuda',
      conditions: 'Condiciones de uso',
      confidentialite: 'Política de privacidad',
    },
  },

  meta: {
    accueil: {
      titre: 'Scan Cam — el escáner de documentos que se queda en tu iPhone',
      description:
        'Scan Cam convierte tu iPhone en un escáner de documentos. Sin cuenta, sin servidor, sin publicidad.',
    },
    assistance: {
      titre: 'Ayuda — Scan Cam',
      description: 'Ayuda y contacto para la aplicación Scan Cam.',
    },
    conditions: {
      titre: 'Condiciones de uso — Scan Cam',
      description: 'Las condiciones de uso de Scan Cam y de la suscripción Scan Cam Pro.',
    },
    confidentialite: {
      titre: 'Política de privacidad — Scan Cam',
      description:
        'Tus documentos se quedan en tu teléfono: sin cuenta, sin servidor nuestro, sin analíticas, sin publicidad.',
    },
  },

  accueil: {
    badge: 'Gratis, sin cuenta, sin publicidad',
    h1: 'El escáner de documentos que nunca sale de tu iPhone.',
    lead:
      'Fotografías una hoja, la aplicación detecta sus bordes, la endereza y limpia el texto: obtienes un escaneo de verdad, no la foto de un papel.',
    image: {
      src: 'images/filtres-en.jpg',
      largeur: 560,
      hauteur: 1212,
      alt:
        'La pantalla de filtros de Scan Cam: las páginas del documento arriba, los cuatro acabados debajo, un control de intensidad y un interruptor para quitar las sombras.',
    },
    comparaison: {
      titre: 'La misma página, tal como Scan Cam la devuelve.',
      avant: {
        src: 'images/avant.jpg',
        largeur: 760,
        hauteur: 1013,
        alt:
          'El contrato entero, arrugado, fotografiado sobre una mesa de madera: el papel está gris, con pliegues y algo torcido.',
        legende: 'La foto',
      },
      apres: {
        src: 'images/apres.jpg',
        largeur: 760,
        hauteur: 1003,
        alt:
          'El mismo contrato entero después de Scan Cam: la página está recta, blanca, sin pliegues ni sombras, y el texto es nítido.',
        legende: 'El escaneo',
      },
      legende:
        'Fotografiada arrugada sobre una mesa, y devuelta recta, blanca y nítida. Las dos páginas están enteras: no se recorta nada.',
    },
    appstore: {
      note: 'iPhone y iPad.',
    },
    confidentialite: {
      titre: 'Nada sale de tu iPhone.',
    },
    promesse:
      'Y todo ocurre en tu teléfono. Sin cuenta que crear, sin nada que se envíe a un servidor, sin publicidad. Tus facturas, tus contratos y tus documentos de identidad nunca salen de tu iPhone, salvo el día en que decidas compartirlos tú mismo.',

    sectionsTitre: 'Todo lo que sabe hacer',
    sections: [
      {
        icone: 'scanner',
        titre: 'Escanear',
        points: [
          'Bordes detectados y página enderezada, aunque la fotografíes torcida',
          'Cuatro acabados: foto original, color, escala de grises y blanco y negro',
          'Intensidad ajustable con el dedo, con una vista previa que la sigue',
          'Sombras eliminadas con un toque, para las páginas fotografiadas bajo una lámpara o una mano',
          'Varias páginas en un mismo documento, para reordenar, girar o quitar',
        ],
      },
      {
        icone: 'dossier',
        titre: 'Ordenar',
        points: [
          'Carpetas y subcarpetas, como en un ordenador',
          'Una búsqueda que encuentra también lo guardado en el fondo de una carpeta, y te dice dónde está',
          'Renombrar, mover, duplicar, eliminar',
        ],
      },
      {
        icone: 'partager',
        titre: 'Terminar y compartir',
        points: [
          'Exportar a PDF o JPEG',
          'Añadir texto sobre una página',
          'Imprimir directamente desde la aplicación',
          'Guardar en la app Archivos, o enviar por la ventana de compartir del iPhone',
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
          'Un documento abierto en Scan Cam: la vista previa de la página, las miniaturas debajo y la fila de herramientas — compartir, filtros, extraer el texto, marca de agua, firma, imprimir.',
      },
      prix: '24,99 € al año, tras 7 días de prueba gratuita.',
      prixControle: '24,99 €',
      gratuit:
        'La versión gratuita es completa y no caduca: escanea, ordena, filtra, anota, imprime y exporta a PDF cuanto quieras. Los PDF gratuitos llevan al pie de página una pequeña mención «Escaneado con Scan Cam».',
      intro: 'La suscripción Pro añade:',
      points: [
        'El PDF sin ninguna mención',
        'El reconocimiento de texto, que lee tus páginas y te devuelve el texto para copiarlo',
        'La firma, dibujada con el dedo y colocada donde quieras',
        'La marca de agua, cruzada sobre la página',
        'La fusión de varios documentos en uno solo',
        'La extracción de páginas a un documento nuevo',
        'La exportación a Word (.docx) y a Excel (.xlsx)',
      ],
      note:
        'El reconocimiento de texto funciona en el teléfono, sin internet: lee el alfabeto latino, el japonés y el chino.',
    },

    contact: {
      titre: '¿Alguna pregunta?',
      texte: 'Escríbeme: contesto yo mismo.',
    },
  },

  assistance: {
    h1: 'Ayuda',
    lead:
      '¿Una pregunta, un problema, una idea? Escríbeme. Detrás de Scan Cam no hay un servicio de atención al cliente: soy yo quien lee y quien responde.',
    carte: {
      note:
        'Para un problema de visualización, una captura de pantalla ayuda mucho: botón lateral + subir volumen, a la vez.',
    },
    faqTitre: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Cómo escaneo un documento?',
        r: [
          'Pulsa el botón de la cámara y encuadra la hoja. El iPhone detecta los bordes él solo y endereza la página, aunque la fotografíes torcida. Puedes encadenar varias páginas en el mismo documento.',
        ],
      },
      {
        q: '¿Dónde se guardan mis documentos?',
        r: [
          'En tu iPhone, en el espacio privado de la aplicación. No se envían a ninguna parte. Si la copia de seguridad de iCloud de tu teléfono está activada, se guardan con el resto de tu teléfono, por parte de Apple.',
        ],
      },
      {
        q: 'Hay una sombra en mi página. ¿Qué hago?',
        r: [
          'Abre el documento, ve a <strong>Filtros</strong> y activa <strong>Quitar las sombras</strong>. La sombra desaparece y el papel vuelve a ser blanco por todas partes. Puedes desactivarlo enseguida si el resultado no te gusta: la fotografía original siempre se conserva.',
        ],
      },
      {
        q: '¿Cómo exporto a PDF?',
        r: [
          'Abre el documento y pulsa <strong>Compartir</strong>, y luego elige el formato. PDF y JPEG son gratuitos; Word y Excel forman parte de la suscripción Pro. Desde ahí puedes enviar el archivo, guardarlo en la app Archivos o imprimirlo.',
        ],
      },
      {
        q: '¿Qué es gratis y qué es de pago?',
        r: [
          'Escanear, ordenar, las carpetas, la búsqueda, los filtros, añadir texto, imprimir y exportar a PDF son gratuitos, sin límite de tiempo ni de cantidad. Los PDF gratuitos llevan al pie de página una pequeña mención «Escaneado con Scan Cam».',
          'La suscripción Pro quita esa mención y añade el reconocimiento de texto, la firma, la marca de agua, la fusión de documentos, la extracción de páginas y la exportación a Word y Excel.',
        ],
      },
      {
        q: '¿Cómo gestiono o cancelo mi suscripción?',
        r: [
          'Desde los ajustes de tu cuenta de Apple, en tu iPhone: ahí, y solo ahí, se gestiona y se cancela la suscripción. La aplicación no puede hacerlo por ti, porque es Apple quien cobra. Cancelar antes de que termine la prueba gratuita no supone ningún pago.',
        ],
      },
      {
        q: '¿Puedo importar un PDF que ya tengo?',
        r: [
          'No. La importación acepta imágenes: fotos del carrete o imágenes elegidas en Archivos. Los PDF aparecen atenuados.',
        ],
      },
      {
        q: '¿El reconocimiento de texto necesita internet?',
        r: [
          'No. El texto lo lee tu propio iPhone, sin conexión, y el contenido de tus documentos nunca se envía a un servicio externo. Lee el alfabeto latino, el japonés y el chino.',
        ],
      },
      {
        q: '¿En qué idiomas está disponible la aplicación?',
        r: [
          'Francés, inglés, español, alemán, japonés y chino. El idioma se cambia en los ajustes de la aplicación.',
        ],
      },
      {
        q: 'He borrado un documento sin querer.',
        r: [
          'Borrar un documento lo elimina del teléfono, y no hay papelera: como nunca se envió a ninguna parte, no existe en ningún otro sitio. Si la copia de seguridad de iCloud de tu iPhone estaba activada, una restauración completa del teléfono puede recuperarlo.',
        ],
      },
    ],
  },

  juridique: {
    conditions: { h1: 'Condiciones de uso' },
    confidentialite: { h1: 'Política de privacidad' },
    apple: {
      href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
      cherche: 'pulsando el enlace al final de esta página',
      remplace: '<a href="{lien}">en el sitio web de Apple</a>',
    },
  },
};
