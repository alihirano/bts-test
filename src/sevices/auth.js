import api from "./api";

export const authLogin = (params) => {
  return api.post("/login", params, {
    headers: { "Content-Type": "application/json" },
  });
};
export const authRegister = (params) => {
  return api.post("/register", params, {
    headers: { "Content-Type": "application/json" },
  });
};
