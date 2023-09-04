import React, { useState } from 'react';

const ErrorPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="page" id="error-page">
            <div className="page-content">
                <h1>Error Page Not Found</h1>
            </div>
        </div>
    );
}

export default ErrorPage;
