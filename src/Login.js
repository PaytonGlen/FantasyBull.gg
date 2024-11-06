import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/login', formData);
      alert(response.data.msg); // Handle the response message
      localStorage.setItem('token', response.data.token); // Store the JWT token
    } catch (error) {
      console.error('Error logging in:', error.response.data);
      alert('Error logging in');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Log In</h2>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
        required
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onChange}
        required
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;