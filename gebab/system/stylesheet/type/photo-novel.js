/* Written by DesignDefined */
"use strict";

const PhotoBackgroundControl = {
  ON_CLASS: "bg-visible",
  OFF_CLASS: "bg-invisible",
  photos: HH.getAll(".bg-photo"),
  allFlags: [],
  currentFlags: [],

  //setup Flag
  idToNumbers: function idToNumbers(id) {
    const parts = id.split("_");
    const numbers = parts[parts.length - 1].split("-");
    return numbers;
  },
  numberToBlock: function numberToBlock(number) {
    const block = HH.get(`#block_${number}`);
    return block;
  },

  getStartFrom: function getStartFrom(photo) {
    const numbers = this.idToNumbers(photo.id),
      startBlock = this.numberToBlock(numbers[0]);
    return startBlock.offsetTop;
  },
  getEndFrom: function getEndFrom(photo) {
    const numbers = this.idToNumbers(photo.id),
      endBlock = this.numberToBlock(numbers[1]);
    return endBlock.offsetTop + endBlock.offsetHeight;
  },
  convertedFlagFrom: function convertedFlagFrom(photo) {
    const flag = {};
    flag.start = this.getStartFrom(photo);
    flag.end = this.getEndFrom(photo);
    flag.block = photo;
    flag.neighbor = [];
    return flag;
  },
  createAllFlags: function createAllFlags() {
    for (let i = 0; i < this.photos.length; i++) {
      JJ.pushSole(this.allFlags, this.convertedFlagFrom(this.photos[i]));
    }
  },
  setupFlag: function setupFlag() {
    this.createAllFlags();
    this.setNeighborsOf(this.allFlags);
  },

  //setup Event
  onMethod: function onMethod(flag) {
    HH.repC(flag.block, this.OFF_CLASS, this.ON_CLASS);
    JJ.pushSole(this.currentFlags, flag);
  },
  offMethod: function offMethod(flag) {
    HH.repC(flag.block, this.ON_CLASS, this.OFF_CLASS);
    JJ.removeItem(this.currentFlags, flag);
  },
  scrollEvent: function photoEvent() {
    // console.log(this.neighborsToCheck(this.currentFlags[0], this
      // .currentFlags))
    this.flagExamination(this.allFlags, this.currentFlags, this.onMethod, this.offMethod);
  },
  setupEvent: function setupEvent() {
    window.addEventListener('scroll', this.scrollEvent.bind(this));
  },

  //validate
  validate: function validate() {
    this.validateMultipleFlags(this.allFlags);
    this.validateMethods();
  },

  //initialize
  initialize: function initialize() {
    this.addFlagsWithValue(this.midY(), this.allFlags, this.currentFlags, this.onMethod);
  },

  setup: function setup() {
    JJ.pChain(FlagSystem, PhotoBackgroundControl);
    if (!this.photos.length > 0) {
      return;
    }
    this.setupFlag();
    this.setupEvent();
    this.validate();
    this.initialize();
  }
};

wbEngine.install.request(PhotoBackgroundControl, PhotoBackgroundControl.setup);
