import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import commonReducer from "./common.reducer";
import bookingReducer from "./booking.reducer";
import cinemaReducer from "./cinema.reducer";
import userReducer from "./user.reducer";
import sidebarShowReducer from "./sidebarShow.reducer";
const rootReducer = combineReducers({
  common: commonReducer,
  movie: movieReducer,
  booking: bookingReducer,
  cinema: cinemaReducer,
  sidebarShow: sidebarShowReducer,
  user: userReducer,
});

export default rootReducer;
