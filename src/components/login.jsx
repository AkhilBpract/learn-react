import React, { useState } from "react";
import "./style.css";
import { string, object } from "yup";

// Define the schema for validation
let schema = object().shape({
  password: string().required("Password is required"),
  email: string().email().required("Email is required"),
});

const Login = () => {
  const [errors, setErrors] = useState({
    password: "",
    email: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({
      password: "",
      email: "",
    });

    // Get form data
    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Validate form data
    try {
      await schema.validate(formObject, { abortEarly: false });

      const res = await fetch(
        "https://bizidex-backend.cloudmlmdemo.com/api/login",
        {
          method: "POST",
          body: formData,
          headers: {
            "Accept-Language": "en",
          },
        }
      );
      if (res.ok) {
        // Handle successful response
        const result = await res.json();
        console.log("Login successful:", result);
        // Perform actions on successful login
      } else {
        // Handle error response
        const errorResult = await res.json();
        console.error("Login failed:", errorResult);
        // Optionally, you can set server errors to state
      }
    } catch (err) {
      const errors = {};
      err.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
    }
  };

  return (
    <div className="login">
      <form onSubmit={onSubmit}>
        <div className="text-center">
          <label>Login</label>
        </div>
        <div>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div>
          <label style={{ fontSize: "8px", color: "red" }}>
            {errors.email}
          </label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <br />
          <label style={{ fontSize: "8px", color: "red" }}>
            {errors.password}
          </label>
        </div>
        <div className="text-center">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
