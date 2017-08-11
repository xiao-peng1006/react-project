import React, {Component} from 'react';
import ItemsAPI from './api';

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
      items: ItemsAPI.all(),
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

  categoryChange(category) {
    if (category.toLowerCase() === 'photo') {
      this.setState({isPhotoOnly: true, isVideoOnly: false}, () => {console.log(category)});
    } else if (category.toLowerCase() === 'video') {
      this.setState({isPhotoOnly: false, isVideoOnly: true}, () => {console.log(category)});
    }
  }

  deviceChange(device) {
    if (device.toLowerCase() === 'mobile') {
      this.setState({isMobileOnly: true, isDigitalCameraOnly: false, isDroneOnly: false});
      console.log("Mobile Selected")
    } else if (device.toLowerCase() === 'drone') {
      this.setState({isMobileOnly: false, isDigitalCameraOnly: false, isDroneOnly: true});
      console.log("Drone Selected")
    } else {
      this.setState({isMobileOnly: false, isDigitalCameraOnly: true, isDroneOnly: false});
      console.log("Digital Camera Selected")
    }
  }

  handleCategorySelect(category) {
    this.categoryChange(category);
  }


  handleDeviceSelect(device) {
    this.deviceChange(device);
  }

  handleItemSelected(item) {
    this.setState({selectedItem: item
    }, () => {console.log(this.state.selectedItem)});
    ItemsAPI.updateSelectedItem(item);
  }

  handleTagSelected(filter, tag) {
    if (filter === "tag-one") {
      this.categoryChange(tag);
    } else {
      this.deviceChange(tag);
    }
  }

  handleLoadMoreClicked(e) {

    if (this.state.loadCounter >= ItemsAPI.count()) {
      e.target.children[0].innerHTML = "No more items ...";
      console.log(e.target.style);
      e.target.style.display = "none";
    } else {
      var restItemCounter = ItemsAPI.count() - this.state.loadCounter;
      if (restItemCounter < 3) {
        this.setState((prevState) => ({
          loadCounter: prevState.loadCounter + restItemCounter
        }))
        e.target.children[0].innerHTML = "No more items ...";
        this.forceUpdate();
      } else {
        this.setState((prevState) => ({
          loadCounter: prevState.loadCounter + 3
        }))
        this.forceUpdate();
      }
    }
  }

  loadMoreItems(start, end) {
    return (
      <ul className = "item-cards flex-container">
        {ItemsAPI.sortedByDate(start, end).map(function(item) {
          return (
            <div className = "item-cards-wrapper" key = {item.id} onClick = {() => this.handleItemSelected(item)}>
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
            />
          </div>

          <div className = "item-section">
            <div className = "section-heading first">
              <h2 className = "">Hot Posts</h2>
              <p>This is the list of all videos, go check them out!</p>
            </div>

            <ul className = "item-cards flex-container">
              {ItemsAPI.sortedByHits(3).map(function(item) {
                return (
                  <div className = "item-cards-wrapper" key = {item.id} onClick = {() => this.handleItemSelected(item)}>
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
