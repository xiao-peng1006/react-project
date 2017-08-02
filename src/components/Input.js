import React, {Component} from 'react';

import '../sass/components/_input.css';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onInputChange(event.target.value);
  }

  render() {
    const label = this.props.label;
    const inputType = this.props.inputType;
    const value = this.props.value;

    return (
      <div className = "input-box">
        <input
          id = "input"
          autoFocus = "autofocus"
          type = {inputType}
          value = {value}
          placeholder = {label}
          onChange = {this.handleChange}
        />
        {/* <label className = "label form-item" for = "input">{label}</label> */}
      </div>

    )
  }
}
