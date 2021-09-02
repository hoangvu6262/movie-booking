import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(1),
    },
  },
}));

export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form
      // onSubmit={formik.handleSubmit}
      className={classes.root}
      autoComplete="off"
      {...other}
    >
      {props.children}
    </form>
  );
}
