import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  makeStyles,
  withStyles,
  Grid,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { Formik } from "formik";

const useStyles = makeStyles({
  logo: {
    marginTop: 15,
    width: 300,
    margin: "auto",
    "& img": {
      width: 300,
    },
  },
  formLogin: {
    margin: "15px",
    color: "#fff",
  },
  formInput: {
    margin: "15px 0",
    color: "#fff",
    width: "100%",
  },
  btn: {
    marginTop: "15px",
    marginLeft: "65%",
  },
});

export default function SignupForm() {
  const classes = useStyles();
  return (
    <div>
      <Formik
        initialValues={{ email: "foobar@example.com", password: "foobar" }}
        validationSchema={yup.object({
          email: yup
            .string("Enter your email")
            .email("Enter a valid email")
            .required("Email is required"),
          password: yup
            .string("Enter your password")
            .min(8, "Password should be of minimum 8 characters length")
            .required("Password is required"),
        })}
        onSubmit={(values) => {
          console.log(values);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            {/* <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            /> */}
            {/* <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            /> */}
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
