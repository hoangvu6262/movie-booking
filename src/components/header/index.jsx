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
  makeStyles,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

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
  loginIcon: {
    height: theme.spacing(4),
    width: theme.spacing(4),
  },
  drawer: {
    width: "250px",
  },
}));

export default function Header() {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  // header menu
  const Headermenu = [
    { name: "Lịch chiếu", href: "#" },
    { name: "Cụm rạp", href: "#" },
    { name: "Tin tức", href: "#" },
    { name: "Ứng dụng", href: "#" },
  ];

  // render header menu
  const renderHeaderMenu = () => {
    return Headermenu.map((menu, value) => {
      return (
        <li key={value}>
          <a href={menu.href}>{menu.name}</a>
        </li>
      );
    });
  };

  // onClick toggleDrawer()
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
          <ListItem button key={value}>
            <ListItemText primary={menu.name} />
          </ListItem>
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
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  color="default"
                >
                  <AccountCircle className={classes.loginIcon} />
                  {/* <span className={classes.loginText}>Đăng nhập</span> */}
                </IconButton>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

// xs={6} sm={3}
