import React, { useState } from "react";
import Nav from "../components/nav";

const UserPublicPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div id="user-public-page" className="page">
      <Nav isLoggedIn={isLoggedIn} />
      <div className="page-content">
        <h1>User Public Page</h1>
      </div>
    </div>
  );
};

export default UserPublicPage;
