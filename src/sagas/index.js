import { all, takeEvery } from "redux-saga/effects";
import { GET_USER_REQUEST } from "../constants/user";
import {getUserSaga} from './user'

export default function* rootSaga() {
  yield all([takeEvery(GET_USER_REQUEST, getUserSaga)]);
}
