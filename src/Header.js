import React, {Component} from 'react';
import { Link } from 'react-router-dom';

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
                <li className = "navbar-logo"><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/explore">Explore</Link></li>
                <li className = "last-item"><Link to = "/community">Community</Link></li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Header;
