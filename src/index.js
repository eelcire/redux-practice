import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

import App from "./components/App";

const store = createStore(
  rootReducer,
  ["Todo 1", "Todo 2", "Todo 3"],
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
