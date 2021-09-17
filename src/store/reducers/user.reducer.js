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

const initialState = {
  isLogin: false,
  isAdimLogin: false,
  totalPage: 0,
  page: 0,
  userPagination: [],
  userList: [],
  infoUser: {},
  notify: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, isAdimLogin: true, notify: payload };
    case LOGIN_FAILED:
      return { ...state, isAdimLogin: false, notify: payload };
    case ADMIN_LOGIN_SUCCESS:
      return { ...state, isAdimLogin: true, notify: payload };
    case ADMIN_LOGIN_FAILED:
      return { ...state, isAdimLogin: false, notify: payload };
    case "ADMIN_LOGIN_AUTO":
      return { ...state, isAdimLogin: true };
    case REGISTER_USER_SUCCESS:
      return { ...state, notify: payload };
    case REGISTER_USER_FAILED:
      return { ...state, notify: payload };
    case "CLOSE_NOTIFICATION": {
      state.notify.open = payload;
      return { ...state };
    }
    case GET_USER_LIST_SUCCESS:
      return { ...state, userList: payload };
    case GET_USER_LIST_FAILED:
      return {
        ...state,
        notify: payload,
      };
    case GET_USER_LIST_PAGINATION_SUCCESS:
      return {
        ...state,
        totalPage: payload.totalPages,
        page: payload.currentPage,
        userPagination: payload.items,
      };
    case GET_USER_LIST_PAGINATION_FAILED:
      return {
        ...state,
        notify: payload,
      };
    case SEARCH_USER_PAGINATION_SUCCESS:
      return {
        ...state,
        totalPage: payload.totalPages,
        page: payload.currentPage,
        userPagination: payload.items,
      };
    case SEARCH_USER_PAGINATION_FAILED:
      return {
        ...state,
        notify: payload,
      };
    case ADD_USER_SUCCESS:
      return { ...state, notify: payload };
    case ADD_USER_FAILED:
      return { ...state, notify: payload };
    case DELETE_USER_SUCCESS:
      return { ...state, notify: payload };
    case DELETE_USER_FAILED:
      return { ...state, notify: payload };
    case EDIT_USER_SUCCESS:
      return { ...state, notify: payload };
    case EDIT_USER_FAILED:
      return { ...state, notify: payload };
    case GET_INFO_USER_SUCCESS:
      // console.log("payload", payload);
      return { ...state, infoUser: payload };
    case GET_INFO_USER_FAILED:
      return { ...state, infoUser: payload };

    case "ADMIN_LOGOUT":
      return { ...state, isAdimLogin: payload };
    default:
      return { ...state };
  }
};

export default userReducer;
