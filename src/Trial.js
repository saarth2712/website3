import React, { useState } from 'react';
import './Trial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faCog } from '@fortawesome/free-solid-svg-icons';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const Trial = () => {
    const [collabVisible, setCollabVisible] = useState(true);
    const [filterVisible, setFilterVisible] = useState (false);
    const [selectedNiche, setSelectedNiche] = useState([]);

    const maxSelectedNiche = 3;

    const filterclick = () => {
        setCollabVisible(false);
        setFilterVisible(true);
    };

    const applyfilter = () => {
        setCollabVisible(true);
        setFilterVisible(false);
    };

    const [distance, setDistance] = useState(0);
      
    const handleSliderChange = (value) => {
        setDistance(value);
    };
      
    const [followers, setFollowers] = useState([1000, 5000]);

    const handleFollowerRangeChange = (values) => {
      setFollowers(values);
    };

    const trialniches = [
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

    return(

    <div className='trial'>
        <div className='bar-side'>
            <div className='trial-nav-icons'>
                <p> Yash </p> 
                <FontAwesomeIcon icon = {faFilter} className='trial-filter-icon' onClick={filterclick} ></FontAwesomeIcon>
                <FontAwesomeIcon icon = {faCog} className='trial-setting-icon'></FontAwesomeIcon>
                </div>
            {collabVisible &&    
            <div className='trial-collabs'>
            <label> Collaborations </label>
            <p> You have no Collaborations yet! Collabs will appear here once you start swiping on profiles!</p>
            </div>
            }
            {filterVisible &&
            <div className='trial-filter'> 
                <div className='trial-distance'>
                    <label> Distance: {distance} km </label>
                    <Slider
                        min={0}
                        max={100}
                        step={1}
                        value={distance}
                        onChange={handleSliderChange}
                        trackClassName="custom-slider-track"
                        handleClassName="custom-slider-handle"
                        dotClassName="custom-slider-dot"
                        dotActiveClassName="custom-slider-dot-active"
                    />
                </div>

                <div className='trial-followers'>
                    <label>Followers</label>
                    <p>{followers[0]}K to {followers[1]}K</p>
                    <div className='follower-range-slider'>
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

                <div className="niche"> 
                    <label> Niche </label>
                    <div className="niche-tags">
                        {trialniches.map((niche, index) => (
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

            <button onClick={applyfilter} > Apply Filters </button>
            </div>
            }
        </div>
    </div>

    )
}

export default Trial;