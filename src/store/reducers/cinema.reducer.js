import {
  GET_CINEMA_SYSTEM_INFO_SUCCESS,
  GET_CINEMA_SYSTEM_INFO_FAILED,
  GET_CINEMA_SYSTEM_SUCCESS,
  GET_CINEMA_SYSTEM_FAILED,
} from "../constants/cinema.const";

const initialState = {
  cinemaList: [],
  cinemaInfo: [],
  err: {},
};

const cinemaReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CINEMA_SYSTEM_SUCCESS:
      const newState = { ...state };
      newState.cinemaList = payload;
      return newState;
    case GET_CINEMA_SYSTEM_FAILED: {
      state.err = payload;
      return { ...state };
    }
    case GET_CINEMA_SYSTEM_INFO_SUCCESS:
      return { ...state, cinemaInfo: payload };
    default:
      return state;
  }
};

export default cinemaReducer;
