import React from "react";
import {
  Divider,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Avatar,
  Collapse,
  makeStyles,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import adminLogo from "../../assets/images/icon/adminlogo.png";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    height: "100%",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sidebarListItem: {
    marginTop: theme.spacing(2),
  },
  navlink: {
    // marginTop: theme.spacing(2),
    padding: "11px 10px",
    width: "100%",
    height: "100%",
    color: "#fff",
    textDecoration: "none",
    listStyle: "none",
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    "&:hover": {
      color: "#fff",
      textDecoration: "none",
      listStyle: "none",
      backgroundColor: "rgba(200,200,200,0.1)",
    },
  },
  navlinkText: {
    color: "#fff",
    "& .MuiTypography-body1": {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 300,
      fontSize: 15,
    },
  },
  activeNavlink: {
    backgroundColor: "#9c27b0",
    color: "#fff",
    "&:hover": {
      color: "#fff",
      textDecoration: "none",
      listStyle: "none",
      backgroundColor: "#9c27b0",
    },
  },
  logo: {
    // margin: "auto",
    marginTop: "5px",
    marginLeft: "23px",
    width: "80%",
    height: "75%",
  },
  sideBarPaper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    // zIndex: 1,
    // backgroundColor: "rgba(0,0,0,0.5)",
    backgroundImage:
      "url(https://demos.creative-tim.com/material-dashboard-react/static/media/sidebar-4.dd4b5581.jpg)",
  },
  drawerDivider: {
    width: "80%",
    margin: "0 auto",
    backgroundColor: "rgb(137 135 135)",
  },
}));

export default function SidebarDrawer(props) {
  const { adminUser, sidebarList } = props;

  const classes = useStyles();

  const dispatch = useDispatch();

  const history = useHistory();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickToProfile = () => {
    history.push(`/admin/profile/userinfo&taiKhoan=${adminUser.taiKhoan}`);
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("adminLogin");
    dispatch({
      type: "ADMIN_LOGOUT",
      payload: false,
    });
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.toolbar}>
          <img src={adminLogo} className={classes.logo} />
        </div>
        <Divider className={classes.drawerDivider} />
        {adminUser ? (
          <List>
            <ListItem button onClick={handleClick}>
              <ListItemIcon style={{ margin: "7px 10px" }}>
                <Avatar
                  alt={adminUser.hoTen}
                  src="https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2021/6/16/photo1623825840815-16238258410321788912856.jpg"
                  style={{ height: 35, width: 35 }}
                />
              </ListItemIcon>

              <ListItemText
                primary={adminUser.taiKhoan}
                className={classes.navlinkText}
              />
              {open ? (
                <ExpandLess style={{ color: "#fff" }} />
              ) : (
                <ExpandMore style={{ color: "#fff" }} />
              )}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding style={{ marginLeft: 35 }}>
                <ListItem button onClick={handleClickToProfile}>
                  <ListItemIcon style={{ color: "#fff" }}>PF</ListItemIcon>
                  <ListItemText
                    primary="Profile"
                    className={classes.navlinkText}
                  />
                </ListItem>
                <ListItem button onClick={handleLogOut}>
                  <ListItemIcon style={{ color: "#fff" }}>LO</ListItemIcon>
                  <ListItemText
                    primary="Log Out"
                    className={classes.navlinkText}
                  />
                </ListItem>
              </List>
            </Collapse>
          </List>
        ) : null}

        <Divider className={classes.drawerDivider} />
        <List className={classes.sidebarListItem}>
          {sidebarList.map((text, index) => (
            <ListItem button key={index}>
              <NavLink
                to={text.link}
                activeClassName={classes.activeNavlink}
                className={classes.navlink}
                exact={text.exact}
              >
                <ListItemIcon style={{ color: "#fff" }}>
                  <text.icon />
                </ListItemIcon>
                <ListItemText
                  primary={text.name}
                  className={classes.navlinkText}
                />
              </NavLink>
            </ListItem>
          ))}
        </List>
      </div>

      <div className={classes.sideBarPaper}></div>
    </>
  );
}
