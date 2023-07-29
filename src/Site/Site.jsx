import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import "../Site/Side.css"
import {FaGripLinesVertical,FaFacebookF,FaInstagram,FaYoutube,FaLinkedin} from "react-icons/fa"
const Site = () => {
  return (
    <section className='allterms'>
    <Container >
        <Grid container justifyContent="space-between" >
            <Grid item sx={12} sm={8} md={9} margin="auto">
                <div className='termslinks'>
                    <a href="">Sitemap</a> <FaGripLinesVertical className='lines'/>
                    <a href="">Term of use</a>  <FaGripLinesVertical className='lines'/>
                    <a href="">Change Region</a>  
                    
                </div>
            </Grid>
            <Grid item sx={12} sm={4} md={3} justifyContent="center" margin="auto">
            <div className='logohold'>
           
                <FaFacebookF className='logo'/>
                <FaInstagram className='logo'/>
                <FaYoutube className='logo'/>
                <FaLinkedin className='logo other'/>
                </div>
            </Grid>
        </Grid>
    </Container>
    </section>
  )
}

export default Site