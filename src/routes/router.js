import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Login from "../components/login";
import Home from "../components/home";
import LoginAxios from "../components/login-axios";
import IsLogin from "./IsLogin";
import LoginOne from "../components/login-1";
import Calculator from "../components/calculator/index";
const Router = () => {
  return useRoutes([
    { path: "/", element: <Login /> },
    { path: "login", element: <LoginAxios /> },
    { path: "login-1", element: <LoginOne /> },

    {
      path: "user",
      element: <IsLogin />,
      children: [
        { element: <Navigate to="home" />, index: true },
        { path: "home", element: <Home /> },
        { path: "calculator", element: <Calculator /> },
      ],
    },
  ]);
};

export default Router;
