import React, { useState } from "react";
import axios from "axios";
import "./signup.css"; // Ensure you create this file

const SignUp = ({ closeModal }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Disable button while loading
    try {
      const response = await axios.post(
        "http://localhost:5001/register",
        formData
      );
      alert(response.data.msg); // Handle the response message
    } catch (error) {
      const errorMsg =
        error.response && error.response.data && error.response.data.msg
          ? error.response.data.msg
          : "Error signing up";
      console.error("Error signing up:", errorMsg);
      alert(errorMsg);
    } finally {
      setLoading(false); // Enable button after loading
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
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
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onChange}
              required
            />
          </div>
          <div className="input-group">
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
          <button type="submit" className="primary-btn" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
        <div className="toggle-signup">
          Already have an account?{" "}
          <a href="/login" className="login-link">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
