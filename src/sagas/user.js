import { call, put } from "redux-saga/effects";
import {
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from "../constants/user";
import { getUser } from "../sevices/user";


export function* getUserSaga(action) {
  const {data, ok, problem} = yield call(getUser)

  if (ok) {
    yield put({type: GET_USER_SUCCESS,data})
  }else{
yield put({type : GET_USER_FAILURE, problem})
  }
  
}


