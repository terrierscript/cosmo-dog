import * as React from "react";
import ReactDOM from "react-dom";
import { Main } from "./components/Main";
import { baseStyles } from "./components/Reset";

baseStyles();
ReactDOM.render(<Main />, document.getElementById("container"));
