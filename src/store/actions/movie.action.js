import axios from "axios";
import {
  GET_MOVIE_DETAIL_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_BY_NAME_SUCCESS,
  GET_MOVIE_LIST_BY_NAME_FAILED,
} from "../constants/movie.const";
import { startLoading, stopLoading } from "./common.action";

// action call api
export const getMoiveList = () => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "GET",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=8",
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

// get detail

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
