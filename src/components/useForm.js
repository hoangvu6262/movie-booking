import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export function useForm(initialFValues) {
  const [giaTri, setGiaTri] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newMovie = {
      ...giaTri,
      [name]: value,
    };
    console.log(newMovie);
    setGiaTri(newMovie);
    // if (validateOnChange)
    //     validate({ [name]: value })
  };

  const resetForm = () => {
    setGiaTri(initialFValues);
    setErrors({});
  };

  return {
    giaTri,
    setGiaTri,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}

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
      //   onSubmit={onSubmit}
      className={classes.root}
      autoComplete="off"
      {...other}
    >
      {props.children}
    </form>
  );
}
