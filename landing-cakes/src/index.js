import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { data, functions, subscribe } from "./data";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <App data={data} functions={functions} />,
    document.getElementById("root")
  );
};

rerenderEntireTree(data);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
