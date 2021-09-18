import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAILED,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILED,
  GET_USER_LIST_PAGINATION_SUCCESS,
  GET_USER_LIST_PAGINATION_FAILED,
  SEARCH_USER_PAGINATION_SUCCESS,
  SEARCH_USER_PAGINATION_FAILED,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
  GET_INFO_USER_SUCCESS,
  GET_INFO_USER_FAILED,
} from "../constants/user.const";
import axios from "axios";
import { startLoading, stopLoading } from "./common.action";
import action from "./action";

/**
 * đăng nhập vào trang movie booking
 * postLogin(taiKhoan, matKhau, history)
 */
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
        // console.log("login", res.data);
        // gửi lên store
        dispatch(
          action(LOGIN_SUCCESS, {
            open: true,
            severity: "success",
            message: "Đăng nhập thành công",
            data: res.data,
          })
        );

        //lưu data xuông localStorage
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        // trở lại trang trước đó
        setTimeout(function () {
          history.push("/");
        }, 3000);
      })
      .catch((err) => {
        dispatch(stopLoading());
        console.log(err.response.data);
        // gửi lên store
        dispatch(
          action(LOGIN_FAILED, {
            open: true,
            severity: "error",
            message: "Tài khoản hoặc mật khẩu không đúng",
          })
        );
      });
  };
};

/**
 * khi chuyển hướng đến trang admin, thì phải đăng nhập bằng tài khoản QUẢN TRỊ.
 * postAdminLogin(taiKhoan, matKhau)
 */
export const postAdminLogin = (taiKhoan, matKhau, history) => {
  return (dispatch) => {
    dispatch(startLoading());
    const data = {
      taiKhoan,
      matKhau,
    };
    axios
      .post(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        data
      )
      .then((response) => {
        dispatch(stopLoading());
        console.log("login", response.data);

        if (response.data.maLoaiNguoiDung === "QuanTri") {
          dispatch(
            action(ADMIN_LOGIN_SUCCESS, {
              open: true,
              severity: "success",
              message: "Đăng nhập thành công",
              data: response.data,
            })
          );
          // lưu vào sessionStorage.
          sessionStorage.setItem("adminLogin", JSON.stringify(response.data));
          setTimeout(function () {
            history.push("/admin");
          }, 3000);
        } else {
          dispatch(
            action(ADMIN_LOGIN_FAILED, {
              open: true,
              severity: "error",
              message: "Tài khoản hoặc mật khẩu không đúng",
            })
          );
        }
      })
      .catch((error) => {
        dispatch(
          action(ADMIN_LOGIN_FAILED, {
            open: true,
            severity: "error",
            message: "Tài khoản hoặc mật khẩu không đúng",
          })
        );
      });
  };
};

/**
 * Đăng ký vào trang movie booking
 * postRegister(user)
 */

export const postRegister = (user, history) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .post(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        user
      )
      .then((response) => {
        //nếu đăng ký thành công
        dispatch(stopLoading());

        dispatch(
          action(REGISTER_USER_SUCCESS, {
            open: true,
            severity: "success",
            message: "Đăng ký thành công",
          })
        );
        setTimeout(function () {
          history.push("/login");
        }, 3000);
      })
      .catch((error) => {
        //nếu đăng ký ko thành công
        dispatch(stopLoading());

        dispatch(
          action(REGISTER_USER_FAILED, {
            open: true,
            severity: "error",
            message: error.response.data,
          })
        );
      });
  };
};

/**
 * lấy danh sách người dùng
 * getUserList()
 */

