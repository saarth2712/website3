import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faFilter, faPen } from '@fortawesome/free-solid-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import Imran from '/Users/saarth2712/website3/src/profiles/IMG_3270.jpg';
import Imran_Reel1 from '/Users/saarth2712/website3/src/profiles/RPReplay_Final1686198506.mov';
import Imran_Reel2 from '/Users/saarth2712/website3/src/profiles/IMG_3311.jpg';
import Imran_Reel3 from '/Users/saarth2712/website3/src/profiles/RPReplay_Final1686198482.mov';

const profiles = [
    {
      id: 1,
      profilePicture: Imran,
      profileType: 'Creator',
      name: 'Imran',
      followers: '3700',
      selectedNiche: ['Travel', 'Food', 'Fashion'],
      bio: 'Collabs for a GRWM for Barbie ',
      reels : [Imran_Reel1, Imran_Reel2, Imran_Reel3],
      distance: '3km away'
    },
]


const EditProfile = () => {
    const navigate = useNavigate();
    const currentProfile = profiles[0]; 

    const handleFilterClick = () => {
        navigate('/filters')
    };
    
      const handleChatClick = () => {
        navigate('/')
    };

    const NicheTile = ({ niche }) => {
        return <div className="niche-tile">{niche}</div>;
    };

    const Reel = ({ src }) => {
        const isVideo = /\.(mov|mp4)$/i.test(src);
    
        if (isVideo) {
          return (
            <div className="reel-container">
              <video className="reel" controls>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          );
        } else {
          return (
            <div className="reel-container">
              <img className="reel" src={src} alt="Reel" />
            </div>
          );
        }
    };

  return (
    <div className='editprofile-screen'>
        <div className='header-bar'>
        <FontAwesomeIcon icon={faFilter} className="filter-icon" onClick={handleFilterClick} />
        <h1> AIRE </h1>
        <FontAwesomeIcon icon={faComment} className="chat-icon" onClick={handleChatClick} />
        </div>
        <div className='profile-container'>
            <div className='profile-top'>
                <div className="profile-picture">
                    <img className="dp" src={currentProfile.profilePicture} alt="Profile"></img>
                    <div className="edit-profile-icon">
                    <FontAwesomeIcon icon={faPen} className="pen-icon" />
                    </div>
                </div>
                <div className='profile-basic'>
                    <p className='profile-info'> {currentProfile.name} , 
                        <span className="profile-f">
                        <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
                        <text> : </text>
                        {currentProfile.followers} 
                        </span>
                    </p>
                    <p className='profile-text'>I am a 
                    <span className='type'> {currentProfile.profileType}</span>
                    </p>
                    <div className="niches-container">
                    {currentProfile.selectedNiche.map((niche) => (
                        <NicheTile key={niche} niche={niche} />
                    ))}
                    </div>
                </div>
            </div>
            <div className='profile-mid'>
                <div className='prompt'>
                    <p className='question'> I am looking for </p>
                    <p className='answer'> {currentProfile.bio} </p>
                </div>
            </div>
            <div className='profile-bottom'>
                {currentProfile.reels.map((reelSrc, index) => (
                    <Reel key={index} src={reelSrc} />
                ))}
                <p className="profile-distance">{currentProfile.distance}</p>
            </div>
        </div>
    </div>
  )
}

export default EditProfile;