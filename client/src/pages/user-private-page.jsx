import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth-context";

const UserPrivatePage = () => {
  const authenticatedUser = useAuthContext();
  const navigate = useNavigate();

  return (
    <>
      {authenticatedUser ? (
        <div id="user-private-page" className="page">
          <div className="page-content">
            <h1>User Private Page</h1>
          </div>
        </div>
      ) : (
        <div id="user-private-page" className="page">
          <div className="page-content">
            <h1>You Do Not have accesss to this page</h1>
          </div>
        </div>
      )}
    </>
    // <div id="user-private-page" className="page">
    //     <div className="page-content">
    //         <h1>User Private Page</h1>
    //     </div>
    // </div>
  );
};

export default UserPrivatePage;
