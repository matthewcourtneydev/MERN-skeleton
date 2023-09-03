import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/register-form';
import Nav from '../components/nav';

const RegisterPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div id="register-page" className="page">
            <Nav isLoggedIn={isLoggedIn} /> 
            <div className="page-content">
            <h1>Register</h1>
            <RegisterForm />
            <span>Already a member? <Link to={'/login'}>Login</Link> here</span>
            </div>
        </div>
    );
}

export default RegisterPage;
