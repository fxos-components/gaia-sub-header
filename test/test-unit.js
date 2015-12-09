/* jshint maxlen:120 */
/* global sinon, suite, setup, teardown, test, sh, sh1, sh2, sh3, sh4, assert */
suite('fxos-sub-header', function() {
  'use strict';

  var accessibility = window['test-utils'].accessibility;

  setup(function() {
    this.sinon = sinon.sandbox.create();
    this.dom = document.createElement('div');
    document.body.appendChild(this.dom);
  });

  teardown(function() {
    this.sinon.restore();
    document.body.removeChild(this.dom);
    this.dom = null;
  });

  /**
   * Test role and aria-level attributes are set correctly inside
   * fxos-sub-header
   * @param  {Element} gaiaSubHeader sub-header to test
   * @param  {String?} level optional expected aria-level value
   */
  function testHeadingAttributes(gaiaSubHeader, level) {
    if (level) {
      assert.equal(gaiaSubHeader.els.inner.getAttribute('aria-level'), level);
    } else {
      assert.isFalse(gaiaSubHeader.els.inner.hasAttribute('aria-level'));
    }
  }

  suite('accessibility', function() {
    /**
     * Accessibility test utils module tests the following things, amongst other
     * checks (all at once).:
     *  - ARIA attributes specific checks
     *  - accesskey uniqueness if applicable
     *  - Presence of alternative descriptions, labels and names
     *  - Color contrast
     *  - Markup is semantically correct from a11y standpoint
     *  - Heading order
     *  - Frame/document title and language
     *  - Landmarks if applicable
     *  - Keyboard focusability and tabindex
     *
     * Its checks are called at different stages and within different states of
     * the component.
     */

    test('Check that in their default states fxos-sub-headers pass all ' +
      'accessibility checks mentioned above', function(done) {
      this.dom.innerHTML = `
        <fxos-sub-header id="sh1" level="1">SUB-HEADER</fxos-sub-header>
        <fxos-sub-header id="sh2" level="1"><a href="#">SUB-HEADER-LINK</a></fxos-sub-header>
        <fxos-sub-header id="sh3" level="1"><button>SUB-HEADER-BUTTON</button></fxos-sub-header>
        <fxos-sub-header id="sh4" level="not_supported">SUB-HEADER-BAD-LEVEL</fxos-sub-header>
      `;
      [sh1, sh2, sh3].forEach(sh => testHeadingAttributes(sh, '1'));
      testHeadingAttributes(sh4);
      accessibility.check(this.dom).then(done, done);
    });

    test('Check that when level attribute is updated dynamically ' +
      'fxos-sub-header passes all accessibility checks mentioned above',
      function(done) {
        this.dom.innerHTML = '<fxos-sub-header id="sh">SUB-HEADER</fxos-sub-header>';
        testHeadingAttributes(sh);
        accessibility.check(this.dom)
          .then(() => {
            // Number level
            sh.level = 2;
            testHeadingAttributes(sh, '2');
            return accessibility.check(this.dom);
          })
          .then(() => {
            // String level
            sh.level = '1';
            testHeadingAttributes(sh, '1');
            return accessibility.check(this.dom);
          })
          .then(() => {
            // Clear level
            sh.level = null;
            testHeadingAttributes(sh);
            return accessibility.check(this.dom);
          })
          .then(() => {
            // Unsupported error
            sh.level = 'not_supported';
            testHeadingAttributes(sh);
            return accessibility.check(this.dom);
          })
          .then(() => {
            // Via setAttribute
            sh.setAttribute('level', '3');
            testHeadingAttributes(sh, '3');
            return accessibility.check(this.dom);
          })
          .then(done, done);
      });
  });
});
