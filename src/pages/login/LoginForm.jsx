import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin } from "../../store/actions/user.action";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  withStyles,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Formik } from "formik";
import * as yup from "yup";

const CssTextField = withStyles({
  root: {
    // backgroundColor: "#293556",
    "& input": {
      color: "#def3f6",
    },
    "& label": {
      color: "#ddefe3",
    },
    "& label.Mui-focused": {
      color: "#ddefe3",
      fontSize: 17,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ddefe3",
      },
      "&:hover fieldset": {
        borderColor: "#ddefe3",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ddefe3",
      },
    },
  },
})(TextField);

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

export default function LoginForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [pass, setPass] = useState(true);
  // click sẽ thay đổi pass thành false, hiện thị mật khẩu
  const handleChangePassOrText = () => {
    setPass(!pass);
  };
  return (
    <div>
      <Formik
        initialValues={{ taiKhoan: "", matKhau: "" }}
        validationSchema={yup.object({
          taiKhoan: yup
            .string("Enter your email")
            .required("Email is required"),
          matKhau: yup
            .string("Enter your password")
            .required("Password is required"),
        })}
        onSubmit={(values) => {
          console.log(values);
          // alert(JSON.stringify(values, null, 2));
          dispatch(postLogin(values.taiKhoan, values.matKhau, history));
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className={classes.formLogin}>
            <CssTextField
              className={classes.formInput}
              id="taiKhoan"
              name="taiKhoan"
              label="Tài khoản"
              variant="outlined"
              value={formik.values.taiKhoan}
              onChange={formik.handleChange}
              error={formik.touched.taiKhoan && Boolean(formik.errors.taiKhoan)}
              helperText={formik.touched.taiKhoan && formik.errors.taiKhoan}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle style={{ color: "#ddefe3" }} />
                  </InputAdornment>
                ),
              }}
            />

            <CssTextField
              className={classes.formInput}
              id="matKhau"
              name="matKhau"
              type={pass ? "password" : "text"}
              label="Mật khẩu"
              variant="outlined"
              value={formik.values.matKhau}
              onChange={formik.handleChange}
              error={formik.touched.matKhau && Boolean(formik.errors.matKhau)}
              helperText={formik.touched.matKhau && formik.errors.matKhau}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpenIcon style={{ color: "#ddefe3" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={handleChangePassOrText}
                    style={{ cursor: "pointer" }}
                  >
                    {pass ? (
                      <VisibilityOffIcon style={{ color: "#ddefe3" }} />
                    ) : (
                      <VisibilityIcon style={{ color: "#ddefe3" }} />
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.btn}
              type="submit"
            >
              Đăng nhập
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
