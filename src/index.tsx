import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "loft-taxi-mui-theme";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./pages/HomePage";

ReactDOM.render(
  // <React.StrictMode>

  <MuiThemeProvider theme={theme}>
    <HomePage />
  </MuiThemeProvider>,

  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
