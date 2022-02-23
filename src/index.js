import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App.js';

window.renderCreatereactapp = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  )
};

window.unmountCreatereactapp = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if(!document.getElementById('Createreactapp-container')){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
};