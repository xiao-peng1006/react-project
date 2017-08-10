import React, { Component } from 'react';
import Input from '../components/Input';

import '../sass/layouts/new_user/_signup.css';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLastNameChange() {

  }

  handleFirstNameChange() {

  }

  handleEmailAddressChange() {

  }

  handlePasswordChange() {

  }

  handleSubmit() {

  }

  render() {
    const lastName = this.props.lastName;
    const firstName = this.props.firstName;
    const emailAddress = this.props.emailAddress;
    const password = this.props.password;

    return (
      <div className = "signup-component">
        <div className = "form-wraper">
          <form>
            <Input
              className = "signup text-input-item padding-r-20"
              label = {"Last Name"}
              inputType = {"text"}
              value = {lastName}
              onInputChange = {this.handleLastNameChange}
            />
            <Input
              className = "signup text-input-item"
              label = {"First Name"}
              inputType = {"text"}
              value = {firstName}
              onInputChange = {this.handleFirstNameChange}
            />
            <Input
              className = "signup text-input-item padding-r-20"
              label = {"Email Address"}
              inputType = {"text"}
              value = {emailAddress}
              onInputChange = {this.handleEmailAddressChange}
            />
            <Input
              className = "signup text-input-item"
              label = {"Password"}
              inputType = {"password"}
              value = {password}
              onInputChange = {this.handlePasswordChange}
            />
            <div className = "button-wraper">
              <button type="submit" value="Submit">
                <span>Sign Up</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
