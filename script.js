(function(define){'use strict';define(function(require,exports,module){
/*globals define*//*jshint node:true*/

/**
 * Dependencies
 */

var utils = require('gaia-component-utils');

/**
 * Locals
 */

var packagesBaseUrl = window.packagesBaseUrl || '/bower_components/';
var baseUrl = window.GaiaSubheaderBaseUrl || packagesBaseUrl + 'gaia-subheader/';

var stylesheets = [
  { url: baseUrl + 'style.css', scoped: true }
];

// Extend from the HTMLElement prototype
var proto = Object.create(HTMLElement.prototype);

/**
 * Runs when an instance of the
 * element is first created.
 *
 * When use this moment to create the
 * shadow-dom, inject our template
 * content, setup event listeners
 * and set the draw state to match
 * the initial `open` attribute.
 *
 * @private
 */
proto.createdCallback = function() {
  var tmpl = template.content.cloneNode(true);
  var shadow = this.createShadowRoot();

  this.inner = tmpl.firstElementChild;
  shadow.appendChild(tmpl);
  utils.style.call(this, stylesheets);
};

// HACK: Create a <template> in memory at runtime.
// When the custom-element is created we clone
// this template and inject into the shadow-root.
// Prior to this we would have had to copy/paste
// the template into the <head> of every app that
// wanted to use <gaia-switch>, this would make
// markup changes complicated, and could lead to
// things getting out of sync. This is a short-term
// hack until we can import entire custom-elements
// using HTML Imports (bug 877072).
var template = document.createElement('template');
template.innerHTML = '<h2 class="inner">' +
    '<div class="flex"><div></div></div>' +
    '<div class="text"><content></content></div>' +
    '<div class="flex"><div></div></div>' +
  '</h2>';

// Register and return the constructor
module.exports = document.registerElement('gaia-subheader', { prototype: proto });

});})((function(n,w){'use strict';return typeof define=='function'&&define.amd?
define:typeof module=='object'?function(c){c(require,exports,module);}:
function(c){var m={exports:{}},r=function(n){return w[n];};
w[n]=c(r,m.exports,m)||m.exports;};})('gaia-subheader',this));
