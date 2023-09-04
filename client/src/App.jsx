import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Homepage from "./pages/homepage";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import UserPublicPage from "./pages/user-public-page";
import UserPrivatePage from "./pages/user-private-page";
import ErrorPage from "./pages/error-page";
import PrivateRoutes from "./utils/private-routes";
import Nav from './components/nav'
import { AuthProvider } from "./contexts/auth-context";

import "./App.scss";

function App() {
  return (
    <AuthProvider >
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/:user/public" element={<UserPublicPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/:user/private" element={<UserPrivatePage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
