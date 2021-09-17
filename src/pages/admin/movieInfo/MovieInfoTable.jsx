import React from "react";
import Table from "../../../components/useTable";
import { TableRow, TableCell } from "@material-ui/core";

const rowTitle = [
  "Mã lịch chiếu",
  "Mã rạp",
  "Tên rạp",
  "Tên hệ thống Rạp",
  "Ngày chiếu",
  "Giá vé",
];

export default function MovieInfoTable(props) {
  const { lichChieu } = props;
  if (lichChieu && lichChieu.length > 0) {
    return (
      <Table rowTitle={rowTitle}>
        {lichChieu.map((ticker, index) => {
          return (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {ticker.maLichChieu}
              </TableCell>
              <TableCell align="left">{ticker.maRap}</TableCell>
              <TableCell align="left">{ticker.thongTinRap.tenRap}</TableCell>
              <TableCell align="left">{ticker.thongTinRap.tenCumRap}</TableCell>
              <TableCell align="left">{ticker.ngayChieuGioChieu}</TableCell>
              <TableCell align="left">{ticker.giaVe}đ</TableCell>
            </TableRow>
          );
        })}
      </Table>
    );
  } else {
    return <p>Phim hiện chưa có lịch chiếu.</p>;
  }
}
