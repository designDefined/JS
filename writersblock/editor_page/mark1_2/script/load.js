/* Written by DeisgnDefined */
"use strict";

const UILoader = (function UILoader() {
  const doc = document,
    mainWrapper = HH.get(".main-wrapper", doc),
    contentWrapper = HH.get(".content-wrapper", mainWrapper);

  const general = (function general() {


    (function static() {
      const menuTitle = HH.getAll(".menuTitle", contentWrapper),
        menuLeng = menuTitle.length,
        handle = HH.get(".left-bar-handle", contentWrapper);

      function openCloseMenu(menu) {
        return function() {
          menu.classList.toggle("opened");
        }
      }
      for (let i = 0; i < menuLeng; i++) {
        menuTitle[i].addEventListener("click", openCloseMenu(menuTitle[i].parentElement));
      };

      function openCloseLeft(h) {
        const leftArea = HH.get(".left-bar-area"),
          blockArea = HH.get(".block-area"),
          arrow = h.firstChild;
        return function() {
          if (leftArea.classList.contains("minimized")) {
            HH.delC(leftBarArea, "minimized");
            HH.delC(blockArea, "extanded");
            arrow.innerText = "◀"
          } else {
            HH.setC1(leftBarArea, "minimized");
            HH.setC1(blockArea, "extanded");
            arrow.innerText = "▶"
          }
        }
      }
    })();
    handle.addEventListener("click", openCloseLeft(handle));
  });

  const top = (function top() {});

  const left = (function left() {
    const area = HH.get(".left-bar-area", contentWrapper),
      menuList = HH.get(".menu-list", area);
    const static = (function static() {
      const menu = HH.getAll(".left-bar-menu", menuList);

    })();
    const dynamic = (function dynamic() {
      return {}
    })();
    return {
      dynamic
    }
  });

  const center = (function center() {
    const area = HH.get(".block-area", contentWrapper),
      blockLane = HH.get(".block-lane", area),
      bgLane = HH.get(".bg-lane", area),
      fgLane = HH.get(".fg-lane", area),
      newBlockButton = HH.get("div", "new-block-button");
    const blockForm = HH.create("div", "block", "inactive"),
      buttonForm = HH.create("div", "button", "inactive"),
      modalForm = HH.create("div", "modal", "inactive");

    const dynamic = (function dynamic() {
      const blockCache = [];
      let reversed = false;
      const block = (function block() {
        function createBlockAndCache(data) {
          const cache = newBlockAndCache(data);
          setText(cache);
          setHandle(cache);
          // setIcon(cache);
          addBlockAndCache(cache);
        }

        function createNewBlockAndCache() {
          const data = vWBD.blockTree.createBlock();
          createBlockAndCache(data);
        }

        function newBlockAndCache(data) {
          const main = blockForm.cloneNode(true);
          const bCache = {
            data,
            main,
            order: main.firstChild,
            nickname: order.nextSibling,
            handle: nickname.nextSibling,
            text: handle.nextSibling,
            icons: text.nextSibling,
            selected: false;
          }
          return bCache;
        }

        function setText(cache) {
          const c = cache;
          c.order.innerText = "#" + c.data.order;
          c.nickname.innerText = c.data.nickname;
          c.text.innerText = c.data.text;
          c.nickname.innerHTML = data.nickname;
        }

        function setControl(cache) {
          const c = cache;
          c.main.addEventListener("click", select(cache));
          c.handle.addEventListener("mousedown", startMove(cache))
        }

        function select(cache) {
          const c = cache;
          return function() {
            if (c.selected) {
              HH.delC(c.main, "selected");
              right.dynamic.selected = null;
              c.selected = false;
            } else {
              HH.setC1(c.main, "selected");
              right.dynamic.selected = c;
              c.selected = true;
            }
          }
        }

        function startMove(cache) {
          const c = cache;
          const miniBlock = null;
          return function() {
            HH.setC1(c.main, "moving");
          }
        }

        function endMove() {
          const c = cache;
          HH.delC(c.main, "moving");
        }

        function addBlockAndCache(cache) {
          if (!reversed) {
            newBlockButton.insertBefore(cache.main);
            blockCache.push(cache);
          } else {
            newBlockButton.nextSibling.insertBefore(cache.main);
            blockCache.unshift(cache);
          }
        }

        return {
          createBlockAndCache,
          createNewBlockAndCache
        }
      })();
      return {
        block
      }
    })();

    const static = (function static() {
      (function setBlockForm() {
        const order = HH.create("div", "block-order"),
          nickname = HH.create("div", "block-nickname"),
          handle = HH.create("div", "block-handle"),
          text = HH.create("div", "block-text"),
          icons = HH.create("div", "block-icons");
        blockform.appendChild(order);
        blockform.appendChild(nickname);
        blockform.appendChild(handle);
        blockform.appendChild(text);
        blockform.appendChild(icons);
      })();

      (function btnForNewBlockButton() {
        newBlockButton.addEventListener("click", dynamic.block.createNewBlockAndCache);
      })();
    })();
    return {
      dynamic
    }
  })();

  const right = (function right() {

    const dynamic = (function dynamic() {
      const selected = null;
    })();
    return {
      dynamic
    }
  })();
})();

const dataLoader = (function dataLoader() {

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
    loadData();
    return;
  })();

})();


function investigate() {
  console.dir(vWBD.page.data);
  console.dir(vWBD.plugin.allPlugins);
  console.dir(vWBD.blockTree.allBlocks);
}
