import React, { Component } from "react";
import CarouselItem from "../carousel-item";
import { Hidden, makeStyles } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

export default class Carousel extends Component {
  carouselItemsList = [
    {
      title: "First slide label",
      description:
        "Some representative placeholder content for the first slide.",
      link: "https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png",
    },
    {
      title: "Second slide label",
      description:
        "Some representative placeholder content for the first slide.",
      link: "https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png",
    },
    {
      title: "Third slide label",
      description:
        "Some representative placeholder content for the first slide.",
      link: "https://s3img.vcdn.vn/123phim/2021/04/trang-ti-16194117174325.jpg",
    },
  ];

  render() {
    return (
      <section className="movie-carousel">
        <Hidden xsDown>
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
        </Hidden>
      </section>
    );
  }
}
