import React, {useState} from 'react';
import './Home.css';
import logo from './Aire_Final_Logo.jpg';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faFilter, faCog } from '@fortawesome/free-solid-svg-icons';
import collab from './Aire_Bann.png';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Imran from './profiles/IMG_3270.jpg';
import Imran_Reel1 from './profiles/RPReplay_Final1686198482.mov';
import Imran_Post1 from './profiles/IMG_3311.jpg';
import Imran_Post2 from './IMG_8D97B1B5214A-1.jpeg';
import Imran_Post3 from './Benny.png';
import Imran_Reel2 from './profiles/RPReplay_Final1686198506.mov';
import Imran_Reel3 from './RPReplay_Final1686186795.mov';
import Imran_Reel4 from './RPReplay_Final1687404377.mov';

import mydp from './IMG_F075D59AE650-1.jpeg';

const profiles = [
  {
    id: 1,
    profilePicture: Imran,
    profileType: 'Creator',
    name: 'Imran',
    followers: '3700',
    selectedNiche: ['Travel', 'Food', 'Fashion'],
    bio: 'Collabs for a GRWM for Barbie ',
    reels : [Imran_Reel1, Imran_Reel2, Imran_Reel3, Imran_Reel4],
    posts : [Imran_Post1, Imran_Post2, Imran_Post3],
    distance: '3km away',
  },

  {
    id: 2,
    profilePicture: Imran,
    profileType: 'Creator',
    name: 'Imran',
    followers: '3700',
    selectedNiche: ['Travel', 'Food', 'Fashion'],
    bio: 'Collabs for a GRWM for Barbie ',
    reels : [Imran_Reel1, Imran_Reel2],
    distance: '3km away'
  },
];

const HomeScreen = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = React.useState(0);
  const currentProfile = profiles[currentProfileIndex];

  const handleNextProfile = () => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousProfile = () => {
    if (currentProfileIndex > 0) {
      setCurrentProfileIndex((prevIndex) => prevIndex - 1);
    }
  };

  const [activeTab, setActiveTab] = React.useState('posts'); 

  const navigate = useNavigate();

  const NicheTile = ({ niche }) => {
    return <div className="niche-tile">{niche}</div>;
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const [collabVisible, setCollabVisible] = useState(true);
  const [filterVisible, setFilterVisible] = useState (false);
  

  const filterclick = () => {
      setCollabVisible(false);
      setFilterVisible(true);
  };

  const [followers, setFollowers] = useState([0, 50]);

  const handleFollowerRangeChange = (values) => {
    setFollowers(values);
  };

  const [selectedNiche, setSelectedNiche] = useState([]);

  const filterniches = [
    'Travel', 'Food', 'Fashion', 'Fitness', 'Lifestyle', 'Beauty', 'Gaming',
    'Education', 'Dance', 'Comedy', 'Finance', 'Other'
  ];

  const handleNicheClick = (niche) => {
    if (selectedNiche.includes(niche)) {
      setSelectedNiche((prevSelected) => prevSelected.filter((item) => item !== niche));
    } else if (selectedNiche.length < 3) {
      setSelectedNiche((prevSelected) => [...prevSelected, niche]);
    }
  };

  const [distance, setDistance] = useState(0);
      
  const handleSliderChange = (value) => {
      setDistance(value);
  };
    
  const applyfilter = () => {
      setCollabVisible(true);
      setFilterVisible(false);
  };

  return (
    <div className='home-screen'>
      <div className='side-bar'>
          <img src = {logo} alt='AIRE' className='side-logo'></img>
          <div className='nav-icons'>
            <img src = {mydp} alt = 'Yash' className='mydp'></img>
            <p> Yash </p> 
            <FontAwesomeIcon icon = {faFilter} className='filter-icon'  onClick={filterclick}  ></FontAwesomeIcon>
            <FontAwesomeIcon icon = {faCog} className='setting-icon'></FontAwesomeIcon>
          </div>
          {collabVisible &&
          <div className='collabs'>
            <label> Collaborations </label>
            <img src= {collab} alt='No Collabs Yet' className='no-collab'></img>
            <p> You have no Collaborations yet! Collabs will appear here once you start swiping on profiles!</p>
          </div>
          }
          {filterVisible &&
          <div className='home-filter'>
            <label> Filters </label>
            <div className='home-followers'>
              <label> Followers</label>
              <p> Show users with <span> {followers[0]}K </span> to <span> {followers[1]}K </span> followers</p>
                <div className='follower-slider'>
                    <Slider range
                    min={0}
                    max={50}
                    step={5}
                    value={followers}
                    onChange={handleFollowerRangeChange}
                    allowCross = {false}
                    />
                </div>
            </div>
            <div className='home-niche'>
            <label> Niche </label>
              <div className="niche-tags">
                  {filterniches.map((niche, index) => (
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
            <div className='home-distance'>
                <label> Distance </label>
                <p> Upto <span> {distance} km </span>   </p>
                <div className='distance-slider'>
                  <Slider
                      min={0}
                      max={100}
                      step={1}
                      value={distance}
                      onChange={handleSliderChange}
                  />
                </div>
            </div>
            <button onClick={applyfilter}> Apply Filters </button>
          </div>
          }
      </div>
      <div className='profile-display'>
        <div className='profile-basic'>
          <div className='pro-pic-container'>
          <img src= {currentProfile.profilePicture} alt='Profile Picture' className='pro-pic'/>
          </div>
          <div className='profile-info'>
            <div className='profile-n'>
              <label> {currentProfile.name} </label>
              <div className='pn-tag'> {currentProfile.profileType} </div>
            </div>
            <div className='profile-f'>
              <FontAwesomeIcon icon={faInstagram} className='instagram-icon'/>
              <p> &nbsp;: <span> {currentProfile.followers} </span> followers</p>
            </div>
            <div className='profile-bio'>
              <label>I'm looking for</label>
              <p> {currentProfile.bio} </p>
            </div>
            <div className='home-niche'>
              <div className='niche-tags'> 
                {currentProfile.selectedNiche.map((niche, index) => (
                  <div key={index} className= 'niche-tag'>
                    {niche}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='ld'>
          <button className='dislike'> Dislike </button>
          <button className='like'> Like </button>
        </div>
        <div className='media'>
          <div className='tabs'>
            <div
              className={`tab ${activeTab === 'posts' ? 'active' : ''}`}
              onClick={() => handleTabChange('posts')}
            >
            Posts
            </div>
            <div
              className={`tab ${activeTab === 'reels' ? 'active' : ''}`}
              onClick={() => handleTabChange('reels')}
            >
              Reels
            </div>
          </div> 
          <div className='media-content'>
            {activeTab === 'posts' ? (
              <div className='posts-content'>
              {currentProfile.posts.map((imgSrc, index) => (
                <div key={index} >
                  <img className='home-post' src={imgSrc} alt='Post' />
                </div>
              ))}
              </div>
            ) : (
              <div className='reels-content'>
                {currentProfile.reels.map((videoSrc, index) => (
                  <div key={index}>
                    <video className='home-reel' controls>
                      <source src={videoSrc} type='video/mp4' />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            )}
          </div> 
        </div>
      </div>
    </div>
  )   
};

export default HomeScreen;
