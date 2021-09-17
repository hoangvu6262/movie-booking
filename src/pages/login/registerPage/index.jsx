import React from "react";
import { makeStyles } from "@material-ui/core";
import RegisterForm from "./RegisterForm";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Notification from "../../../components/notification";

const useStyles = makeStyles({
  formMovieRegister: {
    padding: 25,
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    // margin: "auto",
    transform: "translate(-50%,-50%)",
    width: "auto",
    height: "auto",
    backgroundImage:
      "linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))",
  },
  title: {
    textAlign: "center",
    color: "#fff",
  },
});

const initialValues = {
  taiKhoan: "",
  matKhau: "",
  email: "",
  soDt: "",
  maNhom: "GP01",
  maLoaiNguoiDung: "KhachHang",
  hoTen: "",
};

const validationSchema = yup.object({
  taiKhoan: yup
    .string("Vui lòng nhập tên tài khoản.")
    .required("Vui lòng nhập tên tài khoản."),
  matKhau: yup
    .string("Vui lòng nhập mật khẩu.")
    .required("Vui lòng nhập mật khẩu."),
  email: yup
    .string("Vui lòng nhập email")
    .email("Vui lòng nhập đúng email.")
    .required("Vui lòng nhập email"),
  soDt: yup
    .string("Vui lòng nhập số điện thoại.")
    .min(10, "Số điện thoại phải 10 hoặc 11 số.")
    .max(11, "Số điện thoại phải 10 hoặc 11 số.")
    .required("Vui lòng nhập số điện thoại."),
  hoTen: yup
    .string("Vui lòng nhập họ và tên.")
    .required("Vui lòng nhập họ và tên."),
});

export default function RegisterPage() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { notify } = useSelector((state) => state.user);

  const handleCloseNotification = () => {
    dispatch({
      type: "CLOSE_NOTIFICATION",
      payload: false,
    });
  };

  return (
    <>
      <div className={classes.formMovieRegister}>
        <h3 className={classes.title}>Movie Register</h3>
        <RegisterForm
          initialValues={initialValues}
          validationSchema={validationSchema}
        />
      </div>
      <Notification notifyAlert={notify} onClose={handleCloseNotification} />
    </>
  );
}
