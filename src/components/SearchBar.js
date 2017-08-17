import React, { Component} from 'react';
// import ReactDOM from 'react-dom';

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
      isPhotoOnly: false,
      isVideoOnly: false,
      isMobileOnly: false,
      isDigitalCameraOnly: false,
      isDroneOnly: false,
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

  componentWillReceiveProps(newProps) {
    this.setState({isPhotoOnly: newProps.isPhotoOnly, isVideoOnly: newProps.isVideoOnly});
    this.setState({isMobileOnly: newProps.isMobileOnly, isDigitalCameraOnly: newProps.isDigitalCameraOnly, isDroneOnly: newProps.isDroneOnly});
    this.categoryFilterCheckMark();
    this.deviceFilterCheckMark()
  }

  categoryFilterCheckMark() {
    const photoCheck = document.getElementById("photo-only").previousSibling.childNodes[0].style;
    const videoCheck = document.getElementById("video-only").previousSibling.childNodes[0].style;
    const allCheck = document.getElementById("category-all").previousSibling.childNodes[0].style;
    if (this.state.isPhotoOnly) {
      photoCheck.display = "block"; videoCheck.display = "none"; allCheck.display = "none";
    } else if (this.state.isVideoOnly) {
      photoCheck.display = "none"; videoCheck.display = "block"; allCheck.display = "none";
    } else {
      videoCheck.display = "none"; photoCheck.display = "none"; allCheck.display = "block";
    }
  }

  deviceFilterCheckMark() {
    const mobileCheck = document.getElementById("mobile-only").previousSibling.childNodes[0].style;
    const digitalCameraCheck = document.getElementById("digital-camera-only").previousSibling.childNodes[0].style;
    const droneCheck = document.getElementById("drone-only").previousSibling.childNodes[0].style;
    const allCheck = document.getElementById("device-all").previousSibling.childNodes[0].style;
    if (this.state.isMobileOnly) {
      mobileCheck.display = "block"; digitalCameraCheck.display = "none"; droneCheck.display = "none"; allCheck.display = "none";
    } else if (this.state.isDigitalCameraOnly) {
      mobileCheck.display = "none"; digitalCameraCheck.display = "block"; droneCheck.display = "none"; allCheck.display = "none";
    } else if (this.state.isDroneOnly) {
      mobileCheck.display = "none"; digitalCameraCheck.display = "none"; droneCheck.display = "block"; allCheck.display = "none";
    } else {
      mobileCheck.display = "none"; digitalCameraCheck.display = "none"; droneCheck.display = "none"; allCheck.display = "block";
    }
  }

  handleCategoryChange(e) {
    const target = document.getElementById("filter-one").nextSibling;
    this.props.onCategorySelect(e.target.innerHTML);
    this.setState({ filterOneIsHidden: !this.state.filterOneIsHidden }, () => {
      this.categoryFilterCheckMark();
    });
    target.style.display = "none";
  }

  handleDeviceChange(e) {
    const target = document.getElementById("filter-two").nextSibling;
    this.props.onDeviceSelect(e.target.innerHTML);
    this.setState({ filterTwoIsHidden: !this.state.filterTwoIsHidden}, () => {
      this.deviceFilterCheckMark();
    });
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
                <div  className = "check-mark">
                  <div className = "selected all">
                    <p>&#10004;</p>
                  </div>
                </div>
                <span id = "category-all">All</span>
              </li>
              <li onClick = {this.handleCategoryChange}>
                <div className = "check-mark">
                  <div className = "selected">
                    <p>&#10004;</p>
                  </div>
                </div>
                <span id = "photo-only">Photo</span>
              </li>
              <li onClick = {this.handleCategoryChange}>
                <div className = "check-mark">
                  <div className = "selected">
                    <p>&#10004;</p>
                  </div>
                </div>
                <span id = "video-only">Video</span>
              </li>
            </ul>
          </li>
          <li className = "filter-item dropdown-parent">
            <a id = "filter-two" className = "dropdown-label" onClick = {this.handleDropDownChange}>Device</a>
            <ul className = "dropdown-child">
              <li onClick = {this.handleDeviceChange}>
                <div  className = "check-mark">
                  <div className = "selected all">
                    <p>&#10004;</p>
                  </div>
                </div>
                <span id = "device-all">All</span>
              </li>
              <li onClick = {this.handleDeviceChange}>
                <div className = "check-mark">
                  <div className = "selected">
                    <p>&#10004;</p>
                  </div>
                </div>
                <span id = "mobile-only">Mobile</span>
              </li>
              <li onClick = {this.handleDeviceChange}>
                <div className = "check-mark">
                  <div className = "selected">
                    <p>&#10004;</p>
                  </div>
                </div>
                <span id = "digital-camera-only">Digital Camera</span>
              </li>
              <li onClick = {this.handleDeviceChange}>
                <div className = "check-mark">
                  <div className = "selected">
                    <p>&#10004;</p>
                  </div>
                </div>
                <span id = "drone-only">Drone</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
