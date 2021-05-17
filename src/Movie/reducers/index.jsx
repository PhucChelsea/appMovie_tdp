import { combineReducers } from "redux";
import { searchMovieReducer } from "./search-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const configMoviePersist = {
  key: " search-movie-s",
  storage,
  whitelist: ["dataMovies", "keywords"], // muon luu state gi cua reducer
};

const rootReducer = combineReducers({
  searchMovie: persistReducer(configMoviePersist, searchMovieReducer),
});
export default rootReducer;
