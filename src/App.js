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
    this.handleBackToTopClicked = this.handleBackToTopClicked.bind(this);
    this.state = {

    }
  }

  handleBackToTopClicked() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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

        <div className = "back-to-top">
          <button className = "back-to-top-button button" onClick = {this.handleBackToTopClicked}>Top</button>
        </div>

        <footer className = "footer p-tb-6-md">
          <div className = "container">
            <Footer />
          </div>
        </footer>
      </div>
    )
  }
}
