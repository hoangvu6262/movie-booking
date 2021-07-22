import { LOGIN_SUCCESS, LOGIN_FAILED } from "../constants/user.const";
import axios from "axios";
import { startLoading, stopLoading } from "./common.action";

// action call api
export const postLogin = (taiKhoan, matKhau, history) => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: {
        taiKhoan,
        matKhau,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        // gửi lên store
        dispatch(postLoginSuccess(res.data));

        //lưu data xuông localStorage
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        // trở lại trang trước đó
        history.goBack();
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(postLoginFailed(err));
      });
  };
};

const postLoginSuccess = (movieList) => {
  return {
    type: LOGIN_SUCCESS,
    payload: movieList,
  };
};

const postLoginFailed = (err) => {
  return {
    type: LOGIN_FAILED,
    payload: err,
  };
};

// get detail
