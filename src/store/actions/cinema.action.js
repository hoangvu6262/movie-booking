import axios from "axios";
import {
  GET_CINEMA_SYSTEM_INFO,
  GET_CINEMA_SYSTEM_INFO_SUCCESS,
  GET_CINEMA_SYSTEM_INFO_FAILED,
} from "../constants/cinema.action";
import { startLoading, stopLoading } from "./common.action";

// action call api lay thong tin he thong rap
export const getCinemaSystemInfo = () => {
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
        console.log(res.data);
        // gửi lên store
        dispatch(getCinemaSystemInfoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(getCinemaSystemInfoFailed(err));
      });
  };
};

const getCinemaSystemInfoSuccess = (cinemaList) => {
  return {
    type: GET_CINEMA_SYSTEM_INFO_SUCCESS,
    payload: cinemaList,
  };
};

const getCinemaSystemInfoFailed = (err) => {
  return {
    type: GET_CINEMA_SYSTEM_INFO_FAILED,
    payload: err,
  };
};
