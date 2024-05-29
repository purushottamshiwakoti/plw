"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const Slider = ({
  slides,
}: {
  slides: {
    id: string;
    Title: string;
  }[];
}) => {
  return (
    // <div className="relative overflow-hidden lg:my-0 my-2">
    //   <div className="flex transition-transform duration-500 ease-in-out">
    //     {slides &&
    //       slides.map((slide, index) => (
    //         <span
    //           key={index}
    //           className={`ml-3 ${
    //             index !== currentSlideIndex ? "hidden" : ""
    //           } max-w-lg line-clamp-1`}
    //           style={{
    //             transform: `translateX(${100 * (index - currentSlideIndex)}%)`,
    //           }}
    //         >
    //           {slide.Title}
    //         </span>
    //       ))}
    //   </div>
    // </div>
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="max-w-4xl"
      loop={true}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      speed={30000}
    >
      {slides &&
        slides.map((slide, index) => (
          // <span
          //   key={index}
          //   className={`ml-3 ${
          //     index !== currentSlideIndex ? "hidden" : ""
          //   } max-w-lg line-clamp-1`}
          //   style={{
          //     transform: `translateX(${100 * (index - currentSlideIndex)}%)`,
          //   }}
          // >
          //   {slide.Title}
          // </span>
          <SwiperSlide className="text-md" key={index}>
            {slide.Title}
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
