/* global marionette, setup, test */

'use strict';

var assert = require('chai').assert;
marionette.plugin('helper', require('marionette-helper'));

marionette('gaia-sub-header', function() {
  var client = marionette.client({
    profile: {
      prefs: {
        // Disable first time run UI
        'browser.feeds.showFirstRunUI': false,
        // Disable default browser check
        'browser.shell.checkDefaultBrowser': false,
        // Disable UI tutorial
        'browser.uitour.enabled': false,
        // Enable chrome debugging
        'devtools.chrome.enabled': true,
        'devtools.debugger.remote-enabled': true,

        // Load integration test page on startup
        'startup.homepage_welcome_url': __dirname + '/test-integration.html',

        // Allow loading test resources oudside of test/ directory
        // (e.g. bower-components)
        'security.fileuri.strict_origin_policy': false,

        // Enable web components
        'dom.webcomponents.enabled': true,
        // Enable touch events
        'dom.w3c_touch_events.enabled': 1
      }
    },
    desiredCapabilities: { raisesAccessibilityExceptions: true }
  });

  var subHeaders = [
    { selector: '#sh1' },
    { selector: '#sh2' }
  ];

  /**
   * Perform a marionette operation and assert if an error is thrown.
   * @param  {Function} testFn operation to perform
   * @param  {String} message error message for the assert statement
   */
  function failOnA11yError(testFn, message) {
    try {
      testFn();
    } catch (err) {
      // Marionette raises an ElementNotAccessibleError exception when
      // raisesAccessibilityExceptions is set to true.
      assert(false, [message, err.message].join(' '));
    }
  }

  setup(function() {
    subHeaders.forEach(function(subHeader) {
      subHeader.element = client.findElement(subHeader.selector);
    });
  });

  test('gaia-sub-header is present and visible to the assistive technology',
    function() {
      subHeaders.forEach(function(subHeader) {
        // Element is found
        assert.ok(subHeader.element, subHeader.selector);
        // Element is visible to all (inlcuding assistive technology)
        failOnA11yError(function() {
          assert.isTrue(subHeader.element.displayed());
        }, 'gaia-sub-header element should be visible both normally and to ' +
          'assistive technology.');

        // Element's .inner element with heading semantics is visible to all
        // (including assistive technology)
        failOnA11yError(function() {
          client.switchToShadowRoot(subHeader.element);
          assert.isTrue(client.findElement('.inner').displayed());
          client.switchToShadowRoot();
        }, 'gaia-sub-header\'s .inner element with heading semantics should ' +
          'be visible both normally and to assistive technology.');
      });
    });

  test('gaia-sub-header\'s optional inner anchor is accessible (no error ' +
    'thrown when clicking and tapping)', function() {
      var link = client.helper.waitForElement('#link');
      ['click', 'tap'].forEach(function(action) {
        // The following checks for control element will be performed on
        // tap/click:
        // * visible to the assistive technology
        // * enabled to the assistive technology
        // * not obstructed via pointer-events set to none
        // * focusable by the assistive technology
        // * named/labelled for the assistive technology
        // * support user actions (click/tap/etc) performed via assistive
        //   technology
        failOnA11yError(function() {
          link[action]();
        }, 'gaia-sub-header\'s optional inner anchor should be clickable and ' +
          'and tappable including via the assistive technology.');
      });
    });
});
