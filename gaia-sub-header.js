(function(define){'use strict';define(function(require,exports,module){
/*jshint esnext:true*/
/*jshint node:true*/
/*globals define*/

/**
 * Dependencies
 */

var component = require('gaia-component');

/**
 * Simple logger (toggle 0)
 *
 * @type {Function}
 */
var debug = 0 ? console.log.bind(console) : function() {};

/**
 * Exports
 */

module.exports = component.register('gaia-sub-header', {
  created: function() {
    this.setupShadowRoot();

    // Elements
    this.els = {
      inner: this.shadowRoot.querySelector('.inner')
    };

    // Properties
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
      get: function() {
        debug('get level');
        if ('_level' in this) { return this._level; }
      },

      set: function(value) {
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
      background: var(--background);
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
        var(--border-color,
        var(--background-plus));
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
      background: var(--background);
      color:
        var(--title-color,
        var(--text-color));
    }

    a,
    button {
      position: relative;

      display: block;
      -moz-padding-end: 16px;

      font: inherit;
      cursor: pointer;
      color:
        var(--highlight-color);
    }

    /**
     * :active
     */

    a:active,
    button:active {
      opacity: 0.5;
    }

    a:after,
    button:after {
      content: " ";
      position: absolute;
      top: 6px;
      right: 0px;

      width: 0px;
      height: 0px;
      border-bottom: 8px solid;
      -moz-border-end: 8px solid transparent;

      border-bottom-color:
        var(--highlight-color,
        var(--color-zeta))
    }

    </style>`
});

});})((function(n,w){'use strict';return typeof define=='function'&&define.amd?
define:typeof module=='object'?function(c){c(require,exports,module);}:
function(c){var m={exports:{}},r=function(n){return w[n];};
w[n]=c(r,m.exports,m)||m.exports;};})('gaia-sub-header',this));
