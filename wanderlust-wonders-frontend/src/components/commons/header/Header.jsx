import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { useAuth } from "../../../provider/authProvider";

const Header = () => {
  const { setToken } = useAuth();

  const handleLogoutClick = () => {
    setToken();
  }

  return (
    <header className="app-header">
      <div className="app-header-wrapper">
        <Logo navigateTo="/" />
        <div className="app-header-nav-buttons">
          <Link className="btn-nav btn-home" to="/">
            Home
          </Link>
          <Link className="btn-nav btn-favorites" to="/favorites">
            Favorites
          </Link>
          <Link className="btn-logout" to="/login" onClick={handleLogoutClick}>
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
