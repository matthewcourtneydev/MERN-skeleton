import React, { useState } from 'react';

import { useAuthContext, useUpdateAuthStatus } from '../contexts/auth-context';

const Homepage = () => {
    const authenticatedUser = useAuthContext();
    const updatedUsersAuthenticationStatus = useUpdateAuthStatus();

    return (
        <div id="homepage" className="page">
            <div className="page-content">
                <h1>Home Page</h1>
                <p>User Logged In: { authenticatedUser ? (<span>True</span>) : (<span>False</span>)}</p>
            </div>
        </div>
    );
}

export default Homepage;
