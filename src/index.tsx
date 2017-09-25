'use strict';

// Dependencies
import React = require('react');
import ReactDom = require('react-dom');
import { Provider } from 'react-redux';

// Local
import Root from './root/Root';
import rootStore from './root/rootStore';

const app = ReactDom.render(
    <Provider store = {rootStore}>
        <Root />
    </Provider>,
    document.getElementById('app'));
