import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";
import logo from "./Aire_Final_Logo.jpg";

const CreateAccount = () => {
  const [selectedAccountType, setSelectedAccountType] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [bio, setBio] = useState("");
  const [selectedNiche, setSelectedNiche] = useState([]);
  const [reel1, setReel1] = useState(null);
  const [reel2, setReel2] = useState(null);
  const [reel3, setReel3] = useState(null);
  const [post1, setPost1] = useState(null);
  const [post2, setPost2] = useState(null);
  const [post3, setPost3] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const [imgs, setImgs] = useState();
  const infoDict = useRef({ niche: [], reel: [], post: [] });

  const handleAccountTypeClick = (type) => {
    setSelectedAccountType(type === selectedAccountType ? "" : type);
    infoDict["accountType"] = type;
  };

  const handleCreateAccountClick = () => {
    console.log(infoDict.current);
    navigate("/home");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    infoDict.current["name"] = name;
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    infoDict.current["username"] = username;
  };

  const handleFollowersChange = (event) => {
    setFollowers(event.target.value);
    infoDict.current["followers"] = followers;
  };

  const maxSelectedNiche = 3;

  const niches = [
    "Travel",
    "Food",
    "Fashion",
    "Fitness",
    "Lifestyle",
    "Beauty",
    "Gaming",
    "Education",
    "Dance",
    "Comedy",
    "Finance",
    "Other",
  ];

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
      infoDict.current["niche"].push(niche);
    }
  };

  const handleImageChange = async (event) => {
    setProfilePicture(event.target.files[0]);
    const data = new FileReader();
    data.onload = function () {
      infoDict.current["profilePicture"] = data.result;
    };
    data.addEventListener("load", () => {
      setImgs(URL.createObjectURL(event.target.files[0]));
      //   setImgs(event.target.files[0]);
    });
    data.readAsDataURL(event.target.files[0]);
  };

  const handlePost1Change = (event) => {
    const selectedFile = event.target.files[0];
    // setPost1(selectedFile);

    const data = new FileReader();
    data.onload = function () {
      infoDict.current["post"].push(data.result);
    };
    data.addEventListener("load", () => {
      setPost1(URL.createObjectURL(event.target.files[0]));
    });
    data.readAsDataURL(event.target.files[0]);
  };

  const handlePost2Change = (event) => {
    const selectedFile = event.target.files[0];

    const data = new FileReader();
    data.onload = function () {
      infoDict.current["post"].push(data.result);
    };
    data.addEventListener("load", () => {
      setPost2(URL.createObjectURL(event.target.files[0]));
    });
    data.readAsDataURL(event.target.files[0]);
  };
  const handlePost3Change = (event) => {
    const selectedFile = event.target.files[0];

    const data = new FileReader();
    data.onload = function () {
      infoDict.current["post"].push(data.result);
    };
    data.addEventListener("load", () => {
      setPost3(URL.createObjectURL(event.target.files[0]));
    });
    data.readAsDataURL(event.target.files[0]);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
    infoDict.current["bio"] = bio;
  };
  const handleReel1Change = (event) => {
    const selectedFile = event.target.files[0];
    // setReel1(selectedFile);

    const data = new FileReader();
    data.onload = function () {
      infoDict.current["reel"].push(data.result);
    };
    data.addEventListener("load", () => {
      setReel1(URL.createObjectURL(event.target.files[0]));
    });
    data.readAsDataURL(event.target.files[0]);
  };
  const handleReel2Change = (event) => {
    const selectedFile = event.target.files[0];
    // setReel2(selectedFile);

    const data = new FileReader();
    data.onload = function () {
      infoDict.current["reel"].push(data.result);
    };
    data.addEventListener("load", () => {
      setReel2(URL.createObjectURL(event.target.files[0]));
    });
    data.readAsDataURL(event.target.files[0]);
  };
  const handleReel3Change = (event) => {
    const selectedFile = event.target.files[0];
    // setReel3(selectedFile);

    const data = new FileReader();
    data.onload = function () {
      infoDict.current["reel"].push(data.result);
    };
    data.addEventListener("load", () => {
      setReel3(URL.createObjectURL(event.target.files[0]));
    });
    data.readAsDataURL(event.target.files[0]);
  };

  return (
    <div className="create-account">
      <div className="create-account-header">
        <img src={logo} alt="Aire Logo" className="ca-logo" />
        <div className="ca-nav-links">
          <p>
            Already a user? <a href="/Login"> Login</a>
          </p>
        </div>
      </div>
      <div className="create-head">
        <p> Create Account </p>
      </div>
      <div className="create-account-container">
        <div className="create-form">
          <div className="name">
            <label> Name </label>
            <input type="text" placeholder="Name" onChange={handleNameChange} />
          </div>

          <div className="username">
            <label> Username </label>
            <input
              type="text"
              placeholder="@InstagramHandle"
              onChange={handleUsernameChange}
            />
          </div>

          <div className="followers">
            <label> Followers</label>
            <input
              type="text"
              placeholder="Followers"
              onChange={handleFollowersChange}
            />
          </div>

          <div className="account-type">
            <label> I'm a </label>
            <div className="account-tags">
              <div
                className={`account-tag ${
                  selectedAccountType === "brand" ? "selected" : ""
                }`}
                onClick={() => handleAccountTypeClick("brand")}
              >
                Brand
              </div>
              <div
                className={`account-tag ${
                  selectedAccountType === "creator" ? "selected" : ""
                }`}
                onClick={() => handleAccountTypeClick("creator")}
              >
                Creator
              </div>
            </div>
          </div>

          <div className="bio-prompt">
            <label> I'm looking for </label>
            <input
              type="text"
              placeholder="Collab on GRWM for Barbie"
              onChange={handleBioChange}
            />
          </div>

          <div className="niche">
            <label> Niche </label>
            <div className="niche-tags">
              {niches.map((niche, index) => (
                <div
                  key={niche}
                  className={`niche-tag ${
                    selectedNiche.includes(niche) ? "selected" : ""
                  }`}
                  onClick={() => handleNicheClick(niche)}
                >
                  {niche}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="media-upload">
          <div className="profile-picture">
            <p> Profile Picture </p>
            <>
              {imgs ? (
                <img src={imgs} alt="Uploaded" className="img-upload" />
              ) : (
                <>
                  <label htmlFor="profile-picture-input">
                    <div className="plus-icon">+</div>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="profile-picture-input"
                    onChange={handleImageChange}
                  />
                </>
              )}
            </>
          </div>
          <div className="account-posts">
            <p> Posts </p>
            <div className="posts">
              <>
                {post1 ? (
                  <img src={post1} alt="Uploaded" className="img-upload" />
                ) : (
                  <>
                    <label htmlFor="profile-picture-input">
                      <div className="plus-icon">+</div>
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      id="profile-picture-input"
                      onChange={handlePost1Change}
                    />
                  </>
                )}
              </>

              <>
                {post2 ? (
                  <img src={post2} alt="Uploaded" className="img-upload" />
                ) : (
                  <>
                    <label htmlFor="profile-picture-input">
                      <div className="plus-icon">+</div>
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      id="profile-picture-input"
                      onChange={handlePost2Change}
                    />
                  </>
                )}
              </>

              <>
                {post3 ? (
                  <img src={post3} alt="Uploaded" className="img-upload" />
                ) : (
                  <>
                    <label htmlFor="profile-picture-input">
                      <div className="plus-icon">+</div>
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      id="profile-picture-input"
                      onChange={handlePost3Change}
                    />
                  </>
                )}
              </>
            </div>
          </div>
          <div className="account-reels">
            <p> Reels </p>
            <div className="reels">
              <label htmlFor="reels-input">
                <div className="plus-icon">+</div>
              </label>
              <input
                type="file"
                accept="video/*"
                id="reels-input"
                onChange={handleReel1Change}
              />
              <label htmlFor="reels-input">
                <div className="plus-icon">+</div>
              </label>
              <input
                type="file"
                accept="video/*"
                id="reels-input"
                onChange={handleReel2Change}
              />
              <label htmlFor="reels-input">
                <div className="plus-icon">+</div>
              </label>
              <input
                type="file"
                accept="video/*"
                id="reels-input"
                onChange={handleReel3Change}
              />
            </div>
          </div>
          <p> Upload atleast 1 post and 1 reel</p>
        </div>
      </div>
      <button
        className="create-account-button"
        onClick={handleCreateAccountClick}
      >
        {" "}
        Create Account{" "}
      </button>
      <div className="account-tc">
        {" "}
        By creating an account, you agree to our Terms. See how we use your data
        in our Privacy Policy.{" "}
      </div>
    </div>
  );
};

export default CreateAccount;
