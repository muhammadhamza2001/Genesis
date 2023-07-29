import {React,useState} from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import "../Media/Media.css"
import {FaExternalLinkAlt} from "react-icons/fa"
const Media = () => {

   const [selectedOption, setSelectedOption] = useState('');

   const handleSelectChange = (event) => {
     setSelectedOption(event.target.value);
   };
 
  return (
    <>
    <div className="black">
    <div className="divider"></div>
    <div className="outermedia">
    
    <Container>
      <Grid container justifyContent="space-between">
        <Grid item sx={4}>
          <div className="media">
            <a href=""><FaExternalLinkAlt className='lin'/>MEDIA CENTER</a>
          </div>
        </Grid>
        <Grid item sx={4}>
       
      <select value={selectedOption} onChange={handleSelectChange} className='selection'>
        <option value="">Asia & Pacific</option>
        <option value="option1">-South Korea</option>
        <option value="option2">-Australia</option>
        <option value="option3">-China</option>
        <option value="option3">Middle East</option>
        <option value="option3">-Bahrain</option>
        
      </select>
        </Grid>
      </Grid>
    </Container>
    </div>
    <div className="divider"></div>
    </div>
    </>
  )
}

export default Media