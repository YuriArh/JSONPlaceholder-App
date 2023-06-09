import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./sagas";

import reducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ ...reducer }),

  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
