/* Written by DesignDefined */
"use strict";

const selector = {};

function Selector() {
  this.newsGround = document.querySelector(.ground);
  this.buildNewsElement = function(type, news) {}
  this.buildSection = function(number) {}
  this.buildNewsModule = function(type, newsGroup) {}
  this.buildNewsPage = function(code) {}
  this.includeNavigatorSpaceInNewsPage = function(code) {
  }

  this.loadNewsPage = function(code) {
    buildNewsPage(code);
  }

}

function createSelectorAndLoadNewsPage(code) {
  selector = new Selector();
  selector.loadNewsPage(code);
}

createSelectorAndBuildNewsPage(getNewsCode());
