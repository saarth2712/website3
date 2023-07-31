import React, { useState } from 'react';
import { Range } from 'react-range';
// import './Filter.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHome } from '@fortawesome/free-solid-svg-icons';

const FiltersPage = () => {
  const [selectedNiche, setSelectedNiche] = useState([]);
  const [distance, setDistance] = useState('');
  const [followersRange, setFollowersRange] = useState([0, 10000]);
  const [isBrandSelected, setIsBrandSelected] = useState(false);
  const [isCreatorSelected, setIsCreatorSelected] = useState(false);

  const navigate = useNavigate();

  const niches = [
    'Travel', 'Food', 'Fashion', 'Fitness', 'Lifestyle', 'Beauty', 
    'Photography', 'Art', 'Technology', 'Music', 'Gaming', 'Health',
    'Education', 'Dance', 'Comedy', 'Cars', 'Bollywood', 'Finance'
  ];

  const handleNicheClick = (niche) => {
    if (selectedNiche.includes(niche)) {
      setSelectedNiche((prevSelected) => prevSelected.filter((item) => item !== niche));
    } else if (selectedNiche.length < 3) {
      setSelectedNiche((prevSelected) => [...prevSelected, niche]);
    }
  };

  const handleFollowersChange = (value) => {
    setFollowersRange(value);
  };

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };


  const handleBrandChange = (event) => {
    setIsBrandSelected(event.target.checked);
  };

  const handleCreatorChange = (event) => {
    setIsCreatorSelected(event.target.checked);
  };

  const handleHomeClick = () => {
    navigate('/home')
  };

  const handleChatClick = () => {
    navigate('/')
  };

  const handleApplyFilters = () => {
    navigate('/home')
  };

  return (
    <div className='filters-screen'>
        <div className='header-bar'>
          <FontAwesomeIcon icon={faHome} className="home-icon" onClick={handleHomeClick} />
          <h1> AIRE </h1>
          <FontAwesomeIcon icon={faComment} className="chat-icon" onClick={handleChatClick} />
        </div>

        <div className='filters-container'>
          <div className = 'p-type'>        
            <h1> SHOW </h1>
            <div className='check'>
              <label>
                <input
                  type='checkbox'
                  value='brand'
                  checked={isBrandSelected}
                  onChange={handleBrandChange}
                />
              Brands
              </label>
              <label>
                <input
                  type='checkbox'
                  value='creators'
                  checked={isCreatorSelected}
                  onChange={handleCreatorChange}  
                />
              Creators
              </label>
            </div>
          </div>

          <div className = 'nichescontainer'>
              <h1> NICHE </h1>
              <div className= "nichetiles">
                {niches.map((niche, index) => (
                  <div
                    key={niche}
                    className={`nichetile ${selectedNiche.includes(niche) ? 'selected' : ''}`}
                    onClick={() => handleNicheClick(niche)}>
                    {niche}
                  </div>
                ))}
              </div>
          </div>
        
          <div className='distance-container'>
              <h1>DISTANCE</h1>
              <div className='distance-slider-container'>
                  <h3> Upto {distance} Km </h3>
              <input
                  type='range'
                  min='0'
                  max='100'
                  value={distance}
                  onChange={handleDistanceChange}
                  className='distance-slider'
              />
              </div>
          </div>
          <div className='followers-container'>
            <h1>FOLLOWERS</h1>
            <div className='followers-slider-container'>
              <h3> {followersRange[0]/1000}K to {followersRange[1]/1000}K </h3>
              <Range
                step={1000}
                min={0}
                max={20000}
                values={followersRange}
                onChange={handleFollowersChange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '6px',
                      background: '#ddd',
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '20px',
                      width: '20px',
                      backgroundColor: '#007bff',
                      borderRadius: '50%',
                      cursor: 'pointer',
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div className='apply'>
          <button className="apply-filters-button" onClick={handleApplyFilters}>
          Apply Filters
          </button>
          </div>
        </div>
    </div>
  );
};

export default FiltersPage;
