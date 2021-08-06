/*Written By DesignDefined*/
"use strict";

const dataManager = (function dataManager() {
  const themeList = ["theme-airbnbScarlet", "theme-spotifyGreen", "theme-ikeaYellow", "theme-discordBlue", "theme-appleGray", "theme-twitchPurple"],
    tapList = ["t1", "t2", "t3", "t4"];
  let currentTap = {
    id: "t1"
  };

  let linksData = {
    b1: [],
    b2: [],
    b3: [],
    b4: []
  };

  function getTap() {
    const tapData = localStorage.getItem(currentTap.id);
    return JSON.parse(tapData);
  }

  function getBtn(tapObj, id) {
    const btn = tapObj[id];
    if (btn) {
      return btn;
    }
    return false;
  }

  function getSelectedTheme(id) {
    const tap = getTap(),
      btn = getBtn(tap, id);
    return btn.theme;
  }

  function save(tap) {
    const tapString = JSON.stringify(tap);
    localStorage.setItem(currentTap.id, tapString);
  }

  function saveTheme(id, theme) {
    const tap = getTap(),
      btn = getBtn(tap, id);
    btn.theme = theme;
    save(tap);
  }

  function saveName(id, name) {
    const tap = getTap(),
      btn = getBtn(tap, id);
    btn.name = name;
    save(tap);
  }

  function saveLinks(id, links) {
    const tap = getTap(),
      btn = getBtn(tap, id);
    btn.links = links;
    save(tap);
  }

  function load(obj) {
    const tap = getTap(),
      btn = getBtn(tap, obj.id);
    bigBuilder.loadName(obj, btn.name);
    bigBuilder.loadTheme(obj, btn.theme);
    bigBuilder.loadLink(obj, btn.links, linksData[obj.id]);
  }

  function changeTap(obj) {
    if (obj.id) {
      currentTap.id = obj.id;
    } else {
      console.error("invalid tap input!");
    }
  }


  function clearLinksData() {
    linksData["b1"] = [];
    linksData["b2"] = [];
    linksData["b3"] = [];
    linksData["b4"] = [];
  }

  function clearModifying() {
    const modifyings = document.querySelectorAll(".modifying");
    for (let i = 0; i < modifyings.length; i++) {
      console.log(modifyings[i].parentNode);
      bigBuilder.handleName(modifyings[i].parentNode)(new Event("click"));
    }
  }

  function refresh() {
    const bigButtons = document.querySelectorAll(".js-btnBig");
    clearLinksData();
    for (let i = 0; i < bigButtons.length; i++) {
      const obj = bigButtons[i];
      // const linksToDelete = obj.querySelector(".js-btnList").children;
      // for (let i = 0; i < linksToDelete.length; i++) {
      //   linksToDelete[i].remove();
      // }
      obj.querySelector(".js-btnList").innerHTML = "";
      load(obj);
    }
  }

  function createNewTapData(tapId) {
    const tap = {
      id: tapId,
      b1: {
        name: null,
        theme: null,
        links: []
      },
      b2: {
        name: null,
        theme: null,
        links: []
      },
      b3: {
        name: null,
        theme: null,
        links: []
      },
      b4: {
        name: null,
        theme: null,
        links: []
      },
    }
    return JSON.stringify(tap);
  }

  (function initiate() {
    for (let i = 0; i < tapList.length; i++) {
      const data = localStorage.getItem(tapList[i]);
      if (!data) {
        localStorage.setItem(tapList[i], createNewTapData(tapList[i]));
      }
    }
  })();


  return {
    currentTap,
    themeList,
    getSelectedTheme,
    saveName,
    saveTheme,
    saveLinks,
    load,
    changeTap,
    clearModifying,
    refresh,
    linksData
  }
})();

