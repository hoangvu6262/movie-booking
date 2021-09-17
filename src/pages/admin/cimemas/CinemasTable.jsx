import React, { useEffect } from "react";
import Table from "../../../components/useTable";
import { IconButton, TableCell, TableRow } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { getCinemaSystem } from "../../../store/actions/cinema.action";
import { useDispatch, useSelector } from "react-redux";

const rowTitle = [
  "#",
  "Mã hệ thống rạp",
  "Logo",
  "Tên hệ thống rạp",
  "Actions",
];

export default function CinemasTable(props) {
  //   const { cinemasList } = props;

  const { cinemaList } = useSelector((state) => state.cinema);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCinemaSystem());
  }, []);

  return (
    <Table rowTitle={rowTitle}>
      {cinemaList.map((cinema, index) => {
        return (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell align="left">{cinema.maHeThongRap}</TableCell>
            <TableCell align="left">{cinema.logo}</TableCell>
            <TableCell align="left">{cinema.tenHeThongRap}</TableCell>
            <TableCell align="left">
              <IconButton>
                <InfoOutlinedIcon color="primary" />
              </IconButton>
            </TableCell>
          </TableRow>
        );
      })}
    </Table>
  );
}
