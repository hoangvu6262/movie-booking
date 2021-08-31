import React from "react";
import {
  makeStyles,
  useTheme,
  CssBaseline,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useSelector, useDispatch } from "react-redux";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#414040",
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
}));

export default function AppBarAdmin() {
  const classes = useStyles();
  const { isSidebarShow } = useSelector((state) => state.sidebarShow);
  const dispatch = useDispatch();
  // console.log(isSidebarShow);

  const handleDrawerToggle = () => {
    dispatch({
      type: "SIDE_BAR_SHOW",
      payload: !isSidebarShow,
    });
  };
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
