import React, { useEffect, useState } from "react";
import {
  getUserListPagination,
  searchUserPagination,
} from "../../../store/actions/user.action";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, IconButton, Grid, Tooltip } from "@material-ui/core";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import Pagination from "@material-ui/lab/Pagination";
import AdminUserTable from "./AdminUserTable";
import Notification from "../../../components/notification";
// import Controls from "../../../components/controls/Controls";
import FormDialog from "../../../components/formDialog";
import CustomPaper from "../../../components/customPaper";
import AdminHeader from "../../../components/adminHeader";
import AdminUserForm from "./AdminUserForm";
import SearchInput from "../../../components/searchInput";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  root: {
    padding: "0 15px !important",
    height: "100%",
    maxWidth: "100%",
    margin: "auto",
    // overflowX: "auto",
  },
  adminHeaderSearch: {
    display: "flex",
    flexDirection: "row",
  },
  adminHeaderAdd: {
    marginTop: "-8px",
    // marginLeft: 5,
    textAlign: "right",
    // backgroundColor: "#fff",
  },
  pagination: {
    margin: "0 auto",
    padding: "20px 0",
    width: "auto",
  },
});

export default function User() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userPagination, notify, totalPage, page } = useSelector(
    (state) => state.user
  );

  const [openDialog, setOpenDialog] = useState({
    isAddUser: false,
    title: "",
    user: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    open: false,
  });

  const [search, setSearch] = useState({
    isSearch: false,
    value: "",
  });

  // call api lấy danh sách userPagination
  useEffect(() => {
    dispatch(getUserListPagination(1, 15));
  }, []);

  const handleCloseNotification = () => {
    dispatch({
      type: "CLOSE_NOTIFICATION",
      payload: false,
    });
  };

  const handleChangePaginationPage = (event, value) => {
    if (!search.isSearch) {
      dispatch(getUserListPagination(value, 15));
    } else {
      dispatch(searchUserPagination(search.value, value, 15));
    }
  };

  const handleOpenAddOrEditDialog = () => {
    setOpenDialog({
      isAddUser: true,
      title: "Thêm tài khoản",
      user: {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "",
        hoTen: "",
      },
      open: true,
    });
  };

  const handleSearchUserPagination = (e) => {
    const { value } = e.target;
    if (value !== "") {
      setSearch({
        isSearch: true,
        value: value,
      });
      dispatch(searchUserPagination(value, 1, 15));
    } else {
      setSearch({ ...search, isSearch: false });
      dispatch(getUserListPagination(1, 15));
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} className={classes.root}>
          <AdminHeader title="Quản lý người dùng">
            <Grid item md={4} xs={10} className={classes.adminHeaderSearch}>
              <SearchInput
                id="search"
                name="search"
                placeholder="Search..."
                onChange={handleSearchUserPagination}
              />
              <div style={{ marginTop: "-8px" }}>
                <Tooltip title="Search User" arrow>
                  <IconButton style={{ backgroundColor: "#fff" }}>
                    <SearchIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </Grid>
            <Grid item md={1} xs={2} className={classes.adminHeaderAdd}>
              <Tooltip title="Add User" arrow>
                <IconButton
                  onClick={handleOpenAddOrEditDialog}
                  style={{ backgroundColor: "#fff" }}
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </AdminHeader>
        </Grid>
        <Grid item xs={12} className={classes.root}>
          <CustomPaper
            title="Bảng thông tin người dùng"
            IconPaper={StorageRoundedIcon}
            // color="#ec407a"
          >
            <AdminUserTable
              userList={userPagination}
              setOpenDialog={setOpenDialog}
            />
            {totalPage > 1 ? (
              <Pagination
                count={totalPage}
                color="primary"
                className={classes.pagination}
                onChange={handleChangePaginationPage}
              />
            ) : null}
          </CustomPaper>
        </Grid>
      </Grid>
      <Notification notifyAlert={notify} onClose={handleCloseNotification} />
      <FormDialog openDialog={openDialog} setOpenDialog={setOpenDialog}>
        <AdminUserForm openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </FormDialog>
    </>
  );
}
