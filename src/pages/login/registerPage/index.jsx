import React from "react";
import { makeStyles, Container, List, Grid, Button } from "@material-ui/core";
import RegisterForm from "./RegisterForm";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Notification from "../../../components/notification";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles({
  root: {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.64)),url(https://demos.creative-tim.com/material-dashboard-pro-react/static/media/register.2dd199e9.jpeg)",
    display: "relative",
    paddingBottom: 100,
    width: "100%",
    minHeight: "auto",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  formMovieRegister: {
    marginTop: 100,
    padding: 25,
    borderRadius: "10px",
    width: "100%",
    height: "auto",
    backgroundColor: "#fff",
  },
  title: {
    margin: "-50px auto 0 auto",
    textAlign: "center",
    width: "95%",
    borderRadius: 6,
    background: "linear-gradient(60deg, #ec407a, #d81b60)",
    boxShadow:
      "0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(233 30 99 / 40%)",
    "& h3": {
      color: "#fff",
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontSize: 25,
      padding: 60,
    },
  },
  navlinkText: {
    color: "#fff",
    "& .MuiButton-label": {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 600,
      fontSize: 12,
      textTransform: "uppercase",
    },
  },
  LoginPageHeader: {
    padding: "15px 0",
    "& p": {
      color: "#fff",
    },
  },
  loginPageTitle: {
    listStyle: "none",
    textDecoration: "none",
    fontSize: 18,
    width: "auto",
    "&:hover": {
      listStyle: "none",
      textDecoration: "none",
    },
  },
  LoginPageMenu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  navlink: {
    // marginTop: theme.spacing(2),
    marginLeft: 10,
    padding: "10px 8px",
    width: "auto",
    height: "100%",
    color: "#fff",
    textDecoration: "none",
    listStyle: "none",
    borderRadius: 6,
    "&:hover": {
      color: "#fff",
      textDecoration: "none",
      listStyle: "none",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
    "& .MuiListItemIcon-root": {
      width: 24,
      height: 24,
    },
  },
  activeNavlink: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#fff",
    "&:hover": {
      color: "#fff",
      textDecoration: "none",
      listStyle: "none",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
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
    .string("Vui l??ng nh???p t??n t??i kho???n.")
    .required("Vui l??ng nh???p t??n t??i kho???n."),
  matKhau: yup
    .string("Vui l??ng nh???p m???t kh???u.")
    .required("Vui l??ng nh???p m???t kh???u."),
  email: yup
    .string("Vui l??ng nh???p email")
    .email("Vui l??ng nh???p ????ng email.")
    .required("Vui l??ng nh???p email"),
  soDt: yup
    .string("Vui l??ng nh???p s??? ??i???n tho???i.")
    .min(10, "S??? ??i???n tho???i ph???i 10 ho???c 11 s???.")
    .max(11, "S??? ??i???n tho???i ph???i 10 ho???c 11 s???.")
    .required("Vui l??ng nh???p s??? ??i???n tho???i."),
  hoTen: yup
    .string("Vui l??ng nh???p h??? v?? t??n.")
    .required("Vui l??ng nh???p h??? v?? t??n."),
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
      <div className={classes.root}>
        <Container maxWidth="md">
          <Grid container className={classes.LoginPageHeader}>
            <Grid item sm={8} xs={6}>
              <NavLink to="/" className={classes.loginPageTitle}>
                <p>Login Page</p>
              </NavLink>
            </Grid>
            <Grid item sm={4} xs={6}>
              <List
                component="div"
                disablePadding
                style={{ marginLeft: 35 }}
                className={classes.LoginPageMenu}
              >
                <NavLink
                  to="/login"
                  activeClassName={classes.activeNavlink}
                  className={classes.navlink}
                  exact={true}
                >
                  <Button
                    startIcon={<AccountCircleIcon />}
                    className={classes.navlinkText}
                  >
                    Login
                  </Button>
                </NavLink>
                <NavLink
                  to="/register"
                  activeClassName={classes.activeNavlink}
                  className={classes.navlink}
                  exact={true}
                >
                  <Button
                    startIcon={<AddCircleIcon />}
                    className={classes.navlinkText}
                  >
                    Register
                  </Button>
                </NavLink>
              </List>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="sm" className={classes.loginPageContent}>
          <div className={classes.formMovieRegister}>
            <div className={classes.title}>
              <h3>Movie Register</h3>
            </div>

            <RegisterForm
              initialValues={initialValues}
              validationSchema={validationSchema}
            />
          </div>
        </Container>
      </div>

      <Notification notifyAlert={notify} onClose={handleCloseNotification} />
    </>
  );
}
