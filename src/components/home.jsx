import React from "react";
import { useAuth } from "../hooks/jwt";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { state } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/user/calculator")}>Calculator</button>
      <h1>{state.user.username}</h1>
    </div>
  );
};

export default Home;
