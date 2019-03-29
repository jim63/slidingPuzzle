import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { HashRouter, Route } from "react-router-dom";

import App from "./component/App";
import Input from "./component/Input";
import Pages from "./component/Pages";
import Breakers from "./component/Breakers";

import reducers from "./reducers";

ReactDOM.render(
  <HashRouter>
    <Provider store={createStore(reducers)}>
      <Route
        path="/"
        exact
        component={() => (
          <div>
            <Input />

            <div className="container">
              <App />
            </div>
          </div>
        )}
      />

      <Route
        path="/breaker"
        exact
        component={() => {
          return (
            <div className="breakers">
              <Breakers />
              {/* <p class="breakerTitle">Breakers</p>
              <div class="breakers_each_t">
                <p>Name</p>
                <p>Moves</p>
              </div>
              <div class="breakers_each">
                <p>Jim</p>
                <p>30</p>
              </div>
              <div class="br" />
              <div class="breakers_each">
                <p>Jim2</p>
                <p>200</p>
              </div>
              <div class="br" /> */}
            </div>
          );
        }}
      />

      <Pages />
    </Provider>
  </HashRouter>,
  document.querySelector("#root")
);
