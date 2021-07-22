import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoiveDetail } from "../../../store/actions/movie.action";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import dateFormat from "date-format";

class DetailMovie extends Component {
  renderShowTime = () => {
    const { lichChieu } = this.props.movieDetail;
    console.log(lichChieu);
    if (lichChieu) {
      return lichChieu.map((showTime, index) => {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{showTime.thongTinRap.tenCumRap}</td>
            <td>{showTime.thongTinRap.tenRap}</td>
            <td>{showTime.giaVe}</td>
            <td>
              <NavLink to={`/booking/${showTime.maLichChieu}`}>
                {dateFormat(
                  "yyyy/MM/dd hh:mm",
                  new Date(showTime.ngayChieuGioChieu)
                )}
              </NavLink>
            </td>
          </tr>
        );
      });
    }
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
        <div>
          <h2 className="test">Detail Movie</h2>
          <iframe src={this.props.movieDetail.trailer} frameborder="0"></iframe>
          <section className="showTime">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">số thứ tự</th>
                  <th scope="col">tên cụm rạp</th>
                  <th scope="col">tên rạp</th>
                  <th scope="col">giá</th>
                  <th scope="col">ngày chiếu</th>
                </tr>
              </thead>
              <tbody>{this.renderShowTime()}</tbody>
            </table>
          </section>
        </div>
      );
    }
  }
  componentDidMount() {
    const { params } = this.props.match;
    console.log("params: ", params);
    this.props.dispatch(getMoiveDetail(params.id));
  }
}
const mapStateToProps = (state) => {
  return {
    movieDetail: state.movie.movieDetail,
    loading: state.common.loading,
  };
};

export default connect(mapStateToProps)(withRouter(DetailMovie));
