import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Signup.js";
import Login from "./Login.js";
import GameCards from "./GameCards.js";
import Header from "./Header.js";
import { AuthProvider } from "./AuthContext.js"; // Provide context at the top level

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
      {/* AuthProvider now properly wraps the Router and App components */}
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
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
      </Router>
    </AuthProvider>
  );
}

export default App;
