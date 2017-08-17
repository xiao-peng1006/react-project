import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


import ItemsAPI from '../api';

export class VideoContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: ItemsAPI.getSelectedItem()
    }
  }

  handlePlayPauseClick(e) {
    var video = document.getElementById("video");
    if(video.paused){
  	   video.play();
  		 e.target.style.title = "Pause";
  	} else {
  		 video.pause();
       console.log(e.target.style.title)
  		 e.target.style.title = "Play";
  	}
  }

  handleMuteClick(e) {
    var video  = document.getElementById("video");
    if(video.muted){
  	   video.muted = false;
  		 e.target.style.title = "Play";
  	} else {
  		 video.muted = true;
  		 e.target.style.title = "Pause";
  	}
  }

  handleFullScreenClick(e) {
    var video = document.getElementById("video")
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
        res = res + (str.split(" "))[i].charAt(0).toUpperCase() + (str.split(" "))[i].slice(1);
      }
    } else {
      res = str.charAt(0).toUpperCase() + str.slice(1);
    }
    return res
  }

  render() {

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
                    <video id = "video" onClick = {this.handlePlayPauseClick.bind(this)} onDoubleClick = {this.handleFullScreenClick.bind(this)}>
                      <source preload src = {this.state.video.url} type = "video/mp4"></source>
                    </video>
                  </div>
                </div>
                <div className = "video-controls">
                  <div className = "video-controls-wrapper">
                    <div className = "control-item playpause-button">
                      <button id = "playpausebtn" type = "button" title = "Play" onClick = {this.handlePlayPauseClick.bind(this)}></button>
                    </div>
                    <div className = "control-item progress-bar">
                      <span></span>
                    </div>
                    <div className = "control-item video-time">
                      <span id = "video-time"></span>
                    </div>
                    <div className = "control-item mute-button">
                      <button type = "button" title = "Mute" onClick = {this.handleMuteClick.bind(this)}></button>
                    </div>

                    <div className = "control-item volumn-bar"></div>
                    <div className = "control-item fullscreen-button">
                      <button type = "button" title = "Full Screen" onClick = {this.handleFullScreenClick.bind(this)}></button>
                    </div>
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
                    <p className = "device">{this.state.video.device}</p>
                  </div>
                  <div id = "map" className = "map location-wrapper">
                    <div className = "location-box">
                      <Map
                        google = {this.props.google}
                        onReady={this.fetchPlaces}
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
