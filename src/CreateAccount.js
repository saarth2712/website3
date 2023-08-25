import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';
import logo from './Aire_Final_Logo.jpg';


const CreateAccount = () => {
    const [selectedAccountType, setSelectedAccountType] = useState("");
    const [selectedNiche, setSelectedNiche] = useState([]);
    const [profilePicture, setProfilePicture] = useState(null);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [followers, setFollowers] = useState('');
    const [bio, setBio] = useState('');
    const [reel1, setReel1] = useState(null);
    const [reel2, setReel2] = useState(null);
    const [reel3, setReel3] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);

    const infoDict = useRef({"niche":[], "reel":[], "posts":[]})

    const [imgs, setImgs] = useState()

    const handleImageChange = async (event) => {
        setProfilePicture(event.target.files[0]);
      
      
    // console.log(event.target.files)
    const data = new FileReader()
    data.onload = function(){
        // console.log(data.result)
        infoDict.current["profilePicture"] = data.result
    }
    data.addEventListener('load',() => {
        setImgs(data.result)
    })
    data.readAsDataURL(event.target.files[0])
    // const result = await data.result
    // console.log(data)
    };
    
    const handleNameChange = (event) => {
        setName(event.target.value);
        infoDict.current["name"] = event.target.value
    };
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        infoDict.current["username"] = event.target.value
    };
    
    const handleFollowersChange = (event) => {
        setFollowers(event.target.value);
        infoDict.current["followers"] = event.target.value
    };
    
    const handleBioChange = (event) => {
        setBio(event.target.value);
        infoDict.current["bio"] = event.target.value
    };


    const handleAccountTypeClick = (type) => {
        console.log(type)
        setSelectedAccountType(type === selectedAccountType ? "" : type);
        if (type === "brand"){
            infoDict.current["isBrand"] = true
        }
        else{
            infoDict.current["isBrand"] = false
        }
    };

    const navigate = useNavigate(); 

    const handleCreateAccountClick = () => {
        console.log(infoDict.current)
      navigate('/home'); 
    };
  

    const maxSelectedNiche = 3;
  
    const niches = [
      'Travel', 'Food', 'Fashion', 'Fitness', 'Lifestyle', 'Beauty', 'Gaming',
      'Education', 'Dance', 'Comedy', 'Finance', 'Other'
    ];

    const handleNicheClick = (niche) => {
        if (selectedNiche.includes(niche)) {
          setSelectedNiche((prevSelected) => prevSelected.filter((item) => item !== niche));
          infoDict.current["niche"].splice(infoDict.current["niche"].indexOf(niche));
        } else if (selectedNiche.length < maxSelectedNiche) {
          setSelectedNiche((prevSelected) => [...prevSelected, niche]);
          infoDict.current["niche"].push(niche);
        }
    };

    const handlePost1Change = (event) => {
        const selectedFile = event.target.files[0];
        setReel1(selectedFile);
        // console.log(event.target.files)
        const data = new FileReader()
        data.onload = function(){
        //   console.log(data.result)
          infoDict.current["posts"].push(data.result);
        }
        data.addEventListener('load',() => {
          setImgs(data.result)
        })
        data.readAsDataURL(event.target.files[0])
    };

    const handlePost2Change = (event) => {
        const selectedFile = event.target.files[0];
        setReel1(selectedFile);
        // console.log(event.target.files)
        const data = new FileReader()
        data.onload = function(){
          // console.log(data.result)
          infoDict.current["posts"].push(data.result);
        }
        data.addEventListener('load',() => {
          setImgs(data.result)
        })
        data.readAsDataURL(event.target.files[0])
    };

    const handlePost3Change = (event) => {
        const selectedFile = event.target.files[0];
        setReel1(selectedFile);
        // console.log(event.target.files)
        const data = new FileReader()
        data.onload = function(){
          // console.log(data.result)
          infoDict.current["posts"].push(data.result);
        }
        data.addEventListener('load',() => {
          setImgs(data.result)
        })
        data.readAsDataURL(event.target.files[0])
    };
    const handleReel1Change = (event) => {
        const selectedFile = event.target.files[0];
        setReel1(selectedFile);
        // console.log(event.target.files)
        const data = new FileReader()
        data.onload = function(){
          // console.log(data.result)
          infoDict.current["reel"].push(data.result);
        }
        data.addEventListener('load',() => {
          setImgs(data.result)
        })
        data.readAsDataURL(event.target.files[0])
    };
      
    const handleReel2Change = (event) => {
    const selectedFile = event.target.files[0];
    setReel2(selectedFile);

    // console.log(event.target.files)
    const data = new FileReader()
    data.onload = function(){
        // console.log(data.result)
        infoDict.current["reel"].push(data.result)
    }
    data.addEventListener('load',() => {
        setImgs(data.result)
    })
    data.readAsDataURL(event.target.files[0])
    };

    const handleReel3Change = (event) => {
    const selectedFile = event.target.files[0];
    setReel3(selectedFile);

    // console.log(event.target.files)
    const data = new FileReader()
    data.onload = function(){
        // console.log(data.result)
        infoDict.current["reel"].push(data.result)
    }
    data.addEventListener('load',() => {
        setImgs(data.result)
    })
    data.readAsDataURL(event.target.files[0])
    };

    const handleCreateProfile = () => {
    // Implement your logic to create the profile here
    // For example, you can send the form data to a server or perform any other actions
    console.log(infoDict.current)
    // navigate('/home')
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
                        <input type="text"  
                        onChange={handleNameChange}
                        placeholder="Name" 
                        />
                    </div>

                    <div className="username">
                        <label > Username </label>
                        <input type="text"  
                        onChange={handleUsernameChange}
                        placeholder="@InstagramHandle" 
                        />
                    </div>

                    <div className="followers">
                        <label> Followers</label>
                        <input type="text"  
                        onChange = {handleFollowersChange}
                        placeholder="Followers" 
                        />
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
                        <input type = "text" 
                        onChange = {handleBioChange}
                        placeholder="Collab on GRWM for Barbie" 
                        />
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
                        <input type="file" 
                        accept="image/*" 
                        onChange={handleImageChange}
                        id="profile-picture-input" />
                    </div>
                    <div className="account-posts">
                        <p> Posts </p>
                        <div className="posts">
                            <label htmlFor="post-input">
                                <div className="plus-icon">+</div>
                            </label>
                            <input type="file" 
                            onChange ={handlePost1Change}
                            accept="image/*" 
                            id="post-input" 
                            />
                            <label htmlFor="post-input">
                                <div className="plus-icon">+</div>
                            </label>
                            <input type="file" 
                            onChange ={handlePost2Change}
                            accept="image/*" 
                            id="post-input" 
                            />
                            <label htmlFor="post-input">
                                <div className="plus-icon">+</div>
                            </label>
                            <input type="file" 
                            onChange ={handlePost3Change}
                            accept="image/*" 
                            id="post-input" 
                            />
                        </div>
                    </div>
                    <div className="account-reels">
                    <p> Reels </p>
                        <div className="reels">
                            <label htmlFor="reels-input">
                                <div className="plus-icon">+</div>
                            </label>
                            <input type="file" 
                            onChange ={handleReel1Change}
                            accept="video/*" 
                            id="reels-input" 
                            />
                            <label htmlFor="reels-input">
                                <div className="plus-icon">+</div>
                            </label>
                            <input type="file"
                            onChange ={handleReel2Change} 
                            accept="video/*" 
                            id="reels-input" 
                            />
                            <label htmlFor="reels-input">
                                <div className="plus-icon">+</div>
                            </label>
                            <input type="file" 
                            onChange ={handleReel3Change}
                            accept="video/*" 
                            id="reels-input" 
                            />
                        </div>
                    </div>
                    <p> Upload atleast 1 post and 1 reel</p>
                </div>
            </div>
            <button className="create-account-button" onClick={handleCreateAccountClick}> Create Account </button>
            <div className='account-tc'> By creating an account, you agree to our Terms. See how we use your data in our Privacy Policy. </div>
        </div>
    )
};

export default CreateAccount;