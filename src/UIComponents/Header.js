import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext.js"; // Use AuthContext for login state
import TZ2 from "../images/Images for Website/TZ2.svg"; // Keep your logo
import "../style.css"; // Use your existing CSS file
import "./Header.css";

const Header = () => {
  const { isLoggedIn, handleLogout, users } = useContext(AuthContext); // Access context values

  return (
    <header className="header">
      <div className="logo">
        <img src={TZ2} alt="Tourney Zone Logo" className="logo-img" />
      </div>
      <nav className="navigation">
        {isLoggedIn ? (
          <>
            <h2>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(users?.bank || 0)}
            </h2>
            <Link to="/">Home</Link>
            <Link to="/make-your-team">Make your team</Link>
            <Link to="/how-to-play">How to Play</Link>
            <Link to="/download">Download</Link>
            <Link to="/help-center">Help Center</Link>
            <button className="button login" onClick={handleLogout}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/download">Download</Link>
            <Link to="/signup" className="button signup">
              Sign Up
            </Link>
            <Link to="/login" className="button login">
              Log In
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
