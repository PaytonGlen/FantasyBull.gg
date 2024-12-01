import React, { createContext, useState, useEffect } from "react";
//import user from "../server/models/user";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    // Check if the user is logged in by looking for a token in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const userData = { bank: 1000 };
      setUsers(userData);
    }
  }, []);

  const handleLogout = () => {
    // Log the user out by removing the token
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, handleLogout, users }}
    >
      {children}
    </AuthContext.Provider>
  );
};

console.log("AuthContext module loaded", { AuthContext, AuthProvider });
