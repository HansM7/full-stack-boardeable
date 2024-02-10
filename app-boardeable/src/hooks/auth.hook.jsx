import axios from "axios";
import { useContext, useState } from "react";
import { ToastContext } from "../context/auth-toast.context";
import { baseUrl } from "../constants/api.constant";
import { actions_auth } from "../constants/auth.constant";
import { useNavigate } from "react-router-dom";

export function authHook() {
  const { setErrorToast } = useContext(ToastContext);

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  // Formulario de eventos
  async function handleSubmit(e, action) {
    e.preventDefault();
    if (action === actions_auth.LOGIN) {
      try {
        const response = await axios.post(baseUrl + "/auth/login", data);
        window.localStorage.setItem("auth-session", response.data.data.token);
        navigate("/");
      } catch (error) {
        console.log(error);
        setErrorToast("Login incorrect");
      }
    } else if (action === actions_auth.SIGNUP) {
      try {
        const response = await axios.post(baseUrl + "/auth/signup", data);
        window.localStorage.setItem("auth-session", response.data.data.token);
        navigate("/");
      } catch (error) {
        setErrorToast("Signup incorrect");
      }
    }
  }

  async function validateSession() {
    try {
      const headers = {
        Authorization: window.localStorage.getItem("auth-session"),
      };
      await axios.get(baseUrl + "/auth/validation", { headers });
      setIsLoading(!setIsLoading);
    } catch (error) {
      window.localStorage.clear();
      navigate("/login");
    }
  }

  async function logout() {
    window.localStorage.clear();
    navigate("/login");
  }

  return { handleSubmit, data, setData, validateSession, isLoading, logout };
}
