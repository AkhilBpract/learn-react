import React from "react";
import CustomFormProvider from "./custom-form-provider";
import useLoginAxios from "../hooks/use-login-axios";

const LoginAxios = () => {
  const { login, methods } = useLoginAxios();
  const { register } = methods;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        rowGap: "10px",
        alignItems: "center",
      }}
    >
      <CustomFormProvider methods={methods} onSubmit={login}>
        <div style={{ marginBottom: "5px" }}>
          <input type="text" {...register("email")} />
        </div>
        <div style={{ marginBottom: "5px" }}>
          <input type="text" {...register("password")} />
        </div>
        <div style={{ textAlign: "center" }}>
          <button type="submit">Login</button>
        </div>
      </CustomFormProvider>
    </div>
  );
};

export default LoginAxios;
