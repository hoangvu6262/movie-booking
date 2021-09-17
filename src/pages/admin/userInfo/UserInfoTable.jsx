import React from "react";
import Table from "../../../components/useTable";
import { IconButton, TableCell, TableRow } from "@material-ui/core";

const rowTitle = [
  "Danh sách ghế",
  "Mã Vé",
  "Tên Phim",
  "Ngày đặt",
  "Giá vé",
  "Thời lượng",
];

export default function UserInfoTable(props) {
  const { thongTinDatVe } = props;

  console.log(thongTinDatVe);

  if (thongTinDatVe && thongTinDatVe.length > 0) {
    return (
      <Table rowTitle={rowTitle}>
        {thongTinDatVe.map((ticker, index) => {
          return (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="left">{ticker.maVe}</TableCell>
              <TableCell align="left">{ticker.tenPhim}</TableCell>
              <TableCell align="left">{ticker.ngayDat}</TableCell>
              <TableCell align="left">{ticker.giaVe}đ</TableCell>
              <TableCell align="left">{ticker.thoiLuongPhim}p</TableCell>
            </TableRow>
          );
        })}
      </Table>
    );
  } else {
    return <p>Tài khoản hiện chưa đặt vé.</p>;
  }
}
