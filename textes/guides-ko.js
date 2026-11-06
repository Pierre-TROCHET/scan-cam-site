// Les guides de Scan Cam en coréen — traduction de `guides-en.js`, même structure.
// Les mots en gras sont les libellés de l'application (cam-scan/i18n/ko.ts). Style poli
// (합니다/하세요), comme `ko.js`. La ligne « Scanned with Scan Cam » reste en anglais :
// c'est ainsi qu'elle est écrite dans le PDF.
// ⚠️ Pas encore relu par un lecteur coréen.

module.exports = {
  "code": "ko",
  "menu": "가이드",
  "accueil": {
    "fichier": "guides-ko.html",
    "titre": "가이드 — Scan Cam",
    "description": "Scan Cam으로 휴대폰에서 문서를 스캔, 서명, 병합하고 텍스트를 읽는 단계별 가이드.",
    "h1": "가이드",
    "lead": "휴대폰 스캐너로 가장 자주 하는 일들을 단계별로 짧게 안내합니다.",
    "sectionTitre": "가이드 선택",
    "gratuit": "무료",
    "pro": "Pro"
  },
  "etiquette": {
    "free": "Scan Cam 무료 기능",
    "pro": "Pro 기능 · 7일 무료 체험"
  },
  "blocAccueil": {
    "titre": "가이드",
    "texte": "휴대폰에서 문서를 스캔하고, 서명하고, 병합하고, 텍스트를 읽는 방법을 단계별로 안내합니다.",
    "tous": "전체 가이드"
  },
  "pied": {
    "titre": "Scan Cam 사용해 보기",
    "texte": "Scan Cam은 무료로 다운로드할 수 있습니다. 스캔, 폴더, 필터, PDF 내보내기는 기간 제한 없이 무료이며, Pro 구독은 추가 도구를 제공하고 7일 무료 체험으로 시작합니다.",
    "youtube": "영상으로 보고 싶다면 YouTube의 짧은 튜토리얼을 확인하세요 (영어)"
  },
  "liees": "더 많은 가이드",
  "guides": [
    {
      "cle": "multi-page",
      "fichier": "guide-scan-multiple-pages-to-one-pdf-iphone-ko.html",
      "niveau": "free",
      "titre": "휴대폰에서 여러 페이지를 하나의 PDF로 스캔하는 방법 — Scan Cam",
      "description": "계약서, 서식, 숙제의 모든 페이지를 휴대폰에서 하나의 PDF로. 무료, 계정 불필요.",
      "h1": "휴대폰에서 여러 페이지를 하나의 PDF로 스캔하는 방법",
      "lead": "계약서, 서식, 숙제의 모든 페이지를 하나의 PDF로 스캔하세요. 무료이며 계정도 필요 없습니다.",
      "carte": "모든 페이지를 한 문서로 스캔한 다음, 하나의 PDF로 공유하세요.",
      "corps": [
        [
          "h2",
          "페이지 스캔하기"
        ],
        [
          "ol",
          [
            "<strong>문서 스캔</strong>을 탭하고 첫 번째 장을 화면에 맞춥니다. 가장자리를 찾아 페이지를 반듯하게 펴 줍니다.",
            "다음 장들을 촬영한 뒤 확인합니다. 모두 하나의 문서가 됩니다.",
            "한 페이지를 빠뜨렸나요? 문서를 열고 <strong>페이지 추가</strong>를 탭합니다."
          ]
        ],
        [
          "clip",
          "scan"
        ],
        [
          "h2",
          "문서 정리하기"
        ],
        [
          "p",
          "썸네일을 길게 누른 채 끌면 페이지 순서가 바뀌고, X 표시를 누르면 페이지가 삭제됩니다. 페이지에 그림자가 졌다면 <strong>필터</strong>를 열고 <strong>그림자 제거</strong>를 켜세요."
        ],
        [
          "clip",
          "reordonner"
        ],
        [
          "h2",
          "하나의 PDF로 보내기"
        ],
        [
          "p",
          "<strong>공유</strong>를 탭하고 <strong>PDF</strong>를 선택한 다음, 보내거나 저장하거나 프린트하세요."
        ],
        [
          "note",
          "<strong>무료일까요, Pro일까요?</strong> 이 모든 기능은 무료이며 페이지 수 제한이 없습니다. Pro에서는 PDF의 작은 “Scanned with Scan Cam” 문구가 사라집니다."
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
      "fichier": "guide-scan-receipts-iphone-ko.html",
      "niveau": "free",
      "titre": "휴대폰에서 영수증을 스캔하고 정리하는 방법 — Scan Cam",
      "description": "종이 영수증을 휴대폰에서 선명한 PDF로 만들고 폴더에 정리해 회계사에게 보내세요.",
      "h1": "휴대폰에서 영수증을 스캔하고 정리하는 방법",
      "lead": "감열지 영수증은 몇 달 안에 바랩니다. 받은 날 바로 스캔해서 찾기 쉬운 곳에 정리해 두세요.",
      "carte": "종이 영수증을 선명하게 사본으로 만들어 정리하고, 필요한 사람에게 보내세요.",
      "corps": [
        [
          "h2",
          "영수증 스캔하기"
        ],
        [
          "ol",
          [
            "<strong>문서 스캔</strong>을 탭하고, 영수증을 어두운 바닥 위에 놓고 화면에 맞춥니다.",
            "<strong>필터</strong>를 열고 <strong>흑백</strong>을 선택한 다음, 강도를 조절하고 <strong>적용</strong>을 탭합니다."
          ]
        ],
        [
          "clip",
          "filtres"
        ],
        [
          "h2",
          "찾기 쉽게 정리하기"
        ],
        [
          "p",
          "<strong>새로운 폴더</strong>를 탭해 “영수증 2026” 같은 폴더를 만들고, 영수증마다 가게 이름과 날짜로 이름을 붙이세요. 검색으로 파일과 폴더를 이름으로 찾을 수 있습니다."
        ],
        [
          "clip",
          "ranger"
        ],
        [
          "h2",
          "회계사에게 보내기"
        ],
        [
          "p",
          "<strong>공유</strong>로 영수증을 PDF로 보낼 수 있습니다. <strong>설정 → 모두 내보내기</strong>는 모든 문서를 폴더별로 내보냅니다."
        ],
        [
          "note",
          "<strong>무료일까요, Pro일까요?</strong> 스캔, 필터, 폴더, 검색, PDF 내보내기는 무료입니다. Pro에서는 <strong>텍스트 추출</strong>로 합계나 날짜를 복사할 수 있습니다."
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
      "fichier": "guide-sign-a-document-on-iphone-ko.html",
      "niveau": "pro",
      "titre": "휴대폰에서 손가락으로 문서에 서명하는 방법 — Scan Cam",
      "description": "서명을 한 번 그려 두고 휴대폰의 스캔 문서나 PDF에 넣으세요. Scan Cam Pro 단계별 안내.",
      "h1": "휴대폰에서 손가락으로 문서에 서명하는 방법",
      "lead": "프린터도 펜도 필요 없습니다. 서명을 한 번 그려 두면 어떤 문서에든 넣을 수 있습니다.",
      "carte": "서명을 한 번 그리거나 촬영해 두고, 어떤 문서에든 넣으세요.",
      "corps": [
        [
          "h2",
          "서명 만들기"
        ],
        [
          "ol",
          [
            "문서를 열고 <strong>서명</strong>, 이어서 <strong>새로운 서명</strong>을 탭합니다.",
            "손가락으로 서명하거나(<strong>그리기</strong>) 종이에 쓴 서명을 촬영한 다음(<strong>사진</strong>) <strong>저장</strong>을 탭합니다. 서명은 다음에도 쓸 수 있도록 보관됩니다."
          ]
        ],
        [
          "h2",
          "페이지에 넣기"
        ],
        [
          "ol",
          [
            "페이지를 선택하고 서명을 원하는 위치로 끈 다음 <strong>크기</strong>를 조절합니다.",
            "<strong>완료</strong>를 탭합니다. 서명이 PDF에 쓰입니다."
          ]
        ],
        [
          "clip",
          "signature"
        ],
        [
          "note",
          "<strong>먼저 사본을 만드세요.</strong> 서명은 지울 수 없으니, 서명하지 않은 버전을 남기고 싶다면 꼭 필요합니다. 그린 서명은 이미지일 뿐, 공인 전자 서명이 아닙니다."
        ],
        [
          "note",
          "<strong>무료일까요, Pro일까요?</strong> 서명은 Pro에 포함되며, Pro는 7일 무료 체험으로 시작합니다."
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
      "fichier": "guide-copy-text-from-a-scan-iphone-ko.html",
      "niveau": "pro",
      "titre": "휴대폰에서 스캔한 문서의 텍스트를 복사하는 방법(OCR) — Scan Cam",
      "description": "휴대폰에서 스캔 문서나 PDF를 오프라인으로 읽고 텍스트를 복사하세요. Scan Cam Pro 안내.",
      "h1": "휴대폰에서 스캔한 문서의 텍스트를 복사하는 방법",
      "lead": "텍스트 인식(OCR)이 스캔한 페이지를 읽어 복사할 수 있는 텍스트로 바꿔 줍니다.",
      "carte": "인터넷 없이 휴대폰에서 페이지를 읽고 텍스트를 복사하세요.",
      "corps": [
        [
          "h2",
          "페이지의 텍스트 복사하기"
        ],
        [
          "ol",
          [
            "스캔본이나 <strong>가져오기 → 파일</strong>로 가져온 PDF를 열고 <strong>텍스트 추출</strong>을 탭합니다.",
            "문자(로마자, 일본어, 중국어, 한국어)를 선택하고 Scan Cam이 페이지를 읽을 때까지 기다립니다.",
            "원하는 부분을 선택하거나, <strong>텍스트 복사</strong>를 탭해 전체를 복사합니다."
          ]
        ],
        [
          "clip",
          "texte"
        ],
        [
          "p",
          "텍스트는 인터넷 없이 휴대폰 자체에서 읽히므로, 문서가 어디로도 전송되지 않습니다. 아무것도 인식되지 않으면 더 밝은 곳에서 페이지를 다시 스캔하세요."
        ],
        [
          "note",
          "<strong>무료일까요, Pro일까요?</strong> 텍스트 인식은 Pro에 포함되며, Pro는 7일 무료 체험으로 시작합니다. Pro에서는 문서를 Word와 Excel로 내보낼 수도 있습니다."
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
      "fichier": "guide-merge-pdf-files-on-iphone-ko.html",
      "niveau": "pro",
      "titre": "휴대폰에서 PDF 파일을 병합하는 방법 — Scan Cam",
      "description": "여러 스캔 문서나 PDF를 원하는 순서대로 휴대폰에서 하나의 PDF로. Scan Cam Pro 안내.",
      "h1": "휴대폰에서 PDF 파일을 병합하는 방법",
      "lead": "여러 문서를 원하는 순서대로 파일 하나로 보내세요. 원본은 그대로 남습니다.",
      "carte": "여러 문서를 원하는 순서대로 하나의 PDF로 합치세요.",
      "corps": [
        [
          "h2",
          "병합하기"
        ],
        [
          "ol",
          [
            "보관함에서 문서를 두 개 이상 체크합니다. 스캔본이든 <strong>가져오기 → 파일</strong>로 가져온 PDF든 상관없습니다.",
            "<strong>병합</strong>을 탭하고 화살표로 순서를 정한 다음, <strong>병합</strong>을 한 번 더 탭합니다."
          ]
        ],
        [
          "clip",
          "fusion"
        ],
        [
          "p",
          "결과는 보관함에 생기는 새 PDF입니다. <strong>공유</strong>로 보내세요."
        ],
        [
          "note",
          "<strong>무료일까요, Pro일까요?</strong> 병합은 Pro에 포함되며, Pro는 7일 무료 체험으로 시작합니다. PDF 가져오기와 내보내기는 계속 무료입니다."
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
      "fichier": "guide-extract-pages-from-a-pdf-on-iphone-ko.html",
      "niveau": "pro",
      "titre": "휴대폰에서 PDF의 페이지를 추출하는 방법 — Scan Cam",
      "description": "휴대폰에서 PDF나 스캔 문서의 일부 페이지를 새 문서로. 원본은 그대로. Scan Cam Pro 안내.",
      "h1": "휴대폰에서 PDF의 페이지를 추출하는 방법",
      "lead": "일부 페이지만 필요하신가요? 그 페이지로 새 문서를 만들고 원본은 그대로 두세요.",
      "carte": "고른 페이지로 새 문서를 만들고 원본은 그대로 보관하세요.",
      "corps": [
        [
          "h2",
          "페이지 고르기"
        ],
        [
          "ol",
          [
            "문서를 열고(PDF는 <strong>가져오기 → 파일</strong>로 가져옵니다) <strong>페이지 추출</strong>을 탭합니다.",
            "남길 페이지를 체크하고 <strong>새로운 문서 만들기</strong>를 탭합니다."
          ]
        ],
        [
          "clip",
          "pages"
        ],
        [
          "p",
          "고른 페이지가 새 문서로 복사되어 원본 옆에 놓입니다. <strong>공유</strong>로 보내세요."
        ],
        [
          "note",
          "<strong>무료일까요, Pro일까요?</strong> 페이지 추출은 Pro에 포함되며, Pro는 7일 무료 체험으로 시작합니다."
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
      "fichier": "guide-add-a-watermark-to-a-pdf-on-iphone-ko.html",
      "niveau": "pro",
      "titre": "휴대폰에서 PDF에 워터마크를 넣는 방법 — Scan Cam",
      "description": "휴대폰에서 스캔 문서나 PDF의 모든 페이지에 “대외비”나 원하는 문구를 넣으세요.",
      "h1": "휴대폰에서 PDF에 워터마크를 넣는 방법",
      "lead": "한 가지 용도로만 쓸 신분증 사본, 밖으로 돌면 안 되는 초안: 워터마크가 문서의 용도를 알려 줍니다.",
      "carte": "문서의 모든 페이지에 원하는 문구를 넣으세요.",
      "corps": [
        [
          "h2",
          "워터마크 넣기"
        ],
        [
          "ol",
          [
            "문서를 열고 <strong>워터마크</strong>를 탭합니다.",
            "문구를 입력합니다. 신분증 사본이라면 “임대 신청용, 5월 12일”처럼 적으세요.",
            "<strong>컬러</strong>, <strong>불투명도</strong>, <strong>크기</strong>를 조절하고 <strong>완료</strong>를 탭합니다. 모든 페이지에 워터마크가 들어갑니다."
          ]
        ],
        [
          "clip",
          "filigrane"
        ],
        [
          "note",
          "<strong>먼저 사본을 만드세요.</strong> 워터마크는 나중에 지울 수 없습니다."
        ],
        [
          "note",
          "<strong>무료일까요, Pro일까요?</strong> 워터마크는 Pro에 포함되며, Pro는 7일 무료 체험으로 시작합니다."
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
      "fichier": "guide-scan-a-document-on-iphone-without-a-subscription-ko.html",
      "niveau": "free",
      "titre": "구독 없이 iPhone에서 문서를 스캔하는 방법 — Scan Cam",
      "description": "돈을 내지 않고 iPhone에서 문서 스캔하기: Apple의 메모와 파일 앱으로 이미 할 수 있고, QuickScan도 무료입니다. Scan Cam이 더해 주는 것과 그 안에서 무료인 것.",
      "h1": "구독 없이 iPhone에서 문서를 스캔하는 방법",
      "lead": "구독은 필요 없고, 내려받을 앱조차 필요 없습니다. 먼저 무료 방법을, 그다음 Scan Cam이 더해 주는 것을 알려 드립니다.",
      "carte": "먼저 무료 방법(메모, 파일, QuickScan), 그다음 Scan Cam이 더해 주는 것.",
      "corps": [
        [
          "h2",
          "메모 앱으로"
        ],
        [
          "ol",
          [
            "메모에서 카메라 버튼(또는 클립 버튼)을 탭한 뒤 “문서 스캔”을 선택합니다.",
            "종이를 화면에 맞추면 iPhone이 자동으로 촬영합니다. “저장”을 탭한 다음 PDF로 공유하세요."
          ]
        ],
        [
          "p",
          "무료이고, 계정도 광고도 없습니다."
        ],
        [
          "h2",
          "파일 앱으로"
        ],
        [
          "p",
          "화면 위쪽의 점 세 개를 탭한 뒤 “문서 스캔”을 선택합니다. PDF가 지금 있는 폴더에 저장됩니다."
        ],
        [
          "h2",
          "무료 앱으로: QuickScan"
        ],
        [
          "p",
          "“OCR Text Scanner: QuickScan”은 무료이고 광고가 없으며 텍스트도 읽습니다. 가격은 바뀔 수 있으니 먼저 App Store에서 확인하세요."
        ],
        [
          "h2",
          "Scan Cam이 더해 주는 것"
        ],
        [
          "p",
          "자주 스캔한다면: 폴더, 깨끗한 페이지, 여러 페이지를 담은 하나의 PDF, 그리고 본인의 iCloud에 두는 사본. 스캔, 폴더, 필터, PDF 내보내기는 제한 없이 무료입니다."
        ],
        [
          "clip",
          "scan"
        ],
        [
          "note",
          "<strong>무료일까요, Pro일까요?</strong> Pro는 서명, 텍스트 추출, 워터마크, 병합, Word나 Excel로 내보내기를 더하며, 7일 무료 체험으로 시작합니다."
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
