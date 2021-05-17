import { all, call } from "redux-saga/effects";
import searMovieSaga from "./searchSaga";

export default function* rootSaga() {
  yield all([
    call(searMovieSaga),
    // neu co nhieu saga nua thi call o day
  ]);
}
