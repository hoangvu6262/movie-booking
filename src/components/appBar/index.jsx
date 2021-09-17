import React from "react";
import {
  makeStyles,
  CssBaseline,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Grid,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PermIdentityTwoToneIcon from "@material-ui/icons/PermIdentityTwoTone";
import { useSelector, useDispatch } from "react-redux";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#414040",
    // backgroundColor: "rgb(35, 45, 53)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  appBarLeftMenu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
          <Grid container>
            <Grid item sm={10} xs={12} className={classes.appBarLeftMenu}>
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
                Movie Booking Management
              </Typography>
            </Grid>
            <Hidden smDown>
              <Grid item sm={2}>
                <IconButton style={{ color: "#fff" }}>
                  <PermIdentityTwoToneIcon />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
