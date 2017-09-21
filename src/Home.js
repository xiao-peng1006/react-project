import React, {Component} from 'react';

export default class Home extends Component {

  render() {

    return (
      <div className = "home-page">
        <div className = "home-page-wrapper">
          <div className = "home-image">
            <div className = "home-image-wrapper">
              <div className = "home-image-container">
                <video preload autoPlay loop className = "fillWidth">
                  <source src = "https://coverr.co/s3/mp4/Amalfi.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                  <source src = "videos/Two-Swimmers.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>
                <div className = "poster hidden">
                    <img src = "./videos/Two-Swimmers.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
