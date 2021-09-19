import React, { useEffect } from "react";
import Header from "../../components/header";
import { Route } from "react-router-dom";
import Footer from "../../components/footer/Footer.jsx";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  margin: {
    marginTop: 60,
    paddingBottom: 40,
    backgroundColor: "#f4f5fd",
  },
});

function MainTemplate(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const userLogin = JSON.parse(localStorage.getItem("userLogin"));

  useEffect(() => {
    if (userLogin) {
      dispatch({
        type: "LOGIN_AUTO",
        payload: true,
      });
    }
  }, []);

  return (
    <>
      <Header />
      <main className={classes.margin}>{props.children}</main>
      <Footer />
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
