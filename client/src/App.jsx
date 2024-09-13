import React from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import QRstories from './components/CreateFile';
import CarouselSection from './components/Carousel';


const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Navbar in the first column */}
        <div className="col-12">
          <Navbar />
        </div>
        <div className="col-12">
         <CarouselSection />
        </div>
        <div className="col-12">
         <QRstories/>
        </div>
      </div>
    </div>
  );
};

export default App;
