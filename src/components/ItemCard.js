import React, {Component} from "react";
import { Link } from 'react-router-dom';

export default class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.handleTagClicked = this.handleTagClicked.bind(this);
  }

  handleTagClicked(e) {
    this.props.onTagSelected(e, e.target.classList[1], e.target.children[0].innerHTML);
  }

  render() {
    var isVideo, duration;
    if (this.props.item.category === 'video') {
      isVideo = true;
      duration = parseInt((this.props.item.duration.split(":"))[0], 10)*60 + parseInt((this.props.item.duration.split(":"))[1], 10);
    } else {
      isVideo = false;
    };

    const category = this.props.item.category[0].toUpperCase() + this.props.item.category.slice(1);
    const device = this.props.item.device[0].toUpperCase() + this.props.item.device.slice(1);
    const pathName = this.props.item.id;
    return (
      <div id = "item-card" className = "item-card-component">
        <li className = "item-card-wrapper">
          <Link to = {"/explore" + pathName} className = "item-card" href = "#">
            <div className = "item-card-title">
              <span className = "duration">{isVideo ? (duration + ' min') : (this.props.item.count + ' Pic')}</span>
            </div>
            <h3 className = "item-title">{this.props.item.title}</h3>
            <p className = "item-card-description">
              {this.props.item.description}
            </p>
          </Link>
          <ul className = "item-tags-list tags">
            <li className = "item-tag tag-one" onClick = {this.handleTagClicked}>
              <span>{category}</span>
            </li>
            <li className = "item-tag tag-two" onClick = {this.handleTagClicked}>
              <span>{device}</span>
            </li>
          </ul>
        </li>
      </div>
    )
  }
}
