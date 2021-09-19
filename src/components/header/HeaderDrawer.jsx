import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ListItemText,
  Collapse,
  makeStyles,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "250px",
  },
  listItemText: {
    color: "black",
    listStyle: "none",
    textDecoration: "none",
    "&:hover": {
      color: "black",
      listStyle: "none",
      textDecoration: "none",
      border: "none",
    },
  },
}));

export default function HeaderDrawer(props) {
  const { userLogin, Headermenu, setDrawerOpen, setAnchorEl } = props;

  const classes = useStyles();

  const history = useHistory();

  const dispatch = useDispatch();

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

  // open Collapse
  const [open, setOpen] = React.useState(true);

  const handleClickCollapse = () => {
    setOpen(!open);
  };

  // chuyển hướng đên profile
  const handleClickToProfile = () => {};

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

  // chuyển hướng đến trang login
  const handleClick = () => {
    history.push(`/login`);
  };

  return (
    <div
      className={classes.drawer}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {Headermenu.map((menu, value) => (
          <NavLink to={menu.href} key={value} className={classes.listItemText}>
            <ListItem button>
              <ListItemText primary={menu.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      {userLogin != undefined ? (
        <List>
          <ListItem button onClick={handleClickCollapse}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary={"taiKhoan" && userLogin.taiKhoan} />
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={handleClickToProfile}>
                <ListItemIcon>PF</ListItemIcon>
                <ListItemText
                  primary="Profile"
                  // className={classes.navlinkText}
                />
              </ListItem>
              <ListItem button onClick={handleLogOut}>
                <ListItemIcon>LO</ListItemIcon>
                <ListItemText
                  primary="Log Out"
                  // className={classes.navlinkText}
                />
              </ListItem>
            </List>
          </Collapse>
        </List>
      ) : (
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Đăng nhập" />
          </ListItem>
        </List>
      )}
    </div>
  );
}
