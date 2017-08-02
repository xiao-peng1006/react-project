import React, {Component} from 'react';

import ItemCard from './components/ItemCard';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.handleItemClicked = this.handleItemClicked.bind(this);
    this.state = {
      selectedItem: this.props.selectedItem
    }
  }

  handleItemClicked(item) {
    this.props.onItemSelected(item);
  }

  render() {
    var hotItems = (this.props.items.sort(function(a, b){
      return parseFloat(b.hit) - parseFloat(a.hit);
    })).slice(0,3);

    var newestItems = (this.props.items.sort(function(a, b){
      return new Date(b.upload_date) - new Date(a.upload_date);
    })).slice(0,3);



    return (
      <div className = "item-section" onClick = {this.handleItemSelected}>
        <div className = "section-heading first">
          <h2 className = "">New Videos</h2>
          <p>This is the list of all videos, go check them out!</p>
        </div>
        <ul className = "item-cards flex-container">
          {newestItems.map(function(item) {
            return (
              <div className = "item-cards-wrapper" key = {item.id} onClick = {() => this.handleItemClicked(item)}>
                <ItemCard
                  item = {item}
                />
              </div>
              )
            }.bind(this)
          )}
        </ul>

        <div className = "section-heading">
          <h2 className = "">Hot Videos</h2>
          <p>This is the list of all videos, go check them out!</p>
        </div>
        <ul className = "item-cards flex-container">
          {hotItems.map(function(item) {
            return (
              <div className = "item-cards-wrapper" key = {item.id} onClick = {() => this.handleItemClicked(item)}>
                <ItemCard
                  item = {item}
                />
              </div>
              )
            }.bind(this)
          )}
        </ul>
      </div>
    )
  }
}
