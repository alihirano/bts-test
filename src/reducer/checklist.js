import {
  CREATE_CHECKLIST_FAILURE,
  CREATE_CHECKLIST_REQUEST,
  CREATE_CHECKLIST_SUCCESS,
  GET_ALL_CHECKLIST_FAILURE,
  GET_ALL_CHECKLIST_REQUEST,
  GET_ALL_CHECKLIST_SUCCESS,
} from "../constants/checklist";

const initialState = {
  checklists: [],
  loading: false,
  error: null,
  loadingCreate: false,
  successCreate: false,
  errorCreate: null,
};

export const checklistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHECKLIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CHECKLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        checklists: action.checklists,
      };
    case GET_ALL_CHECKLIST_FAILURE:
      return {
        ...state,
        loading: false,
        checklists: action.data,
      };

    case CREATE_CHECKLIST_REQUEST:
      return {
        ...state,
        loadingCreate: true,
      };
    case CREATE_CHECKLIST_SUCCESS:
      return {
        ...state,
        loadingCreate: false,
        successCreate: true,
      };
    case CREATE_CHECKLIST_FAILURE:
      return {
        ...state,
        loadingCreate: false,
        successCreate: false,
        errorCreate: action.data,
      };

    default:
      return state;
  }
};
