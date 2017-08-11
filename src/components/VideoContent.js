import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ItemsAPI from '../api';

export default class VideoContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: ItemsAPI.getSelectedItem()
    }
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

                  </div>
                </div>
                <div className = "video-controls">
                  <div className = "video-controls-wrapper">
                    <div className = "control-item playpause-button">

                    </div>
                    <div className = "control-item progress-bar"></div>
                    <div className = "control-item video-time"></div>
                    <div className = "control-item mute-button"></div>
                    <div className = "control-item volumn-bar"></div>
                    <div className = "control-item fullscreen-button"></div>
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

                  </div>
                  <div id = "map" className = "map video-location">

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