export const getUserList = () => {
  return (dispatch) => {
    dispatch(startLoading());

    axios
      .get(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"
      )
      .then((response) => {
        dispatch(stopLoading());
        // nếu call api thành công
        dispatch(action(GET_USER_LIST_SUCCESS, response.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        // nếu call api ko thành công
        dispatch(
          action(GET_USER_LIST_FAILED, {
            open: true,
            severity: "error",
            message: err.response.data,
          })
        );
      });
  };
};

/**
 * lấy danh sách người dùng phân trang
 * getUserListPagination(page, numberOfPages)
 */
export const getUserListPagination = (page, numberOfPages) => {
  return (dispatch) => {
    dispatch(startLoading());

    axios
      .get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=${numberOfPages}`
      )
      .then((response) => {
        dispatch(stopLoading());
        // nếu call api thành công
        dispatch(action(GET_USER_LIST_PAGINATION_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(stopLoading());
        // nếu call api ko thành công
        dispatch(
          action(GET_USER_LIST_PAGINATION_FAILED, {
            open: true,
            severity: "error",
            message: error.response.data,
          })
        );
      });
  };
};

/**
 * Tìm kiếm người dùng phân trang
 * searchUserPagination(user, page, pageOfNumber)
 */

export const searchUserPagination = (user, page, pageOfNumber) => {
  return (dispatch) => {
    axios
      .get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=${user}&soTrang=${page}&soPhanTuTrenTrang=${pageOfNumber}`
      )
      .then((response) => {
        // nếu tìm kiếm thành công
        dispatch(action(SEARCH_USER_PAGINATION_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(action(SEARCH_USER_PAGINATION_FAILED, error.response.data));
      });
  };
};

/**
 * thêm tài khoản
 * addUser(user)
 */
export const addUser = (user) => {
  return (dispatch) => {
    // headers Authorization
    const userAdmin = JSON.parse(sessionStorage.getItem("adminLogin"));
    const { accessToken } = userAdmin;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    axios
      .post(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        user,
        { headers }
      )
      .then((response) => {
        // nếu thêm user thành công
        dispatch(
          action(ADD_USER_SUCCESS, {
            open: true,
            severity: "success",
            message: "Thêm người dùng thành công",
          })
        );
      })
      .catch((error) => {
        // nếu thêm người dùng không thành công
        dispatch(
          action(ADD_USER_FAILED, {
            open: true,
            severity: "error",
            message: error.response.data,
          })
        );
      });
  };
};

/**
 * xóa tài khoản người dùng
 * deleteUser(taiKhoan)
 */

export const deleteUser = (taiKhoan) => {
  return (dispatch) => {
    // headers Authorization
    const userAdmin = JSON.parse(sessionStorage.getItem("adminLogin"));
    const { accessToken } = userAdmin;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    axios
      .delete(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        { headers }
      )
      .then((response) => {
        // nếu xóa thành công
        dispatch(
          action(DELETE_USER_SUCCESS, {
            open: true,
            severity: "success",
            message: "Xóa thành công",
          })
        );
      })
      .catch((error) => {
        // nếu xóa không thành công
        dispatch(
          action(DELETE_USER_FAILED, {
            open: true,
            severity: "error",
            message: error.response.data,
          })
        );
      });
  };
};

/**
 * Chỉnh sửa thông tin user
 * editUser(user)
 */

export const editUser = (user) => {
  return (dispatch) => {
    // headers Authorization
    const userAdmin = JSON.parse(sessionStorage.getItem("adminLogin"));
    const { accessToken } = userAdmin;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    axios
      .put(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        user,
        { headers }
      )
      .then((response) => {
        //nếu chỉnh sửa thành công
        dispatch(
          action(EDIT_USER_SUCCESS, {
            open: true,
            severity: "success",
            message: "Cập nhật thành công",
          })
        );
      })
      .catch((error) => {
        //nếu chỉnh sửa ko thành công
        console.log(error.response);
        dispatch(
          action(EDIT_USER_FAILED, {
            open: true,
            severity: "error",
            message: error.response.data,
          })
        );
      });
  };
};

/**
 * lấy thông tin người dùng
 * getInfoUser(taiKhoan)
 */
export const getInfoUser = (taiKhoan) => {
  return (dispatch) => {
    dispatch(startLoading());
    const userInfo = {
      taiKhoan: taiKhoan,
    };
    axios
      .post(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        userInfo
      )
      .then((response) => {
        dispatch(stopLoading());
        // console.log("response.data", response.data);
        //nếu lấy thành công
        dispatch(action(GET_INFO_USER_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(stopLoading());
        // nếu lấy không thành công
        dispatch(action(GET_INFO_USER_FAILED, error.response.data));
      });
  };
};
