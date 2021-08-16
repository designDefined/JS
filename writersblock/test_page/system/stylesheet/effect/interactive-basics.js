/* Written by DesignDefined */
"use strict";

// 7/14 할 일:
// 1. 로딩 화면 필요할까...?


const FadeIO = {
  ON_CLASS: "fade-in",
  OFF_CLASS: "fade-out",
  fades: HH.getAll(".fade"),
  allFlags: [],
  currentFlags: [],

  //setup Flag
  convertedFlagFrom: function convertedFlagFrom(fade) {
    const flag = {};
    flag.start = fade.offsetTop;
    flag.end = fade.offsetTop + fade.offsetHeight;
    flag.block = fade;
    flag.neighbor = [];
    if (fade.classList.contains("fade-disposable")) {
      flag.disposable = true;
    };
    return flag;
  },
  createAllFlags: function createAllFlags() {
    for (let i = 0; i < this.fades.length; i++) {
      JJ.pushSole(this.allFlags, this.convertedFlagFrom(this.fades[i]));
    }
  },
  setupFlag: function setupFlag() {
    this.createAllFlags();
    this.setNeighborsOf(this.allFlags);
  },

  //setup Event
  onMethod: function onMethod(flag) {
    const fader = flag.block.querySelector(".fader");
    HH.repC(fader, this.OFF_CLASS, this.ON_CLASS);
    if (flag.disposable) {
      this.dispose(flag, this.allFlags);
    } else {
      JJ.pushSole(this.currentFlags, flag);
    }
  },
  offMethod: function offMethod(flag) {
    const fader = flag.block.querySelector(".fader");
    HH.repC(fader, this.ON_CLASS, this.OFF_CLASS);
    JJ.removeItem(this.currentFlags, flag);
  },
  scrollEvent: function scrollEvent() {
    this.flagExamination(this.thirdY(), this.allFlags, this.currentFlags, this.onMethod, this.offMethod);
  },
  setupEvent: function setupEvent() {
    window.addEventListener('scroll', this.scrollEvent.bind(this));
  },

  validate: function validate() {
    this.validateMultipleFlags(this.allFlags);
    this.validateMethods();
  },

  initialize: function initialize() {
    this.addFlagsWithValue(this.thirdY(), this.allFlags, this.currentFlags, this.onMethod);
  },

  setup: function setup() {
    JJ.pChain(FlagSystem, FadeIO);
    if (!this.fades.length > 0) {
      return;
    }
    this.setupFlag();
    this.setupEvent();
    this.validate();
    this.initialize();
  },
};

wbEngine.install.request(FadeIO, FadeIO.setup);

const SlideIO = {
  ON_CLASS: "slide-in",
  slides: HH.getAll(".slide"),
  allFlags: [],
  currentFlags: [],

  //setup Flag
  convertedFlagFrom: function convertedFlagFrom(slide) {
    const flag = {};
    flag.start = slide.offsetTop;
    flag.end = slide.offsetTop + slide.offsetHeight;
    flag.block = slide;
    flag.neighbor = [];
    if (slide.classList.contains("slide-disposable")) {
      flag.disposable = true;
    };
    return flag;
  },
  createAllFlags: function createAllFlags() {
    for (let i = 0; i < this.slides.length; i++) {
      JJ.pushSole(this.allFlags, this.convertedFlagFrom(this.slides[i]));
    }
  },
  setupFlag: function setupFlag() {
    this.createAllFlags();
    this.setNeighborsOf(this.allFlags);
  },

  //setup Event
  onMethod: function onMethod(flag) {
    HH.setC(flag.block, this.ON_CLASS);
    if (flag.disposable) {
      this.dispose(flag, this.allFlags);
    } else {
      JJ.pushSole(this.currentFlags, flag);
    }
  },
  offMethod: function offMethod(flag) {
    HH.delC(flag.block, this.ON_CLASS);
    JJ.removeItem(this.currentFlags, flag);
  },
  scrollEvent: function scrollEvent() {
    this.flagExamination(this.thirdY(), this.allFlags, this.currentFlags, this.onMethod, this.offMethod);
  },
  setupEvent: function setupEvent() {
    window.addEventListener('scroll', this.scrollEvent.bind(this));
  },

  validate: function validate() {
    this.validateMultipleFlags(this.allFlags);
    this.validateMethods();
  },

  initialize: function initialize() {
    this.addFlagsWithValue(this.thirdY(), this.allFlags, this.currentFlags, this.onMethod);
  },

  setup: function setup() {
    JJ.pChain(FlagSystem, SlideIO);
    if (!this.slides.length > 0) {
      return;
    }
    this.setupFlag();
    this.setupEvent();
    this.validate();
    this.initialize();
  }
};

wbEngine.install.request(SlideIO, SlideIO.setup);

const Gravity = {};
