import React, { useContext, useState } from "react";

const AuthContext = React.createContext();
const UpdateAuthContext = React.createContext();

export function useAuthContext() {
    return useContext(AuthContext)
}

export function useUpdateAuthStatus() {
    return useContext(UpdateAuthContext)
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  function updateAuthStatus() {
    setIsAuthenticated((prevIsAuthenticated) => !prevIsAuthenticated);
    console.log(isAuthenticated)
  }

  function authContextLogin() {
    console.log("Logged In")
  }

  function authContextLogout() {
    console.log("Logged Out")
  }

  return (
    <AuthContext.Provider value={isAuthenticated}>
      <UpdateAuthContext.Provider value={updateAuthStatus}>
        {children}
      </UpdateAuthContext.Provider>
    </AuthContext.Provider>
  );
}
