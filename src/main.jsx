import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/raleway";
import "./index.css";
import { ContextProvider } from "./context/Context";
// import Sidebar from "./components/Sidebar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
      {/* <Sidebar/> */}
    </ContextProvider>
  </React.StrictMode>
);
