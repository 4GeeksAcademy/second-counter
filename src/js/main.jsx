import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import Home from "./components/Home";
import SecondsCounter from "./components/SecondsCounter";
const root = ReactDOM.createRoot(document.getElementById("root"));

let counter = 0;
setInterval(() => {
  counter++;
  root.render(<SecondsCounter seconds={counter} />);
}, 1000);
