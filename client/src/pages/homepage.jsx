import React, { useState } from 'react';
import Nav from '../components/nav'

const Homepage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <div id="homepage" className="page">
            <Nav isLoggedIn={isLoggedIn} />
            <div className="page-content">
                <h1>Home Page</h1>
            </div>
        </div>
    );
}

export default Homepage;
