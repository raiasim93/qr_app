import Carousel from 'react-bootstrap/Carousel';
import CarouselData from './carousedata';

function CarouselSection() {
  return (
    <div className="container content-sizing mb-4 opacity-3">
        <div className="row justify-content-center">
            <div className="col-8">
            <Carousel className='opacity-3'>
                {CarouselData.map((slide, index)=> (
                     <Carousel.Item interval={3000}>
                     <img
                     className="d-block w-100"
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