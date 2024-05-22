import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme, { jss, StylesProvider } from "./theme";
import "./index.css";

const rootElement = document.getElementById("root");

document.body.setAttribute("dir", "rtl");

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>
);
