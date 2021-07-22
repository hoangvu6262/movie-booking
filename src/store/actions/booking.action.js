import {
  GET_BOOKING_LIST,
  GET_BOOKING_LIST_SUCCESS,
  GET_BOOKING_LIST_FAILED,
} from "../constants/booking.const";
import axios from "axios";
import { startLoading, stopLoading } from "./common.action";

// action call api
export const getBookingList = (maLichChieu) => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        // console.log(res.data);
        // gửi lên store
        dispatch(getBookingListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(getBookingListFailed(err));
      });
  };
};

const getBookingListSuccess = (bookingList) => {
  return {
    type: GET_BOOKING_LIST_SUCCESS,
    payload: bookingList,
  };
};

const getBookingListFailed = (err) => {
  return {
    type: GET_BOOKING_LIST_FAILED,
    payload: err,
  };
};

export const postBookingTicket = (maLichChieu, danhSachVe) => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    const token = user.accessToken;
    dispatch(startLoading());
    // call api
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      data: {
        maLichChieu,
        danhSachVe,
        taiKhoanNguoiDung: user.taiKhoan,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        // console.log(res.data);
        alert("Đặt vé thành công!");
      })
      .catch((err) => {
        dispatch(stopLoading());
        alert("Đặt vé thất bại!");
      });
  };
};
