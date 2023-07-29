import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers";
const composedEnhancers = composeWithDevTools();
/*
  3 params
  1. rootReducer: 1 store co 1 root reducer
  2. initValue: init value cua store
  3. enhancers: setup middlewares
 */
const store = createStore(
  rootReducer,
  composedEnhancers
);

export default store;