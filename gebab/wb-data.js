/* Written by DesignDefined */
"use strict";

const WB = {};
WB.mainPage = {
  title: "프로젝트_개밥바라기",
  classes: ["page-basic", "page-normal", "page-futuristic-gray"],
  style: "",
  styleSheets: ["effect/interactive-basics", "type/photo-novel", "theme/futuristic-gray", "font/futuristic"],
  scripts: ["effect/flag-system", "effect/interactive-basics", "type/photo-novel"],
  defaultLine: "",
  defaultClasses: ["sizing-preset"],
  defaultStyle: ""
};

WB.block = [];

WB.block[0] = {
  parentID: "block-wrapper",
  myID: "photo-slot",
  line: "",
  prefix: "",
  suffix: "",
  classes: ["size-fs", "bg-fixed"],
  style: "z-index: -1;"
};

WB.block[1] = {
  parentID: "block-wrapper",
  myID: "block_0",
  line: "<h2>프로젝트 「개밥바라기」 </h2><br><br><h4>DesignDefined Project Hub 1</h4>",
  prefix: "",
  suffix: "",
  classes: ["block-center", "size-fs", "billboard"],
  style: "font-weight: 400; color:rgba(187, 193, 238, 1);"
};

WB.block[2] = {
  parentID: "block-wrapper",
  myID: "block_1",
  line: "Dogfooding은 단체나 기업이 직접 개발한 제품이나 서비스를 <br> 자사의 다른 프로젝트를 진행하는 데에 사용하는 관행을 의미합니다. <br><br> 다양한 분야에서 기획과 구현, 협업의 경험을 쌓고자 하는 우리 초보 창작자들에게, <br> Dogfooding을 모토로 한 통합 프로젝트 허브의 구축은 새로운 대안이 될 것입니다",
  prefix: `<div class="fader">  `,
  suffix: "</div>",
  classes: ["block-center", "paragraphs", "fade", "fade-from-left"],
  style: "color:rgba(187, 193, 238, 1); text-align: center;"
};

WB.block[3] = {
  parentID: "block-wrapper",
  myID: "block_2",
  line: "주의: 아래의 모든 프로젝트는 노-베이스의 초심자들을 주축으로 진행됩니다. 이미 경험이나 기술을 쌓은 참가자들은 알아도 모른척 해야 한다는 사실을 명심하시기 바랍니다.",
  prefix: "",
  suffix: "",
  classes: ["block-center", "paragraphs", "size-fs075", "slide", "slide-from-left"],
  style: "color:rgba(255, 135, 135, 1); background-color:rgba(77, 24, 24, 1);"
};

WB.block[4] = {
  parentID: "block-wrapper",
  myID: "block_3",
  line: "<h3>1. 소규모 창작 집단을 위한 솔루션 플랫폼</h3> <br> <h5>by 익명의 카멜레온 동호회</h5>",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs", "slide", "slide-from-left", "slide-disposable"],
  style: "color: rgba(187, 193, 238, 1); padding-top: 200px;"
};

WB.block[5] = {
  parentID: "block-wrapper",
  myID: "block_4",
  line: "Slack은 대형 기업의 전유물이었던 협업 솔루션을 개인 프로젝트나 소규모 팀 활동에서도 사용할 수 있도록 간편하고 저렴하게 제공합니다. 팀별 메시지 관리, 공유 드라이브, 음성/화상 통화 등의 유용한 기능들을 말이죠. 그러나 Slack을 비롯한 솔루션 앱은 대규모 조직의 생산성을 보장하기 위하여 언제나 표준화된 인터페이스만을 제공하고, 작업 프로세스의 자유도를 경직시켜 참여자들의 창의성을 불가피하게 제한합니다.",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs", "slide", "slide-from-top", "slide-disposable"],
  style: "color: rgba(187, 193, 238, 1)"
};

WB.block[6] = {
  parentID: "block-wrapper",
  myID: "block_5",
  line: "따라서 우리는: <br> 디지털 네이티브들이 소규모 창작 프로젝트에 자유롭게 이용할 수 있는 <br>협업 솔루션 플랫폼을 개발하자!",
  prefix: "",
  suffix: "",
  classes: ["block-center", "paragraphs", "slide", "slide-from-top", "slide-disposable"],
  style: "text-align: center; font-weight:bold;"
};

WB.block[7] = {
  parentID: "block-wrapper",
  myID: "block_6",
  line: "달성할 목표",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs"],
  style: "font-weight:bold"
};

WB.block[8] = {
  parentID: "block-wrapper",
  myID: "block_7",
  line: "-기본적으로는 데스크탑 애플리케이션, 추가적으로 모바일 앱과 웹사이트를 제공 <br>-영상 제작, 앱 개발 등 창의적 프로세스에 적합한 환경 구축<br>-NAS를 이용한 데이터베이스 관리와 공유, 서버 호스팅<br>-인터페이스와 프로세스의 자유로운 커스터마이징: 이용 자체가 재미있는 솔루션을 만들기<br>-자체 서버를 구축하고 외부 도메인만 연결하여 협업/아카이빙/홍보 일원화하기",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs", "slide", "slide-from-left"],
  style: ""
};

