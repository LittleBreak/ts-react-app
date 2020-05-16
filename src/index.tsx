import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import SE from "./components/SE";
// import BFC from "./pages/BFC";
// import AlignCenter from "./pages/AlignCenter";
import Module from "./pages/Module";
import * as serviceWorker from "./serviceWorker";
// import ShellApp from "./ShellApp";

ReactDOM.render(
  <React.StrictMode>
    <Module></Module>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