const bigBuilder = (function bigBuilder() {

  const handleName = function handleName(obj) {
    const btnName = obj.querySelector(".js-btnName"),
      btnNameBtn = obj.querySelector(".js-btnNameBtn"),
      btnBigMain = obj.querySelector(".js-btnBigMain"),
      bigGround = obj.parentNode,
      id = obj.id;


    function checkSelectedTheme(id) {
      const checkList = btnBigMain.getElementsByClassName("css-btnThemeBtn");
      let checkValue = dataManager.getSelectedTheme(id);
      if (!checkValue) {
        checkValue = defaultTheme(id);
      }
      if (checkList !== null) {
        for (let index = 0; index < checkList.length; index++) {
          const box = checkList[index];
          if (box.classList.contains(checkValue)) {
            box.classList.add("filled");
          } else {
            box.classList.remove("filled");
          }
        }
      } else {}
    }

    function handleTheme(id, themeInput) {
      return function() {
        const newTheme = themeInput,
          currentTheme = dataManager.getSelectedTheme(id);
        if (bigGround.classList.contains(currentTheme)) {
          bigGround.classList.replace(currentTheme, newTheme);
        } else {
          bigGround.classList.add(newTheme);
        }
        dataManager.saveTheme(id, newTheme);
        checkSelectedTheme(id);
      };
    }

    function setTheme() {
      const btnArea = btnBigMain.querySelector(".css-btnTheme");
      btnBigMain.removeChild(btnArea);
    }

    function createThemeInput(_theme) {
      const btn = document.createElement("div");
      btn.classList.add("css-btnThemeBtn", _theme);
      btn.addEventListener("click", function() {
        event.stopPropagation();
      });
      return btn;
    }

    function modifyTheme(id) {
      const btnArea = document.createElement("div");
      btnArea.classList.add("css-btnTheme");
      dataManager.themeList.forEach(function(themeName) {
        const themeBtn = createThemeInput(themeName);
        themeBtn.addEventListener("click", handleTheme(id, themeName));
        btnArea.appendChild(themeBtn);
      });
      btnBigMain.appendChild(btnArea);
      checkSelectedTheme(id);
    }

    function setName(id) {
      const input = btnBigMain.querySelector(".js-inputBtnName");
      if (input.value) {
        btnName.innerText = input.value;
        dataManager.saveName(id, input.value);
      } else {
        btnName.innerText = "Untitled"
        dataManager.saveName(id, "Untitled");
      }
      btnNameBtn.innerText = "수정";
      btnBigMain.removeChild(input);
    }

    function modifyName() {

      function createNameInput() {
        const input = document.createElement("input");
        input.classList.add("js-inputBtnName");
        input.type = "text";
        input.value = currentName;
        input.addEventListener("click", function(event) {
          event.stopPropagation();
        });
        return input;
      }

      const currentName = btnName.innerText;
      btnName.innerText = "";
      btnNameBtn.innerText = "확인";
      const input = createNameInput();
      btnBigMain.insertBefore(input, btnName);
    }

    return function(event) {
      event.stopPropagation();
      let classes = btnBigMain.classList;
      let isModifying = classes.toggle("modifying");
      if (isModifying) {
        modifyName();
        modifyTheme(id);
      } else {
        setName(id);
        setTheme();
      }
    }
  }

  const handleSubmit = function handleSubmit(obj) {
    const inputName = obj.querySelector(".js-inputName"),
      inputLink = obj.querySelector(".js-inputLink"),
      btnList = obj.querySelector(".js-btnList");

    function deleteLink(event) {
      const btn = event.target;
      const li = btn.parentNode;
      confirm("링크를 삭제하시겠습니까?");
      btnList.removeChild(li);
      const clearedLinks = dataManager.linksData[obj.id].filter(function(link) {
        return setId(obj, link.order) !== li.id;
      });
      dataManager.linksData[obj.id] = clearedLinks;
      dataManager.saveLinks(obj.id, clearedLinks);
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
      const newId = setId(obj, linkObj.order);
      li.id = newId;
      li.appendChild(a);
      li.appendChild(delBtn);
      btnList.appendChild(li);
    }

    function addLink(obj, name, link, links) {
      const order = links.length + 1;
      const linkObj = {
        name,
        link,
        order
      };
      links.push(linkObj);
      paintLink(linkObj);
      dataManager.saveLinks(obj.id, links);
    }

    return {
      mainFunction: function(event) {
        let links = dataManager.linksData[obj.id];
        event.preventDefault();
        if (!inputLink.value) {
          alert("링크가 없습니다");
        } else {
          if (!inputName.value) {
            const order = links.length + 1
            const currentName = `${order}번째 링크`;
            const currentLink = inputLink.value;
            addLink(obj, currentName, currentLink, links);
          } else {
            const currentName = inputName.value
            const currentLink = inputLink.value;
            addLink(obj, currentName, currentLink, links);
          }
        }
        inputName.value = "";
        inputLink.value = "";
      },
      addLink: addLink
    }
  }

  function loadLink(obj, linkData, linkArr) {
    if (linkData) {
      for (let i = 0; i < linkData.length; i++) {
        handleSubmit(obj).addLink(obj, linkData[i].name, linkData[i].link, linkArr)
      }
    }
  }

  function defaultTheme(id) {
    const myId = id;
    switch (myId) {
      case "b1":
        return "theme-airbnbScarlet";
        break;
      case "b2":
        return "theme-spotifyGreen";
        break;
      case "b3":
        return "theme-ikeaYellow";
        break;
      case "b4":
        return "theme-discordBlue";
        break;
      default:
        return "theme-default"
    }
  }

  function clearTheme(obj) {
    const themes = dataManager.themeList;
    for (let i = 0; i < themes.length; i++) {
      if (obj.classList.contains(themes[i])) {
        obj.classList.remove(themes[i]);
      }
    }
  }

  function loadTheme(obj, theme) {
    const bigGround = obj.parentNode;
    clearTheme(bigGround);
    if (theme) {
      bigGround.classList.add(theme);

    } else {
      bigGround.classList.add(defaultTheme(obj.id))
    }
  }

  function loadName(obj, name) {
    if (name) {
      obj.querySelector(".js-btnName").innerText = name;
    } else {
      obj.querySelector(".js-btnName").innerText = "Untitled";
    }
  }

  function startEffectBig(obj) {
    const effBig = obj.parentNode.querySelector(".js-effBig");
    return function() {
      effBig.classList.add("filling", "whitening");
    }
  }

  function endEffectBig(obj) {
    const effBig = obj.parentNode.querySelector(".js-effBig");
    return function() {
      effBig.classList.remove("filling", "whitening");
    }
  }

  function openAll(obj) {
    return function() {
      const links = dataManager.linksData[obj.id];
      if (!obj.querySelector(".js-btnBigMain").classList.contains("modifying")) {
        if (links !== null) {
          links.forEach(function(_link) {
            const location = _link.link;
            window.open(location);
          });
        }
      }
    }
  }

  function addEffect(obj) {
    const btnBigMain = obj.querySelector(".js-btnBigMain");
    let links = dataManager.linksData[obj.id];
    btnBigMain.addEventListener("click", openAll(obj, links));
    btnBigMain.addEventListener("mouseover", startEffectBig(obj));
    btnBigMain.addEventListener("mouseout", endEffectBig(obj));
  }

  return {
    handleName,
    handleSubmit,
    loadName,
    loadTheme,
    loadLink,
    addEffect
  }
})();

