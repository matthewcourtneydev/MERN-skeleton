import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [error, setError] = useState();
  const emailVal = useRef();
  const usernameVal = useRef();
  const passwordVal = useRef();
  const confirmPasswordVal = useRef();
  const navigate = useNavigate();

  function getFormValues() {
    return {
      email: emailVal.current.value,
      username: usernameVal.current.value,
      password: passwordVal.current.value,
      confirmPassword: confirmPasswordVal.current.value
    };
  }

  function logUserIn(values) {
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          setError(data.error);
          return;
        }

        localStorage.setItem(
          "user",
          JSON.stringify({
            ...data.user,
            accessToken: data.accessToken,
            isAuth: true,
          })
        );
        navigate("/");
        navigate(0);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }

  function createNewUser(values) {
    fetch("http://localhost:3001/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        logUserIn(data)
      })
      .catch((err) => console.log(err));
  }

  function handleSubmit() {
    let values = getFormValues();

    if (values.password !== values.confirmPassword) {
      setError("Passwords must match!");
      return 
    }

    const apiString = `http://localhost:3001/users/${values.email}`;
    fetch(apiString, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.user) {
          setError("EMAIL ALREADY IN USE");
          return;
        } else {
          createNewUser(values);
          // fetch("http://localhost:3001/users/", {method: "POST"}, values)
          // .the
        }
      })
      .catch((err) => console.log(err));
    // GET USERS
    // CHECK IF EXISTS (middleware)
    // POST NEW LOGIN
    // AUTH USER
    // REDIRECT
  }
  return (
    <div id="register-form">
      <div className="form">
        <h3 className="error-field">{error}</h3>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" ref={emailVal} />
        <label htmlFor="username">Username</label>
        <input type="username" name="username" ref={usernameVal} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" ref={passwordVal} />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" ref={confirmPasswordVal} />
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
