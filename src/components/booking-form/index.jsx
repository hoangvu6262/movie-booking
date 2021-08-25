import React from "react";
import {
  Container,
  Grid,
  FormControl,
  OutlinedInput,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Formik } from "formik";
import * as yup from "yup";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    zIndex: 1,
    // backgroun: "#fff",
  },
  bookingContainer: {
    position: "absolute",
    top: "-40px",
    // width: 912,
    border: "1px solid #9f9f9f9f",
    borderRadius: "6px",
    boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
    height: 85,
    backgroundColor: "#fff",
    // margin: "15px auto",
  },
  margin: {
    margin: "15px 50%",
    transform: "translateX(-50%)",
    width: "70%",
  },
  btn: {
    marginTop: "15px",
    // marginLeft: "65%",
  },
});

export default function BookingForm() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <section className={classes.root}>
      <Container maxWidth="md" className={classes.bookingContainer}>
        <Formik
          initialValues={{ search: "" }}
          validationSchema={yup.object({
            search: yup
              .string("Nhập tên phim bạn muốn tìm kiếm.")
              .required("Bạn phải nhập tên phim để tìm kiếm."),
          })}
          onSubmit={(values) => {
            console.log(values);
            history.push(`/search/${values.search}`);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              {/* <TextField
                className={classes.margin}
                id="search"
                name="search"
                label="Tìm kiếm"
                variant="outlined"
                value={formik.values.search}
                onChange={formik.handleChange}
                error={formik.touched.search && Boolean(formik.errors.search)}
                helperText={formik.touched.search && formik.errors.search}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={formik.handleSubmit}
                      edge="end"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                type="submit"
              >
                Tìm kiếm
              </Button> */}

              <FormControl
                // className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                className={classes.margin}
              >
                <InputLabel htmlFor="search">Tìm kiếm phim</InputLabel>
                <OutlinedInput
                  id="search"
                  name="search"
                  type="text"
                  value={formik.values.search}
                  onChange={formik.handleChange}
                  error={formik.touched.search && Boolean(formik.errors.search)}
                  helperText={formik.touched.search && formik.errors.search}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={formik.handleSubmit}
                        edge="end"
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={105}
                />
              </FormControl>
            </form>
          )}
        </Formik>
      </Container>
    </section>
  );
}
