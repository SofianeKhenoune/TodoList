/* eslint-disable comma-dangle */
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import reducer from "src/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware());

const store = createStore(reducer, enhancers);

export default store;
