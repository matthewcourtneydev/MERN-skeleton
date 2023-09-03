import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/register-form';

const RegisterPage = () => {
    return (
        <div id="register-page" className="page">
            <div className="page-content">
            <h1>Register</h1>
            <RegisterForm />
            <span>Already a member? <Link to={'/login'}>Login</Link> here</span>
            </div>
        </div>
    );
}

export default RegisterPage;
