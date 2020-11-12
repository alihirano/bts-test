import { GET_USER_REQUEST } from "../constants/user";

export const getUsersAction = (data) => {
  return {
    type: GET_USER_REQUEST,
    payload: data,
  };
};
