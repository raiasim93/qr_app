

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselData from "./carousedata";

const CarouselSection = () => {
  
  return (
    <>
      <section className="carousel-wrapper g-0">
        <div className="row w-100 g-0">
          <div className="col mx-auto justify-content-center align-items-center">
            <Carousel className="py-5" fade>
              {CarouselData.map((slide, index) => (
                <Carousel.Item key={index} interval={1000}>
                   <img className="carousel-img" src={slide.image}/>
                  <Carousel.Caption className="custom-caption">
                    <h3>{slide.heading}</h3>
                    <p>{slide.text}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselSection;
