// Tous les textes du site en chinois simplifié. Voir `fr.js` pour les notes.
//
// La vitrine reprend MOT POUR MOT la description de la fiche App Store chinoise
// (`BOUTIQUE.md`), déjà relue et publiée. Les libellés de l'application cités
// dans l'assistance (滤镜, 去除阴影, 分享) viennent du dictionnaire `i18n/zh.ts`.
//
// ⚠️ La foire aux questions, elle, n'existait nulle part : elle est traduite
// pour ce site. Pierre ne peut pas la relire. Voir PLAN.md, bloc S6.
//
// La fiche chinoise vouvoie (您), à la différence de l'espagnol qui tutoie.

module.exports = {
  code: 'zh',
  nom: '简体中文',

  fichiers: {
    accueil: 'home-zh.html',
    assistance: 'support-zh.html',
    conditions: 'terms-zh.html',
    confidentialite: 'privacy-zh.html',
  },

  menu: {
    accueil: '首页',
    assistance: '支持',
    conditions: '使用条款',
    confidentialite: '隐私',
  },

  pied: {
    editeur: 'Scan Cam 由 Pierre Trochet 发布。',
    appstore: '在 App Store 下载',
    liens: {
      accueil: '首页',
      assistance: '支持',
      conditions: '使用条款',
      confidentialite: '隐私政策',
    },
  },

  meta: {
    accueil: {
      titre: 'Scan Cam — 不离开您 iPhone 的文档扫描仪',
      description: 'Scan Cam 把您的 iPhone 变成一台文档扫描仪。无需账号，没有服务器，没有广告。',
    },
    assistance: {
      titre: '支持 — Scan Cam',
      description: 'Scan Cam 应用的帮助与联系方式。',
    },
    conditions: {
      titre: '使用条款 — Scan Cam',
      description: 'Scan Cam 以及 Scan Cam Pro 订阅的使用条款。',
    },
    confidentialite: {
      titre: '隐私政策 — Scan Cam',
      description: '您的文档留在手机上：没有账号，没有我们的服务器，没有统计，没有广告。',
    },
  },

  accueil: {
    badge: '免费、无需账号、没有广告',
    h1: '永远不离开您 iPhone 的文档扫描仪。',
    lead:
      '拍下一张纸，应用会找到它的边缘，把它校正，让文字变清晰：您得到的是一份真正的扫描件，而不是一张纸的照片。',
    image: {
      src: 'images/filtres-en.jpg',
      largeur: 560,
      hauteur: 1212,
      alt:
        'Scan Cam 的滤镜界面：顶部是文档的各个页面，下面是四种效果、一个强度滑块，以及一个去除阴影的开关。',
    },
    comparaison: {
      titre: '同一页纸，经 Scan Cam 处理后的样子。',
      avant: {
        src: 'images/avant.jpg',
        largeur: 760,
        hauteur: 1013,
        alt: '一份揉皱的合同，整页放在木桌上拍摄：纸张发灰、有折痕，而且有点歪。',
        legende: '照片',
      },
      apres: {
        src: 'images/apres.jpg',
        largeur: 760,
        hauteur: 1003,
        alt: '同一份合同经 Scan Cam 处理后：页面端正洁白，没有折痕也没有阴影，文字清晰。',
        legende: '扫描件',
      },
      legende: '在桌上揉皱着拍下，再还给您一张端正、洁白、清晰的页面。两张都是整页，没有做任何裁切。',
    },
    appstore: {
      note: 'iPhone 和 iPad。',
    },
    confidentialite: {
      titre: '没有任何东西离开您的 iPhone。',
    },
    promesse:
      '而且这一切都在您的手机上完成。无需注册账号，没有任何内容被发送到服务器，也没有广告。您的发票、合同和身份证件永远不会离开您的 iPhone——除非哪一天您自己决定分享它们。',

    sectionsTitre: '它能做的一切',
    sections: [
      {
        icone: 'scanner',
        titre: '扫描',
        points: [
          '自动识别边缘并校正页面，拍歪了也没关系',
          '四种效果：原始照片、彩色、灰度、黑白',
          '强度用手指调节，预览实时跟随',
          '一键去除阴影，适合在灯下或手下拍摄的页面',
          '一个文档可含多页，可重新排序、旋转或移除',
        ],
      },
      {
        icone: 'dossier',
        titre: '整理',
        points: [
          '文件夹和子文件夹，就像在电脑上一样',
          '搜索也能找到藏在文件夹深处的内容，并告诉您它在哪里',
          '重命名、移动、复制、删除',
        ],
      },
      {
        icone: 'partager',
        titre: '完成与分享',
        points: [
          '导出为 PDF 或 JPEG',
          '在页面上添加文字',
          '直接从应用打印',
          '保存到「文件」应用，或通过 iPhone 的分享面板发送',
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
          '在 Scan Cam 中打开的一个文档：页面预览、下方的页面缩略图，以及那一排工具——分享、滤镜、提取文字、水印、签名、打印。',
      },
      prix: '每年 24.99 €，含 7 天免费试用。',
      prixControle: '24.99 €',
      gratuit:
        '免费版功能完整，永不过期：扫描、整理、滤镜、批注、打印和导出 PDF，想用多少就用多少。免费版导出的 PDF 会在页面底部带有一行小字「Scanned with Scan Cam」。',
      intro: 'Pro 订阅另外提供：',
      points: [
        '不带任何标记的 PDF',
        '文字识别，读取页面内容并交给您复制',
        '签名，用手指书写并放在您想要的位置',
        '水印，斜跨整个页面',
        '将多个文档合并为一个',
        '把页面抽取出来，生成新的文档',
        '导出为 Word（.docx）和 Excel（.xlsx）',
      ],
      note: '文字识别在手机上运行，无需联网：可识别拉丁字母、日文和中文。',
    },

    contact: {
      titre: '有问题吗？',
      texte: '给我写信：回复的人就是我本人。',
    },
  },

  assistance: {
    h1: '支持',
    lead:
      '有疑问、遇到问题，或者有想法？请给我写信。Scan Cam 背后没有客服团队：读信和回信的都是我本人。',
    carte: {
      note: '如果是显示方面的问题，一张截图会很有帮助：同时按下侧边按钮和音量调高键。',
    },
    faqTitre: '常见问题',
    faq: [
      {
        q: '怎样扫描一份文档？',
        r: [
          '点击相机按钮，把纸张放进取景框。iPhone 会自己找到边缘并把页面校正，即使拍歪了也没关系。您可以把多个页面连续加入同一个文档。',
        ],
      },
      {
        q: '我的文档保存在哪里？',
        r: [
          '在您的 iPhone 上，位于应用的私有空间里。它们不会被发送到任何地方。如果您手机的 iCloud 备份是开启的，它们会由 Apple 与手机上的其他内容一起备份。',
        ],
      },
      {
        q: '页面上有阴影，怎么办？',
        r: [
          '打开文档，进入<strong>滤镜</strong>，打开<strong>去除阴影</strong>。阴影会消失，纸面重新变得处处洁白。如果结果不合心意，可以马上关掉：原始照片始终保留。',
        ],
      },
      {
        q: '怎样导出为 PDF？',
        r: [
          '打开文档并点击<strong>分享</strong>，然后选择格式。PDF 和 JPEG 是免费的；Word 和 Excel 属于 Pro 订阅。从那里您可以发送文件、保存到「文件」应用，或者打印。',
        ],
      },
      {
        q: '哪些是免费的，哪些是收费的？',
        r: [
          '扫描、整理、文件夹、搜索、滤镜、添加文字、打印和导出 PDF 都是免费的，没有时间限制，也没有数量限制。免费版导出的 PDF 会在页面底部带有一行小字「Scanned with Scan Cam」。',
          'Pro 订阅会去掉这行小字，并增加文字识别、签名、水印、合并文档、抽取页面，以及导出为 Word 和 Excel。',
        ],
      },
      {
        q: '怎样管理或取消订阅？',
        r: [
          '在您 iPhone 上的 Apple 账户设置里。订阅只能在那里管理和取消。由于收款方是 Apple，应用无法代您取消。在免费试用结束前取消，不会产生任何费用。',
        ],
      },
      {
        q: '可以导入我已有的 PDF 吗？',
        r: [
          '不可以。导入接受的是图片——相册里的照片，或在「文件」应用中选择的图片。PDF 会显示为灰色，无法选择。',
        ],
      },
      {
        q: '文字识别需要联网吗？',
        r: [
          '不需要。文字由您的 iPhone 自己读取，无需连接网络，文档的内容也绝不会发送给外部服务。可识别拉丁字母、日文和中文。',
        ],
      },
      {
        q: '应用支持哪些语言？',
        r: ['法语、英语、西班牙语、德语、日语和中文。语言可以在应用的设置里切换。'],
      },
      {
        q: '我不小心删除了一个文档。',
        r: [
          '删除文档会把它从手机上抹掉，而且没有回收站：由于它从未被发送到别处，所以别的地方也不存在。如果您 iPhone 的 iCloud 备份当时是开启的，完整恢复手机有可能把它找回来。',
        ],
      },
    ],
  },

  juridique: {
    conditions: { h1: '使用条款' },
    confidentialite: { h1: '隐私政策' },
    apple: {
      href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
      cherche: '点击本页底部的链接可阅读全文。',
      remplace: '可在 <a href="{lien}">Apple 网站</a>阅读全文。',
    },
  },
};
