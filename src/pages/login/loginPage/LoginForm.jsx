import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin, postAdminLogin } from "../../../store/actions/user.action";
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
    height: 50,
    "& .MuiInputBase-input": {
      height: "2rem",
      fontFamily: `font-family: "Roboto", "Helvetica", "Arial", sans-serif`,
      padding: "3px 12px",
      fontSize: 13,
    },
    "& input": {
      color: "#495057",
      fontFamily: `font-family: "Roboto", "Helvetica", "Arial", sans-serif`,
    },

    "& .MuiInput-underline:after": {
      borderBottom: "1px solid #9c27b0",
      "&:hover": {
        border: "none",
      },
    },
  },
})(TextField);

const useStyles = makeStyles({
  formLogin: {
    // margin: "30px 18px",
    padding: "30px 18px",
    color: "#495057",
  },
  formInput: {
    margin: "15px 0",
    color: "#495057",
    width: "100%",
  },
  btn: {
    marginTop: "30px",
    marginLeft: "50%",
    transform: "translateX(-50%)",
    // color: "#ec407a",
    color: "#5252d4",
  },
});

export default function LoginForm(props) {
  const { isAdmin } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [pass, setPass] = useState(true);
  // click sẽ thay đổi pass thành false, hiện thị mật khẩu
  const handleChangePassOrText = () => {
    setPass(!pass);
  };
  console.log(isAdmin);
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
          if (isAdmin === false) {
            console.log("user");
            dispatch(postLogin(values.taiKhoan, values.matKhau, history));
          } else {
            console.log("admin");
            dispatch(postAdminLogin(values.taiKhoan, values.matKhau, history));
          }
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className={classes.formLogin}
            autoComplete="off"
          >
            <CssTextField
              className={classes.formInput}
              id="taiKhoan"
              name="taiKhoan"
              placeholder="ACCOUNT..."
              value={formik.values.taiKhoan}
              onChange={formik.handleChange}
              error={formik.touched.taiKhoan && Boolean(formik.errors.taiKhoan)}
              helperText={formik.touched.taiKhoan && formik.errors.taiKhoan}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle style={{ color: "#495057" }} />
                  </InputAdornment>
                ),
              }}
            />

            <CssTextField
              className={classes.formInput}
              id="matKhau"
              name="matKhau"
              type={pass ? "password" : "text"}
              placeholder="PASSWORD..."
              value={formik.values.matKhau}
              onChange={formik.handleChange}
              error={formik.touched.matKhau && Boolean(formik.errors.matKhau)}
              helperText={formik.touched.matKhau && formik.errors.matKhau}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpenIcon style={{ color: "#495057" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={handleChangePassOrText}
                    style={{ cursor: "pointer" }}
                  >
                    {pass ? (
                      <VisibilityOffIcon style={{ color: "#495057" }} />
                    ) : (
                      <VisibilityIcon style={{ color: "#495057" }} />
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <Button
              // variant="contained"
              // color="primary"
              className={classes.btn}
              onClick={formik.handleSubmit}
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
