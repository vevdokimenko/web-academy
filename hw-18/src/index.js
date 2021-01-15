import React from "react";
import ReactDOM from "react-dom";
import { Meal } from "./components/meal/meal";
import "./base.scss";
import "./index.scss";

ReactDOM.render(
  <Meal serverUrl="https://www.themealdb.com/api/json/v1/1/random.php" />,
  document.getElementById("root")
);
