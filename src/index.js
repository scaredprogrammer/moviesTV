import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>  , document.getElementById("root"));
// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>  , document.getElementById("root"));

serviceWorkerRegistration.register();
