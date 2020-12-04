import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { checklistReducer } from "./checklist";

export const rootReducer = combineReducers({
  auth: authReducer,
  checklist: checklistReducer,
});
