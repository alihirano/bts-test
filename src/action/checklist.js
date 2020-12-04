import {
  CREATE_CHECKLIST_REQUEST,
  DELETE_CHECKLIST_REQUEST,
  GET_ALL_CHECKLIST_REQUEST,
} from "../constants/checklist";

export const getAllChecklistAction = (token) => {
  return {
    type: GET_ALL_CHECKLIST_REQUEST,
    token,
  };
};

export const createChecklistAction = (token, params) => {
  return {
    type: CREATE_CHECKLIST_REQUEST,
    token,
    params,
  };
};

export const deleteChecklistAction = (token, id) => {
  return {
    type: DELETE_CHECKLIST_REQUEST,
    token,
    id,
  };
};
