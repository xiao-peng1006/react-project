import React, { Component } from 'react';
import '../sass/components/_photocontent.css';

export default class PhotoContent extends Component {
  constructor(props) {
    super(props);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.state = {

    }
  }

  handleBackButton(e) {

  }

  render() {

    return (
      <div className = "photo-content-section">
        <div className = "back-button">
          <p onClick = {this.handleBackButton}>back</p>
        </div>
        <div className = "photo-content-wrapper">
          <div className = "photo-content-title">

          </div>
          <div id = "photo-player" className = "photo-player">
            <div className = "photo-play">

            </div>
            <div className = "photo-control">
              <div className = "playpause-button">

              </div>
              <div className = "progress-bar"></div>
              <div className = "photo-time"></div>
              <div className = "mute-button"></div>
              <div className = "volumn-bar"></div>
              <div className = "fullscreen-button"></div>
            </div>
          </div>
          <div className = "photo-description-section">
            <div className = "description flex-item">
              <h2>title</h2>
              <p>description</p>
            </div>
            <div className = "photo-info flex-item">
              <div className = "uploader-info">

              </div>
              <div id = "map" className = "map photo-location">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
