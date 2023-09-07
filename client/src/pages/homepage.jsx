import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/user-context';

const Homepage = () => {
    const userState = useContext(UserContext);

    console.log(userState)
    return (
        <div id="homepage" className="page">
            <div className="page-content">
                <h1>Home Page</h1>
                {(userState.email ? <h2>Username: {userState.username}</h2> : "")}
                <h2>Email: {userState.email}</h2>
                <h3>PassWord: {userState.password}</h3>
            </div>
        </div>
    );
}

export default Homepage;
