import React, { Component } from "react";
import { getMoiveList } from "../../../store/actions/movie.action";
import { connect } from "react-redux";
import { Container, Grid, withStyles } from "@material-ui/core";
import MovieCard from "../../../components/movie-card";
import Carousel from "../../../components/carousel";

// import AmazingSlab from "../../../assets/font/AmazingSlab.ttf";
// import font from "../../../assets/font/Monoton-Regular.ttf";

const styles = {
  title: {
    padding: "30px 0",
    textAlign: "center",
    fontFamily: "Yanone Kaffeesatz",
    fontWeight: "bold",
    fontSize: "35px",
  },
  cardItem: {
    display: "flex",
    justifyContent: "center",
  },
};

class Home extends Component {
  // render list movie
  renderMovieList = (classes) => {
    console.log(this.props.movieList);
    return this.props.movieList.map((movie, index) => {
      return (
        <Grid className={classes.cardItem} item lg={3} key={index}>
          <MovieCard movie={movie} />
        </Grid>
      );
    });
  };

  render() {
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
            <h2 className={classes.title}>Danh Sách Phim</h2>
            <Grid container spacing={2}>
              {this.renderMovieList(classes)}
            </Grid>
          </Container>
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

export default connect(mapStateToProps)(withStyles(styles)(Home));
