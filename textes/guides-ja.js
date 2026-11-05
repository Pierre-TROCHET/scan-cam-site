// Les guides de Scan Cam en japonais — traduction de `guides-en.js`, même structure.
// Les mots en gras sont les libellés de l'application en japonais (cam-scan/i18n/ja.ts).
// です・ます, comme `ja.js`. La ligne « Scanned with Scan Cam » reste en anglais : c'est ainsi
// qu'elle s'imprime dans l'application japonaise.

module.exports = {
  "code": "ja",
  "menu": "使い方ガイド",
  "accueil": {
    "fichier": "guides-ja.html",
    "titre": "使い方ガイド — Scan Cam",
    "description": "Scan Cam で、iPhone で書類をスキャン・署名・結合・読み取りする手順を紹介します。",
    "h1": "使い方ガイド",
    "lead": "iPhone のスキャナーでよく行う作業を、短く、一歩ずつ説明します。",
    "sectionTitre": "ガイドを選ぶ",
    "gratuit": "無料",
    "pro": "Pro"
  },
  "etiquette": {
    "free": "Scan Cam で無料",
    "pro": "Pro の機能 · 7 日間の無料体験"
  },
  "blocAccueil": {
    "titre": "使い方ガイド",
    "texte": "iPhone で書類をスキャン・署名・結合・読み取りする方法を、一歩ずつ説明します。",
    "tous": "すべてのガイド"
  },
  "pied": {
    "titre": "Scan Cam を試す",
    "texte": "Scan Cam は無料でダウンロードできます。スキャン、フォルダ、フィルタ、PDF への書き出しは期間の制限なく無料です。Pro サブスクリプションでは追加のツールが使え、7 日間の無料体験から始まります。",
    "youtube": "動画で見たい方は、YouTube の短いチュートリアルをどうぞ（英語）"
  },
  "liees": "ほかのガイド",
  "guides": [
    {
      "cle": "multi-page",
      "fichier": "guide-scan-multiple-pages-to-one-pdf-iphone-ja.html",
      "niveau": "free",
      "titre": "iPhone で複数ページを 1 つの PDF にスキャンする方法 — Scan Cam",
      "description": "契約書や書類の全ページを iPhone で 1 つの PDF にスキャンし、並べ替えて共有。無料、アカウント不要。",
      "h1": "iPhone で複数ページを 1 つの PDF にスキャンする方法",
      "lead": "契約書や申込書、宿題のすべてのページを、無料・アカウントなしで 1 つの PDF にスキャンします。",
      "carte": "すべての紙を 1 つの書類にスキャンし、1 つの PDF として共有します。",
      "corps": [
        [
          "h2",
          "ページをスキャンする"
        ],
        [
          "ol",
          [
            "<strong>書類をスキャン</strong>をタップし、1 枚目の紙をフレームに収めます。端が自動で見つかり、ページがまっすぐに整えられます。",
            "続きの紙を撮影して、確定します。すべてで 1 つの書類になります。",
            "ページを忘れたときは、書類を開いて<strong>ページを追加</strong>をタップします。"
          ]
        ],
        [
          "clip",
          "scan"
        ],
        [
          "h2",
          "書類を整える"
        ],
        [
          "p",
          "サムネイルを長押ししてドラッグすると、ページの順番を変えられます。× を押すとそのページが取り除かれます。ページに影がかかっているときは、<strong>フィルタ</strong>を開いて<strong>影を取り除く</strong>をオンにします。"
        ],
        [
          "clip",
          "reordonner"
        ],
        [
          "h2",
          "1 つの PDF として送る"
        ],
        [
          "p",
          "<strong>共有</strong>をタップして <strong>PDF</strong> を選び、送るか、保存するか、プリントします。"
        ],
        [
          "note",
          "<strong>無料か、Pro か？</strong> ここまでの操作はすべて無料で、ページ数の制限もありません。Pro では、PDF に入る小さな「Scanned with Scan Cam」の一行がなくなります。"
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
      "fichier": "guide-scan-receipts-iphone-ja.html",
      "niveau": "free",
      "titre": "iPhone でレシートをスキャンして整理する方法 — Scan Cam",
      "description": "紙のレシートを iPhone でくっきりした PDF にし、フォルダで整理して送れます。スキャンと整理は無料。",
      "h1": "iPhone でレシートをスキャンして整理する方法",
      "lead": "感熱紙のレシートは数か月で色あせます。受け取ったその日にスキャンして、すぐ見つかる場所に整理しましょう。",
      "carte": "紙のレシートをくっきりと保存・整理して、必要な人に送ります。",
      "corps": [
        [
          "h2",
          "レシートをスキャンする"
        ],
        [
          "ol",
          [
            "<strong>書類をスキャン</strong>をタップし、レシートを暗い色の面に置いてフレームに収めます。",
            "<strong>フィルタ</strong>を開いて<strong>白黒</strong>を選び、強さを調整して<strong>適用</strong>をタップします。"
          ]
        ],
        [
          "clip",
          "filtres"
        ],
        [
          "h2",
          "見つけやすく整理する"
        ],
        [
          "p",
          "<strong>フォルダを作成</strong>をタップして「レシート 2026」のようなフォルダを作り、レシートにはお店の名前と日付を付けましょう。検索では、ファイルやフォルダを名前で探せます。"
        ],
        [
          "clip",
          "ranger"
        ],
        [
          "h2",
          "税理士や経理担当に送る"
        ],
        [
          "p",
          "<strong>共有</strong>で、レシートを PDF として送れます。<strong>設定 → すべて書き出す</strong>では、すべての書類をフォルダごとに書き出せます。"
        ],
        [
          "note",
          "<strong>無料か、Pro か？</strong> スキャン、フィルタ、フォルダ、検索、PDF への書き出しは無料です。Pro では<strong>文字を読み取る</strong>が加わり、合計金額や日付をコピーできます。"
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
      "fichier": "guide-sign-a-document-on-iphone-ja.html",
      "niveau": "pro",
      "titre": "iPhone で書類に指で署名する方法 — Scan Cam",
      "description": "署名を一度描けば、スキャンした書類や PDF に iPhone で何度でも置けます。Scan Cam Pro の手順です。",
      "h1": "iPhone で書類に指で署名する方法",
      "lead": "プリンターもペンもいりません。署名を一度描けば、どの書類にも置けます。",
      "carte": "署名を一度描くか撮影すれば、どの書類にも置けます。",
      "corps": [
        [
          "h2",
          "署名を作る"
        ],
        [
          "ol",
          [
            "書類を開き、<strong>署名</strong>、続いて<strong>新しい署名</strong>をタップします。",
            "指でサインする（<strong>描く</strong>）か、紙に書いた署名を撮影して（<strong>写真</strong>）、<strong>保存</strong>をタップします。署名は次のために保存されます。"
          ]
        ],
        [
          "h2",
          "ページに置く"
        ],
        [
          "ol",
          [
            "ページを選び、署名を置きたい場所までドラッグして、<strong>サイズ</strong>を調整します。",
            "<strong>完了</strong>をタップします。署名が PDF に書き込まれます。"
          ]
        ],
        [
          "clip",
          "signature"
        ],
        [
          "note",
          "<strong>先にコピーを作りましょう。</strong> 署名はあとから消せないので、署名のない版も残したいときに必要です。描いた署名は画像で、認証された電子署名ではありません。"
        ],
        [
          "note",
          "<strong>無料か、Pro か？</strong> 署名は Pro の機能で、7 日間の無料体験から始まります。"
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
      "fichier": "guide-copy-text-from-a-scan-iphone-ja.html",
      "niveau": "pro",
      "titre": "iPhone でスキャンした書類の文字をコピーする方法（OCR） — Scan Cam",
      "description": "スキャンや PDF の文字を iPhone でオフラインのまま読み取り、コピー。Scan Cam Pro の文字認識の手順です。",
      "h1": "iPhone でスキャンした書類の文字をコピーする方法",
      "lead": "文字認識（OCR）が、スキャンしたページを読み取り、コピーできる文字にします。",
      "carte": "ページを読み取り、文字をコピー。iPhone の中で、インターネットなしで。",
      "corps": [
        [
          "h2",
          "ページの文字をコピーする"
        ],
        [
          "ol",
          [
            "スキャンした書類か、<strong>読み込む → ファイル</strong>で読み込んだ PDF を開き、<strong>文字を読み取る</strong>をタップします。",
            "文字の種類（ラテン文字、日本語、中国語、韓国語）を選び、Scan Cam がページを読み取るのを待ちます。",
            "一部を選択するか、<strong>テキストをコピー</strong>をタップして全文をコピーします。"
          ]
        ],
        [
          "clip",
          "texte"
        ],
        [
          "p",
          "文字の読み取りは iPhone 自身が行い、インターネットは使いません。書類がどこかに送られることはありません。何も認識されないときは、明るい場所でもう一度スキャンしてください。"
        ],
        [
          "note",
          "<strong>無料か、Pro か？</strong> 文字認識は Pro の機能で、7 日間の無料体験から始まります。Pro では、書類を Word や Excel にも書き出せます。"
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
      "fichier": "guide-merge-pdf-files-on-iphone-ja.html",
      "niveau": "pro",
      "titre": "iPhone で PDF ファイルを結合する方法 — Scan Cam",
      "description": "複数のスキャンや PDF を、好きな順番で 1 つの PDF に iPhone で結合。Scan Cam Pro の手順です。",
      "h1": "iPhone で PDF ファイルを結合する方法",
      "lead": "いくつもの書類を、好きな順番で 1 つのファイルにまとめて送れます。元の書類はそのまま残ります。",
      "carte": "複数の書類を、好きな順番で 1 つの PDF にまとめます。",
      "corps": [
        [
          "h2",
          "結合する"
        ],
        [
          "ol",
          [
            "ライブラリで、書類を 2 つ以上選んでチェックを入れます。スキャンでも、<strong>読み込む → ファイル</strong>で読み込んだ PDF でもかまいません。",
            "<strong>結合</strong>をタップし、矢印で順番を決めて、もう一度<strong>結合</strong>をタップします。"
          ]
        ],
        [
          "clip",
          "fusion"
        ],
        [
          "p",
          "結果は、ライブラリの新しい PDF になります。<strong>共有</strong>で送りましょう。"
        ],
        [
          "note",
          "<strong>無料か、Pro か？</strong> 結合は Pro の機能で、7 日間の無料体験から始まります。PDF の読み込みと書き出しは無料のままです。"
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
      "fichier": "guide-extract-pages-from-a-pdf-on-iphone-ja.html",
      "niveau": "pro",
      "titre": "iPhone で PDF からページを抜き出す方法 — Scan Cam",
      "description": "PDF やスキャンから一部のページを iPhone で新しい書類に抜き出し、元はそのまま。Scan Cam Pro の手順です。",
      "h1": "iPhone で PDF からページを抜き出す方法",
      "lead": "必要なのは一部のページだけ？ そのページで新しい書類を作り、元の書類はそのまま残しましょう。",
      "carte": "選んだページで新しい書類を作り、元の書類は残します。",
      "corps": [
        [
          "h2",
          "ページを選ぶ"
        ],
        [
          "ol",
          [
            "書類を開き（PDF は<strong>読み込む → ファイル</strong>で読み込めます）、<strong>ページを抜き出す</strong>をタップします。",
            "残したいページにチェックを入れ、<strong>新しい書類を作る</strong>をタップします。"
          ]
        ],
        [
          "clip",
          "pages"
        ],
        [
          "p",
          "選んだページは新しい書類にコピーされ、元の書類の隣に保存されます。<strong>共有</strong>で送りましょう。"
        ],
        [
          "note",
          "<strong>無料か、Pro か？</strong> ページの抜き出しは Pro の機能で、7 日間の無料体験から始まります。"
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
      "fichier": "guide-add-a-watermark-to-a-pdf-on-iphone-ja.html",
      "niveau": "pro",
      "titre": "iPhone で PDF に透かしを入れる方法 — Scan Cam",
      "description": "「社外秘」や好きな文字を、スキャンや PDF の全ページに iPhone で入れられます。Scan Cam Pro の手順です。",
      "h1": "iPhone で PDF に透かしを入れる方法",
      "lead": "特定の用途だけに使う身分証のコピー、外に出してはいけない下書き。透かしが、その書類の用途を示します。",
      "carte": "書類の全ページに、好きな文字を入れます。",
      "corps": [
        [
          "h2",
          "透かしを入れる"
        ],
        [
          "ol",
          [
            "書類を開き、<strong>透かし</strong>をタップします。",
            "文字を入力します。身分証のコピーなら、「賃貸の申し込み用、5月12日」のように書きましょう。",
            "<strong>カラー</strong>、<strong>不透明度</strong>、<strong>サイズ</strong>を調整して、<strong>完了</strong>をタップします。すべてのページに透かしが入ります。"
          ]
        ],
        [
          "clip",
          "filigrane"
        ],
        [
          "note",
          "<strong>先にコピーを作りましょう。</strong> 透かしはあとから消せません。"
        ],
        [
          "note",
          "<strong>無料か、Pro か？</strong> 透かしは Pro の機能で、7 日間の無料体験から始まります。"
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
      "fichier": "guide-scan-a-document-on-iphone-without-a-subscription-ja.html",
      "niveau": "free",
      "titre": "サブスクなしで iPhone で書類をスキャンする方法 — Scan Cam",
      "description": "お金をかけずに iPhone で書類をスキャン：Apple の「メモ」と「ファイル」アプリでもうできます。QuickScan も無料です。Scan Cam が加えるものと、その中で無料のもの。",
      "h1": "サブスクなしで iPhone で書類をスキャンする方法",
      "lead": "サブスクは要りません。ダウンロードするアプリさえ要りません。まず無料の方法を、そのあと Scan Cam が加えるものをご紹介します。",
      "carte": "まず無料の方法（メモ、ファイル、QuickScan）、そのあと Scan Cam が加えるもの。",
      "corps": [
        [
          "h2",
          "「メモ」アプリで"
        ],
        [
          "ol",
          [
            "メモの中でカメラのボタン（またはクリップのボタン）をタップし、「書類をスキャン」を選びます。",
            "用紙を枠に収めると、iPhone が自動で撮影します。「保存」をタップし、PDF として共有します。"
          ]
        ],
        [
          "p",
          "無料で、アカウントも広告もありません。"
        ],
        [
          "h2",
          "「ファイル」アプリで"
        ],
        [
          "p",
          "画面上部の三つの点をタップし、「書類をスキャン」を選びます。PDF はいま開いているフォルダに保存されます。"
        ],
        [
          "h2",
          "無料アプリで：QuickScan"
        ],
        [
          "p",
          "「OCR Text Scanner: QuickScan」は無料で広告がなく、文字も読み取れます。料金は変わることがあるので、先に App Store で確かめてください。"
        ],
        [
          "h2",
          "Scan Cam が加えるもの"
        ],
        [
          "p",
          "よくスキャンする方に：フォルダ、きれいなページ、複数のページをまとめた 1 つの PDF、そしてご自身の iCloud への書類のコピー。スキャン、フォルダ、フィルタ、PDF への書き出しは無制限で無料です。"
        ],
        [
          "clip",
          "scan"
        ],
        [
          "note",
          "<strong>無料か、Pro か？</strong> Pro では、署名、文字の読み取り、透かし、結合、Word や Excel への書き出しが加わります。最初の 7 日間は無料で試せます。"
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
