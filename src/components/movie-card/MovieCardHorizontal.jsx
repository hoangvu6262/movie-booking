import React, { Component } from "react";
import { withRouter } from "react-router";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
  CircularProgress,
  withStyles,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import ModalPopupVideo from "./ModalPopupVideo";

const styles = {
  root: {
    // zIndex: -1,
    position: "relative",
  },
  card: {
    backgroundColor: "transparent",
    width: "100%",
    border: "none",
    boxShadow: "none",
    // position: "relative",
  },
  media: {
    width: "215px",
    height: "318px",
    borderRadius: "4px",
  },
  cardContent: {
    // position: "absolute",
    // top: "50%",
    // left: "25%",
    // transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    alignContent: "center",
  },
  movieTitle: {
    marginTop: 5,
    height: 42,
    width: "100%",
    fontSize: 25,
    fontWeight: "600",
    fontFamily: `'Roboto', sans-serif`,
    color: "#fff",
    letterSpacing: 1,
    "& span": {
      display: "inline",
      marginBottom: 3,
      marginRight: "10px",
      padding: "4px 15px",
      backgroundColor: "#00ac4d",
      fontFamily: `'Roboto', sans-serif`,
      color: "#fff",
      fontSize: "18px",
      fontWeight: 900,
      borderRadius: "4px",
    },
  },
  movieTime: {
    marginTop: 5,
    fontSize: 15,
    color: "#fff",
  },
  rating: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  boxRating: {
    width: 150,
    height: 150,
  },
  iconRating: {
    marginTop: 5,
    // paddingBottom: "5px",
    fontSize: "30px",
  },
  playIconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 318,
    width: 215,
    opacity: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 100,
    cursor: "pointer",

    borderRadius: "4px",
    "&:hover": {
      opacity: 1,
      background: "linear-gradient(to top,#000,transparent 100%)",
      transition: "all 0.4s",
    },
  },
};

class MovieCardHorizontal extends Component {
  state = {
    open: false,
  };

  handleModalOpen = () => {
    this.setState({ ...this.state, open: true });
  };

  handleModalClose = () => {
    this.setState({ ...this.state, open: false });
  };
  render() {
    const { movie, history, classes } = this.props;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <Grid container>
            <Grid item md={3}>
              <CardActionArea className={classes.cardActionArea}>
                <CardMedia
                  className={classes.media}
                  image={movie.hinhAnh}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Grid>
            <Grid item md={6} className={classes.cardContent}>
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h2"
                  className={classes.movieTitle}
                >
                  <span>P</span>
                  {movie.tenPhim}
                </Typography>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.movieTime}
                >
                  {movie.ngayKhoiChieu}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item md={3} className={classes.cardContent}>
              <div className={classes.rating}>
                <Typography
                  variant="caption"
                  component="div"
                  color="textSecondary"
                  style={{ fontSize: 30, color: "#fff" }}
                >
                  Đánh Giá
                </Typography>
                <Box
                  position="relative"
                  display="inline-flex"
                  className={classes.boxRating}
                >
                  <CircularProgress
                    variant="determinate"
                    value={movie.danhGia * 7}
                    style={{
                      height: 130,
                      width: 130,
                      color: "#7ed321",
                      marginTop: 10,
                      marginLeft: 10,
                    }}
                  />
                  <Box
                    top={20}
                    left={20}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    style={{
                      backgroundColor: "rgba(0,0,0,.4)",
                      height: 110,
                      width: 110,
                      borderRadius: "50%",
                    }}
                  >
                    <Typography
                      variant="caption"
                      component="div"
                      color="textSecondary"
                      style={{ fontSize: 60, color: "#fff" }}
                    >
                      {movie.danhGia}
                    </Typography>
                  </Box>
                </Box>

                <Rating
                  name="hover-feedback"
                  value={movie.danhGia / 2}
                  precision={0.5}
                  className={classes.iconRating}
                />
              </div>
            </Grid>
          </Grid>
        </Card>
        <div className={classes.playIconContainer}>
          <img
            src="https://tix.vn/app/assets/img/icons/play-video.png"
            alt="play-icon"
            style={{ height: 60, width: 60 }}
            target="trailer-video"
            onClick={this.handleModalOpen}
          />
          <ModalPopupVideo
            source={movie.trailer}
            open={this.state.open}
            close={this.handleModalClose}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(MovieCardHorizontal));
