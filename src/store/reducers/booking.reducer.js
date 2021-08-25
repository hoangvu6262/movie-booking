import {
  GET_BOOKING_LIST,
  GET_BOOKING_LIST_SUCCESS,
  GET_BOOKING_LIST_FAILED,
} from "../constants/booking.const";

const initialState = {
  movieInfo: {},
  listChair: [],
};

const bookingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKING_LIST_SUCCESS:
      return {
        ...state,
        movieInfo: payload.thongTinPhim,
        listChair: payload.danhSachGhe,
      };

    case GET_BOOKING_LIST_FAILED:
      return { ...state, error: payload };

    case "DANG_CHON": {
      const { listChair, listDangChon } = state;
      const index = listChair.findIndex(
        (chair) => chair.maGhe === payload.maGhe
      );
      console.log(index);
      if (index !== -1) {
        const oldChair = listChair[index];
        const newChair = { ...oldChair, dangChon: !oldChair.dangChon };
        listChair[index] = newChair;
        // console.log(state);
      }
      return { ...state };
    }

    default:
      return state;
  }
};

export default bookingReducer;
