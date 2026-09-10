// Tous les textes du site en japonais. Voir `fr.js` pour les notes générales.
//
// La vitrine reprend MOT POUR MOT la description de la fiche App Store
// japonaise (`BOUTIQUE.md`), déjà relue et publiée. Les libellés de
// l'application cités dans l'assistance (フィルタ, 影を取り除く, 共有) viennent
// du dictionnaire `i18n/ja.ts` — ce sont les mots affichés à l'écran.
//
// ⚠️ La foire aux questions, elle, n'existait nulle part : elle est traduite
// pour ce site. Pierre ne peut pas la relire. Voir PLAN.md, bloc S6.

module.exports = {
  code: 'ja',
  nom: '日本語',

  // La phrase proposee au visiteur dont le navigateur parle cette langue,
  // quand il arrive sur une page qui n en est pas. Elle est donc ecrite DANS
  // cette langue, pour quelqu un qui ne lit peut-etre aucune des autres.
  suggestion: {
    phrase: 'このページは日本語でもご覧いただけます。',
    fermer: '閉じる',
  },

  fichiers: {
    accueil: 'home-ja.html',
    assistance: 'support-ja.html',
    conditions: 'terms-ja.html',
    confidentialite: 'privacy-ja.html',
  },

  menu: {
    accueil: 'ホーム',
    assistance: 'サポート',
    conditions: '利用規約',
    confidentialite: 'プライバシー',
  },

  pied: {
    editeur: 'Scan Cam の発行者は Pierre Trochet です。',
    appstore: 'App Store でダウンロード',
    liens: {
      accueil: 'ホーム',
      assistance: 'サポート',
      conditions: '利用規約',
      confidentialite: 'プライバシーポリシー',
    },
  },

  meta: {
    accueil: {
      titre: 'Scan Cam — iPhone から出ない書類スキャナー',
      description:
        'Scan Cam は iPhone を書類スキャナーに変えます。アカウントも、サーバーも、広告もありません。',
    },
    assistance: {
      titre: 'サポート — Scan Cam',
      description: 'Scan Cam アプリのヘルプとお問い合わせ。',
    },
    conditions: {
      titre: '利用規約 — Scan Cam',
      description: 'Scan Cam および Scan Cam Pro サブスクリプションの利用規約。',
    },
    confidentialite: {
      titre: 'プライバシーポリシー — Scan Cam',
      description:
        '書類は手元の iPhone に残ります。アカウントなし、当方のサーバーなし、アクセス解析なし、広告なし。',
    },
  },

  accueil: {
    badge: '無料・アカウント不要・広告なし',
    h1: 'iPhone から出ない書類スキャナー。',
    lead:
      '紙を一枚撮るだけで、アプリが縁を見つけ、まっすぐに直し、文字をくっきりさせます。できあがるのは紙を写した写真ではなく、本物のスキャンです。',
    image: {
      src: 'images/filtres-en.jpg',
      largeur: 560,
      hauteur: 1212,
      alt:
        'Scan Cam のフィルタ画面。上に書類のページが並び、その下に4種類の仕上がり、強さのスライダー、影を取り除くスイッチがあります。',
    },
    comparaison: {
      titre: '同じ一枚が、Scan Cam を通すとこうなります。',
      avant: {
        src: 'images/avant.jpg',
        largeur: 760,
        hauteur: 1013,
        alt:
          'くしゃくしゃになった契約書を木のテーブルの上で撮った写真。紙は灰色っぽく、しわが寄り、少し斜めです。',
        legende: '写真',
      },
      apres: {
        src: 'images/apres.jpg',
        largeur: 760,
        hauteur: 1003,
        alt:
          'Scan Cam を通した同じ契約書。ページはまっすぐで白く、しわも影もなく、文字がくっきりしています。',
        legende: 'スキャン',
      },
      legende:
        'テーブルの上でくしゃくしゃのまま撮った紙が、まっすぐで白く、くっきりした一枚になります。どちらもページ全体で、切り取りはしていません。',
    },
    appstore: {
      note: 'iPhone と iPad。',
    },
    confidentialite: {
      titre: 'iPhone から出るものはありません。',
    },
    promesse:
      'しかも、すべては手元の iPhone の中で行われます。アカウントを作る必要も、サーバーへ送られるものも、広告もありません。請求書も契約書も身分証も、ご自身で共有すると決めた日以外、iPhone から出ることはありません。',

    sectionsTitre: 'できること',
    sections: [
      {
        icone: 'scanner',
        titre: 'スキャン',
        points: [
          '斜めから撮っても、縁を検出してまっすぐに',
          '4種類の仕上がり：元の写真、カラー、グレースケール、白黒',
          '指で調整できる強さと、それに追従するプレビュー',
          '照明や手でできた影を、ワンタップで除去',
          '1つの書類に複数ページ。並べ替え、回転、削除も自由',
        ],
      },
      {
        icone: 'dossier',
        titre: '整理',
        points: [
          'パソコンのようなフォルダとサブフォルダ',
          'フォルダの奥にしまったものも見つけ、どこにあるかを教える検索',
          '名前の変更、移動、複製、削除',
        ],
      },
      {
        icone: 'partager',
        titre: '仕上げと共有',
        points: [
          'PDF または JPEG で書き出し',
          'ページに文字を追加',
          'アプリから直接プリント',
          'ファイルアプリに保存、または iPhone の共有シートから送信',
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
          'Scan Cam で開いた書類。ページのプレビュー、下に並ぶページのサムネイル、そして道具の列 — 共有、フィルタ、文字を読み取る、透かし、署名、プリント。',
      },
      prix: '年額 24.99 €、7 日間の無料体験のあと。',
      prixControle: '24.99 €',
      gratuit:
        '無料版は期限なしで一通りそろっています。スキャン、整理、フィルタ、書き込み、印刷、PDF への書き出しは好きなだけ。無料版の PDF には、ページ下部に「Scanned with Scan Cam」という小さな一行が入ります。',
      intro: 'Pro にすると、さらに：',
      points: [
        '一行も入らない PDF',
        '文字認識。ページを読み取り、コピーできる文字にします',
        '署名。指で描いて、好きな場所に置けます',
        '透かし。ページを斜めに横切ります',
        '複数の書類を1つに結合',
        'ページを抜き出して新しい書類に',
        'Word（.docx）と Excel（.xlsx）への書き出し',
      ],
      note:
        '文字認識はインターネットを使わず、端末の中だけで動きます。ラテン文字、日本語、中国語を読み取ります。',
    },

    contact: {
      titre: 'ご質問がありますか。',
      texte: 'メールをください。私自身がお返事します。',
    },
  },

  assistance: {
    h1: 'サポート',
    lead:
      'ご質問、不具合、ご提案があればメールをください。Scan Cam の裏にサポート窓口はありません。読んで返事をするのは私自身です。',
    carte: {
      note:
        '表示の不具合は、スクリーンショットがあると大変助かります。サイドボタンと音量を上げるボタンを同時に押してください。',
    },
    faqTitre: 'よくあるご質問',
    faq: [
      {
        q: '書類はどうやってスキャンしますか。',
        r: [
          'カメラのボタンを押して、紙を画面に収めてください。iPhone が自分で縁を見つけ、斜めに撮ってもページをまっすぐに直します。同じ書類に何ページでも続けて追加できます。',
        ],
      },
      {
        q: '書類はどこに保存されますか。',
        r: [
          'お使いの iPhone の中、アプリ専用の場所です。どこにも送信されません。iPhone の iCloud バックアップが有効なら、Apple によって端末の他のデータと一緒にバックアップされます。',
        ],
      },
      {
        q: 'ページに影が写っています。どうすればいいですか。',
        r: [
          '書類を開き、<strong>フィルタ</strong>から<strong>影を取り除く</strong>をオンにしてください。影が消えて、紙全体が白く戻ります。結果が気に入らなければすぐにオフにできます。元の写真は必ず残っています。',
        ],
      },
      {
        q: 'PDF に書き出すにはどうしますか。',
        r: [
          '書類を開いて<strong>共有</strong>を押し、形式を選んでください。PDF と JPEG は無料です。Word と Excel は Pro サブスクリプションに含まれます。そこからファイルを送る、ファイルアプリに保存する、プリントする、のいずれもできます。',
        ],
      },
      {
        q: '無料の範囲と有料の範囲を教えてください。',
        r: [
          'スキャン、整理、フォルダ、検索、フィルタ、文字の追加、印刷、PDF への書き出しは無料です。期間の制限も回数の制限もありません。無料版の PDF には、ページ下部に「Scanned with Scan Cam」という小さな一行が入ります。',
          'Pro サブスクリプションはこの一行を取り除き、文字認識、署名、透かし、書類の結合、ページの抜き出し、Word と Excel への書き出しを追加します。',
        ],
      },
      {
        q: 'サブスクリプションの管理や解約はどうしますか。',
        r: [
          'iPhone の Apple アカウントの設定から行います。管理も解約も、そこだけでできます。課金は Apple が行うため、アプリが代わりに解約することはできません。無料体験の終了前に解約すれば、料金はかかりません。',
        ],
      },
      {
        q: '手元にある PDF を取り込めますか。',
        r: [
          'できません。取り込めるのは画像です。写真アプリの写真か、ファイルアプリで選んだ画像になります。PDF は選べない状態で表示されます。',
        ],
      },
      {
        q: '文字認識にインターネットは必要ですか。',
        r: [
          '必要ありません。文字は iPhone 自身が読み取り、通信は行いません。書類の中身が外部のサービスへ送られることは一切ありません。ラテン文字、日本語、中国語を読み取ります。',
        ],
      },
      {
        q: 'アプリは何語で使えますか。',
        r: [
          'フランス語、英語、スペイン語、ドイツ語、日本語、中国語です。言語はアプリの設定で切り替えられます。',
        ],
      },
      {
        q: '書類を間違って削除してしまいました。',
        r: [
          '削除した書類は端末から消え、ごみ箱はありません。どこにも送信していないので、他の場所にも存在しません。iPhone の iCloud バックアップが有効だった場合は、端末を丸ごと復元すると戻ることがあります。',
        ],
      },
    ],
  },

  juridique: {
    conditions: { h1: '利用規約' },
    confidentialite: { h1: 'プライバシーポリシー' },
    apple: {
      href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
      cherche: '全文はこのページの下部のリンクから読めます。',
      remplace: '全文は<a href="{lien}">Apple のサイト</a>で読めます。',
    },
  },
};
