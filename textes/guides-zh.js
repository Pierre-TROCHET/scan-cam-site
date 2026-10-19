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
    "texte": "Scan Cam 可免费下载。扫描、文件夹、滤镜和导出 PDF 均免费，没有时间限制；Pro 订阅提供更多工具，并含 7 天免费试用。"
  },
  "liees": "更多指南",
  "captures": {
    "scanner": {
      "alt": "Scan Cam 的扫描界面：一张发票平放在桌上，页面被蓝色框出，下方是快门按钮。",
      "legende": "扫描仪自动找到页面并框出边缘。"
    },
    "propre": {
      "alt": "放在木桌上拍下的一份皱巴巴的合同，以及经过 Scan Cam 处理后的同一页：平整、洁白、清晰。",
      "legende": "从皱巴巴的纸张，到干净的页面。"
    },
    "document": {
      "alt": "文档界面：一页乐谱，大预览图上有旋转按钮，下方是页面缩略图，以及添加一页、分享、滤镜、提取文字、添加文字、水印、签名、提取页面和打印等工具。",
      "legende": "页面缩略图和所有工具，都在同一个界面上。"
    },
    "partage": {
      "alt": "Scan Cam 的分享界面：已选中 PDF，另外可选的格式有 Word、Excel 和 JPEG。",
      "legende": "选择格式，然后发送。"
    },
    "filtres": {
      "alt": "滤镜界面：一页乐谱，已选中黑白效果，强度滑块位于 50%。",
      "legende": "黑白效果，强度由您决定。"
    },
    "dossiers": {
      "alt": "Scan Cam 文档库中的一个税务文件夹，里面有 2024、2025 和 2026 年的子文件夹。",
      "legende": "文件夹和子文件夹，就像在电脑上一样。"
    },
    "recherche": {
      "alt": "文档库的搜索：输入了“水费账单”，找到了三份水费账单。",
      "legende": "搜索按名称查找文件和文件夹。"
    },
    "nouvelle-signature": {
      "alt": "新建签名界面：已选中手写标签，名字 John 用手指签在横线上方。",
      "legende": "用手指签名，就像在纸上一样。"
    },
    "signature": {
      "alt": "放置签名界面：一张发票，一个虚线框中的签名，下方是大小滑块。",
      "legende": "拖动签名，并调整它的大小。"
    },
    "texte": {
      "alt": "提取出的文字界面：已选好页面上的文字种类，一份食谱的文字已从页面中识别出来。",
      "legende": "文字已就绪，可以选择或复制。"
    },
    "bibliotheque": {
      "alt": "Scan Cam 的文档库：导入和新建文件夹按钮，两个文件夹以及各个文档，每个文档旁都有一个可勾选的方框。",
      "legende": "导入 PDF，或在文档库中勾选文档。"
    },
    "fusion": {
      "alt": "合并界面：编号为 1 和 2 的两份文档，各带上下箭头和一个叉号，下方是合并按钮。",
      "legende": "排好顺序，然后点按合并。"
    },
    "extraction": {
      "alt": "提取页面界面：共 2 页中的第 1 页已勾选，顶部是全选，下方是创建新文档。",
      "legende": "勾选要保留的页面。"
    },
    "filigrane": {
      "alt": "水印界面：一张发票上斜跨着红色的水印文字。",
      "legende": "预览会随您的设置实时变化。"
    }
  },
  "guides": [
    {
      "cle": "multi-page",
      "fichier": "guide-scan-multiple-pages-to-one-pdf-iphone-zh.html",
      "niveau": "free",
      "titre": "如何在 iPhone 上把多页扫描成一个 PDF — Scan Cam",
      "description": "在 iPhone 上把合同、表格或作业的每一页扫描进同一个 PDF，免费，无需账号。",
      "h1": "如何在 iPhone 上把多页扫描成一个 PDF",
      "lead": "合同、表格和作业很少只有一页。下面介绍如何用 Scan Cam 把它们全部扫描成一个 PDF，免费，而且无需账号。",
      "carte": "把每一页都扫描进同一份文档，再作为一个 PDF 分享出去。",
      "corps": [
        [
          "h2",
          "扫描页面"
        ],
        [
          "ol",
          [
            "打开 Scan Cam，点按<strong>扫描文档</strong>。第一次使用时，iPhone 会询问一次是否允许使用相机。",
            "对准第一页。即使手机拿得有些倾斜，Scan Cam 也会自动找到边缘并把页面校正。",
            "一页接一页地拍下后面的纸张，然后确认。这些页面会在手机上合成一份 PDF 文档。",
            "漏了一页？打开文档，点按<strong>添加一页</strong>：新的一页会加入同一份文档。"
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
          "整理文档"
        ],
        [
          "p",
          "页面缩略图位于大预览图下方。按住一张缩略图并拖动，就能调整页面顺序。缩略图上的叉号会删除该页；删除后无法恢复，所以 Scan Cam 会先询问您。如果某页拍歪了方向，可以用大预览图上的按钮把它旋转过来。"
        ],
        [
          "img",
          [
            "document"
          ]
        ],
        [
          "p",
          "如果页面上有阴影，请打开<strong>滤镜</strong>，开启<strong>去除阴影</strong>。原始照片始终会保留，您随时可以再关掉它。"
        ],
        [
          "h2",
          "作为一个 PDF 发送"
        ],
        [
          "ol",
          [
            "打开文档，点按<strong>分享</strong>。",
            "选择 <strong>PDF</strong>（JPEG 也是免费的）。",
            "发送文件、存储到“文件”App，或者打印出来。"
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
          "<strong>免费还是 Pro？</strong>以上全部免费，页数和文档数量都没有限制。免费版的 PDF 会在页面底部带有一行小字「Scanned with Scan Cam」；Pro 订阅会去掉这行字。"
        ],
        [
          "h2",
          "扫描得更清晰的小技巧"
        ],
        [
          "ul",
          [
            "把纸张放在平整的深色表面上，让边缘更突出。",
            "让光线从侧面或上方照到页面，这样您的手和手机就不会投下阴影。",
            "一次只扫描一份文档，这样每个 PDF 都能单独命名和归档。"
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
      "fichier": "guide-scan-receipts-iphone-zh.html",
      "niveau": "free",
      "titre": "如何在 iPhone 上扫描收据并整理好 — Scan Cam",
      "description": "在 iPhone 上把纸质收据变成清晰的 PDF，归入文件夹，再发给会计。扫描和归档免费。",
      "h1": "如何在 iPhone 上扫描收据并整理好",
      "lead": "收银小票褪色得最快，往往在需要时已经看不清了。拿到当天就扫描，并把它们放在找得到的地方。",
      "carte": "把纸质收据做成清晰、归好档的副本，发给需要的人。",
      "corps": [
        [
          "h2",
          "扫描一张收据"
        ],
        [
          "ol",
          [
            "打开 Scan Cam，点按<strong>扫描文档</strong>。",
            "把收据平放在深色表面上并对准。应用会自动找到边缘并校正页面。",
            "打开<strong>滤镜</strong>。对于热敏纸，<strong>黑白</strong>通常最易读；如果纸张发灰或有折痕，再开启<strong>去除阴影</strong>。",
            "用滑块调整强度，直到字迹清晰，然后点按<strong>应用</strong>。原始照片会保留，之后您仍可改变主意。"
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
          "归档，方便日后查找"
        ],
        [
          "p",
          "打开<strong>文档库</strong>，点按<strong>新建文件夹</strong>，建一个例如「收据 2026」的文件夹；如果愿意，还可以按月份或类别建子文件夹。然后把每份扫描件移到对应的文件夹中。"
        ],
        [
          "p",
          "给每份文档起一个您认得出的名字，比如商店名加日期。文档库里的搜索框按名称查找文件和文件夹，包括深藏在文件夹里的那些。"
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
          "发给您的会计"
        ],
        [
          "p",
          "打开一张收据，点按<strong>分享</strong>，以 PDF 格式通过邮件或信息发送，或者存储到“文件”App。如果要发送一整个文件夹的文档，请使用<strong>设置 → 全部导出</strong>：每份文档都会导出为 PDF，并放在各自的文件夹中。"
        ],
        [
          "note",
          "<strong>免费还是 Pro？</strong>扫描、滤镜、文件夹、搜索和导出 PDF 都是免费的。有了 Pro，<strong>提取文字</strong>可以在手机上读取收据，无需联网，您就能把总金额或日期复制到表格里。"
        ],
        [
          "h2",
          "小技巧"
        ],
        [
          "ul",
          [
            "收据当天就扫描：热敏纸几个月内就会褪色。",
            "一张收据一份文档，命名和归档都更简单。",
            "如果您所在国家的法律有要求，请保留纸质原件；扫描件是方便的副本，并不总能在法律上替代原件。"
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
      "fichier": "guide-sign-a-document-on-iphone-zh.html",
      "niveau": "pro",
      "titre": "如何在 iPhone 上用手指签署文档 — Scan Cam",
      "description": "签名只需画一次，之后可放到 iPhone 上任何扫描件或 PDF 上。Scan Cam Pro 分步指南。",
      "h1": "如何在 iPhone 上用手指签署文档",
      "lead": "不需要打印机，不需要笔，也不需要扫描仪：签名只需画一次，然后把它放到任何文档的相应位置。",
      "carte": "手写或拍下您的签名一次，之后可放到任何文档上。",
      "corps": [
        [
          "h2",
          "创建您的签名"
        ],
        [
          "ol",
          [
            "打开文档，在工具栏中点按<strong>签名</strong>。",
            "点按<strong>新建签名</strong>。",
            "选择<strong>手写</strong>，用手指在横线上方签名；或者选择<strong>照片</strong>，拍下您写在纸上的签名。使用照片时，拖动矩形的四个角把签名框住，然后调整滑块，直到只剩下笔迹、没有灰色的雾影。",
            "点按<strong>保存</strong>。您的签名会保留下来，供以后的文档使用。"
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
          "把签名放到页面上"
        ],
        [
          "ol",
          [
            "选择您要签名的页面。",
            "把签名拖到合适的位置。用两根手指张开可以放大页面，方便精确放置。",
            "用<strong>大小</strong>把签名调大或调小。虚线框只是帮助您定位，不会写到页面上。",
            "点按<strong>完成</strong>。签名会写入页面，PDF 也会随之重新生成。"
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
          "<strong>请先复制一份。</strong>签名会写入文档本身。如果您想保留一份未签名的版本，请在签名前先在文档库中复制该文档，然后在副本上签名。"
        ],
        [
          "h2",
          "发送签好的文档"
        ],
        [
          "p",
          "点按<strong>分享</strong>，选择 PDF，通过邮件或信息发送，或者存储到“文件”App。"
        ],
        [
          "note",
          "<strong>免费还是 Pro？</strong>签名属于 Pro 订阅功能，订阅含 7 天免费试用；在试用结束前取消，不会产生任何费用。Pro 导出的 PDF 也不会带有「Scanned with Scan Cam」这行字。"
        ],
        [
          "h2",
          "须知"
        ],
        [
          "ul",
          [
            "您可以保存多个签名，每次选用需要的那一个；不再需要的签名，可以在同一界面中删除。",
            "手写的签名以笔迹形式保存，所以无论放大到多大都依然清晰。",
            "在手机上画的签名是页面上的一张图像。有些合同和行政机构要求经过认证的电子签名：请先确认对方接受哪种签名。"
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
      "fichier": "guide-copy-text-from-a-scan-iphone-zh.html",
      "niveau": "pro",
      "titre": "如何在 iPhone 上复制扫描文档中的文字（OCR） — Scan Cam",
      "description": "在 iPhone 上离线识别扫描件或 PDF，并复制其中的文字。Scan Cam Pro 分步指南。",
      "h1": "如何在 iPhone 上复制扫描文档中的文字",
      "lead": "扫描件是一张页面的图片：里面的字无法选择。文字识别（OCR）会读取这张图片，把文字交给您复制。",
      "carte": "识别页面并复制其中的文字，在手机上完成，无需联网。",
      "corps": [
        [
          "h2",
          "识别一份文档"
        ],
        [
          "ol",
          [
            "扫描文档，或者在文档库中通过<strong>导入 → 文件</strong>导入一个 PDF。",
            "打开文档，点按<strong>提取文字</strong>。",
            "选择页面上的文字种类。拉丁字母涵盖法语、英语、西班牙语和德语；也可以选择日文、中文和韩文。",
            "稍等片刻，Scan Cam 会逐页识别。完成后文字就会显示出来。"
          ]
        ],
        [
          "h2",
          "复制您需要的内容"
        ],
        [
          "p",
          "按住文字可以选择一段，或者点按<strong>复制文字</strong>复制全部内容，然后粘贴到信息、备忘录或表格中。"
        ],
        [
          "img",
          [
            "texte"
          ]
        ],
        [
          "h2",
          "一切都留在您的手机上"
        ],
        [
          "p",
          "文字由 iPhone 本身识别，无需联网，您文档的内容从不会发送到任何外部服务。"
        ],
        [
          "note",
          "<strong>免费还是 Pro？</strong>文字识别属于 Pro 订阅功能，含 7 天免费试用；在试用结束前取消，不会产生任何费用。"
        ],
        [
          "h2",
          "获得更好的识别效果"
        ],
        [
          "ul",
          [
            "如果什么都没识别出来，请重新扫描该页：更清晰、光线更好的扫描件往往效果更好。",
            "识别前先用<strong>滤镜</strong>去除阴影。",
            "导入的 PDF 会像扫描件一样变成页面：原有的文字无法再选择，但文字识别可以重新读取它。",
            "更改所选的文字种类后，请点按<strong>重新识别</strong>。"
          ]
        ],
        [
          "p",
          "有了 Pro，同样的识别也用于把文档导出为 Word（.docx）或 Excel（.xlsx）。"
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
      "lead": "好几份文档，只想发一个文件。下面介绍如何按您想要的顺序把它们合在一起，而且不改动原件。",
      "carte": "按您选的顺序，把多份文档合成一个 PDF。",
      "corps": [
        [
          "h2",
          "把 PDF 放进 Scan Cam"
        ],
        [
          "p",
          "您扫描的文档已经在文档库里了。要添加一个已有的 PDF，请在文档库中点按<strong>导入 → 文件</strong>并选中它：它的每一页都会成为文档中的一页，导入是免费的。有密码保护的 PDF，或超过 100 页的 PDF，无法导入。"
        ],
        [
          "img",
          [
            "bibliotheque"
          ]
        ],
        [
          "h2",
          "合并文档"
        ],
        [
          "ol",
          [
            "在文档库中勾选至少两份文档。您也可以打开文件夹勾选更多：已经勾选的会保持勾选。",
            "在出现的工具条中点按<strong>合并</strong>。（您也可以从<strong>工具 → 合并</strong>开始：在那里勾选文档，然后点按<strong>继续</strong>。）",
            "用箭头调整文档的顺序，用叉号移除其中一份。Scan Cam 会告诉您新文档将有多少页。",
            "点按<strong>合并</strong>确认。在此之前不会创建任何东西。"
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
          "合并的结果是文档库中的一份新 PDF 文档。原来的文档保留所有页面：合并是复制，而不是剪切。"
        ],
        [
          "h2",
          "发送"
        ],
        [
          "p",
          "打开合并后的文档，点按<strong>分享</strong>，选择 PDF，然后发送或存储到“文件”App。"
        ],
        [
          "note",
          "<strong>免费还是 Pro？</strong>合并属于 Pro 订阅功能，订阅含 7 天免费试用；在试用结束前取消，不会产生任何费用。导入、扫描和导出单个 PDF 仍然免费。"
        ],
        [
          "h2",
          "小技巧"
        ],
        [
          "ul",
          [
            "无论原来是什么文档（扫描件、照片、导入的 PDF），合并的结果总是 PDF。",
            "只需要结果中的部分页面？请看提取页面的指南。"
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
      "fichier": "guide-extract-pages-from-a-pdf-on-iphone-zh.html",
      "niveau": "pro",
      "titre": "如何在 iPhone 上从 PDF 中提取页面 — Scan Cam",
      "description": "在 iPhone 上把 PDF 或扫描件中的部分页面提取为新文档，原件保持不变。",
      "h1": "如何在 iPhone 上从 PDF 中提取页面",
      "lead": "只需要第 3 页和第 4 页？用您挑选的页面新建一份文档，原件保持原样。",
      "carte": "用您挑选的页面新建一份文档，原件保留不变。",
      "corps": [
        [
          "h2",
          "在 Scan Cam 中打开 PDF"
        ],
        [
          "p",
          "如果 PDF 还不在文档库中，请点按<strong>导入 → 文件</strong>并选中它。它的每一页都会像扫描的页面一样，成为文档中的一页。有密码保护的 PDF，或超过 100 页的 PDF，无法导入。"
        ],
        [
          "img",
          [
            "bibliotheque"
          ]
        ],
        [
          "h2",
          "挑选页面"
        ],
        [
          "ol",
          [
            "打开文档，点按<strong>提取页面</strong>。",
            "勾选您想保留的页面。文档很长时，<strong>全选</strong>和<strong>取消全选</strong>能帮您节省时间。",
            "点按<strong>创建新文档</strong>。"
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
          "选中的页面会被复制到一份新文档中，放在原件旁边，原件保持原样。保留所有页面是特意不允许的：那样只不过是一份副本。"
        ],
        [
          "h2",
          "发送新文档"
        ],
        [
          "p",
          "打开它，点按<strong>分享</strong>，选择 PDF，然后发送或存储到“文件”App。"
        ],
        [
          "note",
          "<strong>免费还是 Pro？</strong>提取页面属于 Pro 订阅功能，订阅含 7 天免费试用；在试用结束前取消，不会产生任何费用。扫描、导入和导出 PDF 仍然免费。"
        ],
        [
          "h2",
          "须知"
        ],
        [
          "ul",
          [
            "由于页面是复制出来的，以后删除新文档不会影响原件，反之亦然。",
            "如果只想把一页作为图片发送，请先把它提取出来，再以 JPEG 格式分享。"
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
      "fichier": "guide-add-a-watermark-to-a-pdf-on-iphone-zh.html",
      "niveau": "pro",
      "titre": "如何在 iPhone 上为 PDF 添加水印 — Scan Cam",
      "description": "在 iPhone 上为扫描件或 PDF 的每一页加上「机密」或您自己的文字。Scan Cam Pro 分步指南。",
      "h1": "如何在 iPhone 上为 PDF 添加水印",
      "lead": "只用于某一用途的身份证件复印件，一份不能外传的草稿：横跨页面的水印说明了这份文档的用途。",
      "carte": "在文档的每一页上加上您自己的文字。",
      "corps": [
        [
          "h2",
          "添加水印"
        ],
        [
          "ol",
          [
            "打开文档，在工具栏中点按<strong>水印</strong>。",
            "输入您的文字。默认建议是「机密」；如果是身份证件的复印件，请写明用途和日期，例如「仅供租房申请使用，5月12日」。",
            "调整<strong>重复</strong>、<strong>彩色</strong>、<strong>不透明度</strong>、<strong>大小</strong>和<strong>倾斜</strong>。第 1 页的预览会随您的选择变化。",
            "点按<strong>完成</strong>。水印会加到文档的每一页上。"
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
          "<strong>请先复制一份。</strong>点按「完成」后，水印就会固定在页面里：要去掉它，只能重新扫描这些页面。请先在文档库中复制该文档，再给副本加水印。"
        ],
        [
          "h2",
          "分享"
        ],
        [
          "p",
          "点按<strong>分享</strong>，选择 PDF，然后发送或存储到“文件”App。"
        ],
        [
          "note",
          "<strong>免费还是 Pro？</strong>水印属于 Pro 订阅功能，订阅含 7 天免费试用；在试用结束前取消，不会产生任何费用。"
        ],
        [
          "h2",
          "小技巧"
        ],
        [
          "ul",
          [
            "重复铺满且倾斜的水印，比角落里的一行字更难被裁掉。",
            "不透明度要调得足够低，让文档内容透过水印仍然清晰可读。"
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
