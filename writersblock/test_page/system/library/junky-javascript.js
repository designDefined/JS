/*written by DesignDefined*/
"use strict";

function bark(testedValue) {
  console.log("WAAAGH start!");
  console.log(testedValue);
  console.log("WAAAGH end...");
}

const JJ = {
  contains: function contains(arr, item) {
    if (arr.indexOf(item) < 0) {
      return false;
    } else {
      return true;
    }
  },
  removeItem: function removeItem(arr, item) {
    const indexToDelete = arr.indexOf(item);
    if (indexToDelete >= 0) {
      arr.splice(indexToDelete, 1);
    } else {
      // console.error("invalid item removal!");
    }
  },
  pushSole: function pushSole(arr, item) {
    const itemNotExist = arr.indexOf(item) < 0;
    if (itemNotExist) {
      arr.push(item);
    } else {
      console.error("item to push already exists!")
    }
  },

  pChain: function pChain() {
    const inputLength = arguments.length;
    if (inputLength >= 2) {
      for (let i = 0; i < inputLength - 1; i++) {
        Object.setPrototypeOf(arguments[i + 1], arguments[i]);
      }
    } else {
      alert("pChain Failed");
    }
  },
  verifyChain: function verifyChain() {
    const inputLength = arguments.length;
    if (inputLength >= 1) {
      for (let i = 0; i < inputLength; i++) {
        const obj = arguments[i];
        const prototype = Object.getPrototypeOf(arguments[i]);
        console.log("Prototype of");
        console.dir(obj);
        console.log("is");
        console.dir(prototype);
      }
    } else {}
  }
};
