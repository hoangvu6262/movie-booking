import React from "react";
import { Route } from "react-router-dom";
// import { makeStyles } from "@material-ui/core";

function LoginTemplate(props) {
  return <div>{props.children}</div>;
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
