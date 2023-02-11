import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/raleway";
import "./index.css";
import { ContextProvider } from "./context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
