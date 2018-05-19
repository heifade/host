import * as React from "react";
import * as ReactDOM from "react-dom";
import { MainComponent } from "../main/main";
import "antd/dist/antd.css";

let styles = require("./index.less");

let div = document.createElement("div");
div.className = styles.divMain;
document.body.appendChild(div);

ReactDOM.render(<MainComponent />, div);
