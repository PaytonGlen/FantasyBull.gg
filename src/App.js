import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignUp from "./Signup.js";
import Login from "./Login.js";
import GameCards from "./GameCards.js";
import TZ2 from "./images/Images for Website/TZ2.svg";

import "./style.css";
import "./App.css";

function App() {
  const scrollableSectionRef = useRef(null);

  const scrollLeftFunction = () => {
    if (scrollableSectionRef.current) {
      scrollableSectionRef.current.scrollBy({
        left: -150,
        behavior: "smooth",
      });
    }
  };

  const scrollRightFunction = () => {
    if (scrollableSectionRef.current) {
      scrollableSectionRef.current.scrollBy({
        left: 150,
        behavior: "smooth",
      });
    }
  };

  return (
    <Router>
      <div>
        <header className="header">
          <div className="logo">
            <img src={TZ2} alt="Tourney Zone Logo" className="logo-img" />
          </div>
          <nav className="navigation">
            <Link to="/">Home</Link>
            <div className="dropdown">
              <Link to="/tourney-zone">Tourney-Zone</Link>
            </div>
            <Link to="/make-your-team">Make your team</Link>
            <Link to="/how-to-play">How to Play</Link>
            <Link to="/download">Download</Link>
            <Link to="/help-center">Help Center</Link>
            <Link to="/signup" className="button signup">
              Sign Up
            </Link>
            <Link to="/login" className="button login">
              Log In
            </Link>
          </nav>
        </header>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* Additional routes can be added here */}
        </Routes>

        <GameCards
          scrollLeftFunction={scrollLeftFunction}
          scrollRightFunction={scrollRightFunction}
          scrollableSectionRef={scrollableSectionRef}
        />

        <section className="contest-types">
          <h2>How to play</h2>
          <div className="contest-cards">
            <div className="contest-card">
              <h2>Deposit funds</h2>
              <p style={{ fontSize: "18px" }}>Deposit as much as you'd like!</p>
            </div>
            <div className="contest-card">
              <h2>Select which game</h2>
              <p style={{ fontSize: "18px" }}>
                You can draft your own team for as many games as you'd like!
              </p>
            </div>
            <div className="contest-card">
              <h2>Pick your line up!</h2>
              <p style={{ fontSize: "18px" }}>
                Build your team and start earning $!
              </p>
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
