import React, { Component } from 'react';

export default class VideoContent extends Component {
  constructor(props) {
    super(props);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.state = {

    }
  }



  handleBackButton() {
    this.props.onBackButtonClicked();
  }

  render() {

    return (
      <div id = "video-content" className = "video-content-page">
        <div className = "back-button">
          <p onClick = {this.handleBackButton}>back</p>
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
              <h2>title</h2>
              <p>description</p>
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
    )
  }
}
