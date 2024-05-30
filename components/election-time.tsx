"use client";

import React, { useState, useEffect } from "react";
import { Separator } from "./ui/separator";

export const ElectionTime = ({
  date,
  title,
  description,
}: {
  date: Date;
  title: string;
  description: string;
}) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeRemaining = () => {
    const electionStartTime: Date = new Date(date);
    const currentTime: Date = new Date();
    const totalSeconds: number =
      (electionStartTime.getTime() - currentTime.getTime()) / 1000;

    if (totalSeconds >= 0) {
      // Change condition to include zero
      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      setTimeRemaining({ days, hours, minutes, seconds });
    } else {
      setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeRemaining();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="xl:mx-[10rem] lg:bg-reg-500 mx-4 mb-10 mt-10">
      <div className="bg-[#06B37C] text-white lg:flex items-center justify-around lg:p-10 p-2 lg:py-[4rem] rounded-2xl">
        <div className=" ">
          <h2 className="lg:text-left text-center font-bold lg:text-[25px] text-xl">
            {title}
          </h2>
          <p className="text-center lg:text-[24px] mt-2 text-lg">
            {description}
          </p>
        </div>
        <div className="flex lg:flex-grow lg:ml-[15rem] lg:mr-[5rem] lg:mx-0 mx-5 lg:mt-0 mt-2 items-center justify-between ">
          {/* Days */}
          <div className="flex lg:gap-10">
            <div className="flex flex-col items-center">
              <h3 className="font-bold lg:text-[40px] text-xl ">
                {timeRemaining.days}
              </h3>
              <p>Days</p>
            </div>
            <div>
              <Separator
                className="bg-zinc-300/20 lg:ml-0 ml-5 "
                orientation="vertical"
              />
            </div>
          </div>

          {/* Hours */}
          <div className="flex lg:gap-10">
            <div className="flex flex-col items-center">
              <h3 className="font-bold lg:text-[40px] text-xl">
                {timeRemaining.hours}
              </h3>
              <p>Hours</p>
            </div>
            <div>
              <Separator
                className="bg-zinc-300/20 lg:ml-0 ml-5 "
                orientation="vertical"
              />
            </div>
          </div>

          {/* Minutes */}
          <div className="flex lg:gap-10">
            <div className="flex flex-col items-center">
              <h3 className="font-bold lg:text-[40px] text-xl">
                {timeRemaining.minutes}
              </h3>
              <p>Mins</p>
            </div>
            <div>
              <Separator
                className="bg-zinc-300/20 lg:ml-0 ml-5 "
                orientation="vertical"
              />
            </div>
          </div>

          {/* Seconds */}
          <div className="flex gap-10">
            <div className="flex flex-col items-center">
              <h3 className="font-bold lg:text-[40px] text-xl">
                {timeRemaining.seconds}
              </h3>
              <p>Secs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
