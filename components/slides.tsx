"use client";

const Slides = ({
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
      <div className="flex gap-10 ">
        {slides.map((slide, index) => (
          <div key={index}>{slide.Title}</div>
        ))}
      </div>
    </>
  );
};

export default Slides;
  