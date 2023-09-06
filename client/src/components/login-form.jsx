import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const emailVal = useRef();
  const passwordVal = useRef();

  function postCall(formInfo) {
    return axios.post("http://localhost:3001/login", formInfo);
  }

  function handleSubmit() {
    let formData = {
      email: emailVal.current.value,
      password: passwordVal.current.value,
    };

    console.log(formData);

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("user", JSON.stringify({ ...data.user, accessToken: data.accessToken, iauth: true }));
        navigate("/");
        navigate(0);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }

  return (
    <div id="login-form">
      <div className="form">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" ref={emailVal} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" ref={passwordVal} />
        <button onClick={handleSubmit} className="submit-btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
