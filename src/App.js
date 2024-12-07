import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Registration/Signup.js";
import Login from "./Registration/Login.js";
import Header from "./UIComponents/Header.js";
import Mantra from "./UIComponents/Home/Mantra.js";
import Icon from "./UIComponents/IconSection.js";
import ContestTypes from "./UIComponents/ContestTypes.js";
import About from "./UIComponents/About.js";
import Home from "./UIComponents/Home/Home.js";
import Dashboard from "./GameComponents/GameDashboard.jsx";
import { AuthContext, AuthProvider } from "./AuthContext.js"; // Import AuthContext

import "./style.css";
import "./App.css";

function App() {
  const { isLoggedIn } = useContext(AuthContext); // Access `isLoggedIn` from AuthContext

  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={isLoggedIn ? <Dashboard /> : <Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          {!isLoggedIn && (
            <>
              <ContestTypes />
              <About />
              <Icon />
              <Mantra />
            </>
          )}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
