import React from "react";
import * as yup from "yup";
// import dateFormat from "date-format";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";
import { createMovieShowtimes } from "../../../store/actions/movie.action";
import { Form } from "../../../components/useForm";
import Controls from "../../../components/controls/Controls";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 25,
    "& .MuiFormControl-root": {
      width: "100%",
      margin: theme.spacing(1),
    },
  },
}));

const validationForm = yup.object({
  maPhim: yup.number("Điền mã phim.").required("Vui lòng phải điển mã Phim."),
  ngayChieuGioChieu: yup
    .string("Thêm ngày chiếu, giờ chiếu của Phim.")
    .required("Vui lòng phải thêm ngày chiếu, giờ chiếu cho phim."),
  maRap: yup.number("Điền mã Rạp.").required("Vui lòng phải điển mã Rạp."),
  giaVe: yup.number("Điền giá vé.").required("Vui lòng phải điển giá vé."),
});

export default function MovieInfoForm(props) {
  const { openDialogAdd, setOpenDialogAdd } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  // const { notify } = useSelector((state) => state.movie);

  const handleSubmitForm = (values) => {
    console.log(values);
    dispatch(createMovieShowtimes(values));
  };

  return (
    <>
      <Form
        initialValues={openDialogAdd.showTime}
        validationSchema={validationForm}
        onSubmit={handleSubmitForm}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className={classes.root}
            autoComplete="off"
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Controls.Input
                  id="maPhim"
                  name="maPhim"
                  label="Mã Phim"
                  onChange={formik.handleChange}
                  value={formik.values.maPhim}
                  error={formik.touched.maPhim && Boolean(formik.errors.maPhim)}
                  helperText={formik.touched.maPhim && formik.errors.maPhim}
                />
                <Controls.Input
                  id="ngayChieuGioChieu"
                  name="ngayChieuGioChieu"
                  label="Ngày chiếu, giờ chiếu"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.ngayChieuGioChieu}
                  error={
                    formik.touched.ngayChieuGioChieu &&
                    Boolean(formik.errors.ngayChieuGioChieu)
                  }
                  helperText={
                    formik.touched.ngayChieuGioChieu &&
                    formik.errors.ngayChieuGioChieu
                  }
                />
                <Controls.Input
                  id="maRap"
                  name="maRap"
                  label="Mã Rạp"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.maRap}
                  error={formik.touched.maRap && Boolean(formik.errors.maRap)}
                  helperText={formik.touched.maRap && formik.errors.maRap}
                />
                <Controls.Input
                  id="giaVe"
                  name="giaVe"
                  label="Giá vé"
                  onChange={formik.handleChange}
                  value={formik.values.giaVe}
                  error={
                    formik.touched.ngayKhoiChieu && Boolean(formik.errors.giaVe)
                  }
                  helperText={formik.touched.giaVe && formik.errors.giaVe}
                />
              </Grid>
            </Grid>
            <Controls.Button
              color="primary"
              variant="outlined"
              text="Submit"
              onClick={formik.handleSubmit}
              type="submit"
            />
          </form>
        )}
      </Form>
    </>
  );
}
