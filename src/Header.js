import React, {Component} from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: true};
  }

  render() {
    return (
        <nav id = "header" className = "header navbar navbar-default">
          <div className = "container">
            <div className = "navbar-default navbar-font-default">
              <ul className = "navbar-item">
                <li className = "navbar-logo"><a href = "/home">Home</a></li>
                <li><a href = "/library">About</a></li>
                <li><a href = "/progress">Library</a></li>
                <li className = "last-item"><a href = "/community">Community</a></li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Header;
