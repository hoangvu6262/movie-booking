import React, { Component } from "react";

import SideBar from "../../components/sideBar";
import AppBarAdmin from "../../components/appBar";
import { Route } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const AdminTemplate = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBarAdmin />
      <SideBar />
      <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <section>{props.children}</section>
      </main>
    </div>
  );
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
