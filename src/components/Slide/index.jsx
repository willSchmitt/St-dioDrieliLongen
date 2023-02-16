import { Container } from "./styles";

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import imageInitial from '../../assets/slide/imagemCapa.jpeg';
import imageOne from '../../assets/slide/slide1.png';
import imageTwo from '../../assets/slide/slide2.png';
import imageThree from '../../assets/slide/slide3.png';
import imageFour from '../../assets/slide/slide4.png';
import imageSix from '../../assets/slide/slide6.png';
import imageSeven from '../../assets/slide/slide7.png';
import imageEight from '../../assets/slide/slide8.png';


export function Slide() {
  return (
    <Container>
      <div className="everyCarousel" >
      <Carousel fade>
        <Carousel.Item className="itensCarousel" interval={1500}>
          <img
            src= {imageInitial}
            alt="Image Initial"
          />
        </Carousel.Item>
        <Carousel.Item className="itensCarousel" interval={700}>
          <img
            src={imageOne}
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item className="itensCarousel" interval={700}>
          <img
            src={imageTwo}
            alt="Image Two"
          />
        </Carousel.Item>
        <Carousel.Item className="itensCarousel" interval={700}>
          <img
            src={imageThree}
            alt="Image Three"
          />
        </Carousel.Item>
        <Carousel.Item className="itensCarousel" interval={700}>
          <img
            src={imageFour}
            alt="Image Four"
          />
        </Carousel.Item>

        <Carousel.Item className="itensCarousel" interval={700}>
          <img
            src={imageSix}
            alt="Image six"
          />
        </Carousel.Item>
        <Carousel.Item className="itensCarousel" interval={700}>
          <img
            src={imageSeven}
            alt="Image seven"
          />
        </Carousel.Item>
        <Carousel.Item className="itensCarousel" interval={700}>
          <img
            src={imageEight}
            alt="Image eight"
          />
        </Carousel.Item>

      </Carousel>
    </div>
    </Container>
  );
}