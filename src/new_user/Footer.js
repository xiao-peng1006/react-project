import React from 'react';

import '../sass/layouts/new_user/_footer.css';

const Logo = () => {
  return (
      <div className = "column col-30">
        <a className = "footer-logo">

        </a>
        <p className = "copyright">© 2017 Xiao Peng</p>
      </div>
  )
}

const List1 = () => {
  return (
    <div className = "column col-20">
      <ul className = "footer-list">
        <li className = "footer-list-item"><a href = "/about">About</a></li>
        <li className = "footer-list-item"><a href = "/privacy_policy">Privacy Policy</a></li>
        <li className = "footer-list-item"><a href = "/terms&conditions">Terms</a></li>
      </ul>
    </div>
  )
}

const List2 = () => {
  return (
    <div className = "column col-20">
      <ul className = "footer-list">
        <li className = "footer-list-item"><a href = "/library">Library</a></li>
        <li className = "footer-list-item"><a href = "/community">Community</a></li>
        <li className = "footer-list-item"><a href = "/support">Support</a></li>
      </ul>
    </div>
  )
}

const Icons = () => {
  return (
    <div className = "column col-40">
      <ul className = "media-icon-list">
        <li className = "media-icon-list-item">
          <a title = "Github" target = "_blank" href = "http://github.com"></a>
        </li>
        <li className = "media-icon-list-item">
          <a title = "LinkedIn" target = "_blank" href = "http://linkedin.com"></a>
        </li>
        <li className = "media-icon-list-item">
          <a title = "Facebook" target = "_blank" href = "http://facebook.com"></a>
        </li>
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <div className = "footer-component">
      <div className = "footer-wraper">
        <Logo />
        <List1 />
        <List2 />
      </div>
    </div>
  )
}
