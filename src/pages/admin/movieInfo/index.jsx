import React, { useEffect, useState } from "react";
import CustomPaper from "../../../components/customPaper";
import MovieCreationIcon from "@material-ui/icons/MovieCreation";
import MovieIcon from "@material-ui/icons/Movie";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import GradeIcon from "@material-ui/icons/Grade";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import DescriptionIcon from "@material-ui/icons/Description";
import TableChartIcon from "@material-ui/icons/TableChart";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import { Grid, IconButton, Tooltip, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMoiveDetail } from "../../../store/actions/movie.action";
import MovieInfoTable from "./MovieInfoTable";
// import DetailMovie from "../../main/deail-movie";
import AdminHeader from "../../../components/adminHeader";
import AdminMovieForm from "../movie/AdminMovieForm";
import MovieInfoForm from "./MovieInfoForm";
import Notification from "../../../components/notification";
import FormDialog from "../../../components/formDialog";

const useStyles = makeStyles({
  root: {},
  movieInfoAcions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    "& .MuiSvgIcon-root": {
      width: 14,
      height: 14,
      color: "#fff",
    },
    "& .MuiIconButton-root": {
      marginLeft: 20,
      backgroundColor: "rgb(156, 39, 176)",
      width: 30,
      height: 30,
      boxShadow:
        "0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(233 30 99 / 40%)",
    },
  },
  movieInfoImg: {
    height: 383,
    width: 255,
    borderRadius: 6,
  },
  movieInfoTrailer: {
    width: "100%",
    height: 650,
  },
  movieInfoContainerImg: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    "& p": {
      marginTop: 8,
      fontSize: 15,
      padding: "9px 12px",
      color: "white",
      backgroundColor: "rgb(156, 39, 176)",
      borderRadius: 30,
    },
  },
  movieInfoContainerProfile: {
    width: "90%",
    margin: "0 auto",
    fontWeight: "300",
    fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
    "& p": {
      marginBottom: 0,
      textAlign: "justify",
    },
  },
  movieInfoProfile: {
    margin: "20px auto",
    padding: "5px 15px",
  },
  movieInfoProfileLabel: {
    fontSize: 15,
    fontWeight: "400",
    paddingBottom: "4px",
  },
  movieInfoProfileValue: {
    paddingBottom: "4px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid #999",
    "&:hover": {
      borderBottom: "1px solid #9c27b0",
    },
  },
  movieInfoContainerTrailer: {
    marginTop: 30,
    textAlign: "center",
    "& h3": {
      color: "#fb4226",
      marginBottom: 30,
      fontWeight: "300",
      fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
    },
  },
});

export default function MovieInfo() {
  const classes = useStyles();

  const dispatch = useDispatch();

  // lấy movieDetail từ store
  const { movieDetail, notify } = useSelector((state) => state.movie);

  // lấy id param từ url
  const { id } = useParams();

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

  const [openDialogAdd, setOpenDialogAdd] = useState({
    open: false,
    title: "Tạo lịch chiếu",
    showTime: {
      maPhim: id,
      ngayChieuGioChieu: "",
      maRap: 0,
      giaVe: 0,
    },
  });

  // call api getMoiveDetail(id)
  useEffect(() => {
    dispatch(getMoiveDetail(id));
  }, []);

  console.log(movieDetail);

  const profifes = [
    {
      id: 1,
      name: "Tên phim:",
      value: movieDetail.tenPhim,
      pIcon: MovieIcon,
    },
    {
      id: 2,
      name: "Ngày khởi chiếu:",
      value: movieDetail.ngayKhoiChieu,
      pIcon: CalendarTodayIcon,
    },
    {
      id: 3,
      name: "Đánh giá:",
      value: movieDetail.danhGia,
      pIcon: GradeIcon,
    },
    {
      id: 4,
      name: "Mã nhóm:",
      value: movieDetail.maNhom,
      pIcon: GroupWorkIcon,
    },
    {
      id: 5,
      name: "Nội dung:",
      value: movieDetail.moTa,
      pIcon: DescriptionIcon,
    },
  ];

  const handleClickEdit = (movie) => {
    // dispatch(getMoiveDetail(maPhim));
    setOpenDialog({
      open: true,
      isAddMovie: false,
      title: "Thay đổi thông tin phim",
      movie: movie,
    });
  };

  // click ra ngoài để tắt notify
  const handleCloseNotification = () => {
    dispatch({
      type: "CLOSE_NOTIFICATION",
      payload: false,
    });
  };

  const handleClickAddShowtime = () => {
    setOpenDialogAdd({
      ...openDialogAdd,
      open: true,
    });
  };

  return (
    <>
      <AdminHeader title="Thông tin Phim chi tiết">
        <Grid item md={5} xs={12} className={classes.movieInfoAcions}>
          <Tooltip title="Edit Movie" arrow>
            <IconButton onClick={() => handleClickEdit(movieDetail)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add ShowTime" arrow>
            <IconButton onClick={handleClickAddShowtime}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </AdminHeader>
      <CustomPaper
        title={"Thông tin Phim - Mã phim: " + movieDetail.maPhim}
        IconPaper={MovieCreationIcon}
      >
        <Grid container spacing={2}>
          <Grid item md={6} xs={12} className={classes.movieInfoContainerImg}>
            <img
              src={movieDetail.hinhAnh}
              alt={movieDetail.biDanh}
              className={classes.movieInfoImg}
            />
            <p>Mã phim: {movieDetail.maPhim}</p>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            className={classes.movieInfoContainerProfile}
          >
            {profifes.map((profifes) => {
              return (
                <div className={classes.movieInfoProfile} key={profifes.id}>
                  <p className={classes.movieInfoProfileLabel}>
                    {profifes.name}
                  </p>
                  <div className={classes.movieInfoProfileValue}>
                    <p>{profifes.value}</p>
                    <profifes.pIcon />
                  </div>
                </div>
              );
            })}
          </Grid>
          <Grid item xs={12} className={classes.movieInfoContainerTrailer}>
            <h3>TRAILER - PHIM: {movieDetail.tenPhim}</h3>
            <div>
              <iframe
                src={movieDetail.trailer}
                className={classes.movieInfoTrailer}
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </CustomPaper>
      <CustomPaper title="Thông tin lịch chiếu" IconPaper={TableChartIcon}>
        <MovieInfoTable lichChieu={movieDetail.lichChieu} />
      </CustomPaper>
      <FormDialog openDialog={openDialog} setOpenDialog={setOpenDialog}>
        <AdminMovieForm openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </FormDialog>
      <FormDialog openDialog={openDialogAdd} setOpenDialog={setOpenDialogAdd}>
        <MovieInfoForm
          openDialogAdd={openDialogAdd}
          setOpenDialogAdd={setOpenDialogAdd}
        />
      </FormDialog>
      <Notification
        notifyAlert={notify}
        onClose={handleCloseNotification}
      ></Notification>
      {/* <DetailMovie /> */}
    </>
  );
}
