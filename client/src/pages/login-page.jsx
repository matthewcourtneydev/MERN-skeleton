import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/login-form";
import { UserContext } from "../contexts/user-context";


const LoginPage = () => {
  const navigate = useNavigate();
  const userState = useContext(UserContext);

  useEffect(() => {
    if (userState.isAuth === true) {
      navigate("/")
    }
  }, [userState])
  
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
