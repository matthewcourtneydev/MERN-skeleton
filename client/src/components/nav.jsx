import React, { useState } from "react";
import { useAuthContext, useUpdateAuthStatus } from '../contexts/auth-context';

const Nav = (props) => {
  const authenticatedUser = useAuthContext();
  const updatedUsersAuthenticationStatus = useUpdateAuthStatus();

  return (
    <nav id="navbar">
      <ul className="nav-items">
        {authenticatedUser ? (
          <>
            <li className="nav-item"><a href="/">Home</a></li>
            {/* href will be for user.id */}
            <li className="nav-item"><a href="/sdasda/private">profile</a></li>
            <button className="logout" onClick={updatedUsersAuthenticationStatus}>Logout</button>
          </>
        ) : (
          <>
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/login">Login</a></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
