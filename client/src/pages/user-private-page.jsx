import React, { useContext } from "react";
import { UserContext } from "../contexts/user-context";
import { useNavigate } from "react-router-dom";

const UserPrivatePage = () => {
  const userState = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      {userState.isAuth ? (
        <div id="user-private-page" className="page">
          <div className="page-content">
            <h1>User Private Page</h1>
            <p>your id is {userState._id}</p>
            <p>your email is {userState.email}</p>
            <p>your password is {userState.password}</p>
            <p>Good thing no one can access this page except you.</p>
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
