/*written by DesignDefined*/
"use strict";

const Division = {
  setHtml: function(htmlObject){
    this.htmlObject = htmlObject;
  },


  addClass: function(CLASS_NAME){
    this.htmlObject.classList.add(CLASS_NAME);
  },

  removeClass: function(CLASS_NAME){
    this.htmlObject.classList.remove(CLASS_NAME);
  },

  hover: function(CLASS_NAME) {
    this.htmlObject.addEventListener("mouseover", addClass(CLASS_NAME).bind(this));
    this.htmlObject.addEventListener("mouseleave", removeClass(CLASS_NAME).bind(this));
  },

  click: function(function) {

  }

}

const Button = Object.create(Division);

}
