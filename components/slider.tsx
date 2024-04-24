"use client";
import React, { useState, useEffect } from "react";

const Slider = ({
  slides,
}: {
  slides: {
    id: string;
    Title: string;
  }[];
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval);
  }, []); // Run effect only once on component mount

  return (
    <div className="relative overflow-hidden ">
      <div className="flex transition-transform duration-500 ease-in-out transform">
        {slides &&
          slides.map((slide, index) => (
            <span
              key={index}
              className={`ml-3 ${
                index !== currentSlideIndex ? "hidden" : ""
              } max-w-lg line-clamp-1`}
            >
              {slide.Title}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Slider;
