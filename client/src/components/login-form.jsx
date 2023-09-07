import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const emailVal = useRef();
  const passwordVal = useRef();

  const [error, setError] = useState(false);

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

  return (
    <div id="login-form">
      <div className="form">
        <div className="error-field">{error}</div>
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
