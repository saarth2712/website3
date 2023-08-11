// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import CreateAccount from './CreateAccount';
import Filters from './Filters';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/filters" element={<Filters />} />
      </Routes>
    </Router>
  );
}


export default App;
