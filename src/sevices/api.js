import { create } from "apisauce";

const api = create({
  baseURL: "http://18.139.50.74:8080",
  timeout: 60000,
});

export default api;
