import React, { createContext, useContext, useReducer } from "react";
import { LOGIN } from "./type";

const initialState = {
  isLogin: true,
  user: {},
};

export const AuthContext = createContext(null);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state, // Spread the existing state first
        isLogin: true,
        user: payload,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
