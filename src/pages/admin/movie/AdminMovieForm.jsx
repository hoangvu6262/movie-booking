import React from "react";
import * as yup from "yup";
import dateFormat from "date-format";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";
import { addMovie, editMovieDetail } from "../../../store/actions/movie.action";
import { Form } from "../../../components/useForm";
import Controls from "../../../components/controls/Controls";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(1),
    },
  },
}));

const validationForm = yup.object({
  tenPhim: yup
    .string("Điền tên phim.")
    .required("Vui lòng phải điển tên Phim."),
  trailer: yup
    .string("Thêm trailer của Phim.")
    .required("Vui lòng phải thêm trailer cho phim."),
  hinhAnh: yup
    .string("Thêm hình ảnh cho phim.")
    .required("Vui lòng phải thêm hình ảnh cho phim."),
  ngayKhoiChieu: yup.date().required("Vui lòng nhập Ngày khởi chiếu."),
  danhGia: yup
    .number("Bạn phải nhập số.")
    .typeError("Dữ liệu đầu vào phải là kiểu số.")
    .required("Vui lòng nhập đánh giá cho phim.")
    .min(0, "Dữ liệu vào phải lớn hơn hoặc bằng 0.")
    .max(10, "Dữ liệu vào phải nhỏ hơn hoặc bằng 10."), // Đánh giá chỉ từ 0-10
  moTa: yup.string().required("Bạn phải nhập mô tả cho phim."),
});

export default function AdminMovieForm(props) {
  const { openDialog, setOpenDialog } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  // const { page } = useSelector((state) => state.movie);

  const handleSubmitForm = (values) => {
    const convertDateFormat = dateFormat(
      "dd/MM/yyyy",
      new Date(values.ngayKhoiChieu)
    );
    const newValues = { ...values, ngayKhoiChieu: convertDateFormat };
    console.log(newValues);
    if (openDialog.isAddMovie) {
      dispatch(addMovie(newValues));
      setOpenDialog({
        ...openDialog,
        open: false,
      });
    } else {
      dispatch(editMovieDetail(newValues));
      setOpenDialog({
        ...openDialog,
        open: false,
      });
    }
  };

  return (
    <>
      <Form
        initialValues={openDialog.movie}
        validationSchema={validationForm}
        onSubmit={handleSubmitForm}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className={classes.root}
            autoComplete="off"
          >
            <Grid container>
              <Grid item lg={6} xs={12}>
                <Controls.Input
                  id="tenPhim"
                  name="tenPhim"
                  label="Tên Phim"
                  onChange={formik.handleChange}
                  value={formik.values.tenPhim}
                  error={
                    formik.touched.tenPhim && Boolean(formik.errors.tenPhim)
                  }
                  helperText={formik.touched.tenPhim && formik.errors.tenPhim}
                />
                <Controls.Input
                  id="trailer"
                  name="trailer"
                  label="Trailer"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.trailer}
                  error={
                    formik.touched.trailer && Boolean(formik.errors.trailer)
                  }
                  helperText={formik.touched.trailer && formik.errors.trailer}
                />
                <Controls.Input
                  id="hinhAnh"
                  name="hinhAnh"
                  label="Hình Ảnh"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.hinhAnh}
                  error={
                    formik.touched.hinhAnh && Boolean(formik.errors.hinhAnh)
                  }
                  helperText={formik.touched.hinhAnh && formik.errors.hinhAnh}
                />
                <Controls.DateTimePicker
                  id="ngayKhoiChieu"
                  name="ngayKhoiChieu"
                  label="Ngày Khởi Chiếu"
                  onChange={formik.handleChange}
                  value={dateFormat(
                    "yyyy-MM-dd",
                    new Date(formik.values.ngayKhoiChieu)
                  )}
                  error={
                    formik.touched.ngayKhoiChieu &&
                    Boolean(formik.errors.ngayKhoiChieu)
                  }
                  helperText={
                    formik.touched.ngayKhoiChieu && formik.errors.ngayKhoiChieu
                  }
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <Controls.Input
                  id="danhGia"
                  name="danhGia"
                  label="Đánh giá"
                  onChange={formik.handleChange}
                  value={formik.values.danhGia}
                  error={
                    formik.touched.danhGia && Boolean(formik.errors.danhGia)
                  }
                  helperText={formik.touched.danhGia && formik.errors.danhGia}
                />
                <Controls.TextArea
                  id="moTa"
                  name="moTa"
                  label="Mô tả"
                  multiline
                  rows={11}
                  onChange={formik.handleChange}
                  value={formik.values.moTa}
                  error={formik.touched.moTa && Boolean(formik.errors.moTa)}
                  helperText={formik.touched.moTa && formik.errors.moTa}
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
