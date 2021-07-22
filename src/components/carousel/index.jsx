import React, { Component } from "react";
import CarouselItem from "../carousel-item";
import carousel1 from "../../assets/images/carousel1.jpg";
import carousel2 from "../../assets/images/carousel2.png";
import carousel3 from "../../assets/images/carousel3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

export default class Carousel extends Component {
  carouselItemsList = [
    {
      title: "First slide label",
      description:
        "Some representative placeholder content for the first slide.",
      link: carousel1,
    },
    {
      title: "Second slide label",
      description:
        "Some representative placeholder content for the first slide.",
      link: carousel2,
    },
    {
      title: "Third slide label",
      description:
        "Some representative placeholder content for the first slide.",
      link: carousel3,
    },
  ];

  // hàm render carouselItem
  // renderCarouselItem = () => {
  //   return this.carouselItemsList.map((item, index) => {
  //     return (
  //       <CarouselItem
  //         title={item.title}
  //         description={item.description}
  //         link={item.link}
  //         key={index}
  //       />
  //     );
  //   });
  // };

  render() {
    return (
      <section className="movie-carousel">
        <div
          id="movieCarouselComponent"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#movieCarouselComponent"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#movieCarouselComponent" data-slide-to={1} />
            <li data-target="#movieCarouselComponent" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            {/* item 1 */}
            <div className="carousel-item active">
              <CarouselItem
                title={this.carouselItemsList[0].title}
                description={this.carouselItemsList[0].description}
                link={this.carouselItemsList[0].link}
              />
            </div>
            {/* item 2 */}
            <div className="carousel-item">
              <CarouselItem
                title={this.carouselItemsList[1].title}
                description={this.carouselItemsList[1].description}
                link={this.carouselItemsList[1].link}
              />
            </div>
            {/* item 3 */}
            <div className="carousel-item">
              <CarouselItem
                title={this.carouselItemsList[2].title}
                description={this.carouselItemsList[2].description}
                link={this.carouselItemsList[2].link}
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#movieCarouselComponent"
            role="button"
            data-slide="prev"
          >
            <FontAwesomeIcon icon="chevron-left" size="3x" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#movieCarouselComponent"
            role="button"
            data-slide="next"
          >
            <FontAwesomeIcon icon="chevron-right" size="3x" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    );
  }
}
