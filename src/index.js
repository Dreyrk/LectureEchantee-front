import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./components/Router";
import { UserContextProvider } from "./context/userContext";
import { ThemeContextProvider } from "./context/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
