import React, { useState, useEffect } from "react";
import "./Upper.css";
import { Container, Grid } from "@mui/material";
import {AiOutlineDown ,AiOutlineUp} from "react-icons/ai"

const ToggleButton = ({ title,heading, content }) => {

  
  const [isOpen, setIsOpen] = useState(false);
  const [iconVisible, setIconVisible] = useState(<AiOutlineDown/>);
  const toggleContent = () => {
    setIsOpen(!isOpen);
    setIconVisible(!iconVisible);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Adjust the screen size as per your requirement

    const handleResize = (e) => {
      if (mediaQuery.matches) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    // Add event listener to check for screen size changes
    mediaQuery.addEventListener("change", handleResize);

    // Call the handleResize function initially to set the initial state based on the screen size
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="toggle-button">
      <button  onClick={toggleContent} className={isOpen ? "active" : ""}>
      <span>{title}</span>  <span className="arrow">{iconVisible ? <AiOutlineDown /> : <AiOutlineUp />}</span>
      </button>
      {isOpen && (
        <div className="content">
        <h5 className="heading">{heading}</h5>
       
          <ul>
            {content.map((item, index) => (
              
              <li key={index}>
                <a href="">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Upper = () => {
  const buttonData = [
    {
      title: "MODELS",
      heading:"MODELS",
      content: ["G90 LONG WHEEL BASE", "G90", "G80","ELECTRIFIED G80","G70", "G70 SHOOTING BRAKE","GV80","GV70","ELECTRIFIED GV70","GV60"],
    },
    {
      title: "MEMBERS",
      heading:"MEMBERS",
      content: ["DIGITAL SERVICES"],
    },
    {
      title: "GENESIS",
      heading:"GENESIS",
      content: ["THE BRAND", "BRAND SPACE", "CONCEPT CAR","MOTOR SHOW"],
    },
    {
      title: "SUPPORT",
      heading:"SUPPORT",
      content: ["CONTACT US"],
    },
    {
      title: "REGION",
      heading:"CHANGE YOUR REGION",
      content: ["CHANGE REGION"],
    },
  ];

  return (
    <div className="App">
    <Container>
      
        <Grid container>
          {buttonData.map((button, index) => (
            <Grid item xs={12} sm={12} md={3}>
              <ToggleButton
                key={index}
                title={button.title}
                heading={button.heading}
                content={button.content}
              />
               <hr className="lines"/>
            </Grid>
           
          ))}
        </Grid>
     
    </Container>
    
    </div>
  );
};

export default Upper;
