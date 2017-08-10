import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id = "footer" className = "footer">
      <div className = "container">
        <ul className = "footer-list">
          <li className = "footer-item logo"><Link to = "/">Home</Link></li>
          <li className = "footer-item"><Link to = "/about">About</Link></li>
          <li className = "footer-item"><a to = "/privacy_policy">Privacy Policy</a></li>
          <li className = "footer-item"><a to = "/terms&conditions">Terms & Conditions</a></li>

          <li className = "footer-item copyright">© 2017 Xiao Peng</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
