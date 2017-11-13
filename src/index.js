import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import React from "react";

import App from "./App";

const defaultState = {
  appName: "Juls_World",
  articles: null
};

const reducer = function(state = defaultState, action) {
  return state;
};

const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById("root"));
