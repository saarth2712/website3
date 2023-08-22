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
          <div className="ca-nav-links">
              <p>Already a user? <a href="/Login"> Login</a></p>
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
          <p>Say goodbye to cold DMs, endless emails, and commission eating agents. Low barrier to entry. Pure content and vibes. Join Aire to find your next podcast guest/dance duet/ local food van. </p>
        </div>
      </div>
      <div className='section-brand'>
        <div className='brand-info'>
          <label> I'm a Brand </label>
          <p> Join Aire and get influencers to promote their brand.  </p>
        </div>
        <img src = {brand} alt="I'm a brand" className="brand-image" />
      </div>
      <div className="line1"></div> 
      <div className='cta1' > 
        <p> Turn swipes into collaborations. Create content that sells! <br/> </p>
        <button onClick={goToSignUp}> JOIN NOW </button>
      </div>
      <div className="line2"></div> 
      <div className="footer">
        <div className='footy'>
            <label> AIRE </label>
            <p> aire.collab@gmail.com </p>
            <div className="social-icons">
              <FontAwesomeIcon icon={faInstagram} className="instagram-icon" onClick={() => window.open("https://www.instagram.com/aire_in/", "_blank")}/>
              <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
              <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
            </div>
            <div className='copyright'> &copy; {new Date().getFullYear()} Aire </div>
        </div>
        <div className = 'nav'>
          <a href="/Login">Login</a>
          <a href="/how-it-works">How It Works?</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>    
    </div>
  )

}

export default LandingPage;