import "./App.css";
import "./config/router";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { mainRouter, adminRouter, loginRouter } from "./config/router";
import RouterMainTemplate from "./templates/main";
import RouterAdminTemplate from "./templates/admin";
import RouterLoginTemplate from "./templates/login";

import "./components/font-awesome-icon";

function App() {
  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, Component }, index) => {
      // const { path, exact, Component } = router;

      return (
        <RouterMainTemplate
          path={path}
          exact={exact}
          Component={Component}
          key={index}
        ></RouterMainTemplate>
      );
    });
  };

  const renderAdminRouter = () => {
    return adminRouter.map(({ path, exact, Component }, index) => {
      return (
        <RouterAdminTemplate
          path={path}
          exact={exact}
          Component={Component}
          key={index}
        ></RouterAdminTemplate>
      );
    });
  };

  const renderLoginRouter = () => {
    return loginRouter.map(({ path, exact, Component }, index) => {
      return (
        <RouterLoginTemplate
          path={path}
          exact={exact}
          Component={Component}
          key={index}
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
