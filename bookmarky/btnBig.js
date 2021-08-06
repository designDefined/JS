function activateButton(buttonID) {
  const btnBig = document.getElementById(buttonID),
    bigGround = btnBig.parentNode,
    effBig = btnBig.parentNode.querySelector(".js-effBig"),
    btnBigMain = btnBig.querySelector(".js-btnBigMain"),
    btnName = btnBig.querySelector(".js-btnName"),
    btnNameBtn = btnBig.querySelector(".js-btnNameBtn"),
    btnForm = btnBig.querySelector(".js-btnForm"),
    submitForm = btnForm.querySelector(".js-submitForm"),
    inputName = btnForm.querySelector(".js-inputName"),
    inputLink = btnForm.querySelector(".js-inputLink"),

    btnList = btnBig.querySelector(".js-btnList");

  const LINK_LS = `links_${buttonID}`,
    NAME_LS = `name_${buttonID}`,
    THEME_LS = `theme_${buttonID}`;
  let links = [];


  //add Theme Here
  const themeList = ["theme-airbnbScarlet", "theme-spotifyGreen", "theme-ikeaYellow", "theme-discordBlue", "theme-appleGray", "theme-twitchPurple"];

  function stopPropagation(_object) {
    _object.addEventListener("click");
    _object.addEventListner("mouseOn")
  }

  function activateMain() {
    btnBigMain.addEventListener("click", openAll);
    btnBigMain.addEventListener("mouseover", startEffectBig);
    btnBigMain.addEventListener("mouseout", endEffectBig);
  }

  function startEffectBig() {
    effBig.classList.add("filling", "whitening");
  }

  function endEffectBig() {
    effBig.classList.remove("filling", "whitening");
  }

  function openAll() {
    if (!btnBigMain.classList.contains("modifying")) {
      if (links !== null) {
        links.forEach(function(_link) {
          const location = _link.link;
          window.open(location);
        });
      }
    }
  }

  function checkSelectedTheme() {
    const checkList = btnBigMain.getElementsByClassName("css-btnThemeBtn");
    const checkValue = localStorage.getItem(THEME_LS);
    if (checkList !== null) {
      for (let index = 0; index < checkList.length; index++) {
        const box = checkList[index];
        if (box.classList.contains(checkValue)) {
          box.classList.add("filled");
          console.log("box checked");
        } else {
          box.classList.remove("filled");
          console.log("box unchecked");
        }
      }
    } else {}
  }

  function saveTheme(themeInput) {
    localStorage.setItem(THEME_LS, themeInput);
  }

  function handleTheme(themeInput) {
    const newTheme = themeInput;
    const currentTheme = localStorage.getItem(THEME_LS);
    if (bigGround.classList.contains(currentTheme)) {
      bigGround.classList.replace(currentTheme, newTheme);
    } else {
      bigGround.classList.add(newTheme);
    }
    saveTheme(newTheme);
    checkSelectedTheme();
  }

  function setTheme() {
    const btnArea = btnBigMain.querySelector(".css-btnTheme");
    btnBigMain.removeChild(btnArea);
  }

  function modifyTheme() {
    const btnArea = document.createElement("div");
    const selected = localStorage.getItem(THEME_LS);
    btnArea.classList.add("css-btnTheme");
    themeList.forEach(function(_theme) {
      const btn = document.createElement("div");
      btn.classList.add("css-btnThemeBtn", _theme);
      btn.addEventListener("click", function() {
        event.stopPropagation();
      });
      btn.addEventListener("click", function() {
        handleTheme(_theme);
      });
      btnArea.appendChild(btn);
    });
    btnBigMain.appendChild(btnArea);
    checkSelectedTheme();
  }

  function saveName(name) {
    localStorage.setItem(NAME_LS, name);
  }

  function setName() {
    const input = btnBigMain.querySelector(".js-inputBtnName");
    const newName = input.value;
    if (input.value) {
      btnName.innerText = newName;
      saveName(newName);
    } else {
      btnName.innerText = "Untitled"
      saveName("Untitled");
    }
    btnNameBtn.innerText = "수정";
    btnBigMain.removeChild(input);
  }

  function modifyName() {
    const currentName = btnName.innerText;
    btnName.innerText = "";
    const input = document.createElement("input");
    input.classList.add("js-inputBtnName");
    input.type = "text";
    input.value = currentName;
    //code for changing name
    btnNameBtn.innerText = "확인";
    //code for preventing click input
    input.addEventListener("click", function(event) {
      event.stopPropagation();
    });

    btnBigMain.insertBefore(input, btnName);
  }

  function handleName(event) {
    event.stopPropagation();
    let classes = btnBigMain.classList;
    let isModifying = classes.toggle("modifying");
    if (isModifying) {
      modifyName();
      modifyTheme();
    } else {
      setName();
      setTheme();
    }
  }

  function deleteLink(event) {
    const btn = event.target;
    const li = btn.parentNode;
    btnList.removeChild(li);

    const clearedLinks = links.filter(function(link) {
      return setId(btnBig, link.order) !== li.id;
    });
    links = clearedLinks;
    saveLink(links);
  }

  function saveLink(linkObj) {
    localStorage.setItem(LINK_LS, JSON.stringify(linkObj));
  }

  function setId(parent, order) {
    return `${parent.id}_${order}`;
  }

  function paintLink(linkObj) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerText = linkObj.name;
    a.href = linkObj.link;
    a.target = "_blank";
    const delBtn = document.createElement("button");
    delBtn.innerText = "ⓧ";
    delBtn.addEventListener("click", deleteLink);
    const newId = setId(btnBig, linkObj.order);
    li.id = newId;
    li.appendChild(a);
    li.appendChild(delBtn);
    btnList.appendChild(li);
  }

  function addLink(name, link) {
    const order = links.length + 1;
    const linkObj = {
      name,
      link,
      order
    };
    links.push(linkObj);
    paintLink(linkObj);
    saveLink(links);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!inputLink.value) {
      alert("링크가 없습니다");
    } else {
      if (!inputName.value) {
        const order = links.length + 1
        const currentName = `${order}번째 링크`;
        const currentLink = inputLink.value;
        addLink(currentName, currentLink);
      } else {
        const currentName = inputName.value
        const currentLink = inputLink.value;
        addLink(currentName, currentLink);
      }
    }
    inputName.value = "";
    inputLink.value = "";
  }

  function defaultTheme() {
    const myId = buttonID;
    switch (myId) {
      case "left_top":
        return "theme-airbnbScarlet";
        break;
      case "right_top":
        return "theme-spotifyGreen";
        break;
      case "left_bot":
        return "theme-ikeaYellow";
        break;
      case "right_bot":
        return "theme-discordBlue";
        break;
      default:
        return "theme-default"
    }
  }

  function loadTheme() {
    const loadedTheme = localStorage.getItem(THEME_LS);
    if (loadedTheme !== null) {
      handleTheme(loadedTheme);
    } else {
      handleTheme(defaultTheme());
    }
  }


  function loadName() {
    const loadedName = localStorage.getItem(NAME_LS);
    if (loadedName !== null) {
      btnName.innerText = loadedName;
    } else {
      btnName.innerText = "Untitled";
    }
  }

  function loadLink() {
    const loadedLinks = localStorage.getItem(LINK_LS);
    if (loadedLinks !== null) {
      const parsedLinks = JSON.parse(loadedLinks);
      parsedLinks.forEach(function(_link) {
        addLink(_link.name, _link.link);
      });
    }
  }

  function init() {
    loadTheme();
    loadName();
    loadLink();
    activateMain();
    btnNameBtn.addEventListener("click", handleName);
    submitForm.addEventListener("click", handleSubmit);
  }

  init();
}

function wakeAll() {
  const bigButtons = document.getElementsByClassName("js-btnBig");
  for (let index = 0; index < bigButtons.length; index++) {
    const id = bigButtons[index].id
    activateButton(id);
  }
}

wakeAll();  
