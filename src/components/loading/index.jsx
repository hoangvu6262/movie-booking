import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999999,
    backgroundColor: "#fff",
    filter: "blur(8px)",
  },
});
export default function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div
        className="spinner-border"
        role="status"
        style={{ fontSize: "60px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
