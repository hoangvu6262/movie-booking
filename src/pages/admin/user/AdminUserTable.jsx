import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { IconButton, TableCell, TableRow } from "@material-ui/core";
import Table from "../../../components/useTable";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { deleteUser } from "../../../store/actions/user.action";

const rowTitle = [
  "Họ tên",
  "Tài khoản",
  "Mật khẩu",
  "Email",
  "Phone",
  "Loại ND",
  "Actions Button",
];

export default function AdminUserTable(props) {
  const { userList, setOpenDialog } = props;

  const history = useHistory();

  const dispatch = useDispatch();

  const handleClickDelete = (taiKhoan) => {
    dispatch(deleteUser(taiKhoan));
  };

  const handleClickEdit = (user) => {
    setOpenDialog({
      isAddUser: false,
      title: "Thay đổi thông tin tài khoản",
      user: user,
      open: true,
    });
  };

  const handleClickGetUserInfo = (taiKhoan) => {
    history.push(`/admin/user/userinfo&taiKhoan=${taiKhoan}`);
  };

  return (
    <Table rowTitle={rowTitle}>
      {userList.map((user, index) => {
        return (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {user.hoTen}
            </TableCell>
            <TableCell align="left">{user.taiKhoan}</TableCell>
            <TableCell align="left">{user.matKhau}</TableCell>
            <TableCell align="left">{user.email}</TableCell>
            <TableCell align="left">{user.soDt}</TableCell>
            <TableCell align="left">{user.maLoaiNguoiDung}</TableCell>
            <TableCell align="left">
              <IconButton onClick={() => handleClickEdit(user)}>
                <EditIcon color="primary" />
              </IconButton>
              <IconButton onClick={() => handleClickDelete(user.taiKhoan)}>
                <DeleteForeverOutlinedIcon color="secondary" />
              </IconButton>
              <IconButton onClick={() => handleClickGetUserInfo(user.taiKhoan)}>
                <InfoOutlinedIcon color="primary" />
              </IconButton>
            </TableCell>
          </TableRow>
        );
      })}
    </Table>
  );
}
