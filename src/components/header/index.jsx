import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import weblogo from "../../assets/images/icon/web-logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
          <img className="icon-logo" src={weblogo} alt="icons" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-center m-auto">
            <li className="nav-item">
              <NavLink
                activeClassName="active-na-link"
                className="nav-link"
                to="/"
                exact={true}
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active-na-link"
                className="nav-link"
                to="/booking"
              >
                Mua vé
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active-na-link"
                className="nav-link"
                to="/film"
              >
                Phim
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active-na-link"
                className="nav-link"
                to="/cinemax"
              >
                Rạp/Giá vé
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav nav-right ml-auto">
            <li className="nav-item">
              <NavLink
                activeClassName="active-na-link"
                className="nav-link"
                to="/login"
              >
                <span>
                  <FontAwesomeIcon icon={["far", "user"]} size="lg" />
                </span>
                Đăng nhập
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
