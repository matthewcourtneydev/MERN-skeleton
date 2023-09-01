
import './App.scss';
import Homepage from './pages/homepage';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import UserPublicPage from './pages/user-public-page';
import UserPrivatePage from './pages/user-private-page';

function App() {
  return (
    <div className="App">
        <Homepage />
        <LoginPage />
        <RegisterPage />
        <UserPublicPage />
        <UserPrivatePage />
    </div>
  );
}

export default App;
