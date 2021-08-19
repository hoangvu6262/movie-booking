import React from "react";
import LoginForm from "./LoginForm";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundImage: "url(https://tix.vn/app/assets/img/icons/bg2.jpg)",
    // marginTop: 80,
    display: "relative",
    backgroundColor: "black",
    width: "100vw",
    height: "100vh",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
  logo: {
    marginTop: 15,
    width: 200,
    margin: "auto",
    "& img": {
      width: 200,
    },
  },
  formMovieLogin: {
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    // margin: "auto",
    transform: "translate(-50%,-50%)",
    width: "360px",
    height: "500px",
    backgroundImage:
      "linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))",
  },
});

export default function LoginPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.formMovieLogin}>
        <div className={classes.logo}>
          <img src="https://tix.vn/app/assets/img/login/group@2x.png" alt="" />
        </div>
        <LoginForm />
        {/* <SignupForm /> */}
      </div>
    </div>
  );
}
