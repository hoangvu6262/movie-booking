import React from "react";
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";

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
    top: "-45px",
    width: 912,
    border: "1px solid #9f9f9f9f",
    borderRadius: "6px",
    boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
    height: 90,
    backgroundColor: "#fff",
  },
  formControl: {
    margin: 25,
    minWidth: 225,
    // height: 40,
  },
  input: {
    fontSize: 13,
    height: 40,
  },
});

export default function BookingForm() {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="md" className={classes.bookingContainer}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="movie-list" className={classes.input}>
            Phim
          </InputLabel>
          <Select
            labelId="movie-list"
            id="movie-list-select-outlined"
            label="Age"
            className={classes.input}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="movie-list" className={classes.input}>
            Rạp
          </InputLabel>
          <Select
            labelId="movie-list"
            id="movie-list-select-outlined"
            label="Age"
            className={classes.input}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="movie-list" className={classes.input}>
            Ngày Chiếu
          </InputLabel>
          <Select
            labelId="movie-list"
            id="movie-list-select-outlined"
            label="Age"
            className={classes.input}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </section>
  );
}
