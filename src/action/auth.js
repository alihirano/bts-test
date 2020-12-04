import { LOGIN_REQUEST, REGISTRATION_REQUEST } from "../constants/auth";

export const authLoginAction = (params) => {
  return {
    type: LOGIN_REQUEST,
    params,
  };
};

export const authRegisterAction = (params) => {
  return {
    type: REGISTRATION_REQUEST,
    params,
  };
};
