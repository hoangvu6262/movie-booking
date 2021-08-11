import axios from "axios";
import {
  GET_CINEMA_SYSTEM_INFO,
  GET_CINEMA_SYSTEM_INFO_SUCCESS,
  GET_CINEMA_SYSTEM_INFO_FAILED,
  GET_CINEMA_SYSTEM_SUCCESS,
  GET_CINEMA_SYSTEM_FAILED,
} from "../constants/cinema.const";
import { startLoading, stopLoading } from "./common.action";

// action call api lay he thong rap
export const getCinemaSystem = () => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "GET",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log("data", res.data);
        // gửi lên store
        dispatch(getCinemaSystemSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(getCinemaSystemFailed(err));
      });
  };
};

const getCinemaSystemSuccess = (cinemaList) => {
  return {
    type: GET_CINEMA_SYSTEM_SUCCESS,
    payload: cinemaList,
  };
};

const getCinemaSystemFailed = (err) => {
  return {
    type: GET_CINEMA_SYSTEM_FAILED,
    payload: err,
  };
};

//action call api lấy thông tin hệ thống rạp
export const getCinemaSystemInfo = (idCinemaSystem) => {
  return (dispatch) => {
    // dispatch(startLoading());

    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${idCinemaSystem}`,
      data: null,
    })
      .then((response) => {
        // dispatch(stopLoading());

        dispatch(getCinemaSystemInfoSuccess(response.data));
      })
      .catch((error) => {
        // dispatch(stopLoading());
        console.error(error);

        dispatch(getCinemaSystemInfoFailed(error));
      });
  };
};

const getCinemaSystemInfoSuccess = (data) => {
  return {
    type: GET_CINEMA_SYSTEM_INFO_SUCCESS,
    payload: data,
  };
};

const getCinemaSystemInfoFailed = (err) => {
  return {
    type: GET_CINEMA_SYSTEM_INFO_FAILED,
    payload: err,
  };
};
