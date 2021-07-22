import React, { Component } from "react";
import { withRouter } from "react-router";

class MovieCard extends Component {
  render() {
    const { movie, history } = this.props;
    const handleClick = () => {
      // di chuyển sang trang chi tiết
      history.push(`/movie-detail/${movie.maPhim}`);
    };

    return (
      <div className="card text-left">
        <img className="card-img-top" src={movie.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{movie.tenPhim}</h4>
          <p className="card-text">Body</p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleClick}
          >
            xem chi tiet
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieCard);
