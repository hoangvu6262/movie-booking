import React from "react";
import LoginForm from "./LoginForm";
import { useSelector, useDispatch } from "react-redux";
import {
  makeStyles,
  Container,
  List,
  Grid,
  Button,
  Toolbar,
} from "@material-ui/core";
import Notification from "../../../components/notification";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.6)),url(https://demos.creative-tim.com/material-dashboard-pro-react/static/media/login.c8a507cf.jpeg)",
    display: "relative",
    width: "100vw",
    height: "auto",
    paddingBottom: 180,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  toolbar: {
    margin: 20,
  },
  logo: {
    width: "90%",
    margin: "-20px auto 0 auto",
    // background: "linear-gradient(60deg, #ec407a, #d81b60)",
    background: "linear-gradient(120deg, #5252d4, #5252d4)",
    borderRadius: 6,
    "& img": {
      transform: "translateX(-50%)",
      width: "60%",
      margin: "20px auto 20px 50%",
    },
  },
  loginPageContent: {
    marginTop: 80,
    display: "flex",
    justifyContent: "center",
  },
  formMovieLogin: {
    borderRadius: "10px",
    width: "360px",
    height: "auto",
    backgroundColor: "#fff",
  },
  navlinkText: {
    color: "#fff",
    "& .MuiButton-label": {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 600,
      fontSize: 12,
      textTransform: "uppercase",
    },
  },
  LoginPageHeader: {
    padding: "15px 0",
    "& p": {
      color: "#fff",
    },
  },
  loginPageTitle: {
    listStyle: "none",
    textDecoration: "none",
    fontSize: 18,
    width: "auto",
    "&:hover": {
      listStyle: "none",
      textDecoration: "none",
    },
  },
  LoginPageMenu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  navlink: {
    // marginTop: theme.spacing(2),
    marginLeft: 10,
    padding: "10px 8px",
    width: "auto",
    height: "100%",
    color: "#fff",
    textDecoration: "none",
    listStyle: "none",
    borderRadius: 6,
    "&:hover": {
      color: "#fff",
      textDecoration: "none",
      listStyle: "none",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    "& .MuiListItemIcon-root": {
      width: 24,
      height: 24,
    },
  },
  activeNavlink: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    "&:hover": {
      color: "#fff",
      textDecoration: "none",
      listStyle: "none",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },
}));

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
    <div className={classes.root}>
      {isAdmin === true ? (
        <Container maxWidth="md">
          <Toolbar className={classes.toolbar} />
        </Container>
      ) : (
        <Container maxWidth="md">
          <Grid container className={classes.LoginPageHeader}>
            <Grid item sm={8} xs={6}>
              <NavLink to="/" className={classes.loginPageTitle}>
                <p>Login Page</p>
              </NavLink>
            </Grid>
            <Grid item sm={4} xs={6}>
              <List
                component="div"
                disablePadding
                style={{ marginLeft: 35 }}
                className={classes.LoginPageMenu}
              >
                <NavLink
                  to="/login"
                  activeClassName={classes.activeNavlink}
                  className={classes.navlink}
                  exact={true}
                >
                  <Button
                    startIcon={<AccountCircleIcon />}
                    className={classes.navlinkText}
                  >
                    Login
                  </Button>
                </NavLink>
                <NavLink
                  to="/register"
                  activeClassName={classes.activeNavlink}
                  className={classes.navlink}
                  exact={true}
                >
                  <Button
                    startIcon={<AddCircleIcon />}
                    className={classes.navlinkText}
                  >
                    Register
                  </Button>
                </NavLink>
              </List>
            </Grid>
          </Grid>
        </Container>
      )}
      <Container maxWidth="md" className={classes.loginPageContent}>
        <div className={classes.formMovieLogin}>
          <div className={classes.logo}>
            <img
              src="https://tix.vn/app/assets/img/login/group@2x.png"
              alt=""
            />
          </div>
          <LoginForm isAdmin={isAdmin ? true : false} />
        </div>
      </Container>

      <Notification notifyAlert={notify} onClose={handleCloseNotification} />
    </div>
  );
}
