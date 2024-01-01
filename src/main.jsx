import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalProvider } from "./context/ModalState.jsx";
import { UserProvider } from "./context/UserState.jsx";
import { QueryProvider } from "./context/QueryState.jsx";
import { AuthProvider } from "./context/AuthState.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryProvider>
        <UserProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </UserProvider>
      </QueryProvider>
    </AuthProvider>
  </React.StrictMode>
);
