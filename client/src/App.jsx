import React from "react";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CreateFile from "./components/CreateFile";
import CarouselSection from "./components/Carousel";
import Title from "./components/Title";
import Footer from "./components/footer";
import FeaturesSection from "./components/FeaturesSection";

const App = () => {
  return (
    <>
      <Navbar />
      <CarouselSection />
      <Title title={"Create Your QRCode"} />
      <CreateFile />
      <Title title={"Why QR'ify is your best choice?"} subtitle={'Get Started'} />
      <FeaturesSection />
      <Footer />
    </>
  );
};

export default App;
