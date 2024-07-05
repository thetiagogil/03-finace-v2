import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./main.css";
import { App } from "./router/app.jsx";
import { theme } from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme} defaultMode="light">
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CssVarsProvider>
  </React.StrictMode>
);
