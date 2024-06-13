"use client";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const Slider = ({
  slides,
  fontColor,
}: {
  fontColor: string;
  slides: {
    id: string;
    Title: string;
  }[];
}) => {
  return (
    <>
      {slides && slides.length > 0 && (
        <Marquee
          direction="left"
          speed={30} // Adjust the speed as needed
          gradient={false} // Disable gradient
          className="flex items-center space-x-4"
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex items-center text-sm "
              style={{
                color: fontColor,
              }}
            >
              <span>{slide.Title}</span>
              {index < slides.length - 1 && <span className="mx-2">|</span>}
            </div>
          ))}
        </Marquee>
      )}
    </>
  );
};

export default Slider;
