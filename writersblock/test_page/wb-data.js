/* Written by DesignDefined */
"use strict";

// [사용자가 입력할 것들]
// 블록 타입
// 내용
// 배경사진 or 배경색
// 글자색
// 글자 크기

// Style에는 무엇을?
// color, background,
// z-index

const WB = {};
WB.mainPage = {
  title: "설악 테스트",
  classes: ["page-basic", "page-normal", "page-analogue-noir"],
  style: "",
  styleSheets: ["effect/interactive-basics", "type/photo-novel", "theme/analogue-noir", "font/analogue"],
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
  line: "제목",
  prefix: "",
  suffix: "",
  classes: ["block-center", "size-fs", "billboard"],
  style: "z-index:2;"
};

WB.block[2] = {
  parentID: "block-wrapper",
  myID: "block_1",
  line: "한가위에 덮이기 시작한 눈이 하지에 이르러야 녹는다 하여 설악이라고 불린다. <br> -동국여지승람-",
  prefix: `<div class="fader">`,
  suffix: "</div>",
  classes: ["block-center", "size-fs075", "paragraphs", "fade", "fade-from-left"],
  style: ""
};

WB.block[3] = {
  parentID: "block-wrapper",
  myID: "block_2",
  line: "열두 시를 조금 넘긴 서울은 밝다면 밝고 어둡다면 어둡다.",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs"],
  style: ""
};

WB.block[4] = {
  parentID: "block-wrapper",
  myID: "block_3",
  line: "집의 응달에서, 가까이에 나룻배들이 떠 있는 강가 양지 바른 곳에서, 사라수의 그늘에서, 무화과나무의 그늘에서, 바라문의 아름다운 아들이지 젊은 매인 싯다르타는 역시 바라문의 아들인 친구 고빈다와 함께 자라났다.",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs", "slide", "slide-from-left", "slide-disposable"],
  style: ""
};

WB.block[5] = {
  parentID: "block-wrapper",
  myID: "block_4",
  line: "강가에서 미역을 감거나, 신성한 목욕 재계를 하거나, 신성한 제사를 지낼 때면 그의 밝게 빛나는 어깨가 햇볕에 갈색으로 그을렸다.",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs", "slide", "slide-from-left", "slide-disposable"],
  style: ""
};

WB.block[6] = {
  parentID: "block-wrapper",
  myID: "block_5",
  line: "망고나무 수풀 속에서, 사내아이들과 어울려 놀 때, 어머니의 노랫소리를 들을 때, 신성한 제사를 지낼 때, 학자인 아버지의 가르침을 받을 때나 현인들의 대화를 들을 때면 그의 새까만 눈동자 속으로 그림자가 흘러들었다.",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs", "slide", "slide-from-top"],
  style: ""
};

WB.block[7] = {
  parentID: "block-wrapper",
  myID: "block_6",
  line: "이미 오래전부터 싯다르타는 현인들의 대화에 참여하였고, 고빈다와 더불어 논쟁술을 익혔으며, 고빈다와 함께 깊이 숙고하는 기술과 침잠하는 자세를 익혔다.",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs", "slide", "slide-from-leftbottom"],
  style: ""
};

WB.block[8] = {
  parentID: "block-wrapper",
  myID: "block_7",
  line: "",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs"],
  style: ""
};

WB.block[9] = {
  parentID: "block-wrapper",
  myID: "block_8",
  line: "",
  prefix: "",
  suffix: "",
  classes: ["block-normal", "paragraphs"],
  style: ""
};


WB.block[21] = {
  parentID: "photo-slot",
  myID: "bg_0-2",
  line: "",
  prefix: "",
  suffix: "",
  classes: ["size-fs", "bg-photo"],
  style: "background-image: url('image/milky-way-0.jpg');"
};

WB.block[22] = {
  parentID: "photo-slot",
  myID: "bg_3-4",
  line: "",
  prefix: "",
  suffix: "",
  classes: ["size-fs", "bg-photo"],
  style: "background-image: url('image/milky-way-1.jpg');"
};

WB.block[23] = {
  parentID: "photo-slot",
  myID: "bg_4-6",
  line: "",
  prefix: "",
  suffix: "",
  classes: ["size-fs", "bg-photo"],
  style: "background-image: url('image/milky-way-2.jpg');"
};

WB.block[30] = {
  parentID: "photo-slot",
  myID: "bg-filter",
  line: "",
  prefix: "",
  suffix: "",
  classes: ["size-fs", "bg-filter-05"],
  style: ""
};
