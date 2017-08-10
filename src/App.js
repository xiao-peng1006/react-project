import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './Header';
import Home from './Home';
import About from './About';
import Explore from './Explore';
import VideoContent from './components/VideoContent';
// import PhotoContent from './components/PhotoContent';
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className = "header-spacer"></div>

        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/about' component = {About}/>
          <Route path = '/explore' component = {Explore}/>
          <Route path = '/community' component = {Home}/>
          <Route path = '/explore:id' component = {VideoContent}/>
        </Switch>

        <footer className = "footer p-tb-6-md">
          <div className = "container">
            <Footer />
          </div>
        </footer>
      </div>
    )
  }
}
