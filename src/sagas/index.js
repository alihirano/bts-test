import { all, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST, REGISTRATION_REQUEST } from "../constants/auth";
import {
  CREATE_CHECKLIST_REQUEST,
  DELETE_CHECKLIST_REQUEST,
  GET_ALL_CHECKLIST_REQUEST,
} from "../constants/checklist";
import { authLoginSaga, authRegisterSaga } from "./auth";
import {
  createChecklistSaga,
  deleteChecklistSaga,
  getAllChecklistSaga,
} from "./checklist";

export default function* rootSaga() {
  //auth
  yield all([takeLatest(LOGIN_REQUEST, authLoginSaga)]);
  yield all([takeLatest(REGISTRATION_REQUEST, authRegisterSaga)]);

  //checklist
  yield all([takeLatest(GET_ALL_CHECKLIST_REQUEST, getAllChecklistSaga)]);
  yield all([takeLatest(CREATE_CHECKLIST_REQUEST, createChecklistSaga)]);
  yield all([takeLatest(DELETE_CHECKLIST_REQUEST, deleteChecklistSaga)]);
}
