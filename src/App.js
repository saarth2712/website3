// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import CreateProfile from './CreateProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}


export default App;
