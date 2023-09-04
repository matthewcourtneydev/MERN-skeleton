import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/login-form";
import { useAuthContext } from '../contexts/auth-context';


const LoginPage = () => {
  const authenticatedUser = useAuthContext();
  const navigate = useNavigate();

  console.log(authenticatedUser)
  useEffect(() => {
    if (authenticatedUser) {
      navigate("/")
    }
  }, [authenticatedUser])
  
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
