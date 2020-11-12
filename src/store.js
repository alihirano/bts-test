import { rootReducer } from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const { createStore, applyMiddleware } = require("redux");
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
