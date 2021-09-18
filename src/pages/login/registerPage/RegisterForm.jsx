import React from "react";
import {
  makeStyles,
  Button,
  withStyles,
  TextField,
  Grid,
  InputAdornment,
} from "@material-ui/core";
import { Form } from "../../../components/useForm";
import { NavLink } from "react-router-dom";
import { postRegister } from "../../../store/actions/user.action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

const CssTextField = withStyles({
  root: {
    height: 55,
    // backgroundColor: "#293556",
    "& .MuiInputBase-input": {
      height: "2rem",
      fontFamily: `font-family: "Roboto", "Helvetica", "Arial", sans-serif`,
      padding: "3px 10px",
      fontSize: 14,
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
    // padding: 25,
    margin: "40px 0",
    color: "#fff",
  },
  formInput: {
    margin: "15px 0",
    color: "#fff",
    width: "100%",
  },
  formInput1: {
    color: "#fff",
    width: "100%",
  },
  btn: {
    marginTop: "40px",
    marginLeft: "50%",
    transform: "translateX(-50%)",
    color: "#ec407a",
    fontSize: 16,
    // "& :hover": {
    //   backgroundColor: "none",
    // },
  },
  gridPadding: {
    padding: 0,
  },
});

export default function RegisterForm(props) {
  const { initialValues, validationSchema } = props;
  const classes = useStyles();

  const history = useHistory();

  const dispatch = useDispatch();

  return (
    <div>
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(postRegister(values, history));
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            autoComplete="off"
            className={classes.formLogin}
          >
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <CssTextField
                  className={classes.formInput1}
                  id="taiKhoan"
                  name="taiKhoan"
                  placeholder="Tài khoản"
                  value={formik.values.taiKhoan}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.taiKhoan && Boolean(formik.errors.taiKhoan)
                  }
                  helperText={formik.touched.taiKhoan && formik.errors.taiKhoan}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AccountCircle style={{ color: "#495057" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <CssTextField
                  className={classes.formInput1}
                  id="matKhau"
                  name="matKhau"
                  placeholder="Mật khẩu"
                  type="password"
                  value={formik.values.matKhau}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.matKhau && Boolean(formik.errors.matKhau)
                  }
                  helperText={formik.touched.matKhau && formik.errors.matKhau}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LockOpenIcon style={{ color: "#495057" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  className={classes.formInput}
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon style={{ color: "#495057" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <CssTextField
                  className={classes.formInput}
                  id="hoTen"
                  name="hoTen"
                  placeholder="Họ và Tên"
                  value={formik.values.hoTen}
                  onChange={formik.handleChange}
                  error={formik.touched.soDt && Boolean(formik.errors.hoTen)}
                  helperText={formik.touched.hoTen && formik.errors.hoTen}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <FaceRoundedIcon style={{ color: "#495057" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <CssTextField
                  className={classes.formInput}
                  id="soDt"
                  name="soDt"
                  placeholder="Số điện thoại"
                  value={formik.values.soDt}
                  onChange={formik.handleChange}
                  error={formik.touched.soDt && Boolean(formik.errors.soDt)}
                  helperText={formik.touched.soDt && formik.errors.soDt}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PhoneIphoneIcon style={{ color: "#495057" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <NavLink to="/login">Bạn đã có tài khoản? Đăng nhập.</NavLink>
                <Button type="submit" className={classes.btn}>
                  Đăng ký
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Form>
    </div>
  );
}
