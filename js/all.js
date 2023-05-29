const { createApp } = Vue;

const services = [
  {
    icon: `<svg width="34" height="68" viewBox="0 0 34 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.333374 0.666687V37.3334H10.3334V67.3334L33.6667 27.3334H20.3334L33.6667 0.666687H0.333374Z" fill="white"/>
      </svg>`,
    title: '快速',
    content: '我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。'
  },
  {
    icon: `<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60.3333 27L64.4999 17.8333L73.6666 13.6666L64.4999 9.49998L60.3333 0.333313L56.1666 9.49998L46.9999 13.6666L56.1666 17.8333L60.3333 27ZM35.3333 28.6666L26.9999 10.3333L18.6666 28.6666L0.333252 37L18.6666 45.3333L26.9999 63.6666L35.3333 45.3333L53.6666 37L35.3333 28.6666ZM60.3333 47L56.1666 56.1666L46.9999 60.3333L56.1666 64.5L60.3333 73.6666L64.4999 64.5L73.6666 60.3333L64.4999 56.1666L60.3333 47Z" fill="white"/>
      </svg>`,
    title: '靈活',
    content: '我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。'
  },
  {
    icon: `<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.33341 14H0.666748V60.6667C0.666748 64.3334 3.66675 67.3334 7.33341 67.3334H54.0001V60.6667H7.33341V14ZM60.6667 0.666687H20.6667C17.0001 0.666687 14.0001 3.66669 14.0001 7.33335V47.3334C14.0001 51 17.0001 54 20.6667 54H60.6667C64.3334 54 67.3334 51 67.3334 47.3334V7.33335C67.3334 3.66669 64.3334 0.666687 60.6667 0.666687ZM57.3334 30.6667H44.0001V44H37.3334V30.6667H24.0001V24H37.3334V10.6667H44.0001V24H57.3334V30.6667Z" fill="white"/>
      </svg>`,
    title: '擴充',
    content: '我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。'
  },
]


const partner = {
  starIcon: `<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.00004 10.5134L11.12 13L10.0267 8.31337L13.6667 5.16004L8.87337 4.75337L7.00004 0.333374L5.12671 4.75337L0.333374 5.16004L3.97337 8.31337L2.88004 13L7.00004 10.5134Z" fill="white"/>
  </svg>
  `,
  companyTop: [
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise1.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise2.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise3.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise4.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise5.png?raw=true",
  ],
  companyDown: [
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise7.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise6.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise8.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise9.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise11.png?raw=true",
    "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise12.png?raw=true",
  ],
  comments: [
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

const tools = [
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

const pricePlan = [
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

const fqas = [
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


createApp({
  data() {
    return {
      services,
      partner,
      tools,
      pricePlan,
      fqas,
    }
  },
}).mount('#app')

// const getTool = () => {
//   const url = 'https://2023-engineer-camp.zeabur.app/api/v1/works'
//   axios.get(url).then(res => {
//     console.log(res)
//   })
// }

// getTool()

$(".back_btn").click(function (e) {
  e.preventDefault();
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    600
  );
});
