'use strict';
module.exports = function(config) {
  config.set({
    basePath: '..',
    frameworks: [
      'mocha',
      'sinon-chai'
    ],
    browsers: ['firefox_latest'],
    client: {
      captureConsole: true,
      mocha: {'ui': 'tdd'}
    },

    customLaunchers: {
      firefox_latest: {
        base: 'FirefoxNightly',
        prefs: {
          'dom.webcomponents.enabled': true
        }
      }
    },

    files: [
      'node_modules/fxos-component/fxos-component.js',
      'fxos-sub-header.js',
      'node_modules/axe-core/axe.min.js',
      'node_modules/test-utils/src/utils.js',
      'node_modules/test-utils/src/accessibility.js',
      'test/test-unit.js'
    ]
  });
};
