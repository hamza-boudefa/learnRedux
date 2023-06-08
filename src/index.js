import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import store from "./redux/store";
import { Provider } from "react-redux";
// we need to import Provider from react-redux ans the store we created earlier,
//  so we can wrap our app with redux store
// next step =>go to todoTypes or todoConstants
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
