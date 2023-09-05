import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user-context";

const LoginForm = () => {
  const navigate = useNavigate();

  let initFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initFormData);
  const { userState, setUserState } = useContext(UserContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit() {
    console.log(formData);
    localStorage.setItem("user", JSON.stringify({...formData, isAuth: true}));
    navigate("/")
    navigate(0);
    // POST LOGIN
    // AUTH USER
    // REDIRECT
  }

  return (
    <div id="login-form">
      <div className="form">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleInputChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleInputChange} />
        <button onClick={handleSubmit} className="submit-btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
