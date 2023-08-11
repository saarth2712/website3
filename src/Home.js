import React from 'react';
import './Home.css';
import logo from './Aire_Final_Logo.jpg';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faFilter, faCog } from '@fortawesome/free-solid-svg-icons';
import collab from './Aire_Bann.png';

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

  const handleFilterClick = () => {
    navigate('/filters')
  };

  const NicheTile = ({ niche }) => {
    return <div className="niche-tile">{niche}</div>;
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='home-screen'>
      <div className='side-bar'>
          <img src = {logo} alt='AIRE' className='side-logo'></img>
          <div className='nav-icons'>
            <img src = {mydp} alt = 'Yash' className='mydp'></img>
            <p> Yash </p>
            <FontAwesomeIcon icon = {faFilter} className='filter-icon'></FontAwesomeIcon>
            <FontAwesomeIcon icon = {faCog} className='setting-icon'></FontAwesomeIcon>
          </div>
          <div className='collabs'>
            <label> Collaborations </label>
            <img src= {collab} alt='No Collabs Yet' className='no-collab'></img>
            <p> You have no Collaborations yet! Collabs will appear here once you start swiping on profiles!</p>
          </div>
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
