import React from "react";
import { Route } from "react-router-dom";
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
});

function LoginTemplate(props) {
  const classes = useStyles();

  return <div className={classes.root}>{props.children}</div>;
}

export default function RouterLoginTemplate({ path, exact, Component }) {
  return (
    <Route path={path} exact={exact}>
      <LoginTemplate>
        <Component />
      </LoginTemplate>
    </Route>
  );
}
