import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from "./store"
import './index.css';
import './stylesheets/styles.css';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
