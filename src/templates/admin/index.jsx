import React, { useEffect } from "react";
import SideBar from "../../components/sideBar";
import AppBarAdmin from "../../components/appBar";
import { Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import LoginPage from "../../pages/login/loginPage";
import Notification from "../../components/notification";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100%",
    display: "flex",
    backgroundColor: "#eeeeee",
  },
  toolbar: {
    minHeight: 36,
  },
  adminSection: {
    marginTop: 15,
  },
  content: {
    // height: "100%",
    width: "100%",
    backgroundColor: "#f4f5fd",
    // backgroundColor: "rgb(20, 28, 35)",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const AdminTemplate = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isAdimLogin, notify } = useSelector((state) => state.user);

  const adminUsers = JSON.parse(sessionStorage.getItem("adminLogin"));

  useEffect(() => {
    if (adminUsers) {
      dispatch({
        type: "ADMIN_LOGIN_AUTO",
        payload: true,
      });
    }
  }, []);

  const handleCloseNotification = () => {
    dispatch({
      type: "CLOSE_NOTIFICATION",
      payload: false,
    });
  };

  if (!isAdimLogin) {
    localStorage.removeItem("adminLogin");
    return <LoginPage isAdmin={true} />;
  } else {
    return (
      <div className={classes.root}>
        <AppBarAdmin />
        <SideBar adminUser={adminUsers} />
        <main className={classes.content}>
          <div className={classes.toolbar}></div>
          <section className={classes.adminSection}>{props.children}</section>
        </main>
        <Notification notifyAlert={notify} onClose={handleCloseNotification} />
      </div>
    );
  }
};

const RouterAdminTemplate = ({ path, exact, Component }) => {
  return (
    <Route path={path} exact={exact}>
      <AdminTemplate>
        <Component />
      </AdminTemplate>
    </Route>
  );
};

export default RouterAdminTemplate;
