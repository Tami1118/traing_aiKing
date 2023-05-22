const { createApp } = Vue;

const header = {
  logoImage: "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/logo.png?raw=true",
  menu: ['首頁', '定價']
}

const banner = {
  main_title: `透過<br>AI工具王的<br>強大模型<br>讓您的業務更聰明`,
  sec_title: `用多少，付多少。`,
  content: `我們相信，最靈活的取用機制，才能最大化的幫助你業務的推動。`,
  arrowIcon: `https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/deco.png?raw=true"`
}

const service = {
  main_title: '我們的服務',
  content: `我們相信透過 AI 技術，<br>包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。`,
  features: [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
              <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
            </svg>`,
      title: '快速',
      content: '我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
            </svg>`,
      title: '靈活',
      content: '我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
            </svg>`,
      title: '擴充',
      content: '我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。'
    },
  ]
}

const cooperate = {
  main_title: '來自合作夥伴',
  starIcon: `<svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" fill = "currentColor" class="bi bi-star-fill" viewBox = "0 0 16 16" >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg >`,
  companyToLeft: [
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise1.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise2.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise3.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise4.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise5.png?raw=true",
  ],
  companyToRight: [
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise7.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise6.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise8.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise9.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise11.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise12.png?raw=true",
  ],
  recommends: [
    {
      personImg: "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/avatar3.png?raw=true",
      name: '陳小姐',
      company: 'ABC 科技有限公司',
      feedback: '非常喜歡 AI工具王 提供的 AI 模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王 提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！'
    },
    {
      personImg: "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/avatar1.png?raw=true",
      name: '劉小姐',
      company: 'XYZ 醫療器材有限公司',
      feedback: '作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王 提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王 的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝 AI工具王 團隊的辛勤工作！'
    },
    {
      personImg: "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/avatar2.png?raw=true",
      name: '黃先生',
      company: 'EFG 銀行',
      feedback: '我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而 AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用 AI工具王 的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝 AI工具王 團隊的支持！'
    },
  ]
}

const tool = {
  main_title: '這些超酷的應用，都來自 AI工具王',
  searchIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>`,
  filterIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
              </svg>`,
  shareIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
              </svg>`,
  filter: ['全部', '聊天', '影像辨識', '翻譯', '行銷', '客服', '生產力'],
  sort: ['由新到舊', '由舊到新', '由A到Z', '由Z到A'],
  tools: [
    {
      imageUrl: "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool1.png?raw=true",
      title: 'Chatbot Builder',
      content: '建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。',
      type: 'AI模型',
      tag: '#聊天',
      coach: '卡卡'
    },
    {
      imageUrl: "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool2.png?raw=true",
      title: 'Image Recognition Platform',
      content: '專業的圖像識別平台，識別圖像、分類、標記等。',
      type: 'AI模型',
      tag: '#影像辨識',
      coach: '杰杰'
    },
    {
      imageUrl: "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool3.png?raw=true",
      title: 'Language Translation API',
      content: '專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。',
      type: 'AI模型',
      tag: '#翻譯',
      coach: '琪琪'
    },
    {
      imageUrl: "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool4.png?raw=true",
      title: 'Sentiment Analysis API',
      content: '自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。',
      type: 'AI模型',
      tag: '#行銷',
      coach: '昊昊'
    },
    {
      imageUrl: "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool5.png?raw=true",
      title: 'Fraud Detection Platform',
      content: '預防詐騙活動，適用於銀行、金融、電商等。',
      type: 'AI模型',
      tag: '#客服',
      coach: '卡卡'
    },
    {
      imageUrl: "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool6.png?raw=true",
      title: 'Voice Assistant SDK',
      content: '通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。',
      type: 'AI模型',
      tag: '#生產力',
      coach: '杰杰'
    },
  ]
}

const pricePlan = {
  main_title: '定價',
  price: [
    {
      name: '琪琪',
      feature: ['初級', '速度最快'],
      price: 5,
    },
    {
      name: '昊昊',
      feature: ['中級'],
      price: 5,
    },
    {
      name: '卡卡',
      feature: ['高級'],
      price: 5,
    },
    {
      name: '杰杰',
      feature: ['最高級', '資訊最完善'],
      price: 15,
    },
  ]
}

const rule = {
  main_title: '使用規範',
  rules: [
    {
      title: '守法',
      content: '請遵守相關的法規和政策，不得進行任何違法違規的活動。',
    },
    {
      title: '資訊安全',
      content: '請務必保護好自己的帳號和密碼，不得將其透露給他人。',
    },
    {
      title: '守密',
      content: '需對使用過程中產生的數據負責，不得擅自洩露數據。'
    }
  ]
};

const faq = {
  main_title: '常見問題',
  arrow: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
          </svg>`,
  faqs: [
    {
      title: '如何選擇合適的AI模型？',
      content: '選擇適合的AI模型需要考慮您的應用場景、需要解決的問題、可用的資源以及預算等因素。可以通過對比不同模型的性能、準確率、速度等指標，以及與其他用戶的評價和反饋，來選擇最適合的模型。',
    },
    {
      title: '租用模型的費用是如何計算的？',
      content: '租用模型的費用通常會根據模型的性能和使用時間等因素進行計算。具體而言，模型的性能可以根據其精度、速度、佔用資源等指標來評估；而使用時間可以根據租用時機的長短來計算，通常會按小時、天或月來計算。綜合考慮這些因素，系統會自動計算出對應的租用費用。',
    },
    {
      title: '如何進行付款？',
      content: '付款方式可以通過網站上提供的線上支付平台進行支付。具體而言，您可以選擇使用信用卡、銀行轉帳、電子錢包等不同的支付方式進行支付。在支付前，您需要先登錄網站並選擇適合的租用方案，系統會自動計算出對應的租用費用和支付金額，然後您可以選擇合適的支付方式進行支付。完成支付後，系統會自動向您提供相應的服務。',
    },
    {
      title: '租用模型的期限是多久？',
      content: '租用模型的期限可以根據您的需求進行設置，通常可以選擇幾個小時、幾天或幾個月等不同的時間段。',
    },
    {
      title: '如果在使用過程中遇到問題，應該怎麼處理？',
      content: '如果在使用過程中遇到問題，您可以聯繫客服或技術支持人員進行諮詢或報告問題。您也可以通過網站上的幫助中心或社區論壇尋找相關的解決方案和回答。',
    },
  ]
}

const footer = {
  main_title: '現在就來建立屬於你的服務吧',
  sec_title: '首頁定價',
  arrowIcon: `<svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" fill = "currentColor" class="bi bi-arrow-up-right" viewBox = "0 0 16 16" >
                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
              </svg >`,
  logoImage: "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/logo.png?raw=true",
  social: ['Facebook', 'Twitter', 'Instagram'],
  upArrowIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                </svg>`
}


createApp({
  data() {
    return {
      header,
      banner,
      service,
      cooperate,
      tool,
      pricePlan,
      rule,
      faq,
      footer,
    }
  },
}).mount('#app')


$(".back_btn").click(function (e) {
  e.preventDefault();
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    600
  );
});