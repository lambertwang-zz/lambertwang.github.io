'use strict';

import React = require('react');
import ReactDom = require('react-dom');
import Root from './root/Root';

const app = ReactDom.render(<Root />, document.getElementById('app'));

/*
var loadGapi = function() {
    console.log("gapi loaded");
    app.loadGapi();
}
*/
