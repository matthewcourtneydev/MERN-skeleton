import React, { useState } from "react";

const RegisterForm = () => {
  let initFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit() {
    console.log(formData);
    // GET USERS
    // CHECK IF EXISTS (middleware)
    // POST NEW LOGIN
    // AUTH USER
    // REDIRECT
  }
  return (
    <div id="register-form">
      <div className="form">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleInputChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleInputChange} />
        <button onClick={handleSubmit} className='submit-btn'>Submit</button>
      </div>
    </div>
  );
};

export default RegisterForm;
