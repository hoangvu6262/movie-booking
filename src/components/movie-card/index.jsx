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

const styles = {
  root: {
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
    "& span": {
      display: "inline",
      // marginTop: "0px",
      marginRight: "10px",
      padding: "8px 15px 5px 15px",
      backgroundColor: "#00ac4d",
      fontFamily: "Yanone Kaffeesatz",
      color: "#fff",
      fontSize: "15px",
      fontWeight: "600",
      borderRadius: "4px",
    },
  },
  movieName: {
    display: "inline",
    fontSize: "25px",
    fontWeight: "600",
    alignContent: "center",
    fontFamily: "Yanone Kaffeesatz",
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
};

class MovieCard extends Component {
  render() {
    const { movie, history, classes } = this.props;
    const handleClick = () => {
      // di chuyển sang trang chi tiết
      history.push(`/movie-detail/${movie.maPhim}`);
    };

    return (
      <Card className={classes.root} onClick={handleClick}>
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
            <span>P</span>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.movieName}
            >
              {movie.tenPhim}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {movie.ngayKhoiChieu}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
      </Card>
    );
  }
}

export default withRouter(withStyles(styles)(MovieCard));
