import React from "react";
import { useDispatch } from "react-redux";
import {
  makeStyles,
  withStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@material-ui/core";
// import { DataGrid } from "@material-ui/data-grid";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import {
  deleteMovie,
  getMoiveDetail,
} from "../../../store/actions/movie.action";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#9c27b0",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
      borderRadius: 6,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    width: 1200,
  },
  image: {
    width: 110,
    height: 150,
  },
  movieDetailContainer: {
    marginBottom: 15,
    height: "auto",
  },
  movieCardDetail: {
    padding: 15,
    background: "#9c27b0",
    borderRadius: 6,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
    },
  },
}));

export default function AdminMovieTable(props) {
  const classes = useStyles();

  const { movieList, openDialog, setOpenDialog } = props;

  const dispatch = useDispatch();

  const handleDeleteClick = (maPhim) => {
    dispatch(deleteMovie(maPhim));
  };

  const handleClickEdit = (movie) => {
    // dispatch(getMoiveDetail(maPhim));
    setOpenDialog({
      open: true,
      isAddMovie: false,
      title: "Thay đổi thông tin phim",
      movie: movie,
    });
  };

  const renderAdminMovieList = () => {
    return movieList.map((movie, index) => {
      return (
        <StyledTableRow key={index}>
          <StyledTableCell component="th" scope="row">
            {movie.danhGia}
          </StyledTableCell>
          <StyledTableCell align="left">{movie.maPhim}</StyledTableCell>
          <StyledTableCell align="left">{movie.tenPhim}</StyledTableCell>
          <StyledTableCell align="left">{movie.trailer}</StyledTableCell>
          <StyledTableCell align="center">
            <img
              src={movie.hinhAnh}
              alt="hinh-anh-phim"
              className={classes.image}
            />
            {/* {movie.hinhAnh} */}
          </StyledTableCell>
          {/* <TableCell align="right">{movie.moTa}</TableCell> */}
          <StyledTableCell align="left">{movie.ngayKhoiChieu}</StyledTableCell>
          <StyledTableCell align="left">
            <IconButton onClick={() => handleClickEdit(movie)}>
              <EditIcon color="primary" />
            </IconButton>
          </StyledTableCell>
          <StyledTableCell align="left">
            <IconButton onClick={() => handleDeleteClick(movie.maPhim)}>
              <DeleteForeverOutlinedIcon color="secondary" />
            </IconButton>
          </StyledTableCell>
        </StyledTableRow>
      );
    });
  };

  const renderConsole = () => {
    return console.log("render");
  };

  return (
    <div>
      <Paper style={{ width: 1200 }}>
        <TableContainer>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Đánh giá</StyledTableCell>
                <StyledTableCell align="left">Code</StyledTableCell>
                <StyledTableCell align="left">Tên Phim</StyledTableCell>
                <StyledTableCell align="left">Trailer</StyledTableCell>
                <StyledTableCell align="center">Hình Ảnh</StyledTableCell>
                {/* <TableCell align="right">Mô Tả</TableCell> */}
                <StyledTableCell align="left">Ngày Giờ Chiếu</StyledTableCell>
                <StyledTableCell align="left">Sửa</StyledTableCell>
                <StyledTableCell align="left">Xóa</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderAdminMovieList()}</TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
