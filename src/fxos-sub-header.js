
/**
 * Dependencies
 */

var component = require('fxos-component');

/**
 * Simple logger (toggle 0)
 *
 * @type {Function}
 */
var debug = 0 ? console.log.bind(console, '[fxos-sub-header]') : () => {};

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
