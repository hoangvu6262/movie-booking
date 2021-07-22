import React, { Component } from "react";

import SideBar from "../../components/sideBar";
import { Route } from "react-router-dom";

class AdminTemplate extends Component {
  render() {
    return (
      <>
        <main className="d-flex">
          <SideBar />
          <section>{this.props.children}</section>
        </main>
      </>
    );
  }
}

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
