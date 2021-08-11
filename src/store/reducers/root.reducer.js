import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import commonReducer from "./common.reducer";
import bookingReducer from "./booking.reducer";
import cinemaReducer from "./cinema.reducer";
const rootReducer = combineReducers({
  common: commonReducer,
  movie: movieReducer,
  booking: bookingReducer,
  cinema: cinemaReducer,
});

export default rootReducer;
