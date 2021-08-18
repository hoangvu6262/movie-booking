import React from "react";
import { Route } from "react-router-dom";

function LoginTemplate(props) {
  return <>{props.children}</>;
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
