import React, { useState } from 'react';
import './CreateProfile.css'; // Import your CSS file for styles
import {Link, useNavigate } from 'react-router-dom';

const CreateProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState('');
  const [followers, setFollowers] = useState('');
  const [bio, setBio] = useState('');
  const [profileType, setProfileType] = useState('');
  const [selectedNiche, setSelectedNiche] = useState([]);
  const [reel1, setReel1] = useState(null);
  const [reel2, setReel2] = useState(null);
  const [reel3, setReel3] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const maxSelectedNiche = 3;

  const niches = [
    'Travel', 'Food', 'Fashion', 'Fitness', 'Lifestyle', 'Beauty', 
    'Photography', 'Art', 'Technology', 'Music', 'Gaming', 'Health'
  ];

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setProfilePicture(selectedFile);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFollowersChange = (event) => {
    setFollowers(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };
  
  const handleProfileTypeChange = (event) => {
    setProfileType(event.target.value);
  };

  const handleNicheClick = (niche) => {
    if (selectedNiche.includes(niche)) {
      setSelectedNiche((prevSelected) => prevSelected.filter((item) => item !== niche));
    } else if (selectedNiche.length < maxSelectedNiche) {
      setSelectedNiche((prevSelected) => [...prevSelected, niche]);
    }
  };

  const handleReel1Change = (event) => {
    const selectedFile = event.target.files[0];
    setReel1(selectedFile);
  };
  
  const handleReel2Change = (event) => {
    const selectedFile = event.target.files[0];
    setReel2(selectedFile);
  };

  const handleReel3Change = (event) => {
    const selectedFile = event.target.files[0];
    setReel3(selectedFile);
  };

  const handleCreateProfile = () => {
    // Implement your logic to create the profile here
    // For example, you can send the form data to a server or perform any other actions
    navigate('/home')
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className='cp'>
    <div className="header">Aire</div>
    <div className="create-profile-container">
      {currentStep === 1 && (
        <div>
          {/* Step 1: Profile Picture */}
          <div className="profile-picture-circle">
          {profilePicture ? (
            <img src={URL.createObjectURL(profilePicture)} alt="Profile" className="profile-picture" />
          ) : (
            <label htmlFor="profilePicture" className="profile-placeholder">
              Choose profile picture
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="profile-picture-input"
                id="profilePicture"
              />
            </label>
          )}
          </div>

          <div className="profile-type">
          <label>I am a </label>
          <select value={profileType} onChange={handleProfileTypeChange}>
            <option value="brand">Brand</option>
            <option value="creator">Creator</option>
          </select>
          </div>

          <button onClick={handleNextStep}>Next</button>
        </div>

      )}

      {currentStep === 2 && (
        <div>
          <div className="profile-info">
            <input
              type="number"
              value={followers}
              onChange={handleFollowersChange}
              className="followers-input"
              placeholder="Number of followers"
            />
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="name-input"
              placeholder="Enter your name"
            />
          </div>
          <button onClick={handlePreviousStep}>Previous</button>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}

      {currentStep === 3 && (
        <div>
          <div className = "profile-bio">
            <label>I'm looking for:</label>
            <input
              type="text"
              value={bio}
              onChange={handleBioChange}
              className="bio-input"
            />
          </div>
          <button onClick={handlePreviousStep}>Previous</button>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}

      {currentStep === 4 && (
        <div>
          <div className="niche">
            <label>NICHE: </label>
            {niches.map((niche, index) => (
              <div
                key={niche}
                className={`niche-tile ${selectedNiche.includes(niche) ? 'selected' : ''}`}
                onClick={() => handleNicheClick(niche)}
              >
                {niche}
              </div>
            ))}
          </div>
          <button onClick={handlePreviousStep}>Previous</button>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}

      {currentStep === 5 && (
        <div>
          <div className="reel-container">
            <label>Posts</label>
            <div className="reel">
              {reel1 ? (
                <div className="reel-preview">
                  {reel1.type.startsWith('image/') ? (
                    <img src={URL.createObjectURL(reel1)} alt="Reel 1" className="reel-preview-image" />
                  ) : (
                    <video src={URL.createObjectURL(reel1)} controls className="reel-preview-video" />
                  )}
                </div>
              ) : (
                <div className="reel-placeholder-box">Reel 1</div>
              )}

              <label htmlFor="reel1">Upload Image or Video:</label>
              <input
                type="file"
                accept="image/*, video/*"
                onChange={handleReel1Change}
                className="reel-input"
                id="reel1"
              />
            </div>

            {/* Reel2 */}
            <div className="reel">
              {reel2 ? (
                <div className="reel-preview">
                  {reel2.type.startsWith('image/') ? (
                    <img src={URL.createObjectURL(reel2)} alt="Reel 2" className="reel-preview-image" />
                  ) : (
                    <video src={URL.createObjectURL(reel2)} controls className="reel-preview-video" />
                  )}
                </div>
              ) : (
                <div className="reel-placeholder-box">Reel 2</div>
              )}

              <label htmlFor="reel2">Upload Image or Video:</label>
              <input
                type="file"
                accept="image/*, video/*"
                onChange={handleReel2Change}
                className="reel-input"
                id="reel2"
              />
            </div>

            {/* Reel3 */}
            <div className="reel">
              {reel3 ? (
                <div className="reel-preview">
                  {reel3.type.startsWith('image/') ? (
                    <img src={URL.createObjectURL(reel3)} alt="Reel 3" className="reel-preview-image" />
                  ) : (
                    <video src={URL.createObjectURL(reel3)} controls className="reel-preview-video" />
                  )}
                </div>
              ) : (
                <div className="reel-placeholder-box">Reel 3</div>
              )}

              <label htmlFor="reel3">Upload Image or Video:</label>
              <input
                type="file"
                accept="image/*, video/*"
                onChange={handleReel3Change}
                className="reel-input"
                id="reel3"
              />
            </div>
            <button onClick={handlePreviousStep}>Previous</button>
            <button onClick={handleCreateProfile}>Create Profile</button>
          </div>
        </div>
      )}
    </div>
    <div className="login-link">
        <em>Have an account? <Link to="/login">Log In</Link></em>
    </div>
    </div>
  );
}

export default CreateProfile;