WB.block[9] = {
  parentID: "block-wrapper",
  myID: "block_8",
  line: "프로젝트 명세",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs"],
  style: "font-weight: bold"
};

WB.block[10] = {
  parentID: "block-wrapper",
  myID: "block_9",
  line: "1) 일렉트론 프레임워크(html, javascript, node.js 기반)를 이용하여 데스크톱 앱 개발<br>2) react native, 또는 vue.js+flutter를 이용하여 모바일 하이브리드 앱 이식<br>3) node.js 기반의 웹서버 구축(NAS로 구동)",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs", "slide", "slide-from-left"],
  style: ""
};

WB.block[11] = {
  parentID: "block-wrapper",
  myID: "block_10",
  line: "이런 사람들에게 추천합니다: 팀 협업 솔루션을 기획하고 싶은 사람, 데스크톱/모바일 앱 개발을 경험해보고 싶은 사람, 소규모 서버 구축과 관리 경험이 필요한 사람",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs"],
  style: ""
};

WB.block[12] = {
  parentID: "block-wrapper",
  myID: "block_11",
  line: "<h3>2. 재미있는 모바일 애플리케이션 개발</h3> <br> <h5>by 익명의 카멜레온 동호회</h5>",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs", "slide", "slide-from-left", "slide-disposable"],
  style: "color: rgba(199, 238, 187, 1); padding-top: 200px;"
};

WB.block[13] = {
  parentID: "block-wrapper",
  myID: "block_12",
  line: "소개: 모바일 앱을 만드는 것은 오늘날의 개발자들에게 꼭 필요한 역량입니다. 그러나 우리의 머릿속에 든 아이디어를 바로 앱으로 구현하는 것은 여간 쉬운 일이 아니죠. 우리 초심자들에게는 서비스의 완성도나 확장성보다는 이런저런 방식으로 직접 개발을 시도해보고, 시행착오를 겪으며, 다양한 API와 라이브러리들을 체험해볼 기회가 필요합니다.",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs", "slide", "slide-from-top", "slide-disposable"],
  style: "color: rgba(199, 238, 187, 1)"
};

WB.block[14] = {
  parentID: "block-wrapper",
  myID: "block_13",
  line: "따라서 우리는:<br>미래적인 인터페이스에 간단한 지도 API, 이미지 처리, AR 인터랙션 등이 구현된<br>재미있는 모바일 장난감을 만들자!",
  prefix: "",
  suffix: "",
  classes: ["block-center", "paragraphs", "slide", "slide-from-top", "slide-disposable"],
  style: "text-align: center; font-weight:bold;"
};

WB.block[15] = {
  parentID: "block-wrapper",
  myID: "block_14",
  line: "달성할 목표",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs"],
  style: "font-weight:bold"
};

WB.block[16] = {
  parentID: "block-wrapper",
  myID: "block_15",
  line: "-앱 자체의 유용성이나 서비스의 활용도보다, 디자인과 사용자 경험에 역량을 집중<br>-네이티브 앱과 하이브리드 앱을 둘 다 개발해보며 각각의 장단점 파악<br>-카메라, 지도 등의 모바일 API를 효율적으로 처리하기<br>-완성된 앱을 플레이스토어, 앱스토어에 퍼블리싱",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs", "slide", "slide-from-left"],
  style: ""
};

WB.block[17] = {
  parentID: "block-wrapper",
  myID: "block_16",
  line: "프로젝트 명세",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs"],
  style: "font-weight: bold"
};

WB.block[18] = {
  parentID: "block-wrapper",
  myID: "block_17",
  line: "1) react native 또는 flutter를 이용한 하이브리드 앱 개발<br>2) (가능하면) kotlin 또는 java를 이용한 안드로이드 네이티브 앱 개발",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs", "slide", "slide-from-left"],
  style: ""
};

WB.block[19] = {
  parentID: "block-wrapper",
  myID: "block_18",
  line: "이런 사람들에게 추천합니다: 모바일 앱 개발자를 지망하는 사람, 실험적이고 깔끔한 UI/UX 디자인을 시도해보고 싶은 사람, 오늘날의 모바일 AR 라이브러리가 얼마나 발전했는지 궁금한 사람",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs"],
  style: ""
};

WB.block[20] = {
  parentID: "block-wrapper",
  myID: "block_19",
  line: "<h3>3. ‘노-코드’ 인터랙티브 웹페이지 에디터 개발</h3> <br> <h5>by DesignDefined</h5>",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs", "slide", "slide-from-left", "slide-disposable"],
  style: "color: rgba(238, 187, 219, 1); padding-top: 200px;"
};

WB.block[21] = {
  parentID: "block-wrapper",
  myID: "block_20",
  line: "소개: 끊임없이 발전하는 브라우저의 역량에 비해 오늘날의 개인 웹페이지는 너무나도 단순합니다. 특수한 기술이 없는 사람들의 표현 범위는 워드 프로세서와 파워포인트 수준에 제한되어 있고요. 웹 브라우저라는, 대부분의 퍼스널 컴퓨터/모바일 기기에 이미 설치되어 있는(심지어 무료인) 엔진을 이용하여 멋진 제안서나 블로그, 보고서를 누구나 쉽게 창작할 수 있는 세상이 온다면 어떨까요?",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs", "slide", "slide-from-top", "slide-disposable"],
  style: "color: rgba(238, 187, 219, 1)"
};

WB.block[22] = {
  parentID: "block-wrapper",
  myID: "block_21",
  line: "따라서 우리는:<br>프로그래밍 지식이 전혀 없어도, 파워포인트 슬라이드 쇼보다 멋지고 확장성 있는<br>웹페이지를 구현할 수 있는 에디터를 만들자!",
  prefix: "",
  suffix: "",
  classes: ["block-center", "paragraphs", "slide", "slide-from-top", "slide-disposable"],
  style: "text-align: center; font-weight:bold;"
};

WB.block[23] = {
  parentID: "block-wrapper",
  myID: "block_22",
  line: "달성할 목표",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs"],
  style: "font-weight:bold"
};

WB.block[24] = {
  parentID: "block-wrapper",
  myID: "block_23",
  line: "-인터랙티브 웹사이트를 제작할 수 있는 에디터 웹페이지(웹 애플리케이션) 개발<br>-에디터를 이용하여 재미있는 샘플 페이지를 만들어보기 (웹소설, 팬사이트, 리뷰 블로그 등)",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs", "slide", "slide-from-left"],
  style: ""
};

WB.block[25] = {
  parentID: "block-wrapper",
  myID: "block_24",
  line: "프로젝트 명세",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs"],
  style: "font-weight: bold"
};

WB.block[26] = {
  parentID: "block-wrapper",
  myID: "block_25",
  line: "1) 가능한 한 기존의 웹 프레임워크나 자바스크립트 라이브러리의 사용을 자제하고, 바닐라 자바스크립트와 직접 제작한 라이브러리만을 이용한 웹 애플리케이션 개발<br>2) 개발자나 사용자가 새롭게 디자인한 형식이나 외관을 모듈화하여 쉽게 추가하고, 그것들을 장기적으로 유지/보수 할 수 있는 프레임워크 구축",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs", "slide", "slide-from-left"],
  style: ""
};

WB.block[27] = {
  parentID: "block-wrapper",
  myID: "block_26",
  line: "이런 사람들에게 추천합니다: 바닐라 자바스크립트를 제대로 공부해보고 싶은 사람, 내 손으로 직접 react.js보다 나은 라이브러리를 제작하고 싶은 사람, 파워포인트보다 참신한 발표 도구가 필요한 사람",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs"],
  style: ""
};

WB.block[28] = {
  parentID: "block-wrapper",
  myID: "block_27",
  line: "*이 페이지도 본 프로젝트의 시험 버전을 이용해 작성되었습니다!*",
  prefix: "",
  suffix: "",
  classes: ["block-center", "paragraphs", "slide", "slide-from-top", "slide-disposable"],
  style: "color: rgba(238, 187, 219, 1)"
};



WB.block[29] = {
  parentID: "block-wrapper",
  myID: "block_28",
  line: "DesignDefined's Project Hub는 하나의 프로젝트를 세분화하여 진입 장벽을 낮추고 모든 참여자들의 역량을 강화하는 프로젝트 모델을 제안합니다",
  prefix: "",
  suffix: "",
  classes: ["block-center", "paragraphs"],
  style: "color:rgba(181, 181, 181, 1); text-align:center; margin-top: 300px"
};

WB.block[30] = {
  parentID: "block-wrapper",
  myID: "block_29",
  line: "프로젝트는 계속 추가됩니다! <br> by DesignDefined",
  prefix: "",
  suffix: "",
  classes: ["size-fs075", "block-center", "paragraphs"],
  style: "color:rgba(181, 181, 181, 1); text-align:center;"
};


WB.block[31] = {
  parentID: "photo-slot",
  myID: "bg_4-11",
  line: "",
  prefix: "",
  suffix: "",
  classes: ["size-fs", "bg-photo"],
  style: "background-image: url('image/bg1.jpg');"
};

WB.block[32] = {
  parentID: "photo-slot",
  myID: "bg_12-19",
  line: "",
  prefix: "",
  suffix: "",
  classes: ["size-fs", "bg-photo"],
  style: "background-image: url('image/bg2.jpg');"
};

WB.block[33] = {
  parentID: "photo-slot",
  myID: "bg_20-28",
  line: "",
  prefix: "",
  suffix: "",
  classes: ["size-fs", "bg-photo"],
  style: "background-image: url('image/bg3.jpg');"
};


WB.block[39] = {
  parentID: "photo-slot",
  myID: "bg-filter",
  line: "",
  prefix: "",
  suffix: "",
  classes: ["size-fs", "bg-filter-07"],
  style: ""
};
