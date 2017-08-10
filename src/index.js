import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import './stylesheets/styles.css';

import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Home from './Home';
import About from './About';
import Explore from './Explore';




ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
