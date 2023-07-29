import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import image1 from "./hero.jpg"
import image2 from "../Hero/hero2.jpg"
import image3 from "../Hero/hero3.jpg"
import image4 from "../Hero/hero4.jpg"
import image5 from "../Hero/hero5.jpg"
import "../Hero/Hero.css"
const items = [
  {
    id: 1,
    imageSrc: image1,
    company:"GENESIS",
    title: 'G90',
    content: '2023 MODEL LAUNCH',
  },
  {
    id: 2,
    imageSrc: image2,
    company:"GENESIS",
    title: 'G80',
    content: '2023 MODEL LAUNCH',
  },
  {
    id: 3,
    imageSrc: image3,
    company:"GENESIS",
    title: 'G70',
    content: '2023 MODEL LAUNCH',
  },
  {
    id: 4,
    imageSrc: image4,
    company:"GENESIS",
    title: 'G90',
    content: '2023 MODEL LAUNCH',
  },
  {
    id: 5,
    imageSrc: image5,
    company:"GENESIS",
    title: 'G70',
    content: '2023 MODEL LAUNCH',
  },

];

const Hero = () => {
  return (
    <Carousel controls={true} id='hero'>
      {items.map((item) => (
        <Carousel.Item key={item.id}>
          <img className="d-block w-100" src={item.imageSrc} alt={`Slide ${item.id}`} />
          <Carousel.Caption>
            <Container>
              <Row className="align">
                <Col sm={8} md={6} lg={5} xl={4} className="carousel-content">
                    <p>{item.company}</p>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                  
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Hero;
