/* Written by DeisgnDefined */
"use strict";

const btn = (function ButtonSystem() {
  const allButtons = [];
  // const method = (function method() {
  //   (function initialOperation() {})();
  //   return {};
  // })();
  //

  const clicker = (function clicker() {
    (function initialOperation() {})();
    return {};
  })();

  const pusher = (function pusher() {})();

  const toggler = (function toggler() {
    function addCustom(name, htmlObject, method1, method2) {};

    function toggleClass(name, htmlObject, className, targetObject) {
      function target() {
        if (targetObject) {
          return targetObject;
        } else {
          return htmlObject;
        }
      };

      function method() {
        target().classList.toggle(className);
      };
      const tag = {
        name: name,
        htmlObject: htmlObject,
        method: method
      };
      htmlObject.addEventListener("click", method);
      allButtons.push(tag);
    };

    (function initialOperation() {})();
    return {
      addCustom: addCustom,
      toggleClass: toggleClass
    };
  })();

  (function initialOperation() {})();
  return {
    // method: method,
    clicker: clicker,
    pusher: pusher,
    toggler: toggler
  };
})();


//Activation
btn.toggler.toggleClass("leftBarOnOff", HH.get(".left-bar-handle"), "minimized", HH.get(".left-bar-area"));
btn.toggler.toggleClass("extandBlockArea", HH.get(".left-bar-handle"), "extanded", HH.get(".block-area"));
