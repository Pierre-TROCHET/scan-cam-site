// Tous les textes du site en coréen. Voir `fr.js` pour les notes générales.
//
// Le style est la forme polie (합니다/하세요), celle du dictionnaire de
// l'application. Les libellés cités dans l'assistance (필터, 그림자 제거, 공유)
// et les noms des outils viennent de `i18n/ko.ts` — ce sont les mots affichés
// à l'écran.
//
// Le coréen sépare ses mots par des espaces et emploie la ponctuation latine
// (. , :) : pas de deux-points pleine chasse comme en japonais ou en chinois.
//
// ⚠️ Rien de ce fichier n'a été relu par un lecteur coréen. Pierre ne peut pas
// le relire. Voir PLAN.md, bloc S6.

module.exports = {
  code: 'ko',
  nom: '한국어',

  // La phrase proposee au visiteur dont le navigateur parle cette langue,
  // quand il arrive sur une page qui n en est pas. Elle est donc ecrite DANS
  // cette langue, pour quelqu un qui ne lit peut-etre aucune des autres.
  suggestion: {
    phrase: '이 페이지는 한국어로도 볼 수 있습니다.',
    fermer: '닫기',
  },

  fichiers: {
    accueil: 'home-ko.html',
    assistance: 'support-ko.html',
    conditions: 'terms-ko.html',
    confidentialite: 'privacy-ko.html',
  },

  menu: {
    accueil: '홈',
    assistance: '지원',
    conditions: '이용 약관',
    confidentialite: '개인정보',
  },

  pied: {
    editeur: 'Scan Cam은 Pierre Trochet이 제공합니다.',
    appstore: 'App Store에서 다운로드',
    liens: {
      accueil: '홈',
      assistance: '지원',
      conditions: '이용 약관',
      confidentialite: '개인정보 처리방침',
    },
  },

  meta: {
    accueil: {
      titre: 'Scan Cam — iPhone 밖으로 나가지 않는 문서 스캐너',
      description:
        'Scan Cam은 iPhone을 문서 스캐너로 바꿔 줍니다. 계정도, 서버도, 광고도 없습니다.',
    },
    assistance: {
      titre: '지원 — Scan Cam',
      description: 'Scan Cam 앱 도움말 및 문의.',
    },
    conditions: {
      titre: '이용 약관 — Scan Cam',
      description: 'Scan Cam 및 Scan Cam Pro 구독의 이용 약관.',
    },
    confidentialite: {
      titre: '개인정보 처리방침 — Scan Cam',
      description:
        '문서는 휴대폰에 남습니다. 계정도, 자체 서버도, 이용 분석도, 광고도 없습니다.',
    },
  },

  accueil: {
    badge: '무료 · 계정 없음 · 광고 없음',
    h1: 'iPhone 밖으로 나가지 않는 문서 스캐너.',
    lead:
      '종이 한 장을 찍기만 하면 앱이 가장자리를 찾아 반듯하게 펴고 텍스트를 선명하게 만듭니다. 종이를 찍은 사진이 아니라 진짜 스캔이 됩니다.',
    image: {
      src: 'images/filtres-ko.jpg',
      largeur: 560,
      hauteur: 1212,
      alt:
        'Scan Cam의 필터 화면. 위쪽에는 문서의 페이지가 있고, 그 아래에 네 가지 효과, 강도 슬라이더, 그림자 제거 스위치가 있습니다.',
    },
    comparaison: {
      titre: '같은 종이 한 장이 Scan Cam을 거치면 이렇게 됩니다.',
      avant: {
        src: 'images/avant.jpg',
        largeur: 760,
        hauteur: 1013,
        alt:
          '구겨진 계약서 전체를 나무 탁자 위에 놓고 찍은 사진. 종이는 회색빛이고 주름이 졌으며 조금 비뚤어져 있습니다.',
        legende: '사진',
      },
      apres: {
        src: 'images/apres.jpg',
        largeur: 760,
        hauteur: 1003,
        alt:
          'Scan Cam을 거친 같은 계약서 전체. 페이지는 반듯하고 하얗고, 주름도 그림자도 없으며 텍스트가 선명합니다.',
        legende: '스캔',
      },
      legende:
        '탁자 위에서 구겨진 채로 찍은 종이가 반듯하고 하얗고 선명한 한 장이 됩니다. 두 장 모두 페이지 전체이며, 잘라 낸 부분은 없습니다.',
    },
    appstore: {
      note: 'iPhone 및 iPad.',
    },
    confidentialite: {
      titre: 'iPhone 밖으로 나가는 것은 없습니다.',
    },
    promesse:
      '게다가 모든 작업은 휴대폰 안에서 이루어집니다. 만들어야 할 계정도, 서버로 전송되는 것도, 광고도 없습니다. 청구서도, 계약서도, 신분증도 직접 공유하기로 한 날이 아니면 iPhone 밖으로 나가지 않습니다.',

    sectionsTitre: '할 수 있는 일',
    sections: [
      {
        icone: 'scanner',
        titre: '스캔',
        points: [
          '비스듬히 찍어도 가장자리를 감지해 반듯하게',
          '네 가지 효과: 원본 사진, 컬러, 회색조, 흑백',
          '손가락으로 조절하는 강도와 바로 따라오는 미리보기',
          '조명이나 손 때문에 생긴 그림자를 탭 한 번으로 제거',
          '한 문서에 여러 페이지. 순서 변경, 회전, 빼기도 자유롭게',
        ],
      },
      {
        icone: 'dossier',
        titre: '정리',
        points: [
          '컴퓨터처럼 폴더와 하위 폴더',
          '폴더 깊숙이 넣어 둔 것도 찾아 주고, 어디에 있는지 알려 주는 검색',
          '이름 변경, 이동, 복사, 삭제',
        ],
      },
      {
        icone: 'partager',
        titre: '마무리와 공유',
        points: [
          'PDF 또는 JPEG로 내보내기',
          '페이지에 텍스트 추가',
          '앱에서 바로 프린트',
          '“파일” 앱에 저장하거나 iPhone의 공유 시트로 보내기',
        ],
      },
    ],

    pro: {
      titre: 'Scan Cam Pro',
      image: {
        src: 'images/document-ko.jpg',
        largeur: 560,
        hauteur: 1212,
        alt:
          'Scan Cam에서 연 문서. 페이지 미리보기, 아래쪽의 페이지 썸네일, 그리고 도구 줄 — 공유, 필터, 텍스트 추출, 워터마크, 서명, 프린트.',
      },
      // {prix} reçoit le prix du pays du visiteur, écrit à sa façon (voir prix.js).
      // Le pays par défaut est celui d’un navigateur qui ne dit pas le sien.
      prix: '7일 무료 체험 후 연 {prix}.',
      prixPays: 'App Store 가격 · {pays}',
      paysParDefaut: 'KR',
      gratuit:
        '무료 버전은 기간 제한 없이 모든 기본 기능을 갖추고 있습니다. 스캔, 정리, 필터, 텍스트 추가, 프린트, PDF 내보내기를 원하는 만큼 사용할 수 있습니다. 무료 버전의 PDF에는 페이지 하단에 “Scanned with Scan Cam”이라는 작은 문구가 들어갑니다.',
      intro: 'Pro 구독을 하면 다음 기능이 추가됩니다.',
      points: [
        '문구가 전혀 없는 PDF',
        '텍스트 인식. 페이지를 읽어 복사할 수 있는 텍스트로 만들어 줍니다',
        '서명. 손가락으로 그려서 원하는 곳에 넣을 수 있습니다',
        '워터마크. 페이지를 비스듬히 가로지릅니다',
        '여러 문서를 하나로 병합',
        '페이지를 추출해 새로운 문서로',
        'Word(.docx) 및 Excel(.xlsx)로 내보내기',
      ],
      note:
        '텍스트 인식은 인터넷 연결 없이 휴대폰 안에서만 작동합니다. 로마자, 일본어, 중국어, 한국어를 읽습니다.',
    },

    contact: {
      titre: '궁금한 점이 있으신가요?',
      texte: '메일을 보내 주세요. 제가 직접 답장합니다.',
    },
  },

  assistance: {
    h1: '지원',
    lead:
      '질문, 문제, 제안이 있으면 메일을 보내 주세요. Scan Cam 뒤에는 고객 센터가 없습니다. 메일을 읽고 답장하는 사람은 저 자신입니다.',
    carte: {
      note:
        '화면 표시 문제라면 스크린샷이 큰 도움이 됩니다. 측면 버튼과 음량 높이기 버튼을 동시에 누르세요.',
    },
    faqTitre: '자주 묻는 질문',
    faq: [
      {
        q: '문서는 어떻게 스캔하나요?',
        r: [
          '카메라 버튼을 누르고 종이가 화면에 들어오도록 맞추세요. iPhone이 알아서 가장자리를 찾아, 비스듬히 찍어도 페이지를 반듯하게 펴 줍니다. 같은 문서에 여러 페이지를 이어서 추가할 수 있습니다.',
        ],
      },
      {
        q: '문서는 어디에 저장되나요?',
        r: [
          'iPhone 안에 있는 앱 전용 공간에 저장됩니다. 어디로도 전송되지 않습니다. iPhone의 iCloud 백업이 켜져 있으면 휴대폰의 다른 데이터와 함께 Apple이 백업합니다.',
        ],
      },
      {
        q: '페이지에 그림자가 있습니다. 어떻게 해야 하나요?',
        r: [
          '문서를 열고 <strong>필터</strong>에서 <strong>그림자 제거</strong>를 켜세요. 그림자가 사라지고 종이 전체가 다시 하얘집니다. 결과가 마음에 들지 않으면 바로 끌 수 있습니다. 원본 사진은 항상 보관됩니다.',
        ],
      },
      {
        q: 'PDF로 내보내려면 어떻게 하나요?',
        r: [
          '문서를 열고 <strong>공유</strong>를 탭한 다음 형식을 선택하세요. PDF와 JPEG는 무료이며, Word와 Excel은 Pro 구독에 포함됩니다. 그다음 파일을 보내거나, “파일” 앱에 저장하거나, 프린트할 수 있습니다.',
        ],
      },
      {
        q: '무엇이 무료이고 무엇이 유료인가요?',
        r: [
          '스캔, 정리, 폴더, 검색, 필터, 텍스트 추가, 프린트, PDF 내보내기는 무료이며 기간이나 횟수 제한이 없습니다. 무료 버전의 PDF에는 페이지 하단에 “Scanned with Scan Cam”이라는 작은 문구가 들어갑니다.',
          'Pro 구독은 이 문구를 없애고, 텍스트 인식, 서명, 워터마크, 문서 병합, 페이지 추출, Word 및 Excel 내보내기를 추가합니다.',
        ],
      },
      {
        q: '구독은 어떻게 관리하거나 해지하나요?',
        r: [
          'iPhone의 Apple 계정 설정에서 합니다. 구독의 관리와 해지는 그곳에서만 할 수 있습니다. 결제는 Apple이 처리하므로 앱이 대신 해지할 수는 없습니다. 무료 체험 기간이 끝나기 전에 해지하면 요금이 청구되지 않습니다.',
        ],
      },
      {
        q: '이미 가지고 있는 PDF를 가져올 수 있나요?',
        r: [
          '아니요. 가져올 수 있는 것은 이미지입니다. 사진 앱의 사진이나 “파일” 앱에서 선택한 이미지입니다. PDF는 흐리게 표시되어 선택할 수 없습니다.',
        ],
      },
      {
        q: '텍스트 인식에 인터넷이 필요한가요?',
        r: [
          '아니요. 텍스트는 인터넷 연결 없이 iPhone 자체가 읽으며, 문서의 내용은 외부 서비스로 절대 전송되지 않습니다. 로마자, 일본어, 중국어, 한국어를 읽습니다.',
        ],
      },
      {
        q: '앱은 어떤 언어로 사용할 수 있나요?',
        r: [
          '프랑스어, 영어, 스페인어, 독일어, 이탈리아어, 포르투갈어(브라질), 일본어, 중국어, 한국어입니다. 언어는 앱 설정에서 바꿀 수 있습니다.',
        ],
      },
      {
        q: '실수로 문서를 삭제했습니다.',
        r: [
          '문서를 삭제하면 휴대폰에서 지워지며, 휴지통은 없습니다. 어디로도 전송한 적이 없으므로 다른 곳에도 남아 있지 않습니다. iPhone의 iCloud 백업이 켜져 있었다면, 휴대폰 전체를 복원하면 되돌아올 수도 있습니다.',
        ],
      },
    ],
  },

  juridique: {
    conditions: { h1: '이용 약관' },
    confidentialite: { h1: '개인정보 처리방침' },
    apple: {
      href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
      cherche: '이 페이지 하단의 링크를 탭하면 전문을 읽을 수 있습니다.',
      remplace: '전문은 <a href="{lien}">Apple 웹사이트</a>에서 읽을 수 있습니다.',
    },
  },
};
