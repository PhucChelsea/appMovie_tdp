import * as searchTypes from "./search-types";

export const searchMovie = (nameMovie, cPage) => ({
  type: searchTypes.SEARCH_MOVIES,
  nameMovie,
  cPage,
});

//dinh nghia action saga

export const startSearchMovie = (loading) => ({
  type: searchTypes.START_SEARCH_MOVIES,
  loading,
});
export const stopSearchMovie = (loading) => ({
  type: searchTypes.END_SEARCH_MOVIES,
  loading,
});
export const searchMovieSuccess = (movies) => ({
  type: searchTypes.SEARCH_MOVIES_SUCCESS,
  movies,
});
export const searchMovieFail = (error) => ({
  type: searchTypes.SEARCH_MOVIES_FAIL,
  error,
});
