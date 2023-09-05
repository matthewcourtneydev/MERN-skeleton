import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user-context";

const Nav = () => {
  const userState = useContext(UserContext);
  const navigate = useNavigate();

  function navLogout() {
    localStorage.setItem("user", JSON.stringify({ email: "", password: ""}))
    navigate("/");
    navigate(0)
  }

  return (
    <nav id="navbar">
      <ul className="nav-items">
        {userState.email ? (
          <>
            <li className="nav-item"><a href="/">Home</a></li>
            {/* href will be for user.id */}
            <li className="nav-item"><a href="/sdasda/private">profile</a></li>
            <button className="logout" onClick={navLogout}>Logout</button>
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
