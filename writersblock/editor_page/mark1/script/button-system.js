/* Written by DeisgnDefined */
"use strict";

const btn = (function ButtonSystem() {
  const allButtons = [];

  const add = (function add() {
    function clicker(triggerObject, method) {
      const tag = {
        triggerObject: triggerObject,
        method: method
      };
      triggerObject.addEventListener("click", method(tag));
      allButtons.push(tag);
    };

    function toggler(triggerObject, method) {
      const tag = {
        triggerObject: triggerObject,
        method: method,
        toggled: false
      };
      triggerObject.addEventListener("click", method(tag));
      allButtons.push(tag);
    };

    function togglerAll(triggerObjects, method) {
      for (let i = 0; i < triggerObjects.length; i++) {
        toggler(triggerObjects[i], method);
      }
    };

    function input(triggerObject, method) {
      const tag = {
        triggerObject: triggerObject,
        method: method,
        changed: false
      };
      triggerObject.addEventListener("change", method(tag));
      allButtons.push(tag);
    }

    function inputAll(triggerObjects, method) {
      for (let i = 0; i < triggerObjects.length; i++) {
        input(triggerObjects[i], method);
      };
    };


    return {
      clicker,
      toggler,
      togglerAll,
      input,
      inputAll
    }

  })();
  return {
    allButtons,
    add
  };
})();
