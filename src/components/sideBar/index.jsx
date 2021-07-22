import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default class SideBar extends Component {
  render() {
    return (
      <div className="sideBar">
        <div className="row">
          <div className="col-2">
            <div className="sideBar__content">
              <div className="logo">
                <h3>Movie Admin</h3>
              </div>
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <Link className="nav-link" to="/admin" exact="true">
                  DashBoard
                </Link>
                <Link className="nav-link" to="/admin/user">
                  User
                </Link>
                <Link className="nav-link" to="/admin/movie">
                  Movie
                </Link>
              </div>
            </div>
          </div>
          {/* sideBar end  */}
        </div>
      </div>
    );
  }
}
