import React from "react";
import { useDispatch } from "react-redux";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import {
  deleteMovie,
  getMoiveDetail,
} from "../../../store/actions/movie.action";

const useStyles = makeStyles((theme) => ({
  table: {
    overflowX: "auto",
    maxWidth: "100%",
    margin: "auto",
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
  acitonButton: {
    // display: "flex",
    // flexDirection: "column",
    height: "auto",
    // width: "50%",
  },
}));

export default function AdminMovieTable(props) {
  const classes = useStyles();

  const { movieList, setOpenDialog } = props;

  const history = useHistory();

  const dispatch = useDispatch();

  const handleClickDelete = (maPhim) => {
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

  const handleClickGetMovieInfo = (maPhim) => {
    history.push(`/admin/movie/movieInfo&maPhim=${maPhim}`);
  };

  const renderAdminMovieList = () => {
    return movieList.map((movie, index) => {
      return (
        <TableRow key={index}>
          <TableCell component="th" scope="row">
            <img
              src={movie.hinhAnh}
              alt="hinh-anh-phim"
              className={classes.image}
            />
          </TableCell>
          <TableCell align="left">{movie.maPhim}</TableCell>
          <TableCell align="left">{movie.tenPhim}</TableCell>
          <TableCell align="left">{movie.ngayKhoiChieu}</TableCell>
          <TableCell align="left">{movie.danhGia}</TableCell>
          <TableCell align="left">
            <IconButton onClick={() => handleClickEdit(movie)}>
              <EditIcon color="primary" />
            </IconButton>
            <IconButton onClick={() => handleClickDelete(movie.maPhim)}>
              <DeleteForeverOutlinedIcon color="secondary" />
            </IconButton>
            <IconButton onClick={() => handleClickGetMovieInfo(movie.maPhim)}>
              <InfoOutlinedIcon color="primary" />
            </IconButton>
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <div>
      <TableContainer className={classes.table}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Hình Ảnh</TableCell>
              <TableCell align="left">Code</TableCell>
              <TableCell align="left">Tên Phim</TableCell>
              <TableCell align="left">Ngày Giờ Chiếu</TableCell>
              <TableCell align="left">Đánh giá</TableCell>
              <TableCell align="center">Action Buttons</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderAdminMovieList()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
