import {
  Routes,
  Route,
} from "react-router-dom";

import Homepage from './pages/homepage';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import UserPublicPage from './pages/user-public-page';
import UserPrivatePage from './pages/user-private-page';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/:user/public" element={<UserPublicPage />} />
        <Route path="/:user/private" element={<UserPrivatePage />} />
      </Routes>
    </div>
  );
}

export default App;
