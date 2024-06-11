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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset the index when the slides change
    setCurrentIndex(0);
  }, [slides]);

  return (
    <>
      {slides && slides.length > 0 && (
        <Marquee
          direction="left"
          key={currentIndex}
          speed={30} // Adjust the speed as needed
          gradient={false} // Disable gradient
          onCycleComplete={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
          }
        >
          <div className="mx-10 ">
            <div
              className="flex items-center justify-end text-sm"
              style={{
                color: fontColor,
              }}
            >
              {slides[currentIndex].Title}
            </div>
          </div>
        </Marquee>
      )}
    </>
  );
};

export default Slider;
