import React, { useState, useEffect } from "react";
import {
  getMoiveListPagination,
  getMoiveList,
  getMovieListByName,
} from "../../../store/actions/movie.action";
import { useSelector, useDispatch } from "react-redux";
import AdminMovieTable from "./AdminMovieTable";
import { Paper, makeStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import AdminMovieForm from "./AdminMovieForm";
import Notification from "../../../components/notification";
import Controls from "../../../components/controls/Controls";
import FormDialog from "../../../components/formDialog";
import SearchInput from "../../../components/searchInput";

const useStyles = makeStyles({
  adminMoviePaper: {
    padding: 15,
    margin: "20px 0",
    height: "100%",
    borderRadius: 25,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pagination: {
    margin: "0 auto",
    padding: "20px 0",
    width: "30%",
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
    movie: {},
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
    <div>
      <h2>Quản Lý Phim</h2>
      <Paper className={classes.adminMoviePaper}>
        <SearchInput
          id="searchMovies"
          name="searchMovies"
          label="Tìm kiếm phim"
          onChange={handleSearchMovies}
        />
        <Controls.Button
          text="Thêm Phim"
          color="primary"
          variant="outlined"
          onClick={handleOpenAddOrEditDialog}
        />
      </Paper>
      <Paper>
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
      </Paper>

      <Notification
        notifyAlert={notify}
        onClose={handleCloseNotification}
      ></Notification>
      <FormDialog openDialog={openDialog} setOpenDialog={setOpenDialog}>
        <AdminMovieForm openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </FormDialog>
    </div>
  );
}
