import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoiveDetail } from "../../../store/actions/movie.action";
// import "./style.scss";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import dateFormat from "date-format";
import Loading from "../../../components/loading";
import { withStyles, Container, Grid } from "@material-ui/core";
import MovieCardHorizontal from "../../../components/movie-card/MovieCardHorizontal";
import LoginForm from "../../login/loginPage";

const styles = {
  detailMovie: {
    marginTop: 60,
    width: "100%",
  },
  detailMovieContent: {
    // position: "relative",
    backgroundColor: "rgb(10, 32, 41)",
    height: "auto",
    // filter: "blur(8px)",
  },
  image: {
    filter: "blur(18px)",
    margin: "-11px 0 -5px -10px",
    width: "100%",
    height: 619,
  },
  devide: {
    background: "linear-gradient(to top, #0a2029, transparent 100%)",
    position: "absolute",
    top: "0",
    left: "0",
    height: 710,
    width: "100%",
  },
  detailMovieContainer: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%,0%)",
    height: "450px",
  },
  info: {
    marginTop: 35,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "400",
    color: "#fb4226",
  },
};

class DetailMovie extends Component {
  renderShowTime = () => {
    const { lichChieu } = this.props.movieDetail;
    console.log(lichChieu);
    if (lichChieu) {
      return lichChieu.map((showTime, index) => {
        return (
          <tr key={index}>
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
    const { classes } = this.props;
    if (this.props.isLogin) {
      if (this.props.loading) {
        return <Loading />;
      } else {
        return (
          <div className={classes.detailMovie}>
            <div className={classes.detailMovieContent}>
              <img
                src={this.props.movieDetail.hinhAnh}
                alt="bg"
                className={classes.image}
              />
              <div className={classes.devide}></div>
              <Container maxWidth="md" className={classes.detailMovieContainer}>
                <MovieCardHorizontal movie={this.props.movieDetail} />
                <p className={classes.info}>Thông Tin</p>
              </Container>
              <Container maxWidth="md">
                <Grid
                  container
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: 50,
                  }}
                >
                  <Grid item md={6}>
                    <table
                      className="table table-borderless"
                      style={{ marginTop: 35, color: "#fff" }}
                    >
                      <thead>
                        <tr>
                          <th>Ngày công chiếu</th>
                          <td>{this.props.movieDetail.ngayKhoiChieu}</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Đạo diện</th>
                          <td>Victor Vũ</td>
                        </tr>
                        <tr>
                          <th>diễn viên</th>
                          <td>Thornton</td>
                        </tr>
                        <tr>
                          <th>thể loại</th>
                          <td>
                            Romance, Action, Mystery, Thriller, Animation, Crime
                          </td>
                        </tr>
                        <tr>
                          <th>Định dạng</th>
                          <td>2D/Digitals</td>
                        </tr>
                        <tr>
                          <th>Quốc gia SX</th>
                          <td>Việt Nam</td>
                        </tr>
                      </tbody>
                    </table>
                  </Grid>
                  <Grid item md={6}>
                    <table
                      className="table table-borderless"
                      style={{ marginTop: 35, color: "#fff" }}
                    >
                      <thead>
                        <tr>
                          <th>Nội dung</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{this.props.movieDetail.moTa}</td>
                        </tr>
                      </tbody>
                    </table>
                  </Grid>
                </Grid>
              </Container>
            </div>

            <section className="showTime">
              <Container maxWidth="md">
                <p className={classes.info}>Lịch chiếu phim</p>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Số thứ tự</th>
                      <th scope="col">Tên cụm rạp</th>
                      <th scope="col">Tên rạp</th>
                      <th scope="col">Giá vé</th>
                      <th scope="col">Ngày chiếu</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderShowTime()}</tbody>
                </table>
              </Container>
            </section>
          </div>
        );
      }
    } else {
      return <>{this.props.history.push(`/login`)}</>;
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
    isLogin: state.user.isLogin,
  };
};

export default connect(mapStateToProps)(
  withRouter(withStyles(styles)(DetailMovie))
);
