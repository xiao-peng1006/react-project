import React, { Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleDropDownChange = this.handleDropDownChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDeviceChange = this.handleDeviceChange.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);

    this.state = {
      filterOneIsHidden: true,
      filterTwoIsHidden: true,
      searchValue: ""
    };
  }

  handleDropDownChange(e) {
    const id = e.target.id;
    const clickedFilter = e.target.nextSibling;
    const unClickedFilter = document.getElementById((id === "filter-one") ? "filter-two":"filter-one").nextSibling;

    if (id === "filter-one") {
      this.setState((prevState) => ({
        filterOneIsHidden: !prevState.filterOneIsHidden,
        filterTwoIsHidden: true
      }));
      clickedFilter.style.display = this.state.filterOneIsHidden ? "block" : "none";
    } else if (id === "filter-two") {
      this.setState((prevState) => ({
        filterTwoIsHidden: !prevState.filterTwoIsHidden,
        filterOneIsHidden: true
      }));
      clickedFilter.style.display = this.state.filterTwoIsHidden ? "block" : "none";
    }
    unClickedFilter.style.display = "none";
  }

  handleCategoryChange(e) {
    this.props.onCategorySelect(e.target.innerHTML);
  }

  handleDeviceChange(e) {
    this.props.onDeviceSelect(e.target.innerHTML);
  }

  handleSearchInputChange(e){
    this.setState({searchValue: e.target.value
    }, () => {setTimeout(() => console.log(this.state.searchValue), 1000)})
  }

  render() {
    const value = this.state.searchValue;

    return (
      <div id = "search-bar" className = "search-component search">
        <div className = "search-container">
          <form className = "search-form">
            <div className = "search-input">
              <label for = "search">

              </label>
              <input
                className = "input-text"
                autoFocus = "autofocus"
                type = "text"
                value = {value}
                placeholder = "Search Whatever You Want..."
                onChange = {this.handleSearchInputChange}
              />
              {/* <button className = "search-bar-submit" type = "submit" value = "submit">Search..</button> */}
            </div>
          </form>
        </div>
        <ul className = "filter-dropdown">
          <li className = "filter-item dropdown-parent">
            <a id = "filter-one" className = "dropdown-label" onClick = {this.handleDropDownChange}>Category</a>
            <ul className = "dropdown-child">
              <li onClick = {this.handleCategoryChange}>
                <a>Photos</a>
              </li>
              <li onClick = {this.handleCategoryChange}>
                <a>Videos</a>
              </li>
            </ul>
          </li>
          <li className = "filter-item dropdown-parent">
            <a id = "filter-two" className = "dropdown-label" onClick = {this.handleDropDownChange}>Device</a>
            <ul className = "dropdown-child">
              <li onClick = {this.handleDeviceChange}>
                <a>Mobile</a>
              </li>
              <li onClick = {this.handleDeviceChange}>
                <a>Digital Camera</a>
              </li>
              <li onClick = {this.handleDeviceChange}>
                <a>Drone</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
