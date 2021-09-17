import React from "react";
import LoginForm from "./LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import Notification from "../../../components/notification";

const useStyles = makeStyles({
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

export default function LoginPage(props) {
  const { isAdmin } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const { notify } = useSelector((state) => state.user);
  const handleCloseNotification = () => {
    dispatch({
      type: "CLOSE_NOTIFICATION",
      payload: false,
    });
  };
  return (
    <>
      <div className={classes.formMovieLogin}>
        <div className={classes.logo}>
          <img src="https://tix.vn/app/assets/img/login/group@2x.png" alt="" />
        </div>
        <LoginForm isAdmin={isAdmin ? true : false} />
      </div>
      <Notification notifyAlert={notify} onClose={handleCloseNotification} />
    </>
  );
}
