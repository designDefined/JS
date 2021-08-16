/* Written by DeisgnDefined */
"use strict";

const buttonMap = (function ButtonMap() {
  const menuList = HH.get(".menu-list");
  const leftBarArea = HH.get(".left-bar-area"),
    leftBarHandle = HH.get(".left-bar-handle"),
    leftBarArrow = HH.get(".left-bar-arrow");
  const leftBarMenuTitles = HH.getAll(".left-bar-menu-title"),
    titleInput = HH.get("#title-input"),
    authorInput = HH.get("#author-input"),
    typeSelect = HH.get("#type-select"),
    themeSelect = HH.get("#theme-select"),
    pluginCheckbox = HH.getAll(".plugin-checkbox"),
    basicPluginCheckbox = HH.getAll(".basic-plugin-checkbox"),
    typePluginCheckbox = HH.getAll(".type-plugin-checkbox"),
    themePluginCheckbox = HH.getAll(".theme-plugin-checkbox"),
    effectPluginCheckbox = HH.getAll(".effect-plugin-checkbox");
  const blockArea = HH.get(".block-area"),
    editMenuTitles = HH.getAll(".edit-menu-title"),
    nicknameInput = HH.get("#nickname-input"),
    orderInput = HH.get("#order-input"),
    textInput = HH.get("#text-input");

  function basicsOfToggle(tag) {
    function onMethod() {};

    function offMethod() {};

    if (!tag.toggle) {
      onMethod();
      tag.toggle = true;
    } else {
      offMethod();
      tag.toggle = false;
    }
  };


  //left-bar
  (function leftBarSector() {

    function toggleLeftBar(tag) {
      function onMethod() {
        HH.setC1(leftBarArea, "minimized");
        HH.setC1(blockArea, "extanded");
        leftBarArrow.innerHTML = "▶";
      };

      function offMethod() {
        HH.delC(leftBarArea, "minimized");
        HH.delC(blockArea, "extanded");
        leftBarArrow.innerHTML = "◀";
      };

      return function() {
        if (!tag.toggle) {
          onMethod();
          tag.toggle = true;
        } else {
          offMethod();
          tag.toggle = false;
        }
      }
    };

    function openLeftBarMenu(tag) {
      const menu = tag.triggerObject.parentElement,
        content = menu.querySelector(".left-bar-menu-content");

      function onMethod() {
        HH.setC1(menu, "opened");
      };

      function offMethod() {
        HH.delC(menu, "opened");
      };

      return function() {
        if (!tag.toggle) {
          onMethod();
          tag.toggle = true;
        } else {
          offMethod();
          tag.toggle = false;
        }
      }
    };

    btn.add.toggler(leftBarHandle, toggleLeftBar);
    btn.add.togglerAll(leftBarMenuTitles, openLeftBarMenu);



    //menu inputs
    function changePageTitle(tag) {
      return function() {
        console.log("title changed");
        vWBD.page.setTitle(tag.triggerObject.value);
        tag.changed = true;
      };
    };

    function changePageAuthor(tag) {
      return function() {
        vWBD.page.setAuthor(tag.triggerObject.value);
        tag.changed = true;
      };
    };

    function changePageType(tag) {
      return function() {
        const type = tag.triggerObject.value;
        vWBD.page.setType(type);
        vWBD.plugin.selectById(type);
        tag.changed = true;
      };
    };

    function changePageTheme(tag) {
      return function() {
        const theme = tag.triggerObject.value;
        vWBD.page.setTheme(theme);
        vWBD.plugin.selectById(theme);
        tag.changed = true;
      };
    };

    function changePlugin(tag) {
      const id = tag.triggerObject.id;
      return function() {
        vWBD.plugin.setById(id, tag.triggerObject.checked)
      }
    }

    btn.add.input(titleInput, changePageTitle);
    btn.add.input(authorInput, changePageAuthor);
    btn.add.input(typeSelect, changePageType);
    btn.add.input(themeSelect, changePageTheme);
    btn.add.inputAll(pluginCheckbox, changePlugin);

  })();

  (function blockSector() {
    const newBlockButton = HH.get(".new-block-button");

    function addNewBlockAndPreview(tag) {
      return function() {
        const newB = vWBD.blockTree.createBlock();
        UILoader.blockSector.createPreview(newB);
        vWBD.storage.updateBlockTree();
      }
    }

    btn.add.clicker(newBlockButton, addNewBlockAndPreview);

  })();

  (function editSector() {

    function openEditMenu(tag) {
      const menu = tag.triggerObject.parentElement,
        content = menu.querySelector(".edit-menu-content");

      function onMethod() {
        HH.setC1(menu, "opened");
      };

      function offMethod() {
        HH.delC(menu, "opened");
      };

      return function() {
        if (!tag.toggle) {
          onMethod();
          tag.toggle = true;
        } else {
          offMethod();
          tag.toggle = false;
        }
      }
    };

    btn.add.togglerAll(editMenuTitles, openEditMenu);

    function changeBlockNickname(tag) {
      return function() {
        console.log("nickname changed");
        vWBD.blockTree.setNickname(tag.triggerObject.value);
        tag.changed = true;
      };
    };

    btn.add.input(nicknameInput, changeBlockNickname);
  })();
})();
