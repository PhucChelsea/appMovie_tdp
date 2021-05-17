import { put, call, takeLatest } from "redux-saga/effects";
import * as searchTypes from "../actions/search-types";
import * as actions from "../actions/index";
import * as api from "../Services/api-search";

function* searchMovieSaga({ nameMovie, cPage }) {
  try {
    yield put(actions.startSearchMovie(true));
    const data = yield call(api.getDataSearchMovies, nameMovie, cPage);
    if (data.results.length > 0) {
      data.keyword = nameMovie;
      yield put(actions.searchMovieSuccess(data));
    } else {
      yield put(
        actions.searchMovieFail({
          code: 404,
          message: "Not found data",
        })
      );
    }
    yield put(actions.stopSearchMovie(false));
  } catch (error) {
    yield put(actions.searchMovieFail(error));
  }
}

// theo doi action(ham ben tren xu ly)
export default function* watchSearchMovieSaga() {
  yield takeLatest(searchTypes.SEARCH_MOVIES, searchMovieSaga);
}
