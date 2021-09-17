import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "8px 15px",
  },
});

export default function Button(props) {
  const classes = useStyles();

  const { color, text, variant, onClick, ...other } = props;

  return (
    <MuiButton
      className={classes.root}
      color={color}
      variant={variant}
      onClick={onClick}
      {...other}
    >
      {text}
    </MuiButton>
  );
}
