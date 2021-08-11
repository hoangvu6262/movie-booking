import React, { Component } from "react";
import { withRouter } from "react-router";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  withStyles,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import ModalPopupVideo from "./modal-popup-video";
// import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const styles = {
  root: {
    // zIndex: -1,
    position: "relative",
  },
  card: {
    width: "215px",
    border: "none",
    boxShadow: "none",
    position: "relative",
  },
  media: {
    height: "318px",
    borderRadius: "4px",
  },
  cardContent: {
    padding: "3px 0px 15px 0px",
  },
  movieTitle: {
    marginTop: 5,
    height: 42,
    width: "100%",
    fontSize: 18,
    fontWeight: "600",
    "& span": {
      display: "inline",
      marginBottom: 3,
      marginRight: "10px",
      padding: "4px 13px",
      backgroundColor: "#00ac4d",
      fontFamily: `'Roboto', sans-serif`,
      color: "#fff",
      fontSize: "15px",
      fontWeight: 900,
      borderRadius: "4px",
    },
  },
  movieTime: {
    marginTop: 5,
    fontSize: 12,
  },
  rating: {
    position: "absolute",
    top: "10px",
    right: "10px",
    // height: "40px",
    width: "54px",
    backgroundColor: "rgba(12,27,54,.8)",
    borderRadius: "5px",
    border: "1px solid #1f2e46",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    "& p": {
      marginBottom: "0",
      // paddingTop: "5px",
      color: "#fff",
      fontSize: "20px",
      fontWeight: "600",
    },
  },
  iconRating: {
    // paddingBottom: "5px",
    fontSize: "8px",
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

class MovieCard extends Component {
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
    const handleClick = () => {
      // di chuyển sang trang chi tiết
      history.push(`/movie-detail/${movie.maPhim}`);
    };

    return (
      <div className={classes.root}>
        <Card className={classes.card} onClick={handleClick}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={movie.hinhAnh}
              title="Contemplative Reptile"
            />
            <div className={classes.rating}>
              <p>{movie.danhGia}</p>
              <Rating
                name="hover-feedback"
                value={movie.danhGia / 2}
                precision={0.5}
                className={classes.iconRating}
              />
            </div>
            <CardContent className={classes.cardContent}>
              <div className={classes.movieTitle}>
                <span>P</span>
                {movie.tenPhim}
              </div>

              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.movieTime}
              >
                {movie.ngayKhoiChieu}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <div className={classes.playIconContainer}>
          {/* <PlayCircleOutlineIcon
              style={{ fontSize: 60 }}
              className={classes.playIcon}
            /> */}
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

export default withRouter(withStyles(styles)(MovieCard));
