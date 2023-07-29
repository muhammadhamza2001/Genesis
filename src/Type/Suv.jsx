import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import image1 from "../suv1.png";
import image2 from "../suv2.png"
import image3 from "../suv3.png"
import "../Type/Type.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Suv = () => {
    // Update the settings based on the screen size
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Show 3 cards at a time on large screens
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 600, // Change this value to set the breakpoint for small screens
          settings: {
            slidesToShow: 1, // Show 1 card at a time on small screens
            slidesToScroll: 1,
          },
        },
      ],
    };
  const Sdata = [
    {
      Naam: "G90",
      para: "LONG WHEEL BASE",
      img:  image1 ,
    },
    {
      Naam: "G90",
      para: "LONG WHEEL BASE",
      img:  image2 ,
    },
    {
      Naam: "G90",
      para: "LONG WHEEL BASE",
      img:  image3 ,
    },
    {
      Naam: "G90",
      para: "LONG WHEEL BASE",
      img:  image1 ,
    },
    {
      Naam: "G90",
      para: "LONG WHEEL BASE",
      img:  image2 ,
    },
    {
      Naam: "G90",
      para: "LONG WHEEL BASE",
      img:  image3 ,
    },
  ];
  return (
    <>
      <section className="sadanouter">
      <Container >
      <Slider {...settings}>
        {Sdata.map((item, index) => (
          <div className="card" key={index} >
            <Grid item xs={12} md={4} spacing={2}>
              <Card className="cardout">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="carddata">
                    {item.Naam}
                  </Typography>
                  <Typography gutterBottom variant="p" component="div" className="carddata">
                    {item.para}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={item.img}
                />
                <div className="discover">
                  <button><span>Discover More</span></button>
                </div>
              </Card>
            </Grid>
          </div>
        ))}
      </Slider>
    </Container>
        
      </section>
    </>
  );
};

export default Suv;
