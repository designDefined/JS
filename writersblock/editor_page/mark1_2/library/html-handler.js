/* Written by DesignDefined */
"use strict";

const HH = function HtmlHandler() {
  /*Get HTML Object*/
  const doc = document;

  function get(tag, target) {
    let obj;
    if (target) {
      obj = target.querySelector(tag);
    } else {
      obj = doc.querySelector(tag)
    }
    if (!obj) {
      console.error(`no htmlObject matching ${tag}!`);
    }
    return obj;
  }

  function getAll(tag, target) {
    let objs;
    if (target) {
      objs = target.querySelectorAll(tag);
    } else {
      objs = doc.querySelectorAll(tag)
    }
    if (obj.length === 0) {
      console.error(`no htmlObjects matching ${tag}!`);
    }
    return objs;
  }
  /*Create HTML Object*/
  function create(tag) {
    const obj = doc.createElement(tag),
      arg = arguments,
      leng = arg.length;
    for (let i = 1; i < leng; i++) {
      obj.classList.add(arg[i]);
    }
    return obj;
  }
  /*Set HTML Properties*/
  function setH(target, html) {
    target.innerHTML = html;
  }

  function setC(target, className) {
    target.classList.add(className);
  }

  function setC1(target, className) {
    if (!target.classList.contains(className)) {
      target.classList.add(className);
    }
  }

  function setS(target, style) {
    target.style.cssText = style;
  }

  function setI(target, id) {
    target.id = id;
  }
  /*Delete HTML Properties*/
  function delC(target, className) {
    target.classList.remove(className);
  }

  function repC(target, classToDelete, classToSet) {
    target.classList.remove(classToDelete);
    if (!target.classList.contains(classToSet)) {
      target.classList.add(classToSet);
    }
  }

  /*Put HTML Properties*/
  function put(where, target) {
    where.appendChild(target);
  }

  function update(where) {
    const frag = new DocumentFragment(),
      arg = arguments,
      leng = arg.length;
    if (leng < 2) {
      console.err("no valid content!");
      return;
    };
    if (Array.isArray(arg[1])) {
      const arr = arg[1],
        leng2 = arr.length;
      for (let i = 0; i < leng2; i++) {
        frag.appendChild(arr[i]);
      }
    } else {
      for (let i = 1; i < leng; i++) {
        frag.appendChild(arg[i]);
      }
    }
    where.appendChild(frag);
  }

  /*calculate HTML Properties*/
  function topOf(object) {
    return window.pageYOffset + object.getBoundingClientRect().top;
  }

  return {
    get,
    getAll,
    create,
    setH,
    setC,
    setC1,
    setS,
    setI,
    delC,
    repC,
    put,
    update,
    topOf
  }
};
