import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Signup.js";
import Login from "./Login.js";
import GameCards from "./GameCards.js";
import Header from "./Header.js";
import { AuthProvider } from "./AuthContext.js"; // Provide context at the top level
import MoneyBag from "./images/Images for Website/SecureMoneyBag.svg";
import MoneyStack from "./images/Images for Website/StackOfMoney.svg";

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
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<GameCards />} />
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
                <p style={{ fontSize: "18px" }}>
                  Deposit as much as you'd like!
                </p>
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
        <div className="FantasyBull-About">
          <h3>Master Your Game & Conquer eSports!</h3>
          <p>
            Fantasy Bull lets you turn your passion for eSports into real wins.
          </p>
          <p>
            Pick your players, predict their stats, and win up to 200x your
            entry fee.
          </p>
          <p>Simple, exciting, and rewarding!</p>
        </div>
        <div className="Icon-section">
          <div className="Icon">
            <img src={MoneyBag} alt="MoneyBag" />
            <h3>Secure</h3>
            <p>Your money is safe with us.</p>
          </div>
          <div className="Icon">
            <img src={MoneyStack} alt="MoneyStack" />
            <h3>Win Big</h3>
            <p>Win up to 200x your entry fee!</p>
          </div>
        </div>

        <div className="FantasyBull-Mantra">
          <h2>Our Mantra</h2>
          <p>
            We are dedicated to providing a fun and safe environment for all
            users. We strive to provide the best experience for all users and
            will continue to improve our platform to meet the needs of our
            users.
          </p>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
