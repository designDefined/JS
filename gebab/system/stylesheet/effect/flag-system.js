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
  startY: function startY() {
    return window.innerHeight * 2 / 3 + window.scrollY;
  },
  endY: function endY(){
    return window.innerHeight * 1 / 3 + window.scrollY;
  },

  checkNeighbor: function checkNeighbor(originFlag, neighborFlag) {
    if (this.valueInOneFlagRange(originFlag.start, neighborFlag)) {
      return true;
    }
    if (this.valueInOneFlagRange(originFlag.end, neighborFlag)) {
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

  valueInFlagRange: function valueInFlagRange(value1, value2, flag) {
    console.log(value1);
    console.log(value2);
    if (value1 >= flag.start) {
      if (value2 < flag.end) {
        return true;
      }
    }
    return false;
  },

  valueInOneFlagRange: function valueInFlagRange(value, flag) {
    if (value >= flag.start) {
      if (value < flag.end) {
        return true;
      }
    }
    return false;
  },

  removeFlagsWithoutValue: function removeFlagsWithoutValue(value1, value2, flagsToCheck, method) {
    for (let i = 0; i < flagsToCheck.length; i++) {
      const flag = flagsToCheck[i];
      if (!this.valueInFlagRange(value1, value2, flag)) {
        this.offMethod(flag);
      }
    }
  },
  addFlagsWithValue: function addFlagsWithValue(value1, value2, flagsToCheck, method) {
    for (let i = 0; i < flagsToCheck.length; i++) {
      const flag = flagsToCheck[i];
      if (this.valueInFlagRange(value1, value2, flag)) {
        this.onMethod(flag);
      }
    }
  },
  flagExamination: function flagExamination(all, current, onMethod, offMethod) {
    const allFlags = all,
      currentFlags = current;
    this.removeFlagsWithoutValue(this.startY(), this.endY(), currentFlags, offMethod);
    if (currentFlags.length > 0) {
      const neighbor = this.neighborsToCheck(currentFlags[0], currentFlags);
      this.addFlagsWithValue(this.startY(), this.endY(), neighbor, onMethod);
    } else {
      this.addFlagsWithValue(this.startY(), this.endY(), allFlags, onMethod)
    }
  }
};



JJ.pChain(FlagValidator, FlagSystem);
