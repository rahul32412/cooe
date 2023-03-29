import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

import { FaUser, FaGamepad, FaHome } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <nav className="navbar">
      <ul className="nav-links">
        {!isAuthenticated ? (
          <button onClick={loginWithRedirect}>Login</button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
        <Link to="/">
          <FaHome />
        </Link>
        <Link to="/win">
          <FaGamepad />
        </Link>
        <Link to="/dashboard">
          <FaUser />
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
