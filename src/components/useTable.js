import React from "react";
import {
  makeStyles,
  // withStyles,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  // Paper,
} from "@material-ui/core";

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: "#9c27b0",
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

const useStyles = makeStyles((theme) => ({
  table: {
    // width: "auto",
    overflowX: "auto",
    maxWidth: "100%",
    margin: "auto",
  },
}));

export default function Table(props) {
  const { rowTitle, children } = props;
  const classes = useStyles();
  return (
    <TableContainer className={classes.table}>
      <MuiTable aria-label="customized table">
        <TableHead>
          <TableRow>
            {rowTitle.map((row, index) => {
              return <TableCell key={index}>{row}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </MuiTable>
    </TableContainer>
  );
}
