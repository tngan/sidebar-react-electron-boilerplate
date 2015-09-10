'use strict';

var React = require('react');
var App = require(__dirname + '/assets/js/components/App.react');
var app = window.app = React.render(React.createElement(App, null), document.getElementById('wrapper'));
