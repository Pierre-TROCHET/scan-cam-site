// Las guías de Scan Cam en español — traducción de `guides-en.js`, con exactamente la misma
// estructura (mismas guías, mismos bloques, mismas capturas). Las palabras en negrita son los
// rótulos de la aplicación en español (cam-scan/i18n/es.ts). Tuteo, como el resto del sitio.
// Las reglas de redacción están en la cabecera de `guides-en.js`.

module.exports = {
  "code": "es",
  "menu": "Guías",
  "accueil": {
    "fichier": "guides-es.html",
    "titre": "Guías — Scan Cam",
    "description": "Guías paso a paso para escanear, firmar, combinar y leer documentos en tu teléfono con Scan Cam.",
    "h1": "Guías",
    "lead": "Respuestas breves, paso a paso, para lo que más se suele querer hacer con un escáner en el teléfono.",
    "sectionTitre": "Elige una guía",
    "gratuit": "Gratis",
    "pro": "Pro"
  },
  "etiquette": {
    "free": "Gratis en Scan Cam",
    "pro": "Función Pro · prueba gratuita de 7 días"
  },
  "blocAccueil": {
    "titre": "Guías",
    "texte": "Respuestas paso a paso para escanear, firmar, combinar y leer documentos en tu teléfono.",
    "tous": "Todas las guías"
  },
  "pied": {
    "titre": "Prueba Scan Cam",
    "texte": "Scan Cam se descarga gratis. Escanear, las carpetas, los filtros y la exportación a PDF son gratuitos y no caducan; la suscripción Pro añade las herramientas extra y empieza con una prueba gratuita de 7 días.",
    "youtube": "¿Prefieres un vídeo? Mira los tutoriales cortos en YouTube (en inglés)"
  },
  "liees": "Más guías",
  "guides": [
    {
      "cle": "multi-page",
      "fichier": "guide-escanear-varias-paginas-en-un-pdf-iphone-es.html",
      "niveau": "free",
      "titre": "Cómo escanear varias páginas en un solo PDF en el teléfono — Scan Cam",
      "description": "Escanea todas las páginas de un contrato, un formulario o unos deberes en un solo PDF en tu teléfono, ordénalas y compártelo. Gratis y sin cuenta.",
      "h1": "Cómo escanear varias páginas en un solo PDF en el teléfono",
      "lead": "Escanea todas las hojas de un contrato, un formulario o unos deberes en un solo PDF, gratis y sin cuenta.",
      "carte": "Escanea cada hoja en un mismo documento y compártelo como un solo PDF.",
      "corps": [
        [
          "h2",
          "Escanear las páginas"
        ],
        [
          "ol",
          [
            "Pulsa <strong>Escanear un documento</strong> y encuadra la primera hoja: se encuentran los bordes y la página se endereza.",
            "Captura las demás hojas y confirma. Forman un solo documento.",
            "¿Se te olvidó una? Abre el documento y pulsa <strong>Añadir una página</strong>."
          ]
        ],
        [
          "clip",
          "scan"
        ],
        [
          "h2",
          "Ordenar el documento"
        ],
        [
          "p",
          "Mantén pulsada una miniatura y arrástrala para cambiar el orden de las páginas; la cruz quita una página. ¿Una sombra en la página? Abre <strong>Filtros</strong> y activa <strong>Quitar las sombras</strong>."
        ],
        [
          "clip",
          "reordonner"
        ],
        [
          "h2",
          "Enviarlo como un solo PDF"
        ],
        [
          "p",
          "Pulsa <strong>Compartir</strong>, elige <strong>PDF</strong> y luego envíalo, guárdalo o imprímelo."
        ],
        [
          "note",
          "<strong>¿Gratis o Pro?</strong> Todo esto es gratis, sin límite de páginas. Pro quita la pequeña mención «Escaneado con Scan Cam» de los PDF."
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
      "fichier": "guide-escanear-tickets-y-recibos-iphone-es.html",
      "niveau": "free",
      "titre": "Cómo escanear tickets y recibos en tu teléfono y tenerlos ordenados — Scan Cam",
      "description": "Convierte tus tickets de papel en PDF limpios y nítidos en tu teléfono, guárdalos en carpetas y envíalos a tu contable. Escanear y ordenar es gratis.",
      "h1": "Cómo escanear tickets y recibos en tu teléfono y tenerlos ordenados",
      "lead": "Los tickets térmicos se borran en pocos meses. Escanéalos el mismo día y guárdalos donde vayas a encontrarlos.",
      "carte": "Haz copias nítidas y ordenadas de tus tickets de papel y envíalas a quien las necesite.",
      "corps": [
        [
          "h2",
          "Escanear un ticket"
        ],
        [
          "ol",
          [
            "Pulsa <strong>Escanear un documento</strong> y encuadra el ticket sobre una superficie oscura.",
            "Abre <strong>Filtros</strong>, elige <strong>Blanco y negro</strong>, ajusta la intensidad y pulsa <strong>Aplicar</strong>."
          ]
        ],
        [
          "clip",
          "filtres"
        ],
        [
          "h2",
          "Guardarlo para encontrarlo"
        ],
        [
          "p",
          "Pulsa <strong>Crear carpeta</strong> para hacer una carpeta como «Tickets 2026» y ponle a cada ticket el nombre de la tienda y la fecha. El buscador encuentra archivos y carpetas por su nombre."
        ],
        [
          "clip",
          "ranger"
        ],
        [
          "h2",
          "Enviarlos a tu contable"
        ],
        [
          "p",
          "<strong>Compartir</strong> envía un ticket en PDF. <strong>Ajustes → Exportar todo</strong> exporta todos tus documentos, carpeta por carpeta."
        ],
        [
          "note",
          "<strong>¿Gratis o Pro?</strong> Escanear, los filtros, las carpetas, la búsqueda y la exportación a PDF son gratis. Pro añade <strong>Extraer el texto</strong>, para copiar un total o una fecha."
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
      "fichier": "guide-firmar-un-documento-en-iphone-es.html",
      "niveau": "pro",
      "titre": "Cómo firmar un documento en tu teléfono con el dedo — Scan Cam",
      "description": "Dibuja tu firma una vez y colócala en cualquier documento escaneado o PDF en tu teléfono. Paso a paso con Scan Cam Pro.",
      "h1": "Cómo firmar un documento en tu teléfono con el dedo",
      "lead": "Sin impresora y sin bolígrafo: dibuja tu firma una vez y colócala en cualquier documento.",
      "carte": "Dibuja o fotografía tu firma una vez y colócala en cualquier documento.",
      "corps": [
        [
          "h2",
          "Crear tu firma"
        ],
        [
          "ol",
          [
            "Abre el documento, pulsa <strong>Firma</strong> y luego <strong>Nueva firma</strong>.",
            "Firma con el dedo (<strong>Dibujar</strong>) o fotografía una firma en papel (<strong>Foto</strong>) y pulsa <strong>Guardar</strong>. Se conserva para la próxima vez."
          ]
        ],
        [
          "h2",
          "Colocarla en la página"
        ],
        [
          "ol",
          [
            "Elige la página, arrastra la firma hasta su sitio y ajusta su <strong>Tamaño</strong>.",
            "Pulsa <strong>Aceptar</strong>: la firma se escribe en el PDF."
          ]
        ],
        [
          "clip",
          "signature"
        ],
        [
          "note",
          "<strong>Haz antes una copia</strong> si quieres conservar una versión sin firmar: la firma ya no se puede quitar. Una firma dibujada es una imagen, no una firma electrónica certificada."
        ],
        [
          "note",
          "<strong>¿Gratis o Pro?</strong> La firma forma parte de Pro, que empieza con una prueba gratuita de 7 días."
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
      "fichier": "guide-copiar-el-texto-de-un-escaneo-iphone-es.html",
      "niveau": "pro",
      "titre": "Cómo copiar el texto de un documento escaneado en el teléfono (OCR) — Scan Cam",
      "description": "Lee un escaneo o un PDF en tu teléfono y copia su texto, sin conexión. El reconocimiento de texto paso a paso con Scan Cam Pro.",
      "h1": "Cómo copiar el texto de un documento escaneado en el teléfono",
      "lead": "El reconocimiento de texto (OCR) lee una página escaneada y te da su texto para copiarlo.",
      "carte": "Lee una página y copia su texto, en el teléfono y sin internet.",
      "corps": [
        [
          "h2",
          "Copiar el texto de una página"
        ],
        [
          "ol",
          [
            "Abre un escaneo, o un PDF importado con <strong>Importar → Archivos</strong>, y pulsa <strong>Extraer el texto</strong>.",
            "Elige la escritura (latina, japonesa, china o coreana) y deja que Scan Cam lea las páginas.",
            "Selecciona un fragmento, o pulsa <strong>Copiar el texto</strong> para copiarlo todo."
          ]
        ],
        [
          "clip",
          "texte"
        ],
        [
          "p",
          "El texto lo lee el propio teléfono, sin internet: tus documentos no se envían a ningún sitio. ¿No se reconoce nada? Vuelve a escanear la página con mejor luz."
        ],
        [
          "note",
          "<strong>¿Gratis o Pro?</strong> El reconocimiento de texto forma parte de Pro, que empieza con una prueba gratuita de 7 días. También sirve para exportar documentos a Word y Excel."
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
      "fichier": "guide-combinar-archivos-pdf-en-iphone-es.html",
      "niveau": "pro",
      "titre": "Cómo combinar archivos PDF en el teléfono — Scan Cam",
      "description": "Une varios escaneos o PDF en un solo PDF en tu teléfono, en el orden que elijas. Paso a paso con Scan Cam Pro.",
      "h1": "Cómo combinar archivos PDF en el teléfono",
      "lead": "Varios documentos, un solo archivo para enviar, en el orden que quieras. Los originales se quedan como están.",
      "carte": "Une varios documentos en un solo PDF, en el orden que elijas.",
      "corps": [
        [
          "h2",
          "Combinarlos"
        ],
        [
          "ol",
          [
            "En la biblioteca, marca al menos dos documentos: escaneos, o PDF importados con <strong>Importar → Archivos</strong>.",
            "Pulsa <strong>Combinar</strong>, ordénalos con las flechas y vuelve a pulsar <strong>Combinar</strong>."
          ]
        ],
        [
          "clip",
          "fusion"
        ],
        [
          "p",
          "El resultado es un PDF nuevo en tu biblioteca. Envíalo con <strong>Compartir</strong>."
        ],
        [
          "note",
          "<strong>¿Gratis o Pro?</strong> Combinar forma parte de Pro, que empieza con una prueba gratuita de 7 días. Importar y exportar un PDF siguen siendo gratis."
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
      "fichier": "guide-extraer-paginas-de-un-pdf-en-iphone-es.html",
      "niveau": "pro",
      "titre": "Cómo extraer páginas de un PDF en el teléfono — Scan Cam",
      "description": "Saca algunas páginas de un PDF o de un escaneo a un documento nuevo en tu teléfono, sin cambiar el original. Paso a paso con Scan Cam Pro.",
      "h1": "Cómo extraer páginas de un PDF en el teléfono",
      "lead": "¿Solo importan algunas páginas? Haz con ellas un documento nuevo y deja el original como está.",
      "carte": "Haz un documento nuevo con las páginas que elijas y conserva el original.",
      "corps": [
        [
          "h2",
          "Elegir las páginas"
        ],
        [
          "ol",
          [
            "Abre el documento (importa un PDF con <strong>Importar → Archivos</strong>) y pulsa <strong>Extraer páginas</strong>.",
            "Marca las páginas que quieres conservar y pulsa <strong>Crear un documento nuevo</strong>."
          ]
        ],
        [
          "clip",
          "pages"
        ],
        [
          "p",
          "Las páginas se copian en un documento nuevo, guardado junto al original. Envíalo con <strong>Compartir</strong>."
        ],
        [
          "note",
          "<strong>¿Gratis o Pro?</strong> Extraer páginas forma parte de Pro, que empieza con una prueba gratuita de 7 días."
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
      "fichier": "guide-poner-una-marca-de-agua-a-un-pdf-en-iphone-es.html",
      "niveau": "pro",
      "titre": "Cómo poner una marca de agua a un PDF en el teléfono — Scan Cam",
      "description": "Estampa CONFIDENCIAL o tu propio texto en cada página de un escaneo o un PDF en tu teléfono. Paso a paso con Scan Cam Pro.",
      "h1": "Cómo poner una marca de agua a un PDF en el teléfono",
      "lead": "Una copia de tu documento de identidad para un solo trámite, un borrador que no debe circular: una marca de agua dice para qué sirve el documento.",
      "carte": "Estampa tu propio texto en cada página de un documento.",
      "corps": [
        [
          "h2",
          "Añadir la marca de agua"
        ],
        [
          "ol",
          [
            "Abre el documento y pulsa <strong>Marca de agua</strong>.",
            "Escribe tu texto, por ejemplo «Para la solicitud de alquiler, 12 de mayo» en la copia de un documento de identidad.",
            "Ajusta <strong>Color</strong>, <strong>Opacidad</strong> y <strong>Tamaño</strong> y pulsa <strong>Aceptar</strong>: se marca cada página."
          ]
        ],
        [
          "clip",
          "filigrane"
        ],
        [
          "note",
          "<strong>Haz antes una copia.</strong> La marca de agua ya no se puede quitar después."
        ],
        [
          "note",
          "<strong>¿Gratis o Pro?</strong> La marca de agua forma parte de Pro, que empieza con una prueba gratuita de 7 días."
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
      "fichier": "guide-escanear-un-documento-en-iphone-sin-suscripcion-es.html",
      "niveau": "free",
      "titre": "Cómo escanear un documento en iPhone sin suscripción — Scan Cam",
      "description": "Escanear un documento en iPhone sin pagar: las apps Notas y Archivos de Apple ya lo hacen, y QuickScan es gratuita. Lo que Scan Cam añade, y lo que es gratis en ella.",
      "h1": "Cómo escanear un documento en iPhone sin suscripción",
      "lead": "No necesitas ninguna suscripción, ni siquiera una app que descargar. Primero, las opciones gratuitas; después, lo que añade Scan Cam.",
      "carte": "Primero las opciones gratuitas — Notas, Archivos, QuickScan — y después lo que añade Scan Cam.",
      "corps": [
        [
          "h2",
          "Con la app Notas"
        ],
        [
          "ol",
          [
            "En una nota, toca el botón de la cámara (o el clip) y luego «Escanear documentos».",
            "Encuadra la hoja: el iPhone la captura solo. Toca «Guardar» y compártela en PDF."
          ]
        ],
        [
          "p",
          "Gratis, sin cuenta y sin publicidad."
        ],
        [
          "h2",
          "Con la app Archivos"
        ],
        [
          "p",
          "Toca los tres puntos de arriba y luego «Escanear documentos»: el PDF se guarda en la carpeta en la que estás."
        ],
        [
          "h2",
          "Con una app gratuita: QuickScan"
        ],
        [
          "p",
          "«OCR Text Scanner: QuickScan» es gratuita, no tiene publicidad y también lee el texto. Comprueba antes su precio en el App Store: puede cambiar."
        ],
        [
          "h2",
          "Lo que Scan Cam añade"
        ],
        [
          "p",
          "Para escanear a menudo: carpetas, páginas limpias, varias páginas en un solo PDF y una copia en tu propio iCloud. El escaneo, las carpetas, los filtros y la exportación a PDF son gratis, sin límite."
        ],
        [
          "clip",
          "scan"
        ],
        [
          "note",
          "<strong>¿Gratis o Pro?</strong> Pro añade la firma, la extracción del texto, la marca de agua, la combinación de documentos y la exportación a Word o Excel; empieza con una prueba gratuita de 7 días."
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
