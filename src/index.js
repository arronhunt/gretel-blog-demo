import React from "react";
import r2wc from "@r2wc/react-to-web-component";

import { Theme } from "@radix-ui/themes";
import "./index.css";
import "@radix-ui/themes/styles.css";

import World from "./components/HelloWorld";
import Table from "./components/Table";
import AlertDialog from "./components/AlertDialog";

function withTheme(WrappedComponent) {
  return function ThemedComponent({ ...props }) {
    return (
      <Theme>
        <WrappedComponent {...props} />
      </Theme>
    );
  };
}

const WorldComponent = r2wc(withTheme(World));
const TableComponent = r2wc(withTheme(Table));
const AlertComponent = r2wc(withTheme(AlertDialog));

customElements.define("hello-world", WorldComponent);
customElements.define("my-table", TableComponent);
customElements.define("alert-component", AlertComponent);
