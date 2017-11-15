import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { promiseMiddleware } from "./middleware";

import auth from "./reducers/auth";
import common from "./reducers/common";
import home from "./reducers/home";

const defaultState = {
  appName: "Juls_World",
  articles: null
};

const reducer = combineReducers({
  auth,
  common,
  home
});

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(
  reducer,
  compose(
    applyMiddleware(promiseMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
