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
    // Set an interval to change the slide when the current one finishes scrolling
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Duration should match the time it takes for one scroll

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {slides && slides.length > 0 && (
        <Marquee
          direction="left"
          key={currentIndex}
          speed={50} // Adjust the speed as needed
          gradient={false} // Disable gradient
        >
          <div className="mx-10 w-full">
            <div
              style={{
                color: fontColor,
                whiteSpace: "nowrap",
                textAlign: "center",
                width: "100%",
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
