import React from "react";
import { makeStyles, useTheme, Drawer, Hidden } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import DesktopWindowsOutlinedIcon from "@material-ui/icons/DesktopWindowsOutlined";
import MovieCreationOutlinedIcon from "@material-ui/icons/MovieCreationOutlined";
import CameraRollOutlinedIcon from "@material-ui/icons/CameraRollOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import SidebarDrawer from "../sidebarDrawer";

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
}));

export default function SideBar(props) {
  const { window, adminUser } = props;
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
    },
    {
      name: "Quản lý người dùng",
      icon: AccountCircleOutlinedIcon,
      link: "/admin/user",
      exact: false,
    },
    {
      name: "Quản lý phim",
      icon: MovieCreationOutlinedIcon,
      link: "/admin/movie",
      exact: false,
    },
    {
      name: "Quản lý hệ thống Rạp",
      icon: CameraRollOutlinedIcon,
      link: "/admin/cinema-system",
      exact: false,
    },
    {
      name: "Thống kê",
      icon: AssessmentOutlinedIcon,
      link: "/admin/report",
      exact: false,
    },
  ];

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
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
          {/* {drawer} */}
          <SidebarDrawer adminUser={adminUser} sidebarList={sidebarList} />
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
          {/* {drawer} */}
          <SidebarDrawer adminUser={adminUser} sidebarList={sidebarList} />
        </Drawer>
      </Hidden>
    </nav>
  );
}
