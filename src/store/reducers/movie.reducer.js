import {
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAILED,
  GET_MOVIE_LIST_BY_NAME_SUCCESS,
  GET_MOVIE_LIST_BY_NAME_FAILED,
  GET_MOVIE_LIST_PANIGATION_SUCCESS,
  GET_MOVIE_LIST_PANIGATION_FAILED,
} from "../constants/movie.const";

const initialState = {
  movieListPanigations: [],
  totalPage: 0,
  movieList: [],
  movieDetail: {},
  searchList: [],
  errors: {},
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE_LIST_SUCCESS: {
      state.movieList = payload;
      return { ...state };
    }
    case GET_MOVIE_LIST_FAILED: {
      state.errors = payload;
      return { ...state };
    }
    case GET_MOVIE_LIST_PANIGATION_SUCCESS: {
      state.movieListPanigations = payload.items;
      state.totalPage = payload.totalPages;
      return { ...state };
    }
    case GET_MOVIE_LIST_PANIGATION_FAILED: {
      state.errors = payload;
      return { ...state };
    }
    // detail
    case GET_MOVIE_DETAIL_SUCCESS: {
      return { ...state, movieDetail: payload };
    }
    case GET_MOVIE_DETAIL_FAILED: {
      state.errors = payload;
      return { ...state };
    }

    case GET_MOVIE_LIST_BY_NAME_SUCCESS: {
      return { ...state, searchList: payload };
    }
    case GET_MOVIE_LIST_BY_NAME_FAILED: {
      state.errors = payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default movieReducer;
