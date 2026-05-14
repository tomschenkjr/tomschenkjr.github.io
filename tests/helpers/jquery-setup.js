const jQuery = require('jquery');

global.$ = jQuery;
global.jQuery = jQuery;

// Stub jQuery plugins used in _main.js so unit tests can load without errors
jQuery.fn.fitVids = jest.fn(function() { return this; });
jQuery.fn.magnificPopup = jest.fn(function() { return this; });

// Stub responsiveNav global (loaded via scripts.min.js in production)
global.responsiveNav = jest.fn(function(selector) {
  return {
    wrapper: document.querySelector(selector) || {},
    toggle: jest.fn(),
  };
});
