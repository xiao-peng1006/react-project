import React, { Component } from 'react';

import './App.css';

import Header from './Header';
import SearchBar from './components/SearchBar';
import Body from './Body';
import VideoContent from './components/VideoContent';
// import PhotoContent from './components/PhotoContent';
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.handleDeviceSelect = this.handleDeviceSelect.bind(this);
    this.handleItemSelected = this.handleItemSelected.bind(this);
    this.handleBackButtonClicked = this.handleBackButtonClicked.bind(this);
    this.state = {
      isPhotoOnly: false,
      isVideoOnly: false,
      isMobileOnly: false,
      isDigitalCameraOnly: false,
      isDroneOnly: false,
      selectedItem: "",
      isItemSelected: false
    }
  }

  handleCategorySelect(category) {
    if (category.toLowerCase() === 'photos') {
      this.setState({isPhotoOnly: true, isVideoOnly: false}, () => {console.log(category)});
    } else if (category.toLowerCase() === 'videos') {
      this.setState({isPhotoOnly: false, isVideoOnly: true}, () => {console.log(category)});
    }
  }

  handleDeviceSelect(device) {
    if (device.toLowerCase() === 'mobile') {
      this.setState({isMobileOnly: true, isDigitalCameraOnly: false, isDroneOnly: false});
      console.log("Mobile Selected")
    } else if (device.toLowerCase() === 'drone') {
      this.setState({isMobileOnly: false, isDigitalCameraOnly: false, isDroneOnly: true});
      console.log("Drone Selected")
    } else {
      this.setState({isMobileOnly: false, isDigitalCameraOnly: true, isDroneOnly: false});
      console.log("Digital Camera Selected")
    }
  }

  handleItemSelected(item) {
    this.setState({selectedItem: item, isItemSelected: true
    }, () => {console.log(this.state.selectedItem)});
  }

  handleBackButtonClicked() {
    this.setState({isItemSelected: false}, () => {console.log(this.state.isItemSelected)});
  }

  render() {

    if (this.state.isItemSelected) {
      return (
        <div className="App">
          <Header />
          <div className = "header-spacer"></div>

          <div className = "login">
            <div className = "container">
              <VideoContent
                item = {this.selectedItem}
                itemSelected = {this.isItemSelected}
                onBackButtonClicked = {this.handleBackButtonClicked}
              />
            </div>
          </div>

          <footer className = "footer p-tb-6-md">
            <div className = "container">
              <Footer />
            </div>
          </footer>
        </div>
      )
    } else {
      return (
        <div className="App">
          <Header />
          <div className = "header-spacer"></div>

          <div className = "login">
            <div className = "container">
              <SearchBar
                onCategorySelect = {this.handleCategorySelect}
                onDeviceSelect = {this.handleDeviceSelect}
            />
            </div>
          </div>

          <div className = "login">
            <div className = "container">
              <Body
                items = {this.props.items}
                onItemSelected = {this.handleItemSelected}
              />
            </div>
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
}
