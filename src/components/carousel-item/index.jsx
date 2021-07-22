import React, { Component } from "react";
import "./style.scss";

export default class CarouselItem extends Component {
  render() {
    const { title, description, link } = this.props;
    return (
      <>
        <img src={link} className="item-img d-block" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </>
    );
  }
}
