import React, { Component} from 'react';
import ReactDOM from 'react-dom';

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

// Detect clicks outside dropdown filters to close all dropdown menus
  // componentDidMount() {
  //   document.addEventListener('click', this.handleClickOutside.bind(this), true);
  // }
  //
  // componentWillUnmount() {
  //   document.removeEventListener('click', this.handleClickOutside.bind(this), true);
  // }
  //
  // handleClickOutside(e) {
  //   while (!this.state.filterOneIsHidden || !this.state.filterTwoIsHidden) {
  //     // While loop make sure function does not fire on every click
  //     const domNode = ReactDOM.findDOMNode(this);
  //     const filters = [ document.getElementById("filter-one").nextSibling, document.getElementById("filter-two").nextSibling ];
  //     if ((!domNode || !domNode.contains(e.target))) {
  //       this.setState(
  //         {
  //           filterOneIsHidden: true,
  //           filterTwoIsHidden: true
  //         }, () => {
  //           filters.map((filter) => filter.style.display = "none");
  //         }
  //       );
  //     }
  //   }
  // }

  handleCategoryChange(e) {
    const target = document.getElementById("filter-one").nextSibling;
    this.props.onCategorySelect(e.target.innerHTML);
    this.setState((prevState) => ({
      filterOneIsHidden: !prevState.filterOneIsHidden
    }));
    target.style.display = "none";
  }

  handleDeviceChange(e) {
    const target = document.getElementById("filter-two").nextSibling;
    this.props.onDeviceSelect(e.target.innerHTML);
    this.setState((prevState) => ({
      filterTwoIsHidden: !prevState.filterTwoIsHidden
    }));
    target.style.display = "none";
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
                <span>Photo</span>
              </li>
              <li onClick = {this.handleCategoryChange}>
                <span>Video</span>
              </li>
            </ul>
          </li>
          <li className = "filter-item dropdown-parent">
            <a id = "filter-two" className = "dropdown-label" onClick = {this.handleDropDownChange}>Device</a>
            <ul className = "dropdown-child">
              <li onClick = {this.handleDeviceChange}>
                <span>Mobile</span>
              </li>
              <li onClick = {this.handleDeviceChange}>
                <span>Digital Camera</span>
              </li>
              <li onClick = {this.handleDeviceChange}>
                <span>Drone</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
