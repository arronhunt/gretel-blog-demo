import React from "react";
import ReactDOM from "react-dom/client";
import r2wc from "@r2wc/react-to-web-component";
import World from "./components/HelloWorld";
import "./index.css";
import App from "./App";

const WorldComponent = r2wc(World);

customElements.define("hello-world", WorldComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
