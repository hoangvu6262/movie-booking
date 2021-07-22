import React, { Component } from "react";
import { getMoiveList } from "../../../store/actions/movie.action";
import { connect } from "react-redux";
import MovieCard from "../../../components/movie-card";
import Carousel from "../../../components/carousel";

class Home extends Component {
  renderMovieList = () => {
    console.log(this.props.movieList);
    return this.props.movieList.map((movie, index) => {
      return (
        <div className="col-4" key={index}>
          {/* b4-cart */}
          <MovieCard movie={movie} />
        </div>
      );
    });
  };

  render() {
    if (this.props.loading) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      return (
        <>
          <Carousel />
          <h2>Danh Sách Phim</h2>
          <div className="container">
            <div className="row">{this.renderMovieList()}</div>
          </div>
        </>
      );
    }
  }

  componentDidMount() {
    this.props.dispatch(getMoiveList());
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    movieList: state.movie.movieList,
    loading: state.common.loading,
  };
};

export default connect(mapStateToProps)(Home);
