import {
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAILED,
  GET_MOVIE_LIST_BY_NAME_SUCCESS,
  GET_MOVIE_LIST_BY_NAME_FAILED,
  GET_MOVIE_LIST_PANIGATION_SUCCESS,
  GET_MOVIE_LIST_PANIGATION_FAILED,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAILED,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILED,
  EDIT_MOVIE_SUCCESS,
  EDIT_MOVIE_FAILED,
  CREATE_MOVIE_SHOWTIMES_SUCCESS,
  CREATE_MOVIE_SHOWTIMES_FAILED,
} from "../constants/movie.const";

const initialState = {
  movieListPanigations: [],
  totalPage: 0,
  page: 0,
  movieList: [],
  movieDetail: {},
  searchList: [],
  errors: {},
  notify: {},
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
      state.page = payload.currentPage;
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
      return { ...state, movieListPanigations: payload, searchList: payload };
    }
    case GET_MOVIE_LIST_BY_NAME_FAILED: {
      state.errors = payload;
      return { ...state };
    }

    case ADD_MOVIE_SUCCESS: {
      state.notify = payload;
      return { ...state };
    }
    case ADD_MOVIE_FAILED: {
      state.notify = payload;
      return { ...state };
    }
    case DELETE_MOVIE_SUCCESS: {
      state.notify = payload;
      return { ...state };
    }
    case DELETE_MOVIE_FAILED: {
      state.notify = payload;
      return { ...state };
    }
    case EDIT_MOVIE_SUCCESS: {
      state.notify = payload;
      return { ...state };
    }
    case EDIT_MOVIE_FAILED: {
      state.notify = payload;
      return { ...state };
    }
    case CREATE_MOVIE_SHOWTIMES_SUCCESS: {
      state.notify = payload;
      return { ...state };
    }
    case CREATE_MOVIE_SHOWTIMES_FAILED: {
      state.notify = payload;
      return { ...state };
    }
    case "CLOSE_NOTIFICATION": {
      state.notify.open = payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default movieReducer;
