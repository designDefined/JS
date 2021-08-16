/* Written by DesignDefined */
"use strict";

const HH = {
  /*Get HTML Object*/
  get: function get(tag) {
    return document.querySelector(tag);
  },
  getAll: function get(tag) {
    return document.querySelectorAll(tag);
  },
  /*Create HTML Object*/
  create: function make(tag) {
    return document.createElement(tag);
  },
  /*Set HTML Properties*/
  setH: function setH(target, html) {
    target.innerHTML = html;
  },
  setC: function setC(target, className) {
    target.classList.add(className);
  },
  setS: function setS(target, style) {
    target.style.cssText = style;
  },
  setI: function setI(target, id) {
    target.id = id;
  },
  /*Delete HTML Properties*/
  delC: function delC(target, className) {
    target.classList.remove(className);
  },
  repC: function repC(target, classToDelete, classToSet) {
    target.classList.remove(classToDelete);
    if (!target.classList.contains(classToSet)) {
      target.classList.add(classToSet);
    }
  },

  /*Put HTML Properties*/
  putH: function putH(target, where) {
    where.appendChild(target);
  },

  /*calculate HTML Properties*/
  topOf: function getTop(object){
    return window.pageYOffset + object.getBoundingClientRect().top;
  },
};
