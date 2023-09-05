import React, { useContext } from "react";
import { UserContext } from "../contexts/user-context";
import { useNavigate } from "react-router-dom";

const UserPrivatePage = () => {
  const userState = useContext(UserContext);
  const navigate = useNavigate();

  console.log(userState)

  return (
    <>
      {userState.isAuth ? (
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
