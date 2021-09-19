import {
  GET_CINEMA_SYSTEM_INFO_SUCCESS,
  GET_CINEMA_SYSTEM_INFO_FAILED,
  GET_CINEMA_SYSTEM_SUCCESS,
  GET_CINEMA_SYSTEM_FAILED,
  GET_CINEMA_SYSTEM_SHOWTIME_SUCCESS,
  GET_CINEMA_SYSTEM_SHOWTIME_FAILED,
} from "../constants/cinema.const";

const initialState = {
  cinemaList: [],
  cinemaInfo: [],
  cinemaSystemShowtime: [],
  err: {},
};

const cinemaReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CINEMA_SYSTEM_SUCCESS:
      const newState = { ...state };
      newState.cinemaList = payload;
      return newState;
    case GET_CINEMA_SYSTEM_INFO_FAILED:
      return { ...state, err: payload };
    case GET_CINEMA_SYSTEM_FAILED: {
      state.err = payload;
      return { ...state };
    }
    case GET_CINEMA_SYSTEM_INFO_SUCCESS:
      return { ...state, cinemaInfo: payload };
    case GET_CINEMA_SYSTEM_SHOWTIME_SUCCESS:
      return { ...state, cinemaSystemShowtime: payload.lstCumRap };
    case GET_CINEMA_SYSTEM_SHOWTIME_FAILED:
      return { ...state, err: payload };
    default:
      return state;
  }
};

export default cinemaReducer;
