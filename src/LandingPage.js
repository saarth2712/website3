import React from 'react';
import './LandingScreen.css';
import logo from './Aire_Final_Logo.jpg';
import creator from './A_Creator.png';
import brand from './Aire_Brand_Store.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { TypeAnimation } from 'react-type-animation';

const LandingPage = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/SignUp');
  };

  return (
    <div className="landing-page"> 
      <div className="lp-header">
          <img src = {logo} alt="Aire Logo" className="logo-header" />
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact Us</a>
          <a href="/Login">Login</a>
        </div>
      </div>
      <div className='banner'>
        <div className='caption'>
        Collaborate with 
        <div className='type-box'>
        <TypeAnimation 
            sequence={[
              "Creators",
              1000,
              "Brands",
              1000,
            ]}
            speed={200}
            repeat={Infinity}
            className='typing-effect'
            />  
        </div>
        in your Niche, Near you.
        </div>
        <div>
        </div>
      </div>
      <div className="line1"></div> 
      <div className='cta1' > 
        <p> Ready to find collabs? Create your profile and swipe to find your match! <br/> </p>
        <button onClick={goToSignUp}> JOIN NOW </button>
      </div>
      <div className="line2"></div> 
      <div className='section-creator'>
        <img src = {creator} alt="I'm a creator" className="creator-image" />
        <div className='creator-info'>
          <label> I'm a Creator </label>
          <p>Join Aire and match with creators and brands for awesome collabs</p>
        </div>
      </div>
      <div className='section-brand'>
        <div className='brand-info'>
          <label> I'm a Brand </label>
          <p> Join Aire and get influencers to promote their brand. </p>
        </div>
        <img src = {brand} alt="I'm a brand" className="brand-image" />
      </div>
      <div className="line1"></div> 
      <div className='cta1' > 
        <p> Ready to find collabs? Create your profile and swipe to find your match! <br/> </p>
        <button onClick={goToSignUp}> JOIN NOW </button>
      </div>
      <div className="line2"></div> 
      <div className="footer">
        <div className='footy'>
            <label> AIRE </label>
            <p> Kalyani Nagar, Pune | +91702092215 | aire.collab@gmail.com </p>
            <div className='copyright'> &copy; {new Date().getFullYear()} Aire </div>
            <div className="social-icons">
              <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
              <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
              <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
            </div>
        </div>
        <div className = 'nav'>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>    
    </div>
  )

}

export default LandingPage;