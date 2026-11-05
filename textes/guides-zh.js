// Les guides de Scan Cam en chinois simplifié — traduction de `guides-en.js`, même structure.
// Les mots en gras sont les libellés de l'application (cam-scan/i18n/zh.ts). On vouvoie (您),
// comme la fiche App Store et `zh.js`. La ligne « Scanned with Scan Cam » reste en anglais :
// c'est ainsi qu'elle est écrite dans le PDF.
// ⚠️ Pas encore relu par un lecteur chinois.

module.exports = {
  "code": "zh",
  "menu": "使用指南",
  "accueil": {
    "fichier": "guides-zh.html",
    "titre": "使用指南 — Scan Cam",
    "description": "用 Scan Cam 在 iPhone 上扫描、签名、合并和识别文档的分步指南。",
    "h1": "使用指南",
    "lead": "在 iPhone 上用扫描仪最常做的几件事，这里一步一步简短说明。",
    "sectionTitre": "选择一篇指南",
    "gratuit": "免费",
    "pro": "Pro"
  },
  "etiquette": {
    "free": "Scan Cam 免费功能",
    "pro": "Pro 功能 · 7 天免费试用"
  },
  "blocAccueil": {
    "titre": "使用指南",
    "texte": "在 iPhone 上扫描、签名、合并和识别文档，一步一步教您完成。",
    "tous": "全部指南"
  },
  "pied": {
    "titre": "试试 Scan Cam",
    "texte": "Scan Cam 可免费下载。扫描、文件夹、滤镜和导出 PDF 均免费，没有时间限制；Pro 订阅提供更多工具，并含 7 天免费试用。",
    "youtube": "想看视频？YouTube 上有简短教程（英文）"
  },
  "liees": "更多指南",
  "guides": [
    {
      "cle": "multi-page",
      "fichier": "guide-scan-multiple-pages-to-one-pdf-iphone-zh.html",
      "niveau": "free",
      "titre": "如何在 iPhone 上把多页扫描成一个 PDF — Scan Cam",
      "description": "在 iPhone 上把合同、表格或作业的每一页扫描进同一个 PDF，免费，无需账号。",
      "h1": "如何在 iPhone 上把多页扫描成一个 PDF",
      "lead": "把合同、表格或作业的每一页扫描成一个 PDF，免费，而且无需账号。",
      "carte": "把每一页都扫描进同一份文档，再作为一个 PDF 分享出去。",
      "corps": [
        [
          "h2",
          "扫描页面"
        ],
        [
          "ol",
          [
            "点按<strong>扫描文档</strong>，对准第一页：应用会找到边缘并校正页面。",
            "拍下其余的纸张，然后确认。它们会合成一份文档。",
            "漏了一页？打开文档，点按<strong>添加一页</strong>。"
          ]
        ],
        [
          "clip",
          "scan"
        ],
        [
          "h2",
          "整理文档"
        ],
        [
          "p",
          "按住缩略图并拖动，即可调整页面顺序；叉号会删除该页。页面上有阴影？打开<strong>滤镜</strong>，开启<strong>去除阴影</strong>。"
        ],
        [
          "clip",
          "reordonner"
        ],
        [
          "h2",
          "作为一个 PDF 发送"
        ],
        [
          "p",
          "点按<strong>分享</strong>，选择 <strong>PDF</strong>，然后发送、存储或打印。"
        ],
        [
          "note",
          "<strong>免费还是 Pro？</strong>以上全部免费，没有页数限制。Pro 会去掉 PDF 上那行小字「Scanned with Scan Cam」。"
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
      "fichier": "guide-scan-receipts-iphone-zh.html",
      "niveau": "free",
      "titre": "如何在 iPhone 上扫描收据并整理好 — Scan Cam",
      "description": "在 iPhone 上把纸质收据变成清晰的 PDF，归入文件夹，再发给会计。扫描和归档免费。",
      "h1": "如何在 iPhone 上扫描收据并整理好",
      "lead": "热敏小票几个月就会褪色。拿到当天就扫描，并把它们放在找得到的地方。",
      "carte": "把纸质收据做成清晰、归好档的副本，发给需要的人。",
      "corps": [
        [
          "h2",
          "扫描一张收据"
        ],
        [
          "ol",
          [
            "点按<strong>扫描文档</strong>，把收据放在深色表面上并对准。",
            "打开<strong>滤镜</strong>，选择<strong>黑白</strong>，调整强度，然后点按<strong>应用</strong>。"
          ]
        ],
        [
          "clip",
          "filtres"
        ],
        [
          "h2",
          "归档，方便日后查找"
        ],
        [
          "p",
          "点按<strong>新建文件夹</strong>，建一个例如「收据 2026」的文件夹，并用商店名和日期给每张收据命名。搜索可以按名称查找文件和文件夹。"
        ],
        [
          "clip",
          "ranger"
        ],
        [
          "h2",
          "发给您的会计"
        ],
        [
          "p",
          "<strong>分享</strong>可以把一张收据作为 PDF 发送。<strong>设置 → 全部导出</strong>会按文件夹导出您的所有文档。"
        ],
        [
          "note",
          "<strong>免费还是 Pro？</strong>扫描、滤镜、文件夹、搜索和导出 PDF 都是免费的。Pro 增加<strong>提取文字</strong>，可以复制总金额或日期。"
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
      "fichier": "guide-sign-a-document-on-iphone-zh.html",
      "niveau": "pro",
      "titre": "如何在 iPhone 上用手指签署文档 — Scan Cam",
      "description": "签名只需画一次，之后可放到 iPhone 上任何扫描件或 PDF 上。Scan Cam Pro 分步指南。",
      "h1": "如何在 iPhone 上用手指签署文档",
      "lead": "不需要打印机，也不需要笔：签名只需画一次，就能放到任何文档上。",
      "carte": "手写或拍下您的签名一次，之后可放到任何文档上。",
      "corps": [
        [
          "h2",
          "创建您的签名"
        ],
        [
          "ol",
          [
            "打开文档，点按<strong>签名</strong>，再点按<strong>新建签名</strong>。",
            "用手指签名（<strong>手写</strong>），或者拍下纸上的签名（<strong>照片</strong>），然后点按<strong>保存</strong>。签名会保留下来，供下次使用。"
          ]
        ],
        [
          "h2",
          "把签名放到页面上"
        ],
        [
          "ol",
          [
            "选择页面，把签名拖到合适的位置，并调整<strong>大小</strong>。",
            "点按<strong>完成</strong>：签名会写入 PDF。"
          ]
        ],
        [
          "clip",
          "signature"
        ],
        [
          "note",
          "<strong>请先复制一份。</strong>签名无法去除：如果您想保留未签名的版本，请先复制。手写的签名是一张图像，并不是经过认证的电子签名。"
        ],
        [
          "note",
          "<strong>免费还是 Pro？</strong>签名属于 Pro 功能，Pro 从 7 天免费试用开始。"
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
      "fichier": "guide-copy-text-from-a-scan-iphone-zh.html",
      "niveau": "pro",
      "titre": "如何在 iPhone 上复制扫描文档中的文字（OCR） — Scan Cam",
      "description": "在 iPhone 上离线识别扫描件或 PDF，并复制其中的文字。Scan Cam Pro 分步指南。",
      "h1": "如何在 iPhone 上复制扫描文档中的文字",
      "lead": "文字识别（OCR）会读取扫描的页面，把文字交给您复制。",
      "carte": "识别页面并复制其中的文字，在手机上完成，无需联网。",
      "corps": [
        [
          "h2",
          "复制页面上的文字"
        ],
        [
          "ol",
          [
            "打开扫描件，或用<strong>导入 → 文件</strong>导入的 PDF，点按<strong>提取文字</strong>。",
            "选择文字种类（拉丁字母、日文、中文或韩文），让 Scan Cam 识别页面。",
            "选择一段文字，或点按<strong>复制文字</strong>复制全部内容。"
          ]
        ],
        [
          "clip",
          "texte"
        ],
        [
          "p",
          "文字由 iPhone 本身识别，无需联网：您的文档从不会被发送到任何地方。什么都没识别出来？请在光线更好的地方重新扫描该页。"
        ],
        [
          "note",
          "<strong>免费还是 Pro？</strong>文字识别属于 Pro 功能，Pro 从 7 天免费试用开始。它还能把文档导出为 Word 和 Excel。"
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
      "fichier": "guide-merge-pdf-files-on-iphone-zh.html",
      "niveau": "pro",
      "titre": "如何在 iPhone 上合并 PDF 文件 — Scan Cam",
      "description": "在 iPhone 上按您选的顺序，把多份扫描件或 PDF 合成一个 PDF。Scan Cam Pro 分步指南。",
      "h1": "如何在 iPhone 上合并 PDF 文件",
      "lead": "好几份文档，按您想要的顺序合成一个文件发送。原件保持原样。",
      "carte": "按您选的顺序，把多份文档合成一个 PDF。",
      "corps": [
        [
          "h2",
          "合并文档"
        ],
        [
          "ol",
          [
            "在文档库中勾选至少两份文档：扫描件，或用<strong>导入 → 文件</strong>导入的 PDF。",
            "点按<strong>合并</strong>，用箭头排好顺序，然后再次点按<strong>合并</strong>。"
          ]
        ],
        [
          "clip",
          "fusion"
        ],
        [
          "p",
          "结果是文档库中的一份新 PDF。用<strong>分享</strong>发送它。"
        ],
        [
          "note",
          "<strong>免费还是 Pro？</strong>合并属于 Pro 功能，Pro 从 7 天免费试用开始。导入和导出 PDF 仍然免费。"
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
      "fichier": "guide-extract-pages-from-a-pdf-on-iphone-zh.html",
      "niveau": "pro",
      "titre": "如何在 iPhone 上从 PDF 中提取页面 — Scan Cam",
      "description": "在 iPhone 上把 PDF 或扫描件中的部分页面提取为新文档，原件保持不变。",
      "h1": "如何在 iPhone 上从 PDF 中提取页面",
      "lead": "只需要其中几页？用它们新建一份文档，原件保持原样。",
      "carte": "用您挑选的页面新建一份文档，原件保留不变。",
      "corps": [
        [
          "h2",
          "挑选页面"
        ],
        [
          "ol",
          [
            "打开文档（PDF 可通过<strong>导入 → 文件</strong>导入），点按<strong>提取页面</strong>。",
            "勾选要保留的页面，然后点按<strong>创建新文档</strong>。"
          ]
        ],
        [
          "clip",
          "pages"
        ],
        [
          "p",
          "这些页面会被复制到一份新文档中，放在原件旁边。用<strong>分享</strong>发送它。"
        ],
        [
          "note",
          "<strong>免费还是 Pro？</strong>提取页面属于 Pro 功能，Pro 从 7 天免费试用开始。"
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
      "fichier": "guide-add-a-watermark-to-a-pdf-on-iphone-zh.html",
      "niveau": "pro",
      "titre": "如何在 iPhone 上为 PDF 添加水印 — Scan Cam",
      "description": "在 iPhone 上为扫描件或 PDF 的每一页加上「机密」或您自己的文字。Scan Cam Pro 分步指南。",
      "h1": "如何在 iPhone 上为 PDF 添加水印",
      "lead": "只用于某一用途的身份证件复印件，一份不能外传的草稿：水印说明了这份文档的用途。",
      "carte": "在文档的每一页上加上您自己的文字。",
      "corps": [
        [
          "h2",
          "添加水印"
        ],
        [
          "ol",
          [
            "打开文档，点按<strong>水印</strong>。",
            "输入您的文字，例如在身份证件复印件上写「仅供租房申请使用，5月12日」。",
            "调整<strong>彩色</strong>、<strong>不透明度</strong>和<strong>大小</strong>，然后点按<strong>完成</strong>：每一页都会加上水印。"
          ]
        ],
        [
          "clip",
          "filigrane"
        ],
        [
          "note",
          "<strong>请先复制一份。</strong>水印之后无法去除。"
        ],
        [
          "note",
          "<strong>免费还是 Pro？</strong>水印属于 Pro 功能，Pro 从 7 天免费试用开始。"
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
      "fichier": "guide-scan-a-document-on-iphone-without-a-subscription-zh.html",
      "niveau": "free",
      "titre": "如何不订阅也能在 iPhone 上扫描文档 — Scan Cam",
      "description": "不花钱在 iPhone 上扫描文档：Apple 的“备忘录”和“文件” App 已经可以做到，QuickScan 也是免费的。Scan Cam 多了什么，其中哪些是免费的。",
      "h1": "如何不订阅也能在 iPhone 上扫描文档",
      "lead": "您不需要订阅，甚至不需要下载任何 App。先介绍免费的方法，再说说 Scan Cam 多了什么。",
      "carte": "先看免费的方法（备忘录、文件、QuickScan），再看 Scan Cam 多了什么。",
      "corps": [
        [
          "h2",
          "用“备忘录” App"
        ],
        [
          "ol",
          [
            "在备忘录中轻点相机按钮（或回形针按钮），然后选择“扫描文稿”。",
            "对准纸张：iPhone 会自动拍摄。轻点“存储”，然后以 PDF 共享。"
          ]
        ],
        [
          "p",
          "免费，无需账号，没有广告。"
        ],
        [
          "h2",
          "用“文件” App"
        ],
        [
          "p",
          "轻点屏幕顶部的三个点，然后选择“扫描文稿”：PDF 会存到您当前所在的文件夹。"
        ],
        [
          "h2",
          "用免费 App：QuickScan"
        ],
        [
          "p",
          "“OCR Text Scanner: QuickScan”免费、没有广告，也能识别文字。价格可能会变，请先在 App Store 上确认。"
        ],
        [
          "h2",
          "Scan Cam 多了什么"
        ],
        [
          "p",
          "适合经常扫描的人：文件夹、干净的页面、多页合成一个 PDF，以及在您自己的 iCloud 中保存一份副本。扫描、文件夹、滤镜和导出 PDF 都是免费的，没有限制。"
        ],
        [
          "clip",
          "scan"
        ],
        [
          "note",
          "<strong>免费还是 Pro？</strong> Pro 增加签名、文字提取、水印、合并以及导出为 Word 或 Excel；从 7 天免费试用开始。"
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
