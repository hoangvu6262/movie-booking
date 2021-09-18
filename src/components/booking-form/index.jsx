import React from "react";
import {
  Container,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import { Formik } from "formik";
import * as yup from "yup";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import SearchInput from "../searchInput";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    zIndex: 1,
    // backgroun: "#fff",
    [theme.breakpoints.down("xs")]: {
      marginTop: 100,
    },
  },
  bookingContainer: {
    position: "absolute",
    top: "-40px",
    border: "1px solid #9f9f9f9f",
    borderRadius: "6px",
    boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
    height: 85,
    backgroundColor: "#fff",
    // margin: "15px auto",
    [theme.breakpoints.down("xs")]: {
      border: "none",
      boxShadow: "none",
    },
  },
  searchInputContainer: {
    margin: "18px auto",
    width: "90%",
    "& .MuiInputBase-input": {
      height: "2rem",
    },
  },
}));

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
            // console.log(values);
            history.push(`/search/${values.search}`);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} autoComplete="off">
              <Grid container>
                <Grid item className={classes.searchInputContainer}>
                  <SearchInput
                    id="search"
                    name="search"
                    label="Tìm kiếm phim..."
                    value={formik.values.search}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.search && Boolean(formik.errors.search)
                    }
                    helperText={formik.touched.search && formik.errors.search}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={formik.handleSubmit}
                            edge="end"
                          >
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Container>
    </section>
  );
}
