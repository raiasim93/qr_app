import Carousel from 'react-bootstrap/Carousel';
import CarouselData from './carousedata';

function CarouselSection() {
  return (
    <div className="container carousel-container content-sizing  mb-4">
        <div className="row justify-content-center">
            <div className="col-8">
            <Carousel>
                {CarouselData.map((slide, index)=> (
                     <Carousel.Item key={index} interval={2500}>
                     <img
                     className="w-100 carousel-img"
                     src={slide.image}  // Use the first image from the assets folder
                     alt={slide.alt}
                     />
                     <Carousel.Caption>
                     <h3>{slide.heading}</h3>
                     <p>{slide.text}</p>
                     </Carousel.Caption>
                 </Carousel.Item>
                ))}
               
                     
            </Carousel>
            </div>
    
        </div>
       
    </div>
    
  );
}

export default CarouselSection;