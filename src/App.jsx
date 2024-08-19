import React from "react";
import Carousel from "./components/Carousel";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import AdvancedCarousel from "./components/AdvancedCarousel";
function App() {
  const slides = [img1, img2, img3, img4];
  return (
    <div className=" flex  justify-center items-center h-screen gap-x-4 bg-[#0c0c1d]">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-center text-white font-semibold text-2xl">
          Basic Carousel
        </h1>
        <div className="max-w-lg  w-full">
          <Carousel autoSlide={true} autoSlideInterval={2000}>
            {slides.map((src, index) => (
              <img key={index} src={src} className="w-full" />
            ))}
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-center text-white font-semibold text-2xl">
          Advanced Carousel
        </h1>
        <div className="max-w-lg w-full">
          <AdvancedCarousel autoSlide={true} autoSlideInterval={2000}>
            {[
              <img
                key={"unqiue1"}
                src={slides[slides.length - 1]}
                className="w-full"
              />,
              ...slides.map((src, index) => (
                <img key={index} src={src} className="w-full" />
              )),
              <img key={"unqiue2"} src={slides[0]} className="w-full" />,
            ]}
          </AdvancedCarousel>
        </div>
      </div>
    </div>
  );
}

export default App;
