import React, {Component} from 'react';
import ItemsAPI from './api';
import store from "./store";
import { fetchSelectedItem } from './actions/index';

import SearchBar from './components/SearchBar';
import ItemCard from './components/ItemCard';

export default class Explore extends Component {
  constructor(props) {
    super(props);

    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.handleDeviceSelect = this.handleDeviceSelect.bind(this);
    this.handleItemSelected = this.handleItemSelected.bind(this);
    this.handleTagSelected = this.handleTagSelected.bind(this);

    this.state = {
      // items: ItemsAPI.all(),
      all: store.getState().items.all,
      items: store.getState().items.all,
      dropdownActive: false,
      isPhotoOnly: false,
      isVideoOnly: false,
      isMobileOnly: false,
      isDigitalCameraOnly: false,
      isDroneOnly: false,

      selectedItem: "",
      loadCounter: 3
    }
  }

  checkFilter() {
    if (this.state.isPhotoOnly) {
      if (this.state.isMobileOnly) { return "11"} else if (this.state.isDigitalCameraOnly) { return "12" } else if (this.state.isDroneOnly) { return "13" } else { return "10" }
    } else if (this.state.isVideoOnly) {
      if (this.state.isMobileOnly) { return "21" } else if (this.state.isDigitalCameraOnly) { return "22" } else if (this.state.isDroneOnly) { return "23" } else { return "20" }
    } else {
      if (this.state.isMobileOnly) { return "01"} else if (this.state.isDigitalCameraOnly) { return "02" } else if (this.state.isDroneOnly) {return "03" } else { return "00"}
    }
  }

  categoryChange(category) {
    var filter;
    switch (category.toLowerCase()) {
      case "photo":
        this.setState({ isPhotoOnly: !this.state.isPhotoOnly, isVideoOnly: false}, () => {
          filter = this.checkFilter();
          this.setState({items: ItemsAPI.filter(this.state.all, filter)});
        });
        break;
      case "video":
        this.setState({ isVideoOnly: !this.state.isVideoOnly, isPhotoOnly: false}, () => {
          filter = this.checkFilter();
          this.setState({items: ItemsAPI.filter(this.state.all, filter)});
        });
        break;
      default:
        this.setState({ isVideoOnly: false, isPhotoOnly: false}, () => {
          filter = this.checkFilter();
          this.setState({items: ItemsAPI.filter(this.state.all, filter)});
        });
    }
  }

  deviceChange(device) {
    var filter;
    switch (device.toLowerCase()) {
      case "mobile":
        this.setState({isMobileOnly: !this.state.isMobileOnly, isDigitalCameraOnly: false, isDroneOnly: false}, () => {
          filter = this.checkFilter();
          this.setState({items: ItemsAPI.filter(this.state.all, filter)});
        });
        break;
      case "digital camera":
        this.setState({isMobileOnly: false, isDigitalCameraOnly: !this.state.isDigitalCameraOnly, isDroneOnly: false}, () => {
          filter = this.checkFilter();
          this.setState({items: ItemsAPI.filter(this.state.all, filter)});
        });
        break;
      case "drone":
        this.setState({isMobileOnly: false, isDigitalCameraOnly: false, isDroneOnly: !this.state.isDroneOnly}, () => {
          filter = this.checkFilter();
          this.setState({items: ItemsAPI.filter(this.state.all, filter)});
        });
        break;
      default:
        this.setState({isMobileOnly: false, isDigitalCameraOnly: false, isDroneOnly: false}, () => {
          filter = this.checkFilter();
          this.setState({items: ItemsAPI.filter(this.state.all, filter)});
        });
    }
  }

  handleCategorySelect(category) {
    this.categoryChange(category);
  }


  handleDeviceSelect(device) {
    this.deviceChange(device);
  }

  handleItemSelected(e, item) {
    this.setState({selectedItem: item});
    console.log(e.target.tagName)
    store.dispatch(fetchSelectedItem(item));
  }

  handleTagSelected(e, filter, tag) {
    if (filter === "tag-one") {
      this.categoryChange(tag);
    } else {
      this.deviceChange(tag);
    }
  }

  handleLoadMoreClicked(e) {
    var restItemCounter = ItemsAPI.count(this.state.items) - this.state.loadCounter;
    if (restItemCounter < 3) {
      this.setState((prevState) => ({
        loadCounter: prevState.loadCounter + restItemCounter
      }))
      e.target.style.display = "none";
      this.forceUpdate();
    } else {
      this.setState((prevState) => ({
        loadCounter: prevState.loadCounter + 3
      }))
      this.forceUpdate();
    }
  }

  sortedByHits(count) {
    return (this.state.items.sort(function(a, b){
      return parseFloat(b.hit) - parseFloat(a.hit);
    })).slice(0,count)
  }

  sortedByDate() {
    if (arguments.length === 1) {
      return (this.state.items.sort(function(a, b){
        return new Date(b.upload_date) - new Date(a.upload_date);
      })).slice(0,arguments[0])
    } else if (arguments.length === 2) {
      return (this.state.items.sort(function(a, b){
        return new Date(b.upload_date) - new Date(a.upload_date);
      })).slice(arguments[0], arguments[1])
    }
  }

  loadMoreItems(start, end) {
    return (
      <ul className = "item-cards flex-container">
        {this.sortedByDate(start, end).map(function(item) {
          return (
            <div className = "item-cards-wrapper" key = {item.id} onClick = {(e) => this.handleItemSelected(e, item)}>
              <ItemCard
                item = {item}
                onTagSelected = {this.handleTagSelected}
              />
            </div>
            )
          }.bind(this)
        )}
      </ul>
    )
  }

  render() {
    var load = [];
    for (var i = 0; i < this.state.loadCounter; i+=3) {
      if ((i+3) <= this.state.loadCounter) {
        load.push(this.loadMoreItems(i, i+3));
      } else {
        load.push(this.loadMoreItems(i, this.state.loadCounter));
      }
    }
    return (
      <div className = "explore-page">
        <div className = "container side-spacer">
          <div className = "searchbar-wrapper">
            <SearchBar
              dropdownActive = {this.state.dropdownActive}
              onCategorySelect = {this.handleCategorySelect}
              onDeviceSelect = {this.handleDeviceSelect}
              isPhotoOnly = {this.state.isPhotoOnly}
              isVideoOnly = {this.state.isVideoOnly}
              isMobileOnly = {this.state.isMobileOnly}
              isDigitalCameraOnly = {this.state.isDigitalCameraOnly}
              isDroneOnly = {this.state.isDroneOnly}
            />
          </div>

          <div className = "item-section" >
            <div className = "section-heading first">
              <h2 className = "">Hot Posts</h2>
              <p>This is the list of all videos, go check them out!</p>
            </div>

            <ul className = "item-cards flex-container">
              {this.sortedByHits(3).map(function(item) {
                return (
                  <div className = "item-cards-wrapper" key = {item.id} onClick = {(e) => this.handleItemSelected(e, item)}>
                    <ItemCard
                      item = {item}
                      onTagSelected = {this.handleTagSelected}
                    />
                  </div>
                  )
                }.bind(this)
              )}
            </ul>

            <div className = "section-heading">
              <h2 className = "">New Posts</h2>
              <p>This is the list of all videos, go check them out!</p>
            </div>
            {load}
            <div className = "load-more" onClick = {this.handleLoadMoreClicked.bind(this)}>
              <p>Load More...</p>
            </div>

          </div>

        </div>
      </div>
    )
  }
}
