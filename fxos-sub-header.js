(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fxosComponent"));
	else if(typeof define === 'function' && define.amd)
		define(["fxosComponent"], factory);
	else if(typeof exports === 'object')
		exports["FXOSSubHeader"] = factory(require("fxosComponent"));
	else
		root["FXOSSubHeader"] = factory(root["fxosComponent"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Dependencies
	 */

	var component = __webpack_require__(1);

	/**
	 * Simple logger (toggle 0)
	 *
	 * @type {Function}
	 */
	var debug = 0 ? console.log.bind(console, '[gaia-sub-header]') : () => {};

	/**
	 * Exports
	 */

	module.exports = component.register('fxos-sub-header', {
	  created() {
	    this.setupShadowRoot();
	    this.els = { inner: this.shadowRoot.querySelector('.inner') };
	    this.level = this.getAttribute('level');
	  },

	  /**
	   * Known attribute property
	   * descriptors.
	   *
	   * These setters get called when matching
	   * attributes change on the element.
	   *
	   * @type {Object}
	   */
	  attrs: {
	    level: {
	      get() {
	        debug('get level');
	        if ('_level' in this) { return this._level; }
	      },

	      set(value) {
	        debug('set level', value);
	        value = parseInt(value, 10);
	        if (value === this._level || isNaN(value)) {
	          this.els.inner.removeAttribute('aria-level');
	          this._level = null;
	        } else {
	          this.els.inner.setAttribute('aria-level', value);
	          this._level = value;
	        }
	      }
	    }
	  },

	  template: `
	    <div class="inner" role="heading">
	      <div class="line"></div>
	      <div class="text"><content></content></div>
	    </div>
	    <style>
	      :host {
	        display: block;
	        margin: 20px 17px 0 17px;
	        background:
	          var(--fxos-sub-header-background,
	          var(--fxos-background));
	      }

	      .inner {
	        position: relative;
	        text-align: center;
	        height: 20px;
	      }

	      .line {
	        position: absolute;
	        left: 0;
	        top: 50%;

	        display: block;
	        height: 2px;
	        width: 100%;
	        margin-top: -1px;

	        background:
	          var(--fxos-sub-header-border-color,
	          var(--fxos-border-color,
	          #999));
	      }

	      .text {
	        position: relative;

	        display: inline-block;
	        padding: 0 14px;
	        height: 20px;
	        line-height: 20px;

	        text-transform: uppercase;
	        font-size: 14px;
	        font-weight: normal;

	        background:
	          var(--fxos-sub-header-background,
	          var(--fxos-background,
	          #fff));

	        color:
	          var(--fxos-title-color,
	          var(--fxos-text-color));
	      }

	      ::content a,
	      ::content button {
	        position: relative;

	        display: block;
	        padding-inline-end: 16px;

	        font: inherit;
	        cursor: pointer;
	        text-decoration: none;

	        color:
	          var(--fxos-sub-header-link-color,
	          var(--fxos-brand-color));
	      }

	      ::content a:active,
	      ::content button:active {
	        opacity: 0.5;
	      }

	      ::content a:after,
	      ::content button:after {
	        content: "";
	        position: absolute;
	        top: 6px;
	        offset-inline-end: 0px;

	        border-bottom: 8px solid;
	        border-inline-start: 8px solid transparent;
	        border-bottom-color: currentColor
	      }
	    </style>`
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;