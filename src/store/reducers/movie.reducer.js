import {
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
} from "../constants/movie.const";

const initialState = {
  movieList: [],
  movieDetail: {},
  errors: {},
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE_LIST_SUCCESS: {
      state.movieList = payload.items;
      return { ...state };
    }
    case GET_MOVIE_LIST_FAILED: {
      state.errors = payload;
      return { ...state };
    }
    // detail
    case GET_MOVIE_DETAIL_SUCCESS: {
      return { ...state, movieDetail: payload };
    }
    default:
      return state;
  }
};

export default movieReducer;
