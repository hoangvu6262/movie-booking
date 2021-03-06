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
                <p className={classes.info}>Th??ng Tin</p>
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
                          <th>Ng??y c??ng chi???u</th>
                          <td>{this.props.movieDetail.ngayKhoiChieu}</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>?????o di???n</th>
                          <td>Victor V??</td>
                        </tr>
                        <tr>
                          <th>di???n vi??n</th>
                          <td>Thornton</td>
                        </tr>
                        <tr>
                          <th>th??? lo???i</th>
                          <td>
                            Romance, Action, Mystery, Thriller, Animation, Crime
                          </td>
                        </tr>
                        <tr>
                          <th>?????nh d???ng</th>
                          <td>2D/Digitals</td>
                        </tr>
                        <tr>
                          <th>Qu???c gia SX</th>
                          <td>Vi???t Nam</td>
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
                          <th>N???i dung</th>
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
                <p className={classes.info}>L???ch chi???u phim</p>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S??? th??? t???</th>
                      <th scope="col">T??n c???m r???p</th>
                      <th scope="col">T??n r???p</th>
                      <th scope="col">Gi?? v??</th>
                      <th scope="col">Ng??y chi???u</th>
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
