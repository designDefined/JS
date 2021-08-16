/* Written by DeisgnDefined */
"use strict";

const vWBD = (function virtualWritersBlockData() {
  const page = (function page() {
    {
      const data = {
        title: "",
        author: "",
        type: "",
        theme: ""
      };

      function setTitle(input) {
        data.title = input;
        vWBD.storage.updatePage();
      };

      function setAuthor(input) {
        data.author = input;
        vWBD.storage.updatePage();
      };

      function setType(input) {
        data.type = input;
        vWBD.storage.updatePage();
      };

      function setTheme(input) {
        data.theme = input;
        vWBD.storage.updatePage();
      };

      function downloadData(pageData) {
        data.title = pageData.title;
        data.author = pageData.author;
        data.type = pageData.type;
        data.theme = pageData.theme;
      };

      return {
        data,
        setTitle,
        setAuthor,
        setType,
        setTheme,
        downloadData
      }
    }
  })();

  const plugin = (function plugin() {
    const allPlugins = {
      pageNormal: {},
      photoNovel: {},
      digitalMuseum: {},
      interactiveBasics: {},
      analogueNoir: {}
    };

    function getList() {
      return Object.values(allPlugins);
    };

    function clear() {
      const list = getList();
      for (let i = 0; i < list.length; i++) {
        list[i].on = false;
        list[i].trigger.checked = false;
      }
    };

    function getById(inputId) {
      const list = getList();
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === inputId) {
          return list[i];
        }
      }
      return false;
    };

    function getByTrigger(inputTrigger) {
      const list = getList();
      for (let i = 0; i < list.length; i++) {
        if (list[i].trigger === inputTrigger) {
          return list[i];
        }
      }
      return false;
    };

    function setById(inputId, bool) {
      const pluginObj = getById(inputId);
      if (pluginObj) {
        pluginObj.on = bool;
        pluginObj.trigger.checked = bool;
      };
      vWBD.storage.updatePlugin();
    };

    function selectById(inputId) {
      const pluginObj = getById(inputId);
      if (pluginObj) {
        pluginObj.on = true;
        pluginObj.trigger.checked = true;
      };
      vWBD.storage.updatePlugin();
    };

    function downloadData(pluginData) {
      const dataList = Object.values(pluginData);
      for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].on === true) {
          setById(dataList[i].id, true);
        }
      }
    }

    (function initialize() {
      const names = Object.getOwnPropertyNames(allPlugins);
      for (let i = 0; i < names.length; i++) {
        const id = JJ.camelToHyphen(names[i]);
        Object.defineProperty(allPlugins, names[i], {
          value: {
            on: false,
            id: id,
            trigger: HH.get("#" + id)
          },
          configurable: true,
          enumerable: true,
          writable: true
        });
      }
    })();
    return {
      allPlugins,
      getList,
      setById,
      selectById,
      downloadData
    };
  })();

  const blockTree = (function blockTree() {
    const allBlocks = [];
    let current = null;

    const idPrefix = "block-",
      sampleNicknamePrefix = "블록",
      sampleText = "텍스트를 입력하세요";


    function createBlock() {
      const block = {
        id: idPrefix + (allBlocks.length + 1),
        order: allBlocks.length + 1,
        nickname: sampleNicknamePrefix + (allBlocks.length + 1),
        size: "normal",
        text: sampleText,
        effect: "",
        previewObject: null
      };
      allBlocks.push(block);
      return block;
    }

    function getByPreview(inputPreview) {
      for (let i = 0; i < allBlocks.length; i++) {
        if (allBlocks[i].previewObject === inputPreview) {
          return allBlocks[i];
        }
      }
      return false;
    };

    function setCurrent(inputPreview) {
      const target = getByPreview(inputPreview);
      vWBD.blockTree.current = target;
    };

    function deleteCurrent() {
      vWBD.blockTree.current = null;
    };

    function downloadData(blockData) {
      for (let i = 0; i < blockData.length; i++) {
        const block = createBlock();
        block.id = blockData[i].id;
        block.order = blockData[i].order;
        block.nickname = blockData[i].nickname;
        block.size = blockData[i].size;
        block.text = blockData[i].text;
        block.effect = blockData[i].effect;
        block.previewObject = null;
      }
    };

    function setNickname(input){
      vWBD.blockTree.current.nickname = input;
      vWBD.storage.updateBlockTree();
    }

    return {
      allBlocks,
      current,
      createBlock,
      setCurrent,
      deleteCurrent,
      downloadData,
      setNickname
    }

  })();

  const storage = (function storage() {
    const PAGE_LS = "vWBD_tmeporal_page",
      PLUGIN_LS = "vWBD_temporal_plugin",
      BLOCK_LS = "vWBD_temporal_blocktree",
      EMPTY = "empty_data";

    function updatePage() {
      localStorage.setItem(PAGE_LS, JSON.stringify(vWBD.page.data));
      console.log("page updated");
    };

    function updatePlugin() {
      localStorage.setItem(PLUGIN_LS, JSON.stringify(vWBD.plugin.allPlugins));
      console.log("plugin updated");
    };

    function updateBlockTree() {
      localStorage.setItem(BLOCK_LS, JSON.stringify(vWBD.blockTree.allBlocks));
      console.log("block updated");
    };

    function getPage() {
      const pageObj = localStorage.getItem(PAGE_LS);
      if (pageObj) {
        if (pageObj !== EMPTY) {
          return JSON.parse(pageObj);
        }
      }
      return false;
    };

    function getPlugin() {
      const pluginObj = localStorage.getItem(PLUGIN_LS);
      if (pluginObj) {
        if (pluginObj !== EMPTY) {
          return JSON.parse(pluginObj);
        }
      }
      return false;
    };

    function getBlockTree() {
      const blockObj = localStorage.getItem(BLOCK_LS);
      if (blockObj) {
        if (blockObj !== EMPTY) {
          return JSON.parse(blockObj);
        }
      }
      return false;
    };

    function clearAll() {
      localStorage.setItem(PAGE_LS, EMPTY);
      localStorage.setItem(PLUGIN_LS, EMPTY);
      localStorage.setItem(BLOCK_LS, EMPTY);
    }

    (function initiateStorage() {
      if (!localStorage.getItem(PAGE_LS)) {
        localStorage.setItem(PAGE_LS, EMPTY)
      };
      if (!localStorage.getItem(PLUGIN_LS)) {
        localStorage.setItem(PLUGIN_LS, EMPTY)
      };
      if (!localStorage.getItem(BLOCK_LS)) {
        localStorage.setItem(BLOCK_LS, EMPTY)
      };
    })();


    return {
      EMPTY,
      updatePage,
      updatePlugin,
      updateBlockTree,
      getPage,
      getPlugin,
      getBlockTree,
      clearAll
    }
  })();


  return {
    page,
    plugin,
    blockTree,
    storage
  }
})();
