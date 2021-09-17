import React, { useState, useEffect } from "react";
import {
  getMoiveListPagination,
  getMovieListByName,
} from "../../../store/actions/movie.action";
import { useSelector, useDispatch } from "react-redux";
import AdminMovieTable from "./AdminMovieTable";
import { IconButton, makeStyles, Tooltip, Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import AdminMovieForm from "./AdminMovieForm";
import Notification from "../../../components/notification";
// import Controls from "../../../components/controls/Controls";
import FormDialog from "../../../components/formDialog";
import CustomPaper from "../../../components/customPaper";
import AdminHeader from "../../../components/adminHeader";
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

const initialValues = {
  tenPhim: "",
  trailer: "",
  hinhAnh: "",
  moTa: "",
  maNhom: "GP01",
  ngayKhoiChieu: "",
  danhGia: 0,
};

export default function Movie() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { movieListPanigations, totalPage, notify, page } = useSelector(
    (state) => state.movie
  );
  const [openDialog, setOpenDialog] = useState({
    open: false,
    isAddMovie: false,
    title: "",
    movie: {
      tenPhim: "",
      trailer: "",
      hinhAnh: "",
      moTa: "",
      maNhom: "GP01",
      ngayKhoiChieu: "",
      danhGia: 0,
    },
  });

  // lấy danh sách phim phân trang
  useEffect(() => {
    dispatch(getMoiveListPagination(1, 10));
    // dispatch(getMoiveList());
  }, []);

  const handleCloseNotification = () => {
    dispatch({
      type: "CLOSE_NOTIFICATION",
      payload: false,
    });
  };

  const handleChangePaginationPage = (event, value) => {
    dispatch(getMoiveListPagination(value, 10));
  };

  const handleOpenAddOrEditDialog = () => {
    setOpenDialog({
      open: true,
      isAddMovie: true,
      title: "Thêm Phim",
      movie: initialValues,
    });
  };

  const handleSearchMovies = (e) => {
    const { value } = e.target;
    if (value !== "") {
      dispatch(getMovieListByName(value));
    } else {
      dispatch(getMoiveListPagination(page, 10));
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} className={classes.root}>
          <AdminHeader
            title="Quản Lý Phim"
            // addOnClick={handleOpenAddOrEditDialog}
            // searchOnChange={handleSearchMovies}
          >
            <Grid item md={4} xs={10} className={classes.adminHeaderSearch}>
              <SearchInput
                id="search"
                name="search"
                placeholder="Search..."
                onChange={handleSearchMovies}
              />
              <div style={{ marginTop: "-8px" }}>
                <Tooltip title="Search Movie" arrow>
                  <IconButton style={{ backgroundColor: "#fff" }}>
                    <SearchIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </Grid>
            <Grid item md={1} xs={2} className={classes.adminHeaderAdd}>
              <Tooltip title="Add Movie" arrow>
                <IconButton
                  onClick={handleOpenAddOrEditDialog}
                  style={{
                    backgroundColor: "rgb(156, 39, 176)",
                    color: "#fff",
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </AdminHeader>
        </Grid>
        <Grid item xs={12} className={classes.root}>
          <CustomPaper
            title="Bảng thông tin Phim"
            IconPaper={StorageRoundedIcon}
            // color="#ec407a"
          >
            <AdminMovieTable
              movieList={movieListPanigations}
              openDialog={openDialog}
              setOpenDialog={setOpenDialog}
            />
            {totalPage > 0 ? (
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

      <Notification
        notifyAlert={notify}
        onClose={handleCloseNotification}
      ></Notification>
      <FormDialog openDialog={openDialog} setOpenDialog={setOpenDialog}>
        <AdminMovieForm openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </FormDialog>
    </>
  );
}
