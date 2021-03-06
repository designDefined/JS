(function initiateGreeting() {
  const greetingBox = document.querySelector(".greeting-box"),
    greeting = greetingBox.querySelector(".greeting");
  const letters = document.querySelectorAll(".letter");

  const proverbs = [],
    explanations = [];

  let numberIsNow = 0,
    process = 0,
    source = "",
    isExplanation = false;

  const interval = 100;
  let writing = 0,
    finishing = 0;

  proverbData();
  explanationData();
  for (i = 0; i < letters.length; i++) {
    setLetter(i);
    mobileSetLetter(i);
  }

  //initiate start
  numberIsNow = randomNumber();
  lifecycle("write-reset");


  function mobileSetLetter(index) {
    const mobileExplanation= document.createElement("div");
    mobileExplanation.classList.add("mobile-explanation");
    if (explanations[index]) {
      mobileExplanation.innerText = explanations[index];
    } else {
      mobileExplanation.innerText = "coming soon!"
    }
    letters[index].appendChild(mobileExplanation);
  }

  function setLetter(index) {
    letters[index].addEventListener("mouseenter", function() {
      numberIsNow = event.currentTarget.index;
      isExplanation = true;
      greeting.style = `color: var(--alphabet${numberIsNow}); font-style: normal`;
      lifecycle("write-reset");
    });

    letters[index].addEventListener("mouseleave", function() {
      numberIsNow = randomNumber();
      isExplanation = false;
      greeting.style = "";
      lifecycle("write-reset");
    });

    letters[index].index = index;
  }


  function lifecycle(status) {

    switch (status) {

      case "write-reset":
        process = 0;
        greeting.innerText = "";
        clearInterval(writing);
        clearTimeout(finishing);

        if (isExplanation) {
          if (explanations[numberIsNow]) {
            source = explanations[numberIsNow];
          } else {
            source = "Coming Soon!"
          }
        } else {
          source = proverbs[numberIsNow];
        }
        lifecycle("write-ing");

        break;

      case "write-ing":
        writing = setInterval(function() {
          if (greeting.innerText.length < source.length) {
            process = process + 1;
            greeting.innerText = source.substring(0, process);
          } else {
            clearInterval(writing);
            lifecycle("write-finish");
          }
        }, interval);
        break;

      case "write-finish":
        if (isExplanation) {

        } else {
          finishing = setTimeout(function() {
            numberIsNow = Math.floor(Math.random() * proverbs.length);
            lifecycle("write-reset");
          }, 2000);
        }
        break;

      default:

    }
  }

  function randomNumber() {
    return Math.floor(Math.random() * proverbs.length);
  }

  function proverbData() {
    proverbs[0] = `"Let's make world worth playing"`;
    proverbs[1] = `"Isn't it free enough to enjoy?"`;
    proverbs[2] = `"We treats every client equally"`;
  }

  function explanationData() {
    explanations[0] = "1. Bookmarky: Bookmark Manager for Multi-Tap User";
    explanations[1] = "2. Bookmarky v.2"
    explanations[2] = "3. <Project : Dogfooding> Introduction Page"
    explanations[3] = "4. <Project : Web-boy> Presentation Page"
    explanations[4] = "5. 2022-1 SNU digital-ethnography assignment 1"
    explanations[9] = "#TEST GROUND#"
  }


})();
