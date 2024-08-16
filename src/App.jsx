import React from "react";
import Carousel from "./components/Carousel";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
function App() {
  const slides = [img1, img2, img3, img4];
  return (
    <div className="m-1 border-[10px] border-slate-950 flex flex-col justify-center items-center">
      <div className="max-w-lg border-2 border-blue-500 w-full">
        <Carousel autoSlide={true}>
          {slides.map((src, index) => (
            <img key={index} src={src} className="w-full" />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
