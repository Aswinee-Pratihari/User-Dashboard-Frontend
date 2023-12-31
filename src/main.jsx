import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalProvider } from "./context/ModalState.jsx";
import { UserProvider } from "./context/UserState.jsx";
import { QueryProvider } from "./context/QueryState.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryProvider>
      <UserProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </UserProvider>
    </QueryProvider>
  </React.StrictMode>
);
