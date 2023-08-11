import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './Aire_Final_Logo.jpg';
import banner from './Aire_Bann.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className='login-page'>
      <div className="login-header">
        <img src = {logo} alt="Aire Logo" className="login-logo" />
      </div>
      <div className='body'>
          <img src={banner} alt="Banner" className="bann" />
          <div className="login-container">
            <label> Welcome! Where you been? </label>
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
      </div>
      <div className='tc'> By signing up, you agree to our Terms. See how we use your data in our Privacy Policy. </div>
    </div>
  );
}

export default Login;
