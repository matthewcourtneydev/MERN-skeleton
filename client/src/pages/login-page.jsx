import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/login-form";
import Nav from "../components/nav";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div id="login-page" className="page">
      <Nav isLoggedIn={isLoggedIn} />
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
