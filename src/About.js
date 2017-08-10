import React, {Component} from 'react';

export default class About extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className = "about-page">
        <div className = "container side-spacer">
          <div className = "about-page-wrapper">

            <div className = "intro-image">
              <div className = "intro-image-mask">
                <div className = "intro-image-window">
                  <img src = "./images/home.jpg"></img>
                </div>
              </div>
            </div>

            <div className = "about-page-description">

                <div className = "page-description">
                  <div className = "page-description-wrapper">
                    <h2>Hi everyone, enjoy the trips!</h2>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                  </div>
                </div>
                <div className = "self-intro">
                  <div className = "self-intro-wrapper">

                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
