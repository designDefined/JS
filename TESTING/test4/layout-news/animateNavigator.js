/* Written by DesignDefined */
"use strict";

  let watch = {};
  let tap = [];

  const SELECTED_CLASS = "navigator-selected";
  const CURRENT_CLASS = "navigator-current";

  createObjectsAndAddEventListeners();


  function createObjectsAndAddEventListeners() {
    createWatchObject();
    createTapObject();
    addEventListenerToEachTap();
  }

  function createWatchObject() {
    watch = new Watch();
  }

  function createTapObject() {
    tap[0] = new Tap("home", "", -2);
    tap[1] = new Tap("search", "", -1);
    tap[2] = new Tap("account", "", 1);
    tap[3] = new Tap("subscribe", "", 2);
  }

  function addEventListenerToEachTap() {
    tap.forEach(function(target) {
      target.addAllEventListenerToThisTap();
    });
  }

  function Watch() {
    this.htmlObject = document.querySelector(".navigator-logo-image img");

    this.transformRotateY = function(degree) {
      return `rotateY(${degree}deg)`
    };

    this.setTransformStyle = function(value) {
      this.htmlObject.style.transform = value;
    };

    this.lean = function(degree) {
      this.setTransformStyle(this.transformRotateY(degree));
    };

    this.reset = function() {
      this.setTransformStyle("");
    };
  }

  function Tap(id, link, direction) {
    this.id = id;
    this.htmlObject = document.querySelector(`#${id}`);
    this.link = link;
    this.degree = direction * 15;

    this.addSelected = function() {
      this.htmlObject.classList.add(SELECTED_CLASS);
    };

    this.leanWatchToHere = function() {
      watch.lean(this.degree);
    };

    this.addSelectedAndLeanWatch = function() {
      this.addSelected();
      this.leanWatchToHere();
    };

    this.bindAddSelectedAndLeanWatch = this.addSelectedAndLeanWatch.bind(this);

    this.addMouseoverListenerToThisTap = function() {
      this.htmlObject.addEventListener("mouseover", this.bindAddSelectedAndLeanWatch);
    };

    this.removeSelected = function() {
      this.htmlObject.classList.remove(SELECTED_CLASS);
    };

    this.removeSelectedAndResetWatch = function() {
      this.removeSelected();
      watch.reset();
    };

    this.bindRemoveSelectedAndResetWatch = this.removeSelectedAndResetWatch.bind(this);

    this.addmouseleaveListenerToThisTap = function() {
      this.htmlObject.addEventListener("mouseleave", this.bindRemoveSelectedAndResetWatch);
    };

    this.getLinkWithId = function() {
      const link = `../${id}`
      return link;
    };

    this.openLink = function() {
      location.href = this.getLinkWithId();
    };

    this.addClickListenerToThisTap = function() {
      this.htmlObject.addEventListener("click", this.openLink)
    };

    this.addAllEventListenerToThisTap = function() {
      this.addMouseoverListenerToThisTap();
      this.addmouseleaveListenerToThisTap();
      this.addClickListenerToThisTap();
    };

  }
