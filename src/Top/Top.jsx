import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { FaFacebookF, FaTwitter, FaLink, FaChevronUp,FaShare,FaWindowClose } from "react-icons/fa";
import {AiOutlineClose } from "react-icons/ai";
import "../Top/Top.css";
const Top = () => {
  const [showFullDiv, setShowFullDiv] = useState(true);
  const [showToggle, setShowToggle] = useState(false);
  const [buttonText, setButtonText] = useState(<FaShare/>);
  const handleToggle = () => {
    setShowFullDiv(!showFullDiv);
    setButtonText(showFullDiv ? <FaShare/> : <AiOutlineClose/>);
  };

  const showDivOnSmallScreen = () => {
    setShowFullDiv(true);
    setShowToggle(false);
  };

  const hideDivOnSmallScreen = () => {
    setShowFullDiv(false);
    setShowToggle(true);
  };

  useEffect(() => {
    const handleWindowSizeChange = () => {
      if (window.innerWidth <= 768) {
        setShowFullDiv(false);
        setShowToggle(true);
      } else {
        setShowFullDiv(true);
        setShowToggle(false);
      }
    };

    window.addEventListener("resize", handleWindowSizeChange);

    handleWindowSizeChange();

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div className="toggle-container">
     
      <Container>

     
      <Grid container justifyContent="space-between">
      {showToggle && (
        <button className="toggle-button" onClick={handleToggle}>
        {buttonText}
        </button>
      )}
      <Grid item sx={8}>
        {showFullDiv && (
          <div className="full-div">
            
              
                <div>
                  <span className="sha">Share</span>
                  <FaFacebookF className="share" />
                  <FaTwitter className="share" />
                  <FaLink className="share" />
                </div>
              
            
          </div>
        )}
        </Grid>
        <Grid item sx={4}>
          <button className="topbtn" >
          <a href="#topp">TOP</a>   <FaChevronUp />
          </button>
        </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Top;
