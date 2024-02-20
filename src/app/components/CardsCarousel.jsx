import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function CardsCarousel({
    children: slides,
    autoSlide = false,
    autoSlideInterval =   3000,
  }) {
    const [currSet, setCurrSet] = useState(0);
    const slidesPerSet =   4;
  
    const prev = useCallback(() => {
      setCurrSet((currSet) => (currSet ===   0 ?   0 : currSet -   1));
    }, []);
  
    const next = useCallback(() => {
      setCurrSet((currSet) => (currSet === Math.floor(slides.length / slidesPerSet) -   1 ?   0 : currSet +   1));
    }, [slides.length, slidesPerSet]);
  
    useEffect(() => {
      if (!autoSlide) return;
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, next]);
  
    return (
      <div className="overflow-hidden relative">
        <div
          className="grid grid-cols-1 w- transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currSet *   100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full">
              {slide}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      </div>
    );
  }