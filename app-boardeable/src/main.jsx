import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./components/pages/login.page";
import "./main.css";
import SignupPage from "./components/pages/signup.page";
import { ToastProvider } from "./context/auth-toast.context";
import AccountPage from "./components/pages/account.page";
import HomePage from "./components/pages/home.page";
import BoardPage from "./components/pages/board.page";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <RouterProvider router={router}></RouterProvider>
    </ToastProvider>
  </React.StrictMode>
);
