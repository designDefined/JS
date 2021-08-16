/* Written by DesignDefined */
"use strict";



const FlagValidator = {
  validateFlag: function validiateFlag(flag) {
    if (flag.start !== null) {
      if (flag.end !== null) {
        if (flag.start < flag.end) {
          return;
        }
      }
    }
    console.error(`${flag} is invalid!`);
  },
  validateMultipleFlags: function validateMultipleFlags(flags) {
    if (flags.length > 0) {
      for (let i = 0; i < flags.length; i++) {
        this.validateFlag(flags[i]);
      }
      return;
    }
    console.error(`${flags} is invalid`);
  },
  validateMethods: function validateMethods() {
    if (this.onMethod) {
      if (this.offMethod) {
        return;
      }
    }
    console.error("invalid methods");
  }
};

const FlagSystem = {
  midY: function midY() {
    return window.innerHeight / 2 + window.scrollY;
  },
  thirdY: function thirdY() {
    return window.innerHeight * 2 / 3 + window.scrollY;
  },

  checkNeighbor: function checkNeighbor(originFlag, neighborFlag) {
    if (this.valueInFlagRange(originFlag.start, neighborFlag)) {
      return true;
    }
    if (this.valueInFlagRange(originFlag.end, neighborFlag)) {
      return true;
    }
    return false;
  },
  findNeighbor: function findNeighbor(target, pool) {
    const flagsToCheck = pool.filter(flags => flags != target);
    for (let i = 0; i < flagsToCheck.length; i++) {
      if (this.checkNeighbor(target, flagsToCheck[i])) {
        JJ.pushSole(target.neighbor, flagsToCheck[i]);
      }
    }
  },
  setNeighborsOf: function setNeighborsOf(allFlags) {
    for (let i = 0; i < allFlags.length; i++) {
      this.findNeighbor(allFlags[i], allFlags);
    }
  },
  neighborsToCheck: function neighborsToCheck(flag, currentFlags) {
    return flag.neighbor.filter(n => currentFlags.indexOf(n) < 0);
  },
  dispose: function dispose(flag, allFlags) {
    const neighbor = flag.neighbor;
    for (let i = 0; i < neighbor.length; i++) {
      JJ.removeItem(neighbor[i].neighbor, flag);
    }
    JJ.removeItem(allFlags, flag);
  },

  valueInFlagRange: function valueInFlagRange(value, flag) {
    if (value >= flag.start) {
      if (value < flag.end) {
        return true;
      }
    }
    return false;
  },
  removeFlagsWithoutValue: function removeFlagsWithoutValue(value, flagsToCheck, method) {
    for (let i = 0; i < flagsToCheck.length; i++) {
      const flag = flagsToCheck[i];
      if (!this.valueInFlagRange(value, flag)) {
        this.offMethod(flag);
      }
    }
  },
  addFlagsWithValue: function addFlagsWithValue(value, flagsToCheck, method) {
    for (let i = 0; i < flagsToCheck.length; i++) {
      const flag = flagsToCheck[i];
      if (this.valueInFlagRange(value, flag)) {
        this.onMethod(flag);
      }
    }
  },
  flagExamination: function flagExamination(value, all, current, onMethod, offMethod) {
    const allFlags = all,
      currentFlags = current;
    this.removeFlagsWithoutValue(value, currentFlags, offMethod);
    if (currentFlags.length > 0) {
      const neighbor = this.neighborsToCheck(currentFlags[0], currentFlags);
      this.addFlagsWithValue(value, neighbor, onMethod);
    } else {
      this.addFlagsWithValue(value, allFlags, onMethod)
    }
  }
};



JJ.pChain(FlagValidator, FlagSystem);
