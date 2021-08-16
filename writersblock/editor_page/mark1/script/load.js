/* Written by DeisgnDefined */
"use strict";

const UILoader = (function UILoader() {

  const load = (function load() {

    function page() {
      const savedPage = vWBD.page.data;
      HH.get("#title-input").value = savedPage.title;
      HH.get("#author-input").value = savedPage.author;
      HH.get("#type-select").value = savedPage.type;
      HH.get("#theme-select").value = savedPage.theme;
    };

    function plugin() {
      const list = vWBD.plugin.getList();
      for (let i = 0; i < list.length; i++) {
        if (list[i].on === true) {
          list[i].trigger.checked = true;
        }
      }
    };

    function blockTree() {
      const blockLane = HH.get(".block-lane"),
        newBlockButton = HH.get(".new-block-button");
      for (let i = 0; i < vWBD.blockTree.allBlocks.length; i++) {
        blockSector.createPreview(vWBD.blockTree.allBlocks[i]);
      };
    };

    return {
      page,
      plugin,
      blockTree
    }
  })();

  const blockSector = (function blockArea() {

    const blockArea = HH.get(".block-area"),
      blockLane = HH.get(".block-lane"),
      newBlockButton = HH.get(".new-block-button");


    function newPreview(block) {
      const newP = document.createElement("div"),
        blockOrder = document.createElement("div"),
        blockNickname = document.createElement("div"),
        blockText = document.createElement("div"),
        blockIcon = document.createElement("div");

      HH.setC1(newP, "block");
      HH.setC1(newP, "inactive");
      HH.setC1(blockOrder, "block-order");
      HH.setC1(blockNickname, "block-nickname");
      HH.setC1(blockText, "block-text");
      HH.setC1(blockIcon, "block-icon");

      blockOrder.innerHTML = "#" + block.order;
      blockNickname.innerHTML = block.nickname;
      blockText.innerHTML = block.text;
      setIcon(blockIcon, block);

      newP.appendChild(blockOrder);
      newP.appendChild(blockNickname);
      newP.appendChild(blockText);
      newP.appendChild(blockIcon);
      return newP;
    }

    function switchActive(target) {
      if (target.classList.contains("active")) {
        HH.repC(target, "active", "inactive");
        vWBD.blockTree.deleteCurrent();
      } else {
        const previous = document.querySelector(".active");
        if (previous) {
          HH.repC(previous, "active", "inactive");
        }
        HH.repC(target, "inactive", "active");
        vWBD.blockTree.setCurrent(target);
      }
      editSector.refresh();
    };

    function selectBlock(tag) {
      return function() {
        switchActive(tag.triggerObject);
      }
    };

    function setButtons(preview) {
      btn.add.clicker(preview, selectBlock);
    }

    function placePreview(preview) {
      blockLane.insertBefore(preview, newBlockButton);
    }

    function createPreview(block) {
      const preview = newPreview(block);
      block.previewObject = preview;
      setButtons(preview);
      placePreview(preview);
    }

    function setIcon(iconDiv, block) {}

    return {
      createPreview
    }
  })();

  const editSector = (function editArea() {
    const editArea = HH.get(".edit-area"),
      info = HH.get(".edit-info"),
      basic = HH.get("#edit-basic"),
      text = HH.get("#edit-text");
    const hiders = editArea.querySelectorAll(".hider");

    function refresh() {
      const currentBlock = vWBD.blockTree.current;
      if (!currentBlock) {
        showHider();
        return;
      }
      deleteHider();
      refreshInfo();
      refreshBasic();
      refreshText();
    }

    function showHider() {
      for (let i = 0; i < hiders.length; i++) {
        HH.delC(hiders[i], "invisible");
      }
    }

    function deleteHider() {
      for (let i = 0; i < hiders.length; i++) {
        HH.setC1(hiders[i], "invisible");
      }
    }

    function refreshInfo() {
      info.querySelector(".edit-info-order").innerHTML = vWBD.blockTree.current.order;
      info.querySelector(".edit-info-nickname").innerHTML = vWBD.blockTree.current.nickname;
      info.querySelector(".edit-info-text").innerHTML = vWBD.blockTree.current.text;
      info.querySelector(".edit-info-size").innerHTML = vWBD.blockTree.current.size;
      info.querySelector(".edit-info-effect").innerHTML = vWBD.blockTree.current.effect;
    }

    function refreshBasic() {
      basic.querySelector("#nickname-input").value = vWBD.blockTree.current.nickname;
      basic.querySelector(".order-number").innerHTML = vWBD.blockTree.current.order;
    }

    function refreshText() {
      text.querySelector("#text-input").value= vWBD.blockTree.current.text;
    }

    return {
      refresh
    };
  })();

  return {
    load,
    blockSector,
    editSector,
  };
})();

const mainLoader = (function mainLoader() {

  function isTemporalDataExist() {
    if (!vWBD.storage.getPage()) {
      if (!vWBD.storage.getPlugin()) {
        if (!vWBD.storage.getBlockTree()) {
          return false;
        }
      }
    }
    return true;
  }

  function loadData() {
    const pageData = vWBD.storage.getPage(),
      pluginData = vWBD.storage.getPlugin(),
      blockData = vWBD.storage.getBlockTree();

    if (pageData) {
      vWBD.page.downloadData(pageData);
      UILoader.load.page();
    }
    if (pluginData) {
      vWBD.plugin.downloadData(pluginData);
      UILoader.load.plugin();
    }
    if (blockData) {
      vWBD.blockTree.downloadData(blockData);
      UILoader.load.blockTree();
    }
  }

  (function initiatialActivation() {
    if (!isTemporalDataExist()) {
      console.log("new project!");
      return;
    };
    let isLoading = confirm("작업 중인 프로젝트가 있습니다. 불러오시겠습니까?");
    if (!isLoading) {
      vWBD.storage.clearAll();
      console.log("new project!");
      return;
    }
    console.log("now loading");
    loadData();
    return;
  })();

})();


function investigate() {
  console.dir(vWBD.page.data);
  console.dir(vWBD.plugin.allPlugins);
  console.dir(vWBD.blockTree.allBlocks);

}
