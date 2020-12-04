import { call, put } from "redux-saga/effects";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../constants/auth";
import { authLogin, authRegister } from "../sevices/auth";

export function* authLoginSaga(action) {
  const data = yield call(authLogin, action.params);

  let token = data.data.data.token;
  console.log(token);
  if (data) {
    yield put({ type: LOGIN_SUCCESS, token });
  } else {
    yield put({ type: LOGIN_FAILURE, data });
  }

  //   if (ok) {
  //     yield put({ type: GET_USER_SUCCESS, data });
  //   } else {
  //     yield put({ type: GET_USER_FAILURE, problem });
  //   }
}

export function* authRegisterSaga(action) {
  const data = yield call(authRegister, action.params);
  console.log(data);

  if (data) {
    alert("registrasi success");
  }

  //   if (data) {
  //     yield put({ type: LOGIN_SUCCESS, data });
  //   } else {
  //     yield put({ type: LOGIN_FAILURE, data });
  //   }
}
