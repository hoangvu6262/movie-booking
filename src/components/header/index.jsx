import React from "react";
import { NavLink } from "react-router-dom";
import weblogo from "../../assets/images/icon/web-logo.png";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Grid,
  Hidden,
  Drawer,
  Divider,
  ListItemText,
  MenuItem,
  Menu,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import HeaderDrawer from "./HeaderDrawer";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    opacity: 0.9,
    maxHeight: "60px",
    backgroundColor: "white",
  },
  logo: {
    height: theme.spacing(6),
    width: theme.spacing(6),
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  headerMenuUl: {
    margin: "0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    "& li": {
      width: "100px",
      height: "30px",
      textAlign: "center",
      fontSize: "15px",
      listStyle: "none",
      cursor: "pointer",
      "& a": {
        fontFamily: "Yanone Kaffeesatz",
        fontSize: "19px",
        fontWeight: "400",
        color: "#000",
        textDecoration: "none",
        "&:hover": {
          color: "#fb4226",
        },
      },
    },
  },
  rightMenu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    alignContent: "center",
  },
  loginBtn: {
    textDecoration: "none",
    listStyle: "none",
    color: "#9b9b9b",
    fontSize: "15px",
    cursor: "pointer",
    "& span": {
      margin: "0 8px",
      textDecoration: "none",
    },
    "&:hover": {
      textDecoration: "none",
      listStyle: "none",
      color: "#9b9b9b",
    },
  },
  loginIcon: {
    height: 30,
    width: 30,
  },
}));

const StyledMenu = withStyles({
  paper: {
    borderRadius: "none",
    width: 170,
    border: "1px solid #d3d4d5",
    marginTop: "20px",
    marginRight: 0,
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export default function Header() {
  const classes = useStyles();

  const history = useHistory();

  const dispatch = useDispatch();

  //lấy userLogin từ localStorage và chuyển về object
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));

  // header menu
  const Headermenu = [
    { name: "Lịch chiếu", href: "#movie-list" },
    { name: "Cụm rạp", href: "#cinema-list" },
    { name: "Tin tức", href: "#" },
    { name: "Ứng dụng", href: "#" },
  ];

  // render header menu
  const renderHeaderMenu = () => {
    return Headermenu.map((menu, index) => {
      return (
        <li key={index}>
          <a href={`/${menu.href}`}>{menu.name}</a>
        </li>
      );
    });
  };

  // onClick toggleDrawer()
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // menu userLogin
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // logOut
  const handleLogOut = () => {
    localStorage.removeItem("userLogin");
    setAnchorEl(null);
    dispatch({
      type: "LOG_OUT",
      payload: false,
    });
    history.push(`/`);
  };

  // chuyển hướng đến trang profile
  const handleToProfile = () => {
    history.push(`/userinfo/profile-user&taikhoan=${userLogin.taiKhoan}`);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Grid container>
            <Grid item lg={3} xs={6}>
              <NavLink to="/">
                <Avatar
                  variant="square"
                  src={weblogo}
                  className={classes.logo}
                ></Avatar>
              </NavLink>
            </Grid>
            <Hidden mdDown>
              <Grid item lg={6} className={classes.menu}>
                <div>
                  <ul className={classes.headerMenuUl}>{renderHeaderMenu()}</ul>
                </div>
              </Grid>
            </Hidden>
            <Grid item lg={3} xs={6} className={classes.rightMenu}>
              <Hidden lgUp>
                <IconButton
                  edge="start"
                  color="default"
                  aria-label="open drawer"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                  // onOpen={toggleDrawer(true)}
                >
                  <HeaderDrawer
                    userLogin={userLogin}
                    Headermenu={Headermenu}
                    setDrawerOpen={setDrawerOpen}
                    setAnchorEl={setAnchorEl}
                  />
                </Drawer>
              </Hidden>
              <Hidden mdDown>
                {userLogin != undefined ? (
                  <div>
                    <a className={classes.loginBtn} onClick={handleClick}>
                      <AccountCircle className={classes.loginIcon} />
                      <span>{userLogin.taiKhoan}</span>
                    </a>
                    <StyledMenu
                      id="customized-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleToProfile}>
                        <ListItemText primary="Thông tin" />
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={handleLogOut}>
                        <ListItemText primary="Đăng xuất" />
                      </MenuItem>
                    </StyledMenu>
                  </div>
                ) : (
                  <NavLink to="/login" className={classes.loginBtn}>
                    <AccountCircle className={classes.loginIcon} />
                    <span>Đăng nhập</span>
                  </NavLink>
                )}
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
