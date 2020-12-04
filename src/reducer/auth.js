import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTRATION_FAILURE,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
} from "../constants/auth";

const initialState = {
  token: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    case REGISTRATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.data,
      };
    case REGISTRATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    default:
      return state;
  }
};
