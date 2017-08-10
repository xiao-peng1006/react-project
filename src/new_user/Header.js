import React, {Component} from 'react';

import '../sass/layouts/new_user/_header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
        <nav className = "header navbar navbar-default">
          <div className = "container">
            <div className = "navbar-default navbar-font-default">
              <ul className = "navbar-item">
                <li className = "navbar-logo"><a href = "/home">Home</a></li>
                <li><a href = "/about">About</a></li>
                <li className = "last-item"><a href = "/howitwork">Videos</a></li>
                {/* <li><a href = "/signin">Sign In</a></li>
                <li className = "signup"><a href = "/signup">Sign Up</a></li> */}
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
