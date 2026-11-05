// Les guides de Scan Cam en portugais du Brésil — traduction de `guides-en.js`, même structure.
// Les mots en gras sont les libellés de l'application en portugais (cam-scan/i18n/pt.ts).
// « Você », « app », « celular », comme le dictionnaire de l'application.

module.exports = {
  "code": "pt",
  "menu": "Guias",
  "accueil": {
    "fichier": "guides-pt.html",
    "titre": "Guias — Scan Cam",
    "description": "Guias passo a passo para escanear, assinar, juntar e ler documentos no seu iPhone com o Scan Cam.",
    "h1": "Guias",
    "lead": "Respostas curtas, passo a passo, para o que as pessoas mais querem fazer com um scanner no iPhone.",
    "sectionTitre": "Escolha um guia",
    "gratuit": "Grátis",
    "pro": "Pro"
  },
  "etiquette": {
    "free": "Grátis no Scan Cam",
    "pro": "Recurso Pro · 7 dias de teste grátis"
  },
  "blocAccueil": {
    "titre": "Guias",
    "texte": "Respostas passo a passo para escanear, assinar, juntar e ler documentos no seu iPhone.",
    "tous": "Todos os guias"
  },
  "pied": {
    "titre": "Experimente o Scan Cam",
    "texte": "O Scan Cam é grátis para baixar. Escanear, as pastas, os filtros e a exportação em PDF são grátis, sem limite de tempo; a assinatura Pro acrescenta as ferramentas extras e começa com 7 dias de teste grátis.",
    "youtube": "Prefere vídeo? Veja os tutoriais curtos no YouTube (em inglês)"
  },
  "liees": "Mais guias",
  "guides": [
    {
      "cle": "multi-page",
      "fichier": "guide-escanear-varias-paginas-em-um-pdf-no-iphone-pt.html",
      "niveau": "free",
      "titre": "Como escanear várias páginas em um só PDF no iPhone — Scan Cam",
      "description": "Escaneie todas as páginas de um contrato, formulário ou trabalho escolar em um só PDF no iPhone, reorganize e compartilhe. Grátis e sem conta.",
      "h1": "Como escanear várias páginas em um só PDF no iPhone",
      "lead": "Escaneie todas as folhas de um contrato, formulário ou trabalho escolar em um único PDF, de graça e sem conta.",
      "carte": "Escaneie cada folha em um só documento e compartilhe como um único PDF.",
      "corps": [
        [
          "h2",
          "Escaneie as páginas"
        ],
        [
          "ol",
          [
            "Toque em <strong>Escanear um documento</strong> e enquadre a primeira folha: as bordas são encontradas e a página é endireitada.",
            "Capture as outras folhas e confirme. Elas formam um só documento.",
            "Esqueceu uma? Abra o documento e toque em <strong>Adicionar uma página</strong>."
          ]
        ],
        [
          "clip",
          "scan"
        ],
        [
          "h2",
          "Organize o documento"
        ],
        [
          "p",
          "Segure uma miniatura e arraste para mudar a ordem das páginas; o x tira uma página. Uma sombra na página? Abra <strong>Filtros</strong> e ative <strong>Remover sombras</strong>."
        ],
        [
          "clip",
          "reordonner"
        ],
        [
          "h2",
          "Envie como um só PDF"
        ],
        [
          "p",
          "Toque em <strong>Compartilhar</strong>, escolha <strong>PDF</strong> e depois envie, salve ou imprima."
        ],
        [
          "note",
          "<strong>Grátis ou Pro?</strong> Tudo isso é grátis, sem limite de páginas. O Pro remove a pequena linha “Digitalizado com Scan Cam” dos PDFs."
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
      "fichier": "guide-escanear-recibos-no-iphone-pt.html",
      "niveau": "free",
      "titre": "Como escanear recibos no iPhone e mantê-los organizados — Scan Cam",
      "description": "Transforme recibos de papel em PDFs limpos e nítidos no iPhone, guarde-os em pastas e envie ao seu contador. Escanear e organizar é grátis.",
      "h1": "Como escanear recibos no iPhone e mantê-los organizados",
      "lead": "Recibos de papel térmico desbotam em poucos meses. Escaneie no dia em que os receber e guarde onde vai encontrá-los.",
      "carte": "Faça cópias nítidas e organizadas dos recibos de papel e envie a quem precisar.",
      "corps": [
        [
          "h2",
          "Escaneie um recibo"
        ],
        [
          "ol",
          [
            "Toque em <strong>Escanear um documento</strong> e enquadre o recibo sobre uma superfície escura.",
            "Abra <strong>Filtros</strong>, escolha <strong>Preto e branco</strong>, ajuste a intensidade e toque em <strong>Aplicar</strong>."
          ]
        ],
        [
          "clip",
          "filtres"
        ],
        [
          "h2",
          "Guarde para encontrar depois"
        ],
        [
          "p",
          "Toque em <strong>Nova pasta</strong> para criar uma pasta como “Recibos 2026” e dê a cada recibo o nome da loja e a data. A busca encontra arquivos e pastas pelo nome."
        ],
        [
          "clip",
          "ranger"
        ],
        [
          "h2",
          "Envie ao seu contador"
        ],
        [
          "p",
          "<strong>Compartilhar</strong> envia um recibo em PDF. <strong>Ajustes → Exportar tudo</strong> exporta todos os seus documentos, pasta por pasta."
        ],
        [
          "note",
          "<strong>Grátis ou Pro?</strong> Escanear, os filtros, as pastas, a busca e a exportação em PDF são grátis. O Pro acrescenta <strong>Extrair o texto</strong>, para copiar um total ou uma data."
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
      "fichier": "guide-assinar-documento-no-iphone-pt.html",
      "niveau": "pro",
      "titre": "Como assinar um documento no iPhone com o dedo — Scan Cam",
      "description": "Desenhe sua assinatura uma vez e coloque-a em qualquer documento escaneado ou PDF no iPhone. Passo a passo com o Scan Cam Pro.",
      "h1": "Como assinar um documento no iPhone com o dedo",
      "lead": "Sem impressora, sem caneta: desenhe sua assinatura uma vez e coloque-a em qualquer documento.",
      "carte": "Desenhe ou fotografe sua assinatura uma vez e coloque-a em qualquer documento.",
      "corps": [
        [
          "h2",
          "Crie sua assinatura"
        ],
        [
          "ol",
          [
            "Abra o documento, toque em <strong>Assinatura</strong> e depois em <strong>Nova assinatura</strong>.",
            "Assine com o dedo (<strong>Desenhar</strong>) ou fotografe uma assinatura no papel (<strong>Foto</strong>) e toque em <strong>Salvar</strong>. Ela fica guardada para a próxima vez."
          ]
        ],
        [
          "h2",
          "Coloque-a na página"
        ],
        [
          "ol",
          [
            "Escolha a página, arraste a assinatura até o lugar certo e ajuste o <strong>Tamanho</strong>.",
            "Toque em <strong>OK</strong>: a assinatura é gravada no PDF."
          ]
        ],
        [
          "clip",
          "signature"
        ],
        [
          "note",
          "<strong>Faça uma cópia antes</strong> se quiser manter uma versão sem assinatura: a assinatura não pode mais ser removida. Uma assinatura desenhada é uma imagem, não uma assinatura eletrônica certificada."
        ],
        [
          "note",
          "<strong>Grátis ou Pro?</strong> Assinar documentos faz parte do Pro, que começa com 7 dias de teste grátis."
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
      "fichier": "guide-copiar-texto-de-um-documento-escaneado-no-iphone-pt.html",
      "niveau": "pro",
      "titre": "Como copiar o texto de um documento escaneado no iPhone (OCR) — Scan Cam",
      "description": "Leia uma digitalização ou um PDF no iPhone e copie o texto, sem internet. Reconhecimento de texto passo a passo com o Scan Cam Pro.",
      "h1": "Como copiar o texto de um documento escaneado no iPhone",
      "lead": "O reconhecimento de texto (OCR) lê uma página escaneada e entrega o texto para você copiar.",
      "carte": "Leia uma página e copie o texto, no celular e sem internet.",
      "corps": [
        [
          "h2",
          "Copie o texto de uma página"
        ],
        [
          "ol",
          [
            "Abra uma digitalização, ou um PDF importado com <strong>Importar → Arquivos</strong>, e toque em <strong>Extrair o texto</strong>.",
            "Escolha a escrita (latina, japonesa, chinesa ou coreana) e deixe o Scan Cam ler as páginas.",
            "Selecione um trecho, ou toque em <strong>Copiar o texto</strong> para copiar tudo."
          ]
        ],
        [
          "clip",
          "texte"
        ],
        [
          "p",
          "O texto é lido pelo próprio iPhone, sem internet: seus documentos nunca são enviados a lugar nenhum. Nada foi reconhecido? Escaneie a página de novo com uma luz melhor."
        ],
        [
          "note",
          "<strong>Grátis ou Pro?</strong> O reconhecimento de texto faz parte do Pro, que começa com 7 dias de teste grátis. Ele também exporta documentos para Word e Excel."
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
      "fichier": "guide-juntar-pdf-no-iphone-pt.html",
      "niveau": "pro",
      "titre": "Como juntar arquivos PDF no iPhone — Scan Cam",
      "description": "Junte várias digitalizações ou PDFs em um só PDF no iPhone, na ordem que você escolher. Passo a passo com o Scan Cam Pro.",
      "h1": "Como juntar arquivos PDF no iPhone",
      "lead": "Vários documentos, um só arquivo para enviar, na ordem que você quiser. Os originais ficam como estão.",
      "carte": "Junte vários documentos em um só PDF, na ordem que você escolher.",
      "corps": [
        [
          "h2",
          "Junte os documentos"
        ],
        [
          "ol",
          [
            "Na biblioteca, marque pelo menos dois documentos: digitalizações, ou PDFs importados com <strong>Importar → Arquivos</strong>.",
            "Toque em <strong>Mesclar</strong>, coloque-os em ordem com as setas e toque em <strong>Mesclar</strong> de novo."
          ]
        ],
        [
          "clip",
          "fusion"
        ],
        [
          "p",
          "O resultado é um novo PDF na sua biblioteca. Envie com <strong>Compartilhar</strong>."
        ],
        [
          "note",
          "<strong>Grátis ou Pro?</strong> Juntar documentos faz parte do Pro, que começa com 7 dias de teste grátis. Importar e exportar um PDF continuam grátis."
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
      "fichier": "guide-extrair-paginas-de-um-pdf-no-iphone-pt.html",
      "niveau": "pro",
      "titre": "Como extrair páginas de um PDF no iPhone — Scan Cam",
      "description": "Tire algumas páginas de um PDF ou de uma digitalização para um novo documento no iPhone, sem alterar o original. Passo a passo com o Scan Cam Pro.",
      "h1": "Como extrair páginas de um PDF no iPhone",
      "lead": "Só algumas páginas importam? Crie com elas um novo documento e deixe o original como está.",
      "carte": "Crie um novo documento com as páginas que escolher e mantenha o original.",
      "corps": [
        [
          "h2",
          "Escolha as páginas"
        ],
        [
          "ol",
          [
            "Abra o documento (importe um PDF com <strong>Importar → Arquivos</strong>) e toque em <strong>Extrair páginas</strong>.",
            "Marque as páginas que você quer manter e toque em <strong>Criar um novo documento</strong>."
          ]
        ],
        [
          "clip",
          "pages"
        ],
        [
          "p",
          "As páginas são copiadas para um novo documento, guardado ao lado do original. Envie com <strong>Compartilhar</strong>."
        ],
        [
          "note",
          "<strong>Grátis ou Pro?</strong> Extrair páginas faz parte do Pro, que começa com 7 dias de teste grátis."
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
      "fichier": "guide-adicionar-marca-dagua-em-pdf-no-iphone-pt.html",
      "niveau": "pro",
      "titre": "Como adicionar uma marca d’água a um PDF no iPhone — Scan Cam",
      "description": "Coloque CONFIDENCIAL ou o seu próprio texto em todas as páginas de uma digitalização ou PDF no iPhone. Passo a passo com o Scan Cam Pro.",
      "h1": "Como adicionar uma marca d’água a um PDF no iPhone",
      "lead": "Uma cópia do seu documento de identidade para um único fim, um rascunho que não pode circular: uma marca d’água diz para que serve o documento.",
      "carte": "Coloque o seu próprio texto em todas as páginas de um documento.",
      "corps": [
        [
          "h2",
          "Adicione a marca d’água"
        ],
        [
          "ol",
          [
            "Abra o documento e toque em <strong>Marca d’água</strong>.",
            "Digite seu texto, como “Para o cadastro do aluguel, 12 de maio” na cópia de um documento de identidade.",
            "Ajuste <strong>Cor</strong>, <strong>Opacidade</strong> e <strong>Tamanho</strong> e toque em <strong>OK</strong>: todas as páginas são marcadas."
          ]
        ],
        [
          "clip",
          "filigrane"
        ],
        [
          "note",
          "<strong>Faça uma cópia antes.</strong> Depois, a marca d’água não pode mais ser removida."
        ],
        [
          "note",
          "<strong>Grátis ou Pro?</strong> A marca d’água faz parte do Pro, que começa com 7 dias de teste grátis."
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
      "fichier": "guide-escanear-documento-no-iphone-sem-assinatura-pt.html",
      "niveau": "free",
      "titre": "Como escanear um documento no iPhone sem assinatura — Scan Cam",
      "description": "Escanear um documento no iPhone sem pagar: os apps Notas e Arquivos da Apple já fazem isso, e o QuickScan é gratuito. O que o Scan Cam acrescenta, e o que é gratuito nele.",
      "h1": "Como escanear um documento no iPhone sem assinatura",
      "lead": "Você não precisa de assinatura, nem mesmo de um app para baixar. Primeiro as opções gratuitas, depois o que o Scan Cam acrescenta.",
      "carte": "Primeiro as opções gratuitas — Notas, Arquivos, QuickScan —, depois o que o Scan Cam acrescenta.",
      "corps": [
        [
          "h2",
          "Com o app Notas"
        ],
        [
          "ol",
          [
            "Em uma nota, toque no botão da câmera (ou no clipe) e depois em “Escanear Documentos”.",
            "Enquadre a folha: o iPhone a captura sozinho. Toque em “Salvar” e compartilhe em PDF."
          ]
        ],
        [
          "p",
          "Gratuito, sem conta e sem anúncios."
        ],
        [
          "h2",
          "Com o app Arquivos"
        ],
        [
          "p",
          "Toque nos três pontos no alto da tela e depois em “Escanear Documentos”: o PDF é salvo na pasta em que você está."
        ],
        [
          "h2",
          "Com um app gratuito: QuickScan"
        ],
        [
          "p",
          "O “OCR Text Scanner: QuickScan” é gratuito, sem anúncios, e também lê o texto. Confira antes o preço na App Store: ele pode mudar."
        ],
        [
          "h2",
          "O que o Scan Cam acrescenta"
        ],
        [
          "p",
          "Para quem escaneia com frequência: pastas, páginas limpas, várias páginas em um único PDF e uma cópia no seu próprio iCloud. O escaneamento, as pastas, os filtros e a exportação em PDF são gratuitos, sem limite."
        ],
        [
          "clip",
          "scan"
        ],
        [
          "note",
          "<strong>Grátis ou Pro?</strong> O Pro acrescenta a assinatura de documentos, a extração de texto, a marca d’água, a junção de documentos e a exportação em Word ou Excel; ele começa com um teste gratuito de 7 dias."
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
