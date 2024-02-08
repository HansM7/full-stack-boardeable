import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../components/pages/login.page";
import SignupPage from "../components/pages/signup.page";
import HomePage from "../components/pages/home.page";
import BoardPage from "../components/pages/board.page";
import AccountPage from "../components/pages/account.page";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/boards/:id",
        element: <BoardPage></BoardPage>,
      },
      {
        path: "/account",
        element: <AccountPage></AccountPage>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
]);
