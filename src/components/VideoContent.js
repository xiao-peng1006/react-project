import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import store from '../store';

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

var video = document.getElementById("my-video");

export class VideoContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: store.getState().selectedItem.item,
    }
  }

  handlePlayPauseClick(e) {
    video = document.getElementById("my-video");
    if (video.paused){
  	   video.play();
  		 e.target.style.title = "Pause";
  	} else {
  		 video.pause();
       console.log(e.target.style.title)
  		 e.target.style.title = "Play";
  	}
  }

  handleMuteClick(e) {
    if (video.muted){
  	   video.muted = false;
  		 e.target.style.title = "Play";
  	} else {
  		 video.muted = true;
  		 e.target.style.title = "Pause";
  	}
  }

  handleFullScreenClick(e) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
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
    const url = "http://localhost:3030/video/" + this.state.video._id;
    return (
      <div className = "video-page">
        <div className = "container side-spacer">
          <div id = "video-content" className = "video-content-page">
            <div className = "back-button">
              <Link to = "/explore" className = "back-button-link">Back</Link>
            </div>
            <div className = "video-content-wrapper">
              <div className = "video-content-title">

              </div>
              <div id = "video-player" className = "video-player">
                <div className = "video-player-wrapper">
                  <div className = "video-player-window">

                    <Video loop muted preload
                        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                        // poster="http://sourceposter.jpg"
                        onCanPlayThrough={() => {
                            // Do stuff
                        }}>
                        <source src = {url} type="video/webm" />
                        <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
                    </Video>
                    {/* <video id = "my-video" className = "nopadding" ref = "player" preload loop>
                      <source src = {this.state.video.url} type = "video/mp4"></source>
                    </video> */}
                  </div>
                </div>
                <div className = "video-controls">
                  <div className = "video-controls-wrapper">
                    {/* <div className = "control-item playpause-button">
                      <button id = "playpausebtn" type = "button" title = "Play" onClick = {this.handlePlayPauseClick.bind(this)}>

                      </button>
                    </div>
                    <div className = "control-item progress-bar">

                    </div>
                    <div className = "control-item video-time">
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

              <div className = "video-description-section">
                <div className = "description flex-item">
                  <h2>{this.state.video.title}</h2>
                  <p>{this.state.video.description}</p>
                </div>
                <div className = "video-info flex-item">
                  <div className = "uploader-info">
                    <p>Uploaded by:</p>
                    <p className = "uploader">{this.state.video.uploader}</p>
                    <p>Created using:</p>
                    <p className = "device">{this.capitalize(String(this.state.video.device))}</p>
                  </div>
                  <div id = "map" className = "map location-wrapper">
                    <div className = "location-box">
                      <Map
                        google = {this.props.google}
                        onReady = {this.fetchPlaces}
                        initialCenter = {this.state.video.coordinates}
                        zoom = {14}>
                        <Marker onClick = {this.onMarkerClick}
                                name = {'Current location'} />

                        <InfoWindow onClose = {this.onInfoWindowClose}>
                            <div>
                              <h1>{this.state.video.location}</h1>
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
})(VideoContent)
