import React, { Component } from 'react';

import '../sass/layouts/new_user/_login.css';
import Input from '../components/Input';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: ""
    };
  }

  handleEmailAddressChange(emailAddress) {
    this.setState({emailAddress: emailAddress});
  }

  handlePasswordChange(password) {
    this.setState({password: password});
  }

  render() {
    const emailAddress = this.state.emailAddress;
    const password = this.state.password;

    return (
      // <div className = "signin-section">
      //   <div className = "container">
          <div className = "login-component">
            <div className = "form-wraper">
              <form>
                <Input
                  className = "login text-input-item"
                  label = {"Email Address"}
                  inputType = {"text"}
                  value = {emailAddress}
                  onInputChange = {this.handleEmailAddressChange}
                />
                <Input
                  className = "login text-input-item"
                  label = {"Password"}
                  inputType = {"password"}
                  value = {password}
                  onInputChange = {this.handlePasswordChange}
                />
                <div className = "form-last">
                  <p className = "forget-password">
                    <a href = "#" target = "_blank">Forget My Passwrod.</a>
                  </p>
                  <button type="submit" value="Submit">Sign In</button>
                </div>
              </form>
            </div>
          </div>
      //   </div>
      // </div>
    )
  }
}
