import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [currIndex, setCurrIndex] = useState(0);
  const prev = () => {
    setCurrIndex((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurrIndex((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative rounded-3xl">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currIndex * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-2">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow-sm bg-white/80 hover:bg-white text-gray-800"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow-sm bg-white/80 hover:bg-white text-gray-800"
        >
          <ChevronRight size={30} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex justify-center items-center gap-x-2">
          {slides.map((_, i) => (
            <div
              onClick={() => setCurrIndex(i)}
              className={`cursor-pointer transition-all duration-500 w-2 h-2 bg-white rounded-full ${
                currIndex == i ? "p-[0.4rem]" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
