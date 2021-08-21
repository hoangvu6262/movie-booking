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
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ListItemText,
  MenuItem,
  Menu,
  makeStyles,
  withStyles,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    // zIndex: 0,
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
    // fontFamily: "Yanone Kaffeesatz",
    // letterSpacing: "1px",
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
  drawer: {
    width: "250px",
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    marginTop: "5px",
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

  // header menu
  const Headermenu = [
    { name: "Lịch chiếu", href: "#movie-list" },
    { name: "Cụm rạp", href: "#cinema-list" },
    { name: "Tin tức", href: "#" },
    { name: "Ứng dụng", href: "#" },
  ];

  // render header menu
  const renderHeaderMenu = () => {
    return Headermenu.map((menu, value) => {
      return (
        <li key={value}>
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

  // drawer is open
  const list = () => (
    <div
      className={classes.drawer}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {Headermenu.map((menu, value) => (
          <a href={menu.href} key={value}>
            <ListItem button>
              <ListItemText primary={menu.name} />
            </ListItem>
          </a>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Đăng nhập" />
        </ListItem>
      </List>
    </div>
  );

  //lấy userLogin từ localStorage và chuyển về object
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));

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
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Grid container>
            <Grid item lg={3} xs={6}>
              <Avatar
                variant="square"
                src={weblogo}
                className={classes.logo}
              ></Avatar>
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
                  onOpen={toggleDrawer(true)}
                >
                  {list()}
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
                      <MenuItem>
                        <ListItemIcon>
                          <SupervisorAccountIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Thông tin" />
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <EditIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Chỉnh sửa" />
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={handleLogOut}>
                        <ListItemIcon>
                          <ExitToAppIcon fontSize="small" />
                        </ListItemIcon>
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
