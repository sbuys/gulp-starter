// Browserify entry point for the page.js bundle

var $ = require('jquery');
var _ = require('lodash');
var React = window.React = require('react');
var App = require('./components/App.jsx');
// global.js already contains jQuery, so in our config.js file, we
// are exposing it to other files like this one in the `require` array.
// Also in config.js, jquery is listed in `external` array for this bundle.
// This combination lets this file use the jquery module bundled with
// global.js, instead of including it twice!

$(window.document).ready(function() {
	React.render(React.createElement(App), window.document.body);
});
