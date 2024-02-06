import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./components/pages/login.page";
import "./main.css";
import SignuPage from "./components/pages/signup.page";
import { ToastProvider } from "./context/auth-toast.context";
import AccountPage from "./components/pages/account.page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <SignuPage></SignuPage>
    </ToastProvider>
  </React.StrictMode>
);
