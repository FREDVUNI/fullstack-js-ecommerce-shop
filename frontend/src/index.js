import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux"
import store from "./store"
import { ToastContainer } from 'react-toastify';

import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ToastContainer/>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
