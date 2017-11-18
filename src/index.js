import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import React from "react";

import store from "./store";
import App from "./components/App";
import Article from "./components/Articles";
import Home from "./components/Home";
import Login from "./components/login";
import Register from "./components/Register";
import Settings from "./components/Settings";
import Editor from "./components/Editor";

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/settings" component={Settings} />
        <Route path="article/:id" component={Article} />
        <Route path="editor" component={Editor} />
        <Route path="editor/:slug" component={Editor} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
