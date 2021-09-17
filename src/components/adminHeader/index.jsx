import React from "react";
import { Paper, Grid, Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    background: "transparent",
    "& p": {
      marginBottom: 0,
      // paddingLeft: 15,
      fontSize: 25,
      fontWeight: 400,
      color: "#555555",
      //   textTransform: "uppercase",
    },
  },
  AdminHeaderTitleContainer: {
    marginTop: "-8px",
  },
  adminHeaderContainer: {
    paddingTop: 20,
    paddingBottom: 5,
  },

  adminHeaderSubtitle: {
    fontSize: "15px !important",
    fontWeight: "300 !important",
  },
}));

export default function AdminHeader(props) {
  const classes = useStyles();

  const { title, subtitle = "This is a list of all items", children } = props;

  const today = new Date();
  // console.log(typeof today);

  return (
    <>
      <Paper className={classes.root}>
        <Grid container className={classes.adminHeaderContainer}>
          <Grid item md={7} xs={12}>
            <div className={classes.AdminHeaderTitleContainer}>
              <p>{title}</p>
              <p className={classes.adminHeaderSubtitle}>
                {subtitle}, today: {today.toUTCString()}
              </p>
            </div>
          </Grid>
          {children}
        </Grid>
      </Paper>
      <Divider />
    </>
  );
}
