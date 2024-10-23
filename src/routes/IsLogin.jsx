import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/jwt";

const IsLogin = () => {
  const { state } = useAuth();
  if (!state.isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default IsLogin;
