import React, { useState } from 'react';
import { Container,Grid } from '@mui/material';
import Sadan from './Sadan';
import Suv from './Suv';
import All from './All';
const Type = () => {

  
  // State to track the active button
  const [activeButton, setActiveButton] = useState('button1');

  // Function to handle button clicks and update the active button state
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="allcars" id='model'>
    <Container>
    <div className="our">
      <h2>OUR MODELS</h2>
      <p>Explore Genesis vehicle line-up with its dynamic yet elegant design and cutting-edge technology.</p>
    </div>
    <div className='group'>
 
      <button
        onClick={() => handleButtonClick('button1')}
        className={activeButton === 'button1' ? 'activeButton' : ''}
      >
        ALL
      </button>
      <button
        onClick={() => handleButtonClick('button2')}
        className={activeButton === 'button2' ? 'activeButton' : ''}
      >
        SEDAN
      </button>
      <button
        onClick={() => handleButtonClick('button3')}
        className={activeButton === 'button3' ? 'activeButton' : ''}
      >
        SUVs
      </button>
     
      {/* Content based on the active button */}
      {activeButton === 'button1' && <div><All/></div>}
      {activeButton === 'button2' && <div><Sadan/></div>}
      {activeButton === 'button3' && <div><Suv/></div>}
    </div>
    </Container>
    </div>
  );
};

export default Type;
