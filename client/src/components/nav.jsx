import React, { useState } from "react";

const Nav = (props) => {
    const [loggedInStatus, setLoggedInStatus] = useState(props.isLoggedIn);
    const [userInfo, setUserInfo] = useState({email: "test@gmail.com", password: "12345", id: "1"});

    function logoutFunction() {
      console.log("LOG OUT")
    }
  return (
    <nav id="navbar">
      <ul className="nav-items">
        {loggedInStatus ? (
          <>
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href={`/${userInfo.id}/private`}>profile</a></li>
            <button className="logout" onClick={logoutFunction}>Logout</button>
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
