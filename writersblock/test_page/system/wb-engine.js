/* Written by DesignDefined */
"use strict";

const wbEngine = (function() {

  const validator = {};

  const loader = (function() {

    const basics = {
      addLine: function addLine(obj, lines) {
        if (lines) {
          HH.setH(obj, lines);
        }
      },
      addId: function addId(obj, id) {
        if (id) {
          HH.setI(obj, id);
        }
      },
      addClasses: function addClasses(obj, classes) {
        if (classes) {
          classes.forEach(function(className) {
            HH.setC(obj, className);
          }, this);
        }
      },
      addStyle: function addStyle(obj, style) {
        if (style) {
          HH.setS(obj, style);
        }
      }
    };

    const page = {
      titleObject: HH.get("title"),
      wrapperObject: HH.get("#block-wrapper"),
      defaultLine: "",
      defaultClasses: [],
      defaultStyle: "",

      setTitle: function setTitle(titleText) {
        this.addLine(this.titleObject, titleText)
      },
      loadCSS: function loadCSS(sheetName) {
        const head = HH.get("head");
        const linkObject = HH.create("link");
        const link = `system/stylesheet/${sheetName}.css`;
        linkObject.type = "text/css";
        linkObject.rel = "stylesheet";
        linkObject.href = link;
        HH.putH(linkObject, head);
      },
      loadAllCSS: function loadAllCSS(sheets) {
        const sheetArray = sheets;
        if (sheetArray) {
          sheetArray.forEach(this.loadCSS, this);
        }
      },
      loadScript: function loadScript(scriptName) {
        const body = HH.get("body");
        const scriptObject = HH.create("script");
        const link = `system/stylesheet/${scriptName}.js`;
        scriptObject.src = link;
        HH.putH(scriptObject, body);
      },
      loadAllScripts: function loadAllScripts(scripts) {
        const scriptArray = scripts;
        if (scriptArray) {
          scriptArray.forEach(this.loadScript, this);
        }
      },
      loadClassesAndStyle: function loadClassesAndStyle(classes, style) {
        this.addClasses(this.wrapperObject, classes);
        this.addStyle(this.wrapperObject, style);
      },
      setDefault: function setDefault(page) {
        this.defaultLine = page.defaultLine;
        this.defaultClasses = page.defaultClasses;
        this.defaultStyle = page.defaultStyle;
      },
      setup: function setup(inputPage) {
        const page = inputPage;
        this.setTitle(page.title);
        this.loadClassesAndStyle(page.classes, page.style);
        this.loadAllCSS(page.styleSheets);
        this.loadAllScripts(page.scripts);
        this.setDefault(page)
      }
    };

    const block = {
      blockLineToAdd: function blockLineToAdd(block) {
        const line = page.defaultLine + block.prefix + block.line + block.suffix;
        return line;
      },
      blockClassesToAdd: function blockClassesToAdd(block) {
        const classes = page.defaultClasses.concat(block.classes);
        return classes;
      },
      blockStyleToAdd: function blockStyleToAdd(block) {
        const style = page.defaultStyle + block.style;
        return style;
      },
      blockIdToAdd: function blockIdToAdd(block) {
        const myID = block.myID;
        return myID;
      },
      whereToAdd: function whereToAdd(block) {
        const parent = HH.get(`#${block.parentID}`);
        return parent;
      },
      build: function build(block) {
        const parentBlock = this.whereToAdd(block);
        const childBlock = HH.create("div"),
          newLine = this.blockLineToAdd(block),
          newClasses = this.blockClassesToAdd(block),
          newStyle = this.blockStyleToAdd(block),
          newId = this.blockIdToAdd(block);
        this.addLine(childBlock, newLine);
        this.addId(childBlock, newId);
        this.addClasses(childBlock, newClasses);
        this.addStyle(childBlock, newStyle);
        HH.putH(childBlock, parentBlock);
      },
      setup: function setup(blocks) {
        blocks.forEach(this.build, this);
      }
    };

    (function initialOperation() {
      JJ.pChain(basics, page);
      JJ.pChain(basics, block);
    })();

    return {
      page: page,
      block: block
    };
  })();

  const install = {
    queue: [],
    request: function request(obj, init){
      const installRequest = {
        name: obj,
        func: init
      };
      this.queue.push(installRequest);
    },
    start: function start(){
      const queue = this.queue;
      if(queue.length>0){
        for(let i = 0; i<queue.length; i++){
            queue[i].func.bind(queue[i].name)();
        }
      }
      this.endLoading();
    },
    waitLoading: function waitLoading(){
      window.addEventListener("load", this.start.bind(this));
    },
    endLoading: function endLoading(){
      const graphics = HH.get("#loading-graphics");
      HH.setC(graphics, "end");
    }
  };


  //never export
  (function initialOperation() {
    const data = WB;
    loader.page.setup(data.mainPage);
    loader.block.setup(data.block);
    install.waitLoading();
  })();

  return {
    loader: loader,
    install: install
  }
})();
