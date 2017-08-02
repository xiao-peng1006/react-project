import React, {Component} from "react";
// import '../sass/components/_itemcard.css';

export default class ItemCard extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    var isVideo, duration;
    if (this.props.item.category === 'video') {
      isVideo = true;
      duration = parseInt((this.props.item.duration.split(":"))[0])*60 + parseInt((this.props.item.duration.split(":"))[1]);
    } else {
      isVideo = false;
    };

    const category = this.props.item.category[0].toUpperCase() + this.props.item.category.slice(1);
    const device = this.props.item.device[0].toUpperCase() + this.props.item.device.slice(1);

    return (
      <div id = "item-card" className = "item-card-component">
        <li className = "item-card-wrapper">
          <a className = "item-card" href = "#">
            <div className = "item-card-title">
              <span className = "duration">{isVideo ? (duration + ' min') : (this.props.item.count + ' Pic')}</span>
            </div>
            <h3 className = "item-title">{this.props.item.title}</h3>
            <p className = "item-card-description">
              {this.props.item.description}
            </p>
          </a>
          <ul className = "item-tags-list tags">
            <li className = "item-tag tag-one">
              <a href = "#">
                <span>{category}</span>
              </a>
            </li>
            <li className = "item-tag tag-two">
              <a href = "#">
                <span>{device}</span>
              </a>
            </li>
          </ul>
        </li>
      </div>
    )
  }
}
