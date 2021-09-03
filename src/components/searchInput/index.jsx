import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    "& label": {
      color: "#3f51b5",
      paddingLeft: 10,
    },
    "& label.Mui-focused": {
      paddingLeft: 0,
      color: "#3f51b5",
      fontSize: 17,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3f51b5",
        borderRadius: 28,
      },
      "&:hover fieldset": {
        borderColor: "#3f51b5",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3f51b5",
      },
    },
  },
}));

export default function SearchInput(props) {
  const classes = useStyles();
  const { id, value, onChange, name, label, ...other } = props;
  return (
    <>
      <TextField
        className={classes.root}
        variant="outlined"
        id={id}
        value={value}
        onChange={onChange}
        label={label}
        name={name}
        {...other}
      />
    </>
  );
}
