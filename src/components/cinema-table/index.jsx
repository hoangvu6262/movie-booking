import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, Paper, Avatar, makeStyles } from "@material-ui/core";

import { getCinemaSystemInfo } from "../../store/actions/cinema.action";

const useStyles = makeStyles((theme) => ({
  root: {
    // position: "relative",
    zIndex: -1,
    marginTop: 100,
  },
  cinemaContainer: {
    // height: 800,
  },
  paper: {
    // padding: theme.spacing(2),
    height: 800,
    // textAlign: "center",
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
  // classes jss
  const classes = useStyles();
  const dispatch = useDispatch();
  const { cinemaInfo } = useSelector((state) => state.cinema);

  //props
  const { cinemaList } = props;

  //handleClick để thay đổi hệ thống rạp
  const handleClick = (maHeThongRap) => {
    dispatch(getCinemaSystemInfo(maHeThongRap));
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
    if (cinemaInfo) {
      return cinemaInfo.map((cinemaInfo, index) => {
        return (
          <div key={index} className={classes.cinemaInfoItem}>
            <Avatar
              variant="square"
              src="https://open-stand.org/wp-content/uploads/2016/04/International-Union-of-Cinemas-Calls-for-Open-Standards-in-the-Cinema-Industry.jpg"
            ></Avatar>
            <div className={classes.cinemaText}>
              <p>{cinemaInfo.tenCumRap}</p>
              <p>{cinemaInfo.diaChi}</p>
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
            <Paper className={classes.paper}></Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default React.memo(CinemaTable);
