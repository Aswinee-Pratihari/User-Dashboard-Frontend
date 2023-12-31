import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalProvider } from "./context/ModalState.jsx";
import { UserProvider } from "./context/UserState.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </UserProvider>
  </React.StrictMode>
);
