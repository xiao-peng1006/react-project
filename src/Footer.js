import React from 'react';

const Footer = () => {
  return (
    <footer id = "footer" className = "footer">
      <div className = "container">
        <ul className = "footer-list">
          <li className = "footer-item logo"><a href = "/about">Home</a></li>
          <li className = "footer-item"><a href = "/about">About</a></li>
          <li className = "footer-item"><a href = "/privacy_policy">Privacy Policy</a></li>
          <li className = "footer-item"><a href = "/terms&conditions">Terms & Conditions</a></li>

          <li className = "footer-item copyright">© 2017 Xiao Peng</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
