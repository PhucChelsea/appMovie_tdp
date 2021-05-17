import * as searchTypes from "../actions/search-types";

const initState = {
  loading: false,
  dataMovies: [],
  error: null,
  keywords: "",
};
export const searchMovieReducer = (state = initState, action) => {
  switch (action.type) {
    case searchTypes.START_SEARCH_MOVIES:
      return { ...state, loading: action.loading };
    case searchTypes.END_SEARCH_MOVIES:
      return { ...state, loading: action.loading };
    case searchTypes.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        dataMovies: action.movies,
        error: null,
        keywords: action.movies.keyword
      };
    case searchTypes.SEARCH_MOVIES_FAIL:
      return {
        ...state,
        dataMovies: [],
        error: action.error,
      };
    default:
      return state;
  }
};
