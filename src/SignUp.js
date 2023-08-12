import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import logo from './Aire_Final_Logo.jpg';
import banner from './Aire_Bann.png';
import su_banner from './Aire_SignUp.png';

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
    <div className='signup-page'>
      <div className="login-header">
          <img src = {logo} alt="Aire Logo" className="login-logo" />
      </div>
      <div className='signup-body'>
          <div className="signup-container">
            <label> Welcome Aboard! We've been waiting. </label>
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
            <p className="signup-link">
              <em>Don't have an account? <Link to="/login">Login</Link></em>
            </p> 
          </div>
          <img src={su_banner} alt="Banner" className="signup-bann" />
      </div>
      <div className='tc'> By signing up, you agree to our Terms. See how we use your data in our Privacy Policy. </div>
    </div>
  );
}

export default SignUp;
