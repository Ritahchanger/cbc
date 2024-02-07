import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";

import Store from "./reduxx/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
