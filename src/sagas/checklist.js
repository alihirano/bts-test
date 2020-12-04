import { call, put } from "redux-saga/effects";
import {
  CREATE_CHECKLIST_FAILURE,
  CREATE_CHECKLIST_SUCCESS,
  GET_ALL_CHECKLIST_FAILURE,
  GET_ALL_CHECKLIST_SUCCESS,
} from "../constants/checklist";
import {
  createChecklist,
  deleteChecklist,
  getAllChecklist,
} from "../sevices/checklist";

export function* getAllChecklistSaga(action) {
  const data = yield call(getAllChecklist, action.token);

  let checklists = data.data.data;

  if (data) {
    yield put({ type: GET_ALL_CHECKLIST_SUCCESS, checklists });
  } else {
    yield put({ type: GET_ALL_CHECKLIST_FAILURE, data });
  }
}

export function* createChecklistSaga(action) {
  const data = yield call(createChecklist, action.token, action.params);
  if (data) {
    yield put({ type: CREATE_CHECKLIST_SUCCESS, data });
  } else {
    yield put({ type: CREATE_CHECKLIST_FAILURE, data });
  }
  //   console.log(data);
}

export function* deleteChecklistSaga(action) {
  const data = yield call(deleteChecklist, action.token, action.id);
  //   console.log(data);
}
