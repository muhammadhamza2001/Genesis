import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../Related/Related.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Related = () => {
  const Sdata = [
    {
      img: "https://www.genesis.com/content/dam/genesis-p2/worldwide/assets/common/related-contents/banner/genesis-ww-related-contents-genesis-concept-car-desktop-630x404-en.jpg",
      heading: "CONCEPT CAR",
      content:
        "Take a closer look at the Genesis design philosophy through our concept vehicles. Explore perfect athletic proportions, precise craftsmanship and attention to detail.",
      btn: "Learn More",
    },
    {
      img: "https://www.genesis.com/content/dam/genesis-p2/worldwide/assets/common/related-contents/banner/genesis-related-contents-banner-motor-show-desktop-630x404-ww.jpg",
      heading: "MOTOR SHOW",
      content:
        "Take a closer look at the Genesis design philosophy through our concept vehicles. Explore perfect athletic proportions, precise craftsmanship and attention to detail.",
      btn: "Learn More",
    },
    {
      img: "https://www.genesis.com/content/dam/genesis-p2/worldwide/assets/common/related-contents/banner/genesis-related-contents-banner-digital-service-desktop-630x404-ww.jpg",
      heading: "DIGITAL SERVICES",
      content:
      "Take a closer look at the Genesis design philosophy through our concept vehicles. Explore perfect athletic proportions, precise craftsmanship and attention to detail.",
      btn: "Learn More",
    },
  ];
  return (
    <>
      <Container className="related-outer">
      <Box sx={{textAlign:"center",padding:"20px 0px"}}>
          <Typography gutterBottom variant="h4" component="div">RELATED CONTENTS</Typography>
        </Box>
        <Grid container spacing={2} justifyContent='center'>
        
          {Sdata.map((item) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card className="cardss">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="auto"
                  image={item.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="heading">
                    {item.heading}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="description">
                    {item.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" className="btnn">{item.btn}<FontAwesomeIcon className="right" icon={faChevronRight} /></Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Related;
