import React, { useState } from 'react';
import Nav from '../components/nav';

const UserPrivatePage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <div id="user-private-page" className="page">
            <Nav isLoggedIn={isLoggedIn} />
            <div className="page-content">
                <h1>User Private Page</h1>
            </div>
        </div>
    );
}

export default UserPrivatePage;
