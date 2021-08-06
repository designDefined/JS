(function initiateLogo() {
  const mainContainer = document.querySelector(".main-container");
  const logoBox = document.querySelector(".logo-box"),
    logoStroke = logoBox.querySelector(".logo-stroke"),
    label = logoBox.querySelector(".label");
  const strokes = logoStroke.querySelectorAll(".stroke"),
    fills = logoStroke.querySelectorAll(".fill");

  const links = [];

  setLink();

  for (i = 0; i < 10; i++) {
    setReact(i);
    setTransition(i);
  }

  label.addEventListener("click", function() {
    location.href = "https://www.instagram.com/design_defined.by/";
  });


  function setReact(index) {
    if (links[index]) {
      strokes[index].addEventListener("mouseover", function() {
        fills[index].classList.add("isOn");
      });
      strokes[index].addEventListener("mouseleave", function() {
        fills[index].classList.remove("isOn");
      });
    } else {
    }
  }

  function setTransition(index) {
    strokes[index].addEventListener("click", function(event) {
      startTransition(event);
    });
    strokes[index].index = index;
  }

  function startTransition(event) {
    const index = event.currentTarget.index;
    const linkDestination = links[index];

    if (linkDestination) {
      const tBox = document.createElement("div");
      const tColor = document.createElement("div");
      tBox.classList.add("transition-box");
      tColor.classList.add("transition-color");

      tBox.addEventListener("mousemove", function(event) {
        event.stopPropagation();
      });
      tBox.addEventListener("click", function(event) {
        event.stopPropagation();
      });

      tBox.appendChild(tColor);
      mainContainer.appendChild(tBox);

      fills[index].classList.add("isClicked");
      strokes[index].classList.add("disappear");

      window.setTimeout(function() {
        mainContainer.querySelector(".transition-color").classList.add("start-transition");
      }, 1);

      window.setTimeout(function() {
        location.href = linkDestination;
      }, 1000);

    } else {
      fills[index].classList.add("isEmpty");
      strokes[index].classList.add("disappear");


      window.setTimeout(function() {
        fills[index].classList.remove("isEmpty");
      }, 300);
      window.setTimeout(function() {
        strokes[index].classList.remove("disappear");
      }, 500);

    }
  }

  function setLink() {
    links[0] = "https://designdefined.github.io/JS/bookmarky/";
    links[1] = "https://designdefined.github.io/JS/bmk2/";
    links[2] = "https://designdefined.github.io/JS/gebab/";
    links[3] = "";
    links[4] = "";
    links[5] = "";
    links[6] = "";
    links[7] = "";
    links[8] = "";
    links[9] = "https://designdefined.github.io/JS/TESTING/";

  }



})();
