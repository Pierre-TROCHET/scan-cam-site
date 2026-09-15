// Tous les textes du site en portugais du Brésil. Voir `fr.js` pour les notes générales.
//
// La vitrine suit la fiche App Store portugaise, et les libellés de
// l'application cités dans l'assistance (Filtros, Remover sombras,
// Compartilhar) sont ceux du dictionnaire `i18n/pt.ts` — ce sont les mots que
// l'utilisateur voit à l'écran. « celular » et « app », comme le dictionnaire.
//
// « Você », comme dans le dictionnaire de l'application.

module.exports = {
  code: 'pt',
  nom: 'Português (Brasil)',

  // La phrase proposee au visiteur dont le navigateur parle cette langue,
  // quand il arrive sur une page qui n en est pas. Elle est donc ecrite DANS
  // cette langue, pour quelqu un qui ne lit peut-etre aucune des autres.
  suggestion: {
    phrase: 'Esta página também está disponível em português.',
    fermer: 'Fechar',
  },

  fichiers: {
    accueil: 'home-pt.html',
    assistance: 'support-pt.html',
    conditions: 'terms-pt.html',
    confidentialite: 'privacy-pt.html',
  },

  menu: {
    accueil: 'Início',
    assistance: 'Ajuda',
    conditions: 'Termos',
    confidentialite: 'Privacidade',
  },

  pied: {
    editeur: 'O Scan Cam é publicado por Pierre Trochet.',
    appstore: 'Baixar na App Store',
    liens: {
      accueil: 'Início',
      assistance: 'Ajuda',
      conditions: 'Termos de Uso',
      confidentialite: 'Política de Privacidade',
    },
  },

  meta: {
    accueil: {
      titre: 'Scan Cam — o scanner de documentos que fica no seu iPhone',
      description:
        'O Scan Cam transforma seu iPhone em um scanner de documentos. Sem conta, sem servidor, sem anúncios.',
    },
    assistance: {
      titre: 'Ajuda — Scan Cam',
      description: 'Ajuda e contato para o app Scan Cam.',
    },
    conditions: {
      titre: 'Termos de Uso — Scan Cam',
      description: 'Os termos de uso do Scan Cam e da assinatura Scan Cam Pro.',
    },
    confidentialite: {
      titre: 'Política de Privacidade — Scan Cam',
      description:
        'Seus documentos ficam no seu celular: sem conta, sem servidor nosso, sem medição de audiência, sem anúncios.',
    },
  },

  accueil: {
    badge: 'Grátis, sem conta, sem anúncios',
    h1: 'O scanner de documentos que nunca sai do seu iPhone.',
    lead:
      'Você fotografa uma folha, o app detecta as bordas, endireita a página e deixa o texto nítido: o resultado é uma digitalização de verdade, não a foto de um papel.',
    image: {
      src: 'images/filtres-pt.jpg',
      largeur: 560,
      hauteur: 1212,
      alt:
        'A tela de filtros do Scan Cam: as páginas do documento no alto, os quatro acabamentos embaixo, um controle de intensidade e uma chave para remover sombras.',
    },
    comparaison: {
      titre: 'A mesma página, do jeito que o Scan Cam entrega.',
      avant: {
        src: 'images/avant.jpg',
        largeur: 760,
        hauteur: 1013,
        alt:
          'O contrato inteiro, amassado, fotografado sobre uma mesa de madeira: o papel está cinza, com dobras e um pouco torto.',
        legende: 'A foto',
      },
      apres: {
        src: 'images/apres.jpg',
        largeur: 760,
        hauteur: 1003,
        alt:
          'O mesmo contrato inteiro depois do Scan Cam: a página está reta, branca, sem dobras nem sombras, e o texto está nítido.',
        legende: 'A digitalização',
      },
      legende:
        'Fotografada amassada sobre uma mesa, e devolvida reta, branca e nítida. As duas páginas estão inteiras: nada foi cortado.',
    },
    appstore: {
      note: 'iPhone e iPad.',
    },
    confidentialite: {
      titre: 'Nada sai do seu iPhone.',
    },
    promesse:
      'E tudo acontece no seu celular. Nenhuma conta para criar, nada enviado a um servidor, nenhum anúncio. Suas contas, seus contratos e seus documentos de identidade nunca saem do seu iPhone — a não ser no dia em que você mesmo decidir compartilhá-los.',

    sectionsTitre: 'Tudo o que ele faz',
    sections: [
      {
        icone: 'scanner',
        titre: 'Escanear',
        points: [
          'Bordas detectadas e página endireitada, mesmo fotografada torta',
          'Quatro acabamentos: foto original, cor, tons de cinza e preto e branco',
          'Intensidade ajustável com o dedo, com uma pré-visualização que acompanha',
          'Sombras removidas com um toque, para páginas fotografadas sob uma luminária ou uma mão',
          'Várias páginas no mesmo documento, para reordenar, girar ou remover',
        ],
      },
      {
        icone: 'dossier',
        titre: 'Organizar',
        points: [
          'Pastas e subpastas, como no computador',
          'Uma busca que encontra também o que está guardado no fundo de uma pasta, e diz onde está',
          'Renomear, mover, duplicar, apagar',
        ],
      },
      {
        icone: 'partager',
        titre: 'Finalizar e compartilhar',
        points: [
          'Exportar em PDF ou JPEG',
          'Adicionar texto a uma página',
          'Imprimir direto do app',
          'Salvar no app Arquivos, ou enviar pela janela de compartilhamento do iPhone',
        ],
      },
    ],

    pro: {
      titre: 'Scan Cam Pro',
      image: {
        src: 'images/document-pt.jpg',
        largeur: 560,
        hauteur: 1212,
        alt:
          'Um documento aberto no Scan Cam: a pré-visualização da página, as miniaturas embaixo e a fileira de ferramentas — compartilhar, filtros, extrair o texto, marca d’água, assinatura, imprimir.',
      },
      // {prix} reçoit le prix du pays du visiteur, écrit à sa façon (voir prix.js).
      // Le pays par défaut est celui d’un navigateur qui ne dit pas le sien.
      prix: '{prix} por ano, após 7 dias de teste grátis.',
      prixPays: 'Preço da App Store · {pays}',
      paysParDefaut: 'BR',
      gratuit:
        'A versão grátis é completa e não expira: escaneie, organize, aplique filtros, anote, imprima e exporte em PDF quanto quiser. Os PDFs grátis levam no rodapé uma pequena marca “Digitalizado com Scan Cam”.',
      intro: 'A assinatura Pro acrescenta:',
      points: [
        'O PDF sem nenhuma marca',
        'O reconhecimento de texto, que lê suas páginas e devolve o texto para você copiar',
        'A assinatura, desenhada com o dedo e colocada onde você quiser',
        'A marca d’água, atravessando a página',
        'A mesclagem de vários documentos em um só',
        'A extração de páginas para um novo documento',
        'A exportação para Word (.docx) e Excel (.xlsx)',
      ],
      note:
        'O reconhecimento de texto funciona no celular, sem internet: ele lê o alfabeto latino, japonês, chinês e coreano.',
    },

    contact: {
      titre: 'Alguma dúvida?',
      texte: 'Escreva para mim: eu mesmo respondo.',
    },
  },

  assistance: {
    h1: 'Ajuda',
    lead:
      'Uma dúvida, um problema, uma ideia? Escreva para mim. Não há um serviço de atendimento por trás do Scan Cam: sou eu quem lê e quem responde.',
    carte: {
      note:
        'Para um problema de exibição, uma captura de tela ajuda muito: botão lateral + aumentar volume, ao mesmo tempo.',
    },
    faqTitre: 'Perguntas frequentes',
    faq: [
      {
        q: 'Como escaneio um documento?',
        r: [
          'Toque no botão da câmera e enquadre a folha. O iPhone detecta as bordas sozinho e endireita a página, mesmo que você fotografe torto. Você pode adicionar várias páginas seguidas ao mesmo documento.',
        ],
      },
      {
        q: 'Onde meus documentos ficam salvos?',
        r: [
          'No seu iPhone, no espaço privado do app. Eles não são enviados a lugar nenhum. Se o backup do iCloud do seu celular estiver ativado, eles entram no backup junto com o resto do celular, feito pela Apple.',
        ],
      },
      {
        q: 'Tem uma sombra na minha página. O que eu faço?',
        r: [
          'Abra o documento, vá em <strong>Filtros</strong> e ative <strong>Remover sombras</strong>. A sombra some e o papel volta a ficar branco por inteiro. Você pode desativar na hora se não gostar do resultado: a foto original é sempre mantida.',
        ],
      },
      {
        q: 'Como exporto em PDF?',
        r: [
          'Abra o documento, toque em <strong>Compartilhar</strong> e escolha o formato. PDF e JPEG são grátis; Word e Excel fazem parte da assinatura Pro. A partir daí, você pode enviar o arquivo, salvá-lo no app Arquivos ou imprimi-lo.',
        ],
      },
      {
        q: 'O que é grátis e o que é pago?',
        r: [
          'Escanear, organizar, as pastas, a busca, os filtros, adicionar texto, imprimir e exportar em PDF são grátis, sem limite de tempo nem de quantidade. Os PDFs grátis levam no rodapé uma pequena marca “Digitalizado com Scan Cam”.',
          'A assinatura Pro tira essa marca e acrescenta o reconhecimento de texto, a assinatura, a marca d’água, a mesclagem de documentos, a extração de páginas e a exportação para Word e Excel.',
        ],
      },
      {
        q: 'Como gerencio ou cancelo minha assinatura?',
        r: [
          'Nos ajustes da sua conta Apple, no seu iPhone: é ali, e somente ali, que a assinatura é gerenciada e cancelada. O app não pode fazer isso por você, porque é a Apple que faz a cobrança. Cancelar antes do fim do teste grátis não gera nenhuma cobrança.',
        ],
      },
      {
        q: 'Posso importar um PDF que eu já tenho?',
        r: [
          'Não. A importação aceita imagens: fotos da galeria ou imagens escolhidas no Arquivos. Os PDFs aparecem esmaecidos.',
        ],
      },
      {
        q: 'O reconhecimento de texto precisa de internet?',
        r: [
          'Não. O texto é lido pelo próprio iPhone, sem conexão, e o conteúdo dos seus documentos nunca é enviado a um serviço externo. Ele lê o alfabeto latino, japonês, chinês e coreano.',
        ],
      },
      {
        q: 'Em quais idiomas o app está disponível?',
        r: [
          'Francês, inglês, espanhol, alemão, italiano, português (Brasil), japonês, chinês e coreano. O idioma é trocado nos ajustes do app.',
        ],
      },
      {
        q: 'Apaguei um documento sem querer.',
        r: [
          'Apagar um documento o remove do celular, e não há lixeira: como ele nunca foi enviado a lugar nenhum, não existe em nenhum outro lugar. Se o backup do iCloud do seu iPhone estava ativado, uma restauração completa do celular pode recuperá-lo.',
        ],
      },
    ],
  },

  juridique: {
    conditions: { h1: 'Termos de Uso' },
    confidentialite: { h1: 'Política de Privacidade' },
    apple: {
      href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
      cherche: 'tocando no link no final desta página',
      remplace: '<a href="{lien}">no site da Apple</a>',
    },
  },
};
