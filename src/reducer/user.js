import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from "../constants/user";

const initialStateUser = {
  users: [],
  isLoading: false,
  isError: null,
};

export const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: null,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.data,
        isError: null,
      };

    case GET_USER_FAILURE:
      return {
        ...state,
        isLoading: true,
        isError: action.error,
      };

    default:
      return state;
  }
};
