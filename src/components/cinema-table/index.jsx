import React from "react";
import { Container, Grid, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
  },
  cinemaContainer: {
    height: 800,
  },
  paper: {
    // padding: theme.spacing(2),
    height: 800,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CinemaTable() {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="md" className={classes.cinemaContainer}>
        <Grid container>
          <Grid item md={1}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item md={4}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item md={7}>
            <Paper className={classes.paper}></Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
