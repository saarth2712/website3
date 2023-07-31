import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './Aire.png'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    navigate('/home');
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Your Logo" className="logo" />
      <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            placeholder="Password"
          />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="signup-link">
        <em>Don't have an account? <Link to="/signup">Sign Up</Link></em>
      </p> 
    </div>
  );
}

export default Login;
