import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../components/register-form";
import { UserContext } from "../contexts/user-context";

const RegisterPage = () => {
  const userState = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userState.isAuth === true) {
      navigate("/")
    }
  }, [userState])

  return (
    <div id="register-page" className="page">
      <div className="page-content">
        <h2>Email: <span>{userState.email}</span></h2>
        <h2>Password: <span>{userState.password}</span></h2>
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
