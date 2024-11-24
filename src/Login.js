import React, { useState } from "react";
import axios from "axios";
import "./signup.css"; // Use the same CSS as SignUp
import { useNavigate } from "react-router-dom";

const Login = ({ closeModal, setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState("");
  const navigate = useNavigate(); // Use navigate hook to redirect

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors(""); // Clear any previous errors
    try {
      const response = await axios.post(
        "http://localhost:5001/login",
        formData
      );
      alert(response.data.msg); // Handle the response message
      localStorage.setItem("token", response.data.token); // Store the JWT token
      setIsLoggedIn(true); // Update the state to reflect that the user is logged in
      navigate("/"); // Redirect to the home page
    } catch (error) {
      console.error("Error logging in:", error.response?.data);
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.msg);
      } else {
        console.error("Error logging in:", error.response?.data);
        setErrors(error.response?.data?.msg || "Error logging in");
      }
    }
  };

  return (
    <div className="signup-container">
      {" "}
      {/* Reuse the same container */}
      <div className="signup-box">
        {" "}
        {/* Reuse the same box */}
        <h2>Log In</h2>
        {errors && (
          <p className="error-msg" style={{ color: "red" }}>
            {errors}
          </p>
        )}
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <button
              className="close-btn"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit" className="primary-btn">
            Log In
          </button>
        </form>
        <div className="toggle-signup">
          Don't have an account?{" "}
          <a href="/signup" className="login-link">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
