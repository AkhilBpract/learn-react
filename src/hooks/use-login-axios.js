import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "./jwt";
import { useNavigate } from "react-router-dom";
const defaultValues = {
  email: "",
  password: "",
};
const useLoginAxios = () => {
  const methods = useForm({ defaultValues });
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  const login = async (inputData) => {
    const reqData = new FormData();
console.log(reqData)
    Object.entries(inputData).forEach(([key, value]) => {
      reqData.append(key, value);
    });
    try {
      const { data, status } = await axios.post(
        "https://bizidex-backend.cloudmlmdemo.com/api/login",
        reqData
      );
      if (status === 200) {
        methods.reset();

        dispatch({ type: "LOGIN", payload: data.user });
        navigate("/user");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { login, methods };
};

export default useLoginAxios;
