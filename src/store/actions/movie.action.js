import axios from "axios";
import {
  GET_MOVIE_DETAIL_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_BY_NAME_SUCCESS,
  GET_MOVIE_LIST_BY_NAME_FAILED,
  GET_MOVIE_LIST_PANIGATION_SUCCESS,
  GET_MOVIE_LIST_PANIGATION_FAILED,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAILED,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILED,
  EDIT_MOVIE_SUCCESS,
  EDIT_MOVIE_FAILED,
  CREATE_MOVIE_SHOWTIMES_SUCCESS,
  CREATE_MOVIE_SHOWTIMES_FAILED,
} from "../constants/movie.const";
import { startLoading, stopLoading } from "./common.action";
import action from "./action";

// action call api lấy danh sách phim
export const getMoiveList = () => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "GET",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        // gửi lên store
        dispatch(getMoiveListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(getMoiveListFailed(err));
      });
  };
};

const getMoiveListSuccess = (movieList) => {
  return {
    type: GET_MOVIE_LIST_SUCCESS,
    payload: movieList,
  };
};

const getMoiveListFailed = (err) => {
  return {
    type: GET_MOVIE_LIST_FAILED,
    payload: err,
  };
};

// lấy danh sách phim phân trang
export const getMoiveListPagination = (page, numberOfPages) => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=${numberOfPages}`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        // gửi lên store
        dispatch(getMoiveListPaginationSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(getMoiveListPaginationFailed(err));
      });
  };
};

const getMoiveListPaginationSuccess = (movieList) => {
  return {
    type: GET_MOVIE_LIST_PANIGATION_SUCCESS,
    payload: movieList,
  };
};

const getMoiveListPaginationFailed = (err) => {
  return {
    type: GET_MOVIE_LIST_PANIGATION_FAILED,
    payload: err,
  };
};

// get detail movie
export const getMoiveDetail = (movieCode) => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        // console.log(res.data);
        // gửi lên store
        dispatch(getMoiveDetailSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(getMoiveDetailFailed(err));
      });
  };
};

const getMoiveDetailSuccess = (movieDetail) => {
  return {
    type: GET_MOVIE_DETAIL_SUCCESS,
    payload: movieDetail,
  };
};

const getMoiveDetailFailed = (err) => {
  return {
    type: GET_MOVIE_DETAIL_FAILED,
    payload: err,
  };
};

// Tìm kiếm phim theo Tên
export const getMovieListByName = (tenPhim) => {
  return (dispatch) => {
    dispatch(startLoading());

    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`,
      data: null,
    })
      .then((response) => {
        dispatch(stopLoading());
        console.log(response.data);
        dispatch(getMovieListByNameSuccess(response.data));
      })
      .catch((error) => {
        dispatch(stopLoading());
        console.log("error", error);
        dispatch(getMovieListByNameFailed(error));
      });
  };
};

const getMovieListByNameSuccess = (movieList) => {
  return {
    type: GET_MOVIE_LIST_BY_NAME_SUCCESS,
    payload: movieList,
  };
};

const getMovieListByNameFailed = (err) => {
  return {
    type: GET_MOVIE_LIST_BY_NAME_FAILED,
    payload: err,
  };
};

//Xóa Phim
export const deleteMovie = (maPhim) => {
  return (dispatch) => {
    const userAdmin = JSON.parse(sessionStorage.getItem("adminLogin"));
    const token = userAdmin.accessToken;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .delete(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        { headers }
      )
      .then((response) => {
        // console.log("xoa phim thanh cong");
        // console.log(response);
        const notification = {
          open: true,
          status: response.status,
          severity: "success",
          message: "Đã xóa phim thành công!",
        };
        // alert("đã xóa thành công");
        dispatch(deleteMovieSuccess(notification));
      })
      .catch((err) => {
        // console.log("xoa phim ko thanh cong", err.response.data);
        const notification = {
          open: true,
          status: err.response.status,
          severity: "error",
          message: "Xóa phim không thành công!",
        };
        dispatch(deleteMovieFailed(notification));
      });
  };
};

const deleteMovieSuccess = (data) => {
  const action = {
    type: DELETE_MOVIE_SUCCESS,
    payload: data,
  };

  return action;
};

const deleteMovieFailed = (err) => {
  const action = {
    type: DELETE_MOVIE_FAILED,
    payload: err,
  };

  return action;
};

//Thêm Phim
export const addMovie = (movie) => {
  return (dispatch) => {
    const userAdmin = JSON.parse(sessionStorage.getItem("adminLogin"));
    const token = userAdmin.accessToken;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .post(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
        movie,
        { headers }
      )
      .then((response) => {
        // console.log("them phim thanh cong");
        // console.log(response);
        const notification = {
          open: true,
          status: response.status,
          severity: "success",
          message: "Thêm phim thành công!",
          data: movie,
        };
        dispatch(addMovieSuccess(notification));
      })
      .catch((error) => {
        // console.log(error.response);
        const notification = {
          open: true,
          status: error.response.status,
          severity: "error",
          message: error.response.data,
        };
        dispatch(addMovieFailed(notification));
      });
  };
};

const addMovieSuccess = (data) => {
  const action = {
    type: ADD_MOVIE_SUCCESS,
    payload: data,
  };

  return action;
};

const addMovieFailed = (err) => {
  const action = {
    type: ADD_MOVIE_FAILED,
    payload: err,
  };

  return action;
};

export const editMovieDetail = (movie) => {
  return (dispatch) => {
    const userAdmin = JSON.parse(sessionStorage.getItem("adminLogin"));
    const token = userAdmin.accessToken;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .post(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
        movie,
        { headers }
      )
      .then((response) => {
        // console.log("them phim thanh cong");
        // console.log(response);
        const notification = {
          open: true,
          status: response.status,
          severity: "success",
          message: "Cập nhật thông tin phim thành công!",
          data: movie,
        };
        dispatch({
          type: EDIT_MOVIE_SUCCESS,
          payload: notification,
        });
      })
      .catch((error) => {
        // console.log(error.response);
        const notification = {
          open: true,
          status: error.response.status,
          severity: "error",
          message: error.response.data,
        };
        dispatch({
          type: EDIT_MOVIE_FAILED,
          payload: notification,
        });
      });
  };
};

/**
 * tạo lịch chiếu
 * createMovieShowtimes(showTime)
 * url('https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu')
 */
export const createMovieShowtimes = (showTime) => {
  return (dispatch) => {
    dispatch(startLoading());

    const userAdmin = JSON.parse(sessionStorage.getItem("adminLogin"));
    const token = userAdmin.accessToken;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .post(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu",
        showTime,
        { headers }
      )
      .then((response) => {
        dispatch(stopLoading());
        // nếu tạo lịch chiếu thành công
        dispatch(
          action(CREATE_MOVIE_SHOWTIMES_SUCCESS, {
            open: true,
            severity: "success",
            message: response.data,
          })
        );
      })
      .catch((error) => {
        dispatch(stopLoading());
        // nếu tạo lịch chiếu không thành công
        console.log(error.response.data);
        dispatch(
          action(CREATE_MOVIE_SHOWTIMES_FAILED, {
            open: true,
            severity: "error",
            message: error.response.data,
          })
        );
      });
  };
};
