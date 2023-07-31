import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import logo from './Aire.png'; 

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign up logic here
    navigate('/createprofile');
  };

  return (
    <div className="signup-container">
      <img src={logo} alt="Your Logo" className="logo" />
      <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
            placeholder="Password"
          />
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <div className="login-link">
        <em>Have an account? <Link to="/login">Log In</Link></em>
      </div> 
    </div>
  );
}

export default SignUp;
