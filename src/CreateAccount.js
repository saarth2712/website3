import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';
import logo from './Aire_Final_Logo.jpg';


const CreateAccount = () => {
    const [selectedAccountType, setSelectedAccountType] = useState("");
    const [selectedNiche, setSelectedNiche] = useState([]);

    const handleAccountTypeClick = (type) => {
        setSelectedAccountType(type === selectedAccountType ? "" : type);
    };

    const navigate = useNavigate();

    const maxSelectedNiche = 3;
  
    const niches = [
      'Travel', 'Food', 'Fashion', 'Fitness', 'Lifestyle', 'Beauty', 'Gaming',
      'Education', 'Dance', 'Comedy', 'Finance', 'Other'
    ];

    const handleNicheClick = (niche) => {
        if (selectedNiche.includes(niche)) {
          setSelectedNiche((prevSelected) => prevSelected.filter((item) => item !== niche));
        } else if (selectedNiche.length < maxSelectedNiche) {
          setSelectedNiche((prevSelected) => [...prevSelected, niche]);
        }
    };

    return (
        <div className="create-account">
            <div className="create-account-header">
                <img src = {logo} alt="Aire Logo" className="ca-logo" />
                <div className="ca-nav-links">
                    <p>Already a user? <a href="/Login"> Login</a></p>
                </div>
            </div>
            <div className="create-head">
                <p> Create Account </p> 
            </div>
            <div className="create-account-container">
                <div className="create-form">
                    <div className="name">
                        <label > Name </label>
                        <input type="text"  placeholder="Name" />
                    </div>

                    <div className="username">
                        <label > Username </label>
                        <input type="text"  placeholder="@InstagramHandle" />
                    </div>

                    <div className="followers">
                        <label> Followers</label>
                        <input type="text"  placeholder="Followers" />
                    </div>

                    <div className="account-type">
                        <label> I'm a </label>
                        <div className="account-tags">
                            <div
                                className={`account-tag ${selectedAccountType === "brand" ? "selected" : ""}`}
                                onClick={() => handleAccountTypeClick("brand")}
                            >
                                Brand
                            </div>
                            <div
                                className={`account-tag ${selectedAccountType === "creator" ? "selected" : ""}`}
                                onClick={() => handleAccountTypeClick("creator")}
                            >
                                Creator
                            </div>
                        </div>
                    </div>

                    <div className="bio-prompt">
                        <label> I'm looking for </label>
                        <input type = "text" placeholder="Collab on GRWM for Barbie" />
                    </div>

                    <div className="niche"> 
                        <label> Niche </label>
                        <div className= "niche-tags">
                            {niches.map((niche, index) => (
                                <div
                                key={niche}
                                className={`niche-tag ${selectedNiche.includes(niche) ? 'selected' : ''}`}
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
                        <label htmlFor="profile-picture-input">
                            <div className="plus-icon">+</div>
                        </label>
                        <input type="file" accept="image/*" id="profile-picture-input" />
                    </div>
                    <div className="account-posts">
                        <p> Posts </p>
                        <div className="posts">
                            <label htmlFor="post-input">
                                <div className="plus-icon">+</div>
                            </label>
                            <input type="file" accept="image/*" id="post-input" />
                            <label htmlFor="post-input">
                                <div className="plus-icon">+</div>
                            </label>
                            <input type="file" accept="image/*" id="post-input" />
                            <label htmlFor="post-input">
                                <div className="plus-icon">+</div>
                            </label>
                            <input type="file" accept="image/*" id="post-input" />
                        </div>
                    </div>
                    <div className="account-reels">
                    <p> Reels </p>
                        <div className="reels">
                            <label htmlFor="reels-input">
                                <div className="plus-icon">+</div>
                            </label>
                            <input type="file" accept="video/*" id="reels-input" />
                            <label htmlFor="reels-input">
                                <div className="plus-icon">+</div>
                            </label>
                            <input type="file" accept="video/*" id="reels-input" />
                            <label htmlFor="reels-input">
                                <div className="plus-icon">+</div>
                            </label>
                            <input type="file" accept="video/*" id="reels-input" />
                        </div>
                    </div>
                    <p> Upload atleast 1 post and 1 reel</p>
                </div>
            </div>
            <button className="create-account-button"> Create Account </button>
            <div className='account-tc'> By creating an account, you agree to our Terms. See how we use your data in our Privacy Policy. </div>
        </div>
    )
};

export default CreateAccount;