const smallBuilder = (function smallBuilder() {
  const smallGround = document.querySelector(".js-smallGround");
  const currentClassName = "css-currentTap"

  function handleTap(obj) {

    function isCurrentTap(obj) {
      if (obj.classList.contains(currentClassName)) {
        return true;
      }
      return false;
    }

    function clearCurrentTap() {
      smallGround.querySelector("." + currentClassName).classList.remove("css-currentTap");
    }

    function setCurrentTap(obj) {
      dataManager.changeTap(obj);
      obj.classList.add(currentClassName);
    }
    return function() {
      if (!isCurrentTap(obj)) {
        dataManager.clearModifying();
        clearCurrentTap();
        setCurrentTap(obj);
        dataManager.refresh();
      }
    };
  }

  return {
    handleTap
  }
})();

const Initiator = (function Initiator() {
  const bigButtons = document.querySelectorAll(".js-btnBig"),
    smallButtons = document.querySelectorAll(".js-btnSmall");

  const activateBig = function activateBig(button_obj) {
    const btn = button_obj;
    btn.querySelector(".js-btnNameBtn").addEventListener("click", bigBuilder.handleName(btn));
    btn.querySelector(".js-submitForm").addEventListener("click", bigBuilder.handleSubmit(btn).mainFunction);
    bigBuilder.addEffect(btn);
    dataManager.load(btn);
  }

  const activateSmall = function activateSmall(button_obj) {
    const btn = button_obj;
    btn.addEventListener("click", smallBuilder.handleTap(btn));
  }

  function replicateToButtons() {
    for (let i = 0; i < bigButtons.length; i++) {
      activateBig(bigButtons[i]);
    }
    for (let i = 0; i < smallButtons.length; i++) {
      activateSmall(smallButtons[i]);
    }
  }

  return {
    replicateToButtons
  }

})();

Initiator.replicateToButtons();
