import { Provider } from "react-redux";
import storeRedux from "./Store/index";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
