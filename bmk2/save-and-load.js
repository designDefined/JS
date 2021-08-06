
(function() {
  const btnSetting = document.querySelector(".js-btnSetting"),
    btnHome = document.querySelector(".js-btnHome");
  const modal = document.createElement("div"),
    modalGround = document.createElement("div");

  function setModalDefault() {
    const saveBtn = document.createElement("div"),
      saveTextbox = document.createElement("textarea"),
      loadBtn = document.createElement("div"),
      loadTextbox = document.createElement("textarea"),
      closeBtn = document.createElement("div");

    function closeModal() {
      saveTextbox.value = "";
      loadTextbox.value = "";
      modalGround.remove();
    }

    // modal elements
    modalGround.classList.add("css-modalGround");
    modal.classList.add("css-modal");
    saveBtn.classList.add("css-modal-button");
    loadBtn.classList.add("css-modal-button");
    saveTextbox.classList.add("css-modal-textbox");
    loadTextbox.classList.add("css-modal-textbox");
    saveBtn.innerText = "save";
    loadBtn.innerText = "load";
    closeBtn.innerText = "ⓧ";
    saveBtn.id = "save-button";
    loadBtn.id = "load-button";
    saveTextbox.id = "save-textbox";
    saveTextbox.readOnly = true;
    loadTextbox.id = "load-textbox";
    closeBtn.id = "close-button";

    // modal eventListeners

    saveBtn.addEventListener("click", save(saveTextbox));
    loadBtn.addEventListener("click", load(loadTextbox));
    closeBtn.addEventListener("click", closeModal);


    // append Everything
    modal.appendChild(saveBtn);
    modal.appendChild(saveTextbox);
    modal.appendChild(loadBtn);
    modal.appendChild(loadTextbox);
    modal.appendChild(closeBtn);
    modalGround.appendChild(modal);
  }

  function save(saveTextbox) {
    function generateSaveData() {
      const objData = {
        t1: localStorage.getItem("t1"),
        t2: localStorage.getItem("t2"),
        t3: localStorage.getItem("t3"),
        t4: localStorage.getItem("t4")
      }
      return JSON.stringify(objData);
    }

    return function() {
      const data = generateSaveData();
      saveTextbox.value = data;
      saveTextbox.select();
      document.execCommand('copy');
    }
  }

  function load(loadTextbox) {

    function validateData(data) {
      function validateId(btnId, tapId) {
        if (btnId !== tapId) {
          throw new UserException('invalidTapId');
        }
      }

      function validateBtn(btnObj) {
        if (!btnObj.hasOwnProperty("name")) {
          if (!btnObj.name) {
            throw 'invalidButtonName';
          }
        };
        if (!btnObj.hasOwnProperty("links")) {
          if (!btnObj.links) {
            throw 'invalidButtonLink';
          }

        };
        if (!btnObj.hasOwnProperty("theme")) {
          if (!btnObj.theme) {
            throw 'invalidButtonTheme';
          }
        };
      }

      for (const id in data) {
        const tap = JSON.parse(data[id]);
        for (const prop in tap) {
          if (prop === "id") {
            if (tap[prop] !== id) {
              validateId(tap[prop], id);
            }
          } else {
            validateBtn(tap[prop]);
          }
        }
      }
    }

    function loadData(data) {
      confirm("불러오시겠습니까? (현재 데이터는 지워집니다)");
      dataManager.clearModifying();
      for (const id in data) {
        localStorage.setItem(id, data[id]);
      }
      dataManager.refresh();
    }

    return function() {
      let data = null;
      try {
        data = JSON.parse(loadTextbox.value);
        validateData(data);
      } catch (e) {
        if (e instanceof SyntaxError) {
          alert("invalid data input");
        } else {
          alert(e);
        }
        return;
      }
      loadData(data);
    }
  }

  function openModal() {
    document.querySelector(".container").appendChild(modalGround);
  }

  function goHome() {
    location.href = "https://designdefined.github.io/JS/";
  }

  setModalDefault();
  btnSetting.addEventListener("click", openModal);
  btnHome.addEventListener("click", goHome)

})();
