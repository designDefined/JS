/* Written by DesignDefined */
(function resizeNavigator() {
  const navigatorObject = document.querySelector(".navigator");
  const scollYThreshold = 120;
  const BIG_CLASS = "navigator-big";
  const SMALL_CLASS = "navigator-small";
  let navigatorWasBig = true;


  function navigatorIsBig() {
    return (window.pageYOffset <= scollYThreshold);
  }


  function initializeNavigatorAs(big) {
    if (big) {
      addNavigatorClassAndSetWasBig(BIG_CLASS);
    } else if (!big) {
      addNavigatorClassAndSetWasBig(SMALL_CLASS);
    } else {
      alert("navigator initialization error!");
    }
  }

  function removeNavigatorClass(className) {
    navigatorObject.classList.remove(className);
  }

  function addNavigatorClass(className) {
    navigatorObject.classList.add(className);
  }

  function setnavigatorWasBig(className) {
    if (className === BIG_CLASS) {
      navigatorWasBig = true;
    } else if (className === SMALL_CLASS) {
      navigatorWasBig = false;
    }
  }

  function addNavigatorClassAndSetWasBig(className) {
    addNavigatorClass(className);
    setnavigatorWasBig(className);
  }

  function addBigIfSmall() {
    if (!navigatorWasBig) {
      removeNavigatorClass(SMALL_CLASS);
      addNavigatorClassAndSetWasBig(BIG_CLASS);
    }
  }

  function addSmallIfBig() {
    if (navigatorWasBig) {
      removeNavigatorClass(BIG_CLASS);
      addNavigatorClassAndSetWasBig(SMALL_CLASS);
    }
  }

  function toggleBigAndSmallNavigator() {
    if (navigatorIsBig()) {
      addBigIfSmall();
    } else {
      addSmallIfBig();
    }
  }

  initializeNavigatorAs(navigatorIsBig());
  window.addEventListener("scroll", toggleBigAndSmallNavigator);

})();
