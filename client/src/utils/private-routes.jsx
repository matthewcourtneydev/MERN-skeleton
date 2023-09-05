import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/user-context';

const PrivateRoutes = () => {
    let userState = useContext(UserContext)
    let auth = {'token': userState.isAuth}
    return (
        auth.token ? <Outlet /> : <Navigate to="/login" /> 
    );
}

export default PrivateRoutes;