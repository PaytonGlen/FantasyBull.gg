import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'; // Ensure you create this file

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/register', formData);
      alert(response.data.msg); // Handle the response message
    } catch (error) {
      console.error('Error signing up:', error.response.data);
      alert('Error signing up');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={onSubmit}>
          <div className="input-group">
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
          <button type="submit" className="primary-btn">Sign Up</button>
        </form>
        <div className="toggle-signup">
          Already have an account? <a href="/login" className="login-link">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;