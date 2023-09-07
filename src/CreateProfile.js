import React, { useEffect, useRef, useState } from "react";
import "./CreateProfile.css";
import { Link, useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState("");
  const [followers, setFollowers] = useState("");
  const [bio, setBio] = useState("");
  const [profileType, setProfileType] = useState("");
  const [selectedNiche, setSelectedNiche] = useState([]);
  const [reel1, setReel1] = useState(null);
  const [reel2, setReel2] = useState(null);
  const [reel3, setReel3] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const infoDict = useRef({ niche: [], reel: [] });

  const maxSelectedNiche = 3;

  const niches = [
    "Travel",
    "Food",
    "Fashion",
    "Fitness",
    "Lifestyle",
    "Beauty",
    "Photography",
    "Art",
    "Technology",
    "Music",
    "Gaming",
    "Health",
    "Education",
    "Dance",
    "Comedy",
    "Cars",
    "Bollywood",
    "Finance",
  ];

  const [imgs, setImgs] = useState();

  const handleImageChange = async (event) => {
    setProfilePicture(event.target.files[0]);

    // console.log(event.target.files)
    const data = new FileReader();
    data.onload = function () {
      // console.log(data.result)
      infoDict.current["profilePicture"] = data.result;
    };
    data.addEventListener("load", () => {
      setImgs(data.result);
    });
    data.readAsDataURL(event.target.files[0]);
    // const result = await data.result
    // console.log(data)
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    infoDict.current["name"] = event.target.value;
  };

  const handleFollowersChange = (event) => {
    setFollowers(event.target.value);
    infoDict.current["followers"] = event.target.value;
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
    infoDict.current["bio"] = event.target.value;
  };

  const handleProfileTypeChange = (event) => {
    setProfileType(event.target.value);
    // console.log(event.target.value)
    if (event.target.value === "creator") {
      infoDict.current["isBrand"] = false;
    } else {
      infoDict.current["isBrand"] = true;
    }
  };

  const handleNicheClick = (niche) => {
    if (selectedNiche.includes(niche)) {
      setSelectedNiche((prevSelected) =>
        prevSelected.filter((item) => item !== niche)
      );
      infoDict.current["niche"].splice(
        infoDict.current["niche"].indexOf(niche)
      );
    } else if (selectedNiche.length < maxSelectedNiche) {
      setSelectedNiche((prevSelected) => [...prevSelected, niche]);

      // console.log(niche)
      infoDict.current["niche"].push(niche);
    }

    // console.log(infoDict)
  };

  const handleReel1Change = (event) => {
    const selectedFile = event.target.files[0];
    setReel1(selectedFile);
    console.log(event.target.files);
    const data = new FileReader();
    data.onload = function () {
      // console.log(data.result)
      infoDict.current["reel"].push(data.result);
    };
    data.addEventListener("load", () => {
      setImgs(data.result);
    });
    data.readAsDataURL(event.target.files[0]);
  };

  const handleReel2Change = (event) => {
    const selectedFile = event.target.files[0];
    setReel2(selectedFile);

    // console.log(event.target.files)
    const data = new FileReader();
    data.onload = function () {
      // console.log(data.result)
      infoDict.current["reel"].push(data.result);
    };
    data.addEventListener("load", () => {
      setImgs(data.result);
    });
    data.readAsDataURL(event.target.files[0]);
  };

  const handleReel3Change = (event) => {
    const selectedFile = event.target.files[0];
    setReel3(selectedFile);

    // console.log(event.target.files)
    const data = new FileReader();
    data.onload = function () {
      // console.log(data.result)
      infoDict.current["reel"].push(data.result);
    };
    data.addEventListener("load", () => {
      setImgs(data.result);
    });
    data.readAsDataURL(event.target.files[0]);
  };

  const handleCreateProfile = () => {
    // Implement your logic to create the profile here
    // For example, you can send the form data to a server or perform any other actions
    console.log(infoDict.current);
    const [temp, setTemp] = useState(0);

    useEffect(() => {
      const fetchData = async () => {
        const result = await fetch("http://localhost:1337/print");
        console.log(result);
      };
      fetchData();
    });

    navigate("/home");
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const calculateProgressPercentage = () => {
    const totalSteps = 6;
    return (currentStep / totalSteps) * 100;
  };

  return (
    <div className="cp">
      <div className="header">Aire</div>
      <div className="create-profile-container">
        {currentStep === 1 && (
          <div>
            {/* Step 1: Profile Picture */}
            <div className="profile-picture-circle">
              {profilePicture ? (
                <img
                  src={URL.createObjectURL(profilePicture)}
                  alt="Profile"
                  className="profile-picture"
                />
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
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <div className="profile-name">
              <div className="name">NAME: </div>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="name-input"
              />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <div className="profile-followers">
              <div className="followers"> FOLLOWERS: </div>
              <input
                type="number"
                value={followers}
                onChange={handleFollowersChange}
                className="followers-input"
              />
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <div className="profile-bio">
              <label>I'm looking for:</label>
              <textarea
                value={bio}
                onChange={handleBioChange}
                className="bio-input"
              />
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div>
            <div className="niche"> NICHE: </div>
            <div className="niche-tiles">
              {niches.map((niche, index) => (
                <div
                  key={niche}
                  className={`niche-tile ${
                    selectedNiche.includes(niche) ? "selected" : ""
                  }`}
                  onClick={() => handleNicheClick(niche)}
                >
                  {niche}
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 6 && (
          <div>
            <div className="posts"> Posts </div>
            <div className="reel-container">
              <div className="reel">
                {reel1 ? (
                  <div className="reel-preview">
                    {reel1.type.startsWith("image/") ? (
                      <img
                        src={URL.createObjectURL(reel1)}
                        alt="Reel 1"
                        className="reel-preview-image"
                      />
                    ) : (
                      <video
                        src={URL.createObjectURL(reel1)}
                        controls
                        className="reel-preview-video"
                      />
                    )}
                  </div>
                ) : (
                  <div className="reel-placeholder-box">
                    <label htmlFor="reel1" className="reel-upload-btn">
                      <span>+</span>
                    </label>
                  </div>
                )}
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
                    {reel2.type.startsWith("image/") ? (
                      <img
                        src={URL.createObjectURL(reel2)}
                        alt="Reel 2"
                        className="reel-preview-image"
                      />
                    ) : (
                      <video
                        src={URL.createObjectURL(reel2)}
                        controls
                        className="reel-preview-video"
                      />
                    )}
                  </div>
                ) : (
                  <div className="reel-placeholder-box">
                    <label htmlFor="reel2" className="reel-upload-btn">
                      <span>+</span>
                    </label>
                  </div>
                )}
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
                    {reel3.type.startsWith("image/") ? (
                      <img
                        src={URL.createObjectURL(reel3)}
                        alt="Reel 3"
                        className="reel-preview-image"
                      />
                    ) : (
                      <video
                        src={URL.createObjectURL(reel3)}
                        controls
                        className="reel-preview-video"
                      />
                    )}
                  </div>
                ) : (
                  <div className="reel-placeholder-box">
                    <label htmlFor="reel3" className="reel-upload-btn">
                      <span>+</span>
                    </label>
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*, video/*"
                  onChange={handleReel3Change}
                  className="reel-input"
                  id="reel3"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${calculateProgressPercentage()}%` }}
        ></div>
      </div>

      <div className="nav-buttons">
        {currentStep > 1 && <button onClick={handlePreviousStep}>◀</button>}
        {currentStep < 6 && <button onClick={handleNextStep}>▶</button>}
        {currentStep === 6 && (
          <button
            className="create-profile-button"
            onClick={handleCreateProfile}
          >
            Create Profile
          </button>
        )}
      </div>

      <div className="login-link">
        <em>
          Have an account? <Link to="/login">Log In</Link>
        </em>
      </div>
    </div>
  );
};

export default CreateProfile;
