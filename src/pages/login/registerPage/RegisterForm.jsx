import React from "react";
import {
  makeStyles,
  Button,
  withStyles,
  TextField,
  Grid,
} from "@material-ui/core";
import { Form } from "../../../components/useForm";
import { NavLink } from "react-router-dom";
import { postRegister } from "../../../store/actions/user.action";
import { useDispatch } from "react-redux";

const CssTextField = withStyles({
  root: {
    width: 250,
    height: 65,
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
        borderRadius: 15,
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
  formLogin: {
    // padding: 25,
    margin: "15px",
    color: "#fff",
  },
  formInput: {
    margin: "15px 0",
    color: "#fff",
    width: "100%",
  },
  btn: {
    marginTop: "30px",
    marginLeft: "65%",
  },
  gridPadding: {
    padding: "0 10px",
  },
});

export default function RegisterForm(props) {
  const { initialValues, validationSchema } = props;
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <div>
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(postRegister(values));
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            autoComplete="off"
            className={classes.formLogin}
          >
            <Grid container>
              <Grid item md={6} xs={12} className={classes.gridPadding}>
                <CssTextField
                  className={classes.formInput}
                  variant="outlined"
                  id="taiKhoan"
                  name="taiKhoan"
                  label="Tài khoản"
                  value={formik.values.taiKhoan}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.taiKhoan && Boolean(formik.errors.taiKhoan)
                  }
                  helperText={formik.touched.taiKhoan && formik.errors.taiKhoan}
                />
                <CssTextField
                  className={classes.formInput}
                  variant="outlined"
                  id="matKhau"
                  name="matKhau"
                  label="Mật khẩu"
                  type="password"
                  value={formik.values.matKhau}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.matKhau && Boolean(formik.errors.matKhau)
                  }
                  helperText={formik.touched.matKhau && formik.errors.matKhau}
                />
                <CssTextField
                  className={classes.formInput}
                  variant="outlined"
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item md={6} xs={12} className={classes.gridPadding}>
                <CssTextField
                  className={classes.formInput}
                  variant="outlined"
                  id="hoTen"
                  name="hoTen"
                  label="Họ và Tên"
                  value={formik.values.hoTen}
                  onChange={formik.handleChange}
                  error={formik.touched.soDt && Boolean(formik.errors.hoTen)}
                  helperText={formik.touched.hoTen && formik.errors.hoTen}
                />
                <CssTextField
                  className={classes.formInput}
                  variant="outlined"
                  id="soDt"
                  name="soDt"
                  label="Số điện thoại"
                  value={formik.values.soDt}
                  onChange={formik.handleChange}
                  error={formik.touched.soDt && Boolean(formik.errors.soDt)}
                  helperText={formik.touched.soDt && formik.errors.soDt}
                />
                <NavLink to="/login">Bạn đã có tài khoản? Đăng nhập.</NavLink>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  className={classes.btn}
                >
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
