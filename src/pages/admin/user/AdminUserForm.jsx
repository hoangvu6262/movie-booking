import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";
import { Form } from "../../../components/useForm";
import Controls from "../../../components/controls/Controls";
import * as yup from "yup";
import { addUser, editUser } from "../../../store/actions/user.action";

const validationForm = yup.object({
  taiKhoan: yup
    .string("Vui lòng nhập tên tài khoản.")
    .required("Vui lòng nhập điển tên tài khoản."),
  matKhau: yup
    .string("Vui lòng nhập mật khẩu.")
    .required("Vui lòng nhập mật khẩu."),
  email: yup
    .string("Điền email.")
    .email("Email không hợp lệ.")
    .required("Vui lòng nhập email."),
  hoTen: yup
    .string("Vui lòng nhập Họ và Tên.")
    .required("Vui lòng nhập Họ và Tên."),
  soDt: yup
    .string("Vui lòng nhập số điện thoại.")
    .min(10, "Số điện thoại phải 10 hoặc 11 số.")
    .max(11, "Số điện thoại phải 10 hoặc 11 số."),
  // .required("Vui lòng nhập số điện thoại."),
  maLoaiNguoiDung: yup
    .string("Vui lòng nhập mã loại người dùng.")
    .required("Vui lòng nhập mã loại người dùng. 'QuanTri' hoặc 'KhachHang'"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 25,
    "& .MuiFormControl-root": {
      width: "100%",
      margin: theme.spacing(1),
    },
  },
}));

export default function AdminUserForm(props) {
  const { openDialog } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  // console.log("openDialog: ", openDialog);

  const [iValue, setIValue] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "",
    hoTen: "",
  });

  useEffect(() => {
    setIValue({
      ...iValue,
      taiKhoan: openDialog.user.taiKhoan,
      matKhau: openDialog.user.matKhau,
      email: openDialog.user.email,
      soDt: openDialog.user.soDt,
      maLoaiNguoiDung: openDialog.user.maLoaiNguoiDung,
      hoTen: openDialog.user.hoTen,
    });
  }, [openDialog]);

  // console.log(iValue);

  const handleSubmitForm = (values) => {
    if (openDialog.isAddUser) {
      dispatch(addUser(values));
    } else {
      console.log("sua user");
      dispatch(editUser(values));
    }
  };

  return (
    <Form
      initialValues={iValue}
      validationSchema={validationForm}
      onSubmit={handleSubmitForm}
    >
      {(formik) => {
        // const { values, touched, errors, handleSubmit, handleChange } = formik;
        // console.log("formik.values", formik.values);
        return (
          <form
            onSubmit={formik.handleSubmit}
            className={classes.root}
            autoComplete="off"
          >
            <Grid container spacing={3}>
              <Grid item lg={6} xs={12}>
                <Controls.Input
                  id="taiKhoan"
                  name="taiKhoan"
                  label="Tài khoản"
                  onChange={formik.handleChange}
                  value={formik.values.taiKhoan}
                  error={
                    formik.touched.taiKhoan && Boolean(formik.errors.taiKhoan)
                  }
                  helperText={formik.touched.taiKhoan && formik.errors.taiKhoan}
                />
                <Controls.Input
                  id="matKhau"
                  name="matKhau"
                  label="Mật khẩu"
                  onChange={formik.handleChange}
                  value={formik.values.matKhau}
                  error={
                    formik.touched.matKhau && Boolean(formik.errors.matKhau)
                  }
                  helperText={formik.touched.matKhau && formik.errors.matKhau}
                />
                <Controls.Input
                  id="hoTen"
                  name="hoTen"
                  label="Họ Tên"
                  onChange={formik.handleChange}
                  value={formik.values.hoTen}
                  error={formik.touched.hoTen && Boolean(formik.errors.hoTen)}
                  helperText={formik.touched.hoTen && formik.errors.hoTen}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <Controls.Input
                  id="email"
                  name="email"
                  label="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <Controls.Input
                  id="maLoaiNguoiDung"
                  name="maLoaiNguoiDung"
                  label="Mã loại người dùng"
                  onChange={formik.handleChange}
                  value={formik.values.maLoaiNguoiDung}
                  error={
                    formik.touched.maLoaiNguoiDung &&
                    Boolean(formik.errors.maLoaiNguoiDung)
                  }
                  helperText={
                    formik.touched.maLoaiNguoiDung &&
                    formik.errors.maLoaiNguoiDung
                  }
                />
                <Controls.Input
                  id="soDt"
                  name="soDt"
                  label="Số điện thoại"
                  onChange={formik.handleChange}
                  value={formik.values.soDt}
                  error={formik.touched.soDt && Boolean(formik.errors.soDt)}
                  helperText={formik.touched.soDt && formik.errors.soDt}
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
        );
      }}
    </Form>
  );
}
