import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, Paper, Avatar, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  // getCinemaSystemInfo,
  getCinemaSystemShowTime,
} from "../../store/actions/cinema.action";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: -1,
    marginTop: 100,
  },
  cinemaContainer: {
    // height: 800,
  },
  paper: {
    height: 800,
    color: theme.palette.text.secondary,
  },
  logoItem: {
    margin: "auto 5px",
    height: 90,
    borderBottom: "1px solid #9b9b9b",
  },
  logo: {
    width: "80%",
    height: "auto",
    margin: "20px auto",
    cursor: "pointer",
    border: "1px solid #9b9b9b",
  },
  cinemaInfoList: {
    margin: "0 auto",
    height: 800,
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      borderRadius: 10,
      width: 12,
      backgroundColor: "#F5F5F5",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 10,
      width: 12,
      backgroundColor: "#888",
    },
  },
  cinemaInfoItem: {
    paddingTop: 25,
    width: "90%",
    height: 90,
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid #9b9b9b",
    cursor: "pointer",
  },
  cinemaText: {
    whiteSpace: "nowrap",
    marginLeft: "10px",
    overflow: "hidden",
    textAlign: "left",
    "& p": {
      margin: "0",
      // width: "100%",
      textOverflow: "ellipsis",
      fontSize: 12,
    },
  },
}));

function CinemaTable(props) {
  //props
  const { cinemaList } = props;
  // classes jss
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { cinemaSystemShowtime } = useSelector((state) => state.cinema);

  // lấy danh sách phim theo hệ thống rạp
  const [listMovie, setListMovie] = useState({});

  useEffect(() => {
    // dispatch(getCinemaSystemInfo("BHDStar"));
    dispatch(getCinemaSystemShowTime("BHDStar"));
  }, []);

  //handleClick để thay đổi hệ thống rạp
  const handleClick = (maHeThongRap) => {
    // dispatch(getCinemaSystemInfo(maHeThongRap));
    dispatch(getCinemaSystemShowTime(maHeThongRap));
  };

  // thay đổi thông tin lịch chiếu hệ thống rạp
  const handleChangeCinemaSystemShowTime = (index) => {
    const listMovie1 = cinemaSystemShowtime[index];
    setListMovie(listMovie1);
  };
  // console.log("cinemaSystemShowtime", cinemaSystemShowtime);
  // console.log("listMovie", listMovie.danhSachPhim);

  // chuyển hướng đến trang movieDetail
  const handleToMovieDetail = (id) => {
    history.push(`/movie-detail/${id}`);
  };

  //render cinema list
  const renderCinemaList = () => {
    return cinemaList.map((cinema, index) => {
      return (
        <Grid
          item
          xs={12}
          key={index}
          className={classes.logoItem}
          onClick={() => handleClick(cinema.maHeThongRap)}
        >
          <Avatar src={cinema.logo} className={classes.logo}></Avatar>
        </Grid>
      );
    });
  };

  //render cinema info list
  const renderCinemaInfoList = () => {
    if (cinemaSystemShowtime) {
      return cinemaSystemShowtime.map((cinemaInfo, index) => {
        return (
          <div
            key={index}
            className={classes.cinemaInfoItem}
            onClick={() => handleChangeCinemaSystemShowTime(index)}
          >
            <Avatar
              variant="square"
              src="https://open-stand.org/wp-content/uploads/2016/04/International-Union-of-Cinemas-Calls-for-Open-Standards-in-the-Cinema-Industry.jpg"
            ></Avatar>
            <div className={classes.cinemaText}>
              <p style={{ color: "red", fontSize: 15 }}>
                {cinemaInfo.tenCumRap}
              </p>
              <p>{cinemaInfo.diaChi}</p>
            </div>
          </div>
        );
      });
    }
  };

  // render lịch chiếu phim
  const renderListmovieShowtime = () => {
    if (listMovie.danhSachPhim) {
      return listMovie.danhSachPhim.map((movieInfo, index) => {
        return (
          <div
            key={index}
            className={classes.cinemaInfoItem}
            onClick={() => handleToMovieDetail(movieInfo.maPhim)}
          >
            <Avatar variant="square" src={movieInfo.hinhAnh}></Avatar>
            <div className={classes.cinemaText}>
              <p style={{ color: "red", fontSize: 15 }}>{movieInfo.tenPhim}</p>
              <p>{movieInfo.maPhim}</p>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <section className={classes.root} id="cinema-list">
      <Container maxWidth="md" className={classes.cinemaContainer}>
        <Grid container>
          <Grid item xs={1}>
            <Paper className={classes.paper}>
              <Grid container>{renderCinemaList()}</Grid>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <div className={classes.cinemaInfoList}>
                {renderCinemaInfoList()}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={7}>
            <Paper className={classes.paper}>
              <div className={classes.cinemaInfoList}>
                {renderListmovieShowtime()}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default React.memo(CinemaTable);
