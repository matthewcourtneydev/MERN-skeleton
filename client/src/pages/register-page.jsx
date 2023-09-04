import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../components/register-form";
import { useAuthContext } from "../contexts/auth-context";

const RegisterPage = () => {
  const authenticatedUser = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticatedUser) {
      navigate("/");
    }
  }, []);
  return (
    <div id="register-page" className="page">
      <div className="page-content">
        <h1>Register</h1>
        <RegisterForm />
        <span>
          Already a member? <Link to={"/login"}>Login</Link> here
        </span>
      </div>
    </div>
  );
};

export default RegisterPage;
