import React from "react";
import Header from "../../components/header";
import { Route } from "react-router-dom";
import Footer from "../../components/footer/Footer.jsx";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  margin: {
    marginTop: 60,
    backgroundColor: "#f4f5fd",
  },
});

function MainTemplate(props) {
  const classes = useStyles();
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
