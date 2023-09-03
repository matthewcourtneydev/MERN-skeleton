import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/login-form";

const LoginPage = () => {
  return (
    <div id="login-page" className="page">
      <div className="page-content">
        <h1>Login</h1>
        <LoginForm />
        <span>
          Not a member? <Link to={"/register"}>Register</Link> now
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
