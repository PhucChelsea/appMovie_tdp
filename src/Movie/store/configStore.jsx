import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import rootReducer from "../reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Sagas";

const configRootPersist = {
  key: "root",
  storage,
  whitelist: ["searchMovie"], // name reducer trong combineReducer
};
const rootPersistReducer = persistReducer(configRootPersist, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const configStore = (loadingState = {}) => {
  const store = createStore(
    rootPersistReducer,
    loadingState,
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor };
};
export default configStore;
