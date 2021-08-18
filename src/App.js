import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/main/home";
import DetailMovie from "./pages/main/deail-movie";
import Booking from "./pages/main/booking";
import Header from "./components/header";
import "./config/router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { mainRouter, adminRouter, loginRouter } from "./config/router";
import RouterMainTemplate from "./templates/main";
import RouterAdminTemplate from "./templates/admin";
import RouterLoginTemplate from "./templates/login";

import "./components/font-awesome-icon";

function App() {
  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, Component }) => {
      // const { path, exact, Component } = router;

      return (
        <RouterMainTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterMainTemplate>
      );
    });
  };

  const renderAdminRouter = () => {
    return adminRouter.map(({ path, exact, Component }) => {
      return (
        <RouterAdminTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterAdminTemplate>
      );
    });
  };

  const renderLoginRouter = () => {
    return loginRouter.map(({ path, exact, Component }) => {
      return (
        <RouterLoginTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterLoginTemplate>
      );
    });
  };

  return (
    <>
      {/* khởi tạo router cho dự án */}
      <Router>
        {/* header */}
        {/* <Header /> */}
        {/* mỗi url chỉ hiện thị ra một trang duy nhất */}
        <Switch>
          {/* tạo ra đường dẫn url === http://localhost:3000/ */}

          {/* tạo ra đường dẫn url === http://localhost:3000/movie-detail */}

          {/* tạo ra đường dẫn url === http://localhost:3000/booking */}
          {renderMainRouter()}
          {renderAdminRouter()}
          {renderLoginRouter()}
        </Switch>
      </Router>
    </>
  );
}

export default App;
