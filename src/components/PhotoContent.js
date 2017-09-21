import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import ItemsAPI from '../api';

var photo = document.getElementById("my-photo");

export class PhotoContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: ItemsAPI.getSelectedItem()
    }
  }

  capitalize(str) {
    var res = "";
    if (str.split(" ").length !== 1) {
      for (var i = 0; i < str.split(" ").length; i++) {
        res = res + " " + (str.split(" "))[i].charAt(0).toUpperCase() + (str.split(" "))[i].slice(1);
      }
    } else {
      res = str.charAt(0).toUpperCase() + str.slice(1);
    }
    return res
  }

  render() {
    const count = this.state.photo.count;
    console.log(document.getElementById("my-photo"))
    return (
      <div className = "photo-page">
        <div className = "container side-spacer">
          <div id = "photo-content" className = "photo-content-page">
            <div className = "back-button">
              <Link to = "/explore" className = "back-button-link">Back</Link>
            </div>
            <div className = "photo-content-wrapper">
              <div className = "photo-content-title">

              </div>
              <div id = "photo-player" className = "photo-player">
                <div className = "photo-player-wrapper">
                  <div className = "photo-player-window">

                  </div>
                </div>
                <div className = "photo-controls">
                  <div className = "photo-controls-wrapper">
                    {/* <div className = "control-item playpause-button">
                      <button id = "playpausebtn" type = "button" title = "Play" onClick = {this.handlePlayPauseClick.bind(this)}>

                      </button>
                    </div>
                    <div className = "control-item progress-bar">

                    </div>
                    <div className = "control-item photo-time">
                      <span id = "current-time-text"></span> / {duration} <span id = "duration-time-text"></span>
                    </div>
                    <div className = "control-item mute-button">
                      <button type = "button" title = "Mute" onClick = {this.handleMuteClick.bind(this)}></button>
                    </div>

                    <div className = "control-item volumn-bar"></div>
                    <div className = "control-item fullscreen-button">
                      <button type = "button" title = "Full Screen" onClick = {this.handleFullScreenClick.bind(this)}></button>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className = "photo-description-section">
                <div className = "description flex-item">
                  <h2>{this.state.photo.title}</h2>
                  <p>{this.state.photo.description}</p>
                </div>
                <div className = "photo-info flex-item">
                  <div className = "uploader-info">
                    <p>Uploaded by:</p>
                    <p className = "uploader">{this.state.photo.uploader}</p>
                    <p>Created using:</p>
                    <p className = "device">{this.capitalize(String(this.state.photo.device))}</p>
                  </div>
                  <div id = "map" className = "map location-wrapper">
                    <div className = "location-box">
                      <Map
                        google = {this.props.google}
                        onReady = {this.fetchPlaces}
                        initialCenter = {this.state.photo.coordinates}
                        zoom = {14}>
                        <Marker onClick = {this.onMarkerClick}
                                name = {'Current location'} />

                        <InfoWindow onClose = {this.onInfoWindowClose}>
                            <div>
                              <h1>{this.state.photo.location}</h1>
                            </div>
                        </InfoWindow>
                      </Map>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCFar-fLAn0vSEi-zNMnbsu4y_WmJXyb4Q")
})(PhotoContent)
