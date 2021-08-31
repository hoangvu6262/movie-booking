import React from "react";
import { Button as MuiButton } from "@material-ui/core";

export default function Button(props) {
  const { color, text, variant, onClick, ...other } = props;
  return (
    <MuiButton color={color} variant={variant} onClick={onClick} {...other}>
      {text}
    </MuiButton>
  );
}
