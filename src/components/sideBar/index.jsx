import React from "react";
import {
  makeStyles,
  useTheme,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItemIcon,
  ListItem,
  Paper,
  ListItemText,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
// import MenuIcon from "@material-ui/icons/Menu";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import DesktopWindowsOutlinedIcon from "@material-ui/icons/DesktopWindowsOutlined";
import MovieCreationOutlinedIcon from "@material-ui/icons/MovieCreationOutlined";
import adminLogo from "../../assets/images/icon/adminlogo.png";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: "#355c7d",
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    color: "rgba(0, 0, 0, 0.5)",
    width: drawerWidth,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  navlink: {
    padding: "6px 10px",
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
    },
  },
  activeNavlink: {
    backgroundColor: "#9c27b0",
    color: "#fff",
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
}));

export default function SideBar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const { isSidebarShow } = useSelector((state) => state.sidebarShow);
  const dispatch = useDispatch();
  // console.log(isSidebarShow);

  const handleDrawerToggle = () => {
    dispatch({
      type: "SIDE_BAR_SHOW",
      payload: !isSidebarShow,
    });
  };

  const sidebarList = [
    {
      name: "Dashboard",
      icon: DesktopWindowsOutlinedIcon,
      link: "/admin",
      exact: true,
      color: "#345d7a",
    },
    {
      name: "Quản lý người dùng",
      icon: AccountCircleOutlinedIcon,
      link: "/admin/user",
      exact: false,
      color: "#ffc13d",
    },
    {
      name: "Quản lý phim",
      icon: MovieCreationOutlinedIcon,
      link: "/admin/movie",
      exact: false,
      color: "#c55a82",
    },
  ];

  const drawer = (
    <>
      <div
        style={{
          zIndex: 1,
          backgroundColor: "rgba(0,0,0,0.8)",
          height: "100%",
        }}
      >
        <div className={classes.toolbar}>
          <img src={adminLogo} className={classes.logo} />
        </div>
        <Divider
          style={{
            width: "80%",
            margin: "0 auto",
            backgroundColor: "rgb(137 135 135)",
          }}
        />
        <List>
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
                <ListItemText primary={text.name} />
              </NavLink>
            </ListItem>
          ))}
        </List>
        <Divider
          style={{
            width: "80%",
            margin: "0 auto",
            backgroundColor: "rgb(137 135 135)",
          }}
        />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon style={{ color: "#fff" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} style={{ color: "#fff" }} />
            </ListItem>
          ))}
        </List>
      </div>

      <div className={classes.sideBarPaper}></div>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={isSidebarShow}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}
