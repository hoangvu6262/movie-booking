import React, { Component } from "react";
import { getMoiveList } from "../../../store/actions/movie.action";
import {
  getCinemaSystemInfo,
  getCinemaSystem,
} from "../../../store/actions/cinema.action";
import { connect } from "react-redux";
import { Container, Grid, IconButton, withStyles } from "@material-ui/core";
import MovieCard from "../../../components/movie-card";
import Carousel from "../../../components/carousel";
import CinemaTable from "../../../components/cinema-table";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

// import AmazingSlab from "../../../assets/font/AmazingSlab.ttf";
// import font from "../../../assets/font/Monoton-Regular.ttf";

const styles = {
  title: {
    padding: "30px 0",
    textAlign: "center",
    fontFamily: "Yanone Kaffeesatz",
    fontWeight: 300,
    fontSize: "35px",
    "& ul": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      "& li": {
        height: "50px",
        width: "150px",
        listStyle: "none",
        cursor: "pointer",
        "&:hover": {
          color: "#fb4226",
          fontSize: "40px",
        },
      },
    },
  },
  cardItem: {
    display: "flex",
    justifyContent: "center",
  },
};

class Home extends Component {
  state = {
    dangChieu: true,
  };
  // dangChieu = true;
  // change to dangChieu list movie
  handleClickChangeDangChieu = () => {
    this.setState({ ...this.state, dangChieu: true }, () => {
      console.log(this.state.dangChieu);
    });
  };
  // change to sapChieu list movieList
  handleClickChangeSapChieu = () => {
    this.setState({ ...this.state, dangChieu: false }, () => {
      console.log(this.state.dangChieu);
    });
  };
  // render list movie đang chiếu hoặc sắp chiếu
  renderLichChieu = (classes) => {
    if (this.state.dangChieu === true) {
      return this.props.movieList.map((movie, index) => {
        return (
          <Grid className={classes.cardItem} item lg={3} key={index}>
            <MovieCard movie={movie} />
          </Grid>
        );
      });
    }
  };

  //handleClick to render cinema info list
  // handleClickCinemaInfoList = (maHeThongRap) => {
  //   console.log(maHeThongRap);
  //   this.props.dispatch(getCinemaSystemInfo(maHeThongRap));
  // };

  render() {
    // console.log(this.props.cinemaList);
    const { classes } = this.props;
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
          <Container maxWidth="md">
            <div className={classes.title}>
              <ul>
                <li onClick={this.handleClickChangeDangChieu}>
                  <a>Đang chiếu</a>
                </li>
                <li onClick={this.handleClickChangeSapChieu}>
                  <a>Sắp chiếu</a>
                </li>
              </ul>
            </div>
            <Grid container justifyContent="center" spacing={2}>
              {this.renderLichChieu(classes)}
            </Grid>
            <Grid container justifyContent="center">
              <IconButton edge="start" color="default" aria-label="prev">
                <NavigateBeforeIcon />
              </IconButton>
              <IconButton edge="start" color="default" aria-label="next">
                <NavigateNextIcon />
              </IconButton>
            </Grid>
          </Container>
          <CinemaTable
            cinemaList={this.props.cinema}
            // onCinemaInfoClick={this.handleClickCinemaInfoList}
            // cinemaInfoList={this.state.cinemaInfo}
          />
        </>
      );
    }
  }

  componentDidMount() {
    this.props.dispatch(getMoiveList());
    this.props.dispatch(getCinemaSystem());
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    movieList: state.movie.movieList,
    loading: state.common.loading,
    cinema: state.cinema.cinemaList,
    // cinemaInfoList: state.cinema.cinemaInfo,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Home));
