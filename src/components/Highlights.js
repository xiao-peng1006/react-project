import React, { Component } from 'react';

export default class Highlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    }
  }

  render() {
    return (
      <div id = "highlights" className = "highlights-section">
        <div className = "highlights-wrapper">
          <div className = "highlight">
            <div className = "highlight-info">

            </div>
            <div className = "highlight-video">
              <video preload autoPlay loop className = "fillWidth" height = "40%">
                <source src = "https://coverr.co/s3/mp4/Amalfi.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                <source src = "videos/Two-Swimmers.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
              </video>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
