import React from "react";
import { Paper, Container, Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: 60,
    // marginBottom: 60,
    position: "relative",
    borderRadius: 6,
    // width: "calc(100% + 30px)",
    height: "100%",
  },
  paperHeaderTitle: {
    paddingBottom: 20,
    "& p": {
      paddingTop: 12,
      marginBottom: 0,
      color: "#3C4858",
      fontWeight: "300",
      fontSize: 20,
    },
  },
  paperHeader: {
    float: "left",
    marginTop: "-20px",
    marginRight: 15,
    padding: 15,
    borderRadius: 3,
  },
  paperHeaderIcon: {
    color: "#fff",
    fontSize: 35,
  },
  paperDivider: {
    width: "95%",
    margin: "0 auto",
  },
  paperContent: {
    marginTop: 20,
    paddingBottom: 20,
  },
});

export default function CustomPaper(props) {
  const classes = useStyles();

  const { title, IconPaper, children, color = "#9c27b0" } = props;

  return (
    <Paper className={classes.root}>
      <Container className={classes.paperHeaderTitle}>
        <div
          className={classes.paperHeader}
          style={{
            backgroundColor: `${color}`,
            boxShadow: `0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px ${color}`,
          }}
        >
          <IconPaper className={classes.paperHeaderIcon} />
        </div>
        <p>{title}</p>
      </Container>
      <Divider className={classes.paperDivider} />
      <Container className={classes.paperContent}>{children}</Container>
    </Paper>
  );
}
