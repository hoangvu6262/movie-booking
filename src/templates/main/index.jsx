import React from "react";
import Header from "../../components/header";
import { Route } from "react-router-dom";

function MainTemplate(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <footer>Footer</footer>
    </>
  );
}

const RouterMainTemplate = ({ path, exact, Component }) => {
  return (
    <Route path={path} exact={exact}>
      <MainTemplate>
        <Component />
      </MainTemplate>
    </Route>
  );
};

export default RouterMainTemplate;
