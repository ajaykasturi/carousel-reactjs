import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
function AdvancedCarousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [currIndex, setCurrIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrIndex((curr) => (curr === 0 ? slides.length - 2 : curr - 1));
  };
  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrIndex((curr) => (curr === slides.length - 1 ? 1 : curr + 1));
  };
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currIndex === slides.length - 1) {
      setCurrIndex(1);
    } else if (currIndex === 0) {
      setCurrIndex(slides.length - 2);
    }
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => {
      next();
    }, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [next]);
  return (
    <div className="overflow-hidden relative rounded-3xl">
      <div
        onTransitionEnd={handleTransitionEnd}
        className={`flex ${
          isTransitioning ? "transition-transform duration-500 ease-out" : ""
        }`}
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
          {slides.map((_, i) => {
            if (i == 0 || i == slides.length - 1) return;
            return (
              <div
                key={`${_}${i}`}
                onClick={() => setCurrIndex(i)}
                className={`cursor-pointer ${
                  true ? "transition-all duration-500 ease-out" : ""
                } w-2 h-2  bg-white rounded-full ${
                  currIndex == i ? "p-[0.4rem]" : "bg-opacity-50"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdvancedCarousel;
