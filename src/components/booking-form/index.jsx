import React from "react";
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
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
    top: "-40px",
    width: 912,
    border: "1px solid #9f9f9f9f",
    borderRadius: "6px",
    boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
    height: 85,
    backgroundColor: "#fff",
  },
  formControl: {
    margin: "18px 0",
    minWidth: "100%",
    // height: 40,
  },
  input: {
    // padding: "5px 5px",
    fontSize: 13,
    height: "auto",
  },
});

export default function BookingForm() {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="md" className={classes.bookingContainer}>
        <Grid container>
          <Grid item xs={4}>
            <div className="form-group">
              {/* <label for="exampleFormControlSelect1">Phim</label> */}
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                style={{ margin: "20px auto", width: "98%" }}
              >
                <option value="" selected disabled>
                  Phim
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className="form-group">
              {/* <label for="exampleFormControlSelect1">Rạp</label> */}
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                placeholder="Phim"
                style={{ margin: "20px auto", width: "95%" }}
              >
                <option value="" selected disabled>
                  Rạp
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className="form-group">
              {/* <label for="exampleFormControlSelect1">Ngày Xem</label> */}
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                placeholder="Phim"
                style={{ margin: "20px auto", width: "95%" }}
              >
                <option value="" selected disabled>
                  Ngày xem
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className="form-group">
              {/* <label for="exampleFormControlSelect1">Xuất chiếu</label> */}
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                placeholder="Phim"
                style={{ margin: "20px auto", width: "95%" }}
              >
                <option value="" selected disabled>
                  Xuất chiếu
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </Grid>
          <Grid item xs={2}>
            <button
              type="button"
              className="btn"
              style={{
                marginTop: "20px",
                marginLeft: "10px",
                color: "white",
                backgroundColor: "#4a4a4a",
                width: "100%",
              }}
            >
              MUA VÉ NGAY
            </button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
