"use client";

import React, { useState, useEffect } from "react";
import { Separator } from "./ui/separator";

export const ElectionTime = ({
  date,
  title,
  description,
  backgroundColor,
}: {
  date: Date;
  title: string;
  description: string;
  backgroundColor: string;
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
    <div className="xl:mx-[14%]  mx-4  lg:h-[50vh] mt-10">
      <div
        className=" text-white lg:flex items-center lg:p-20 p-4 rounded-[15px]"
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <div className=" ">
          <h2 className=" text-center  font-bold lg:text-[24px] text-xl">
            {title}
          </h2>
          <p className=" lg:text-[18px] lg:text-start text-center tracking-[0.2em] mt-[10px] text-lg">
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
              <p className="pt-3">Days</p>
            </div>
            <div>
              <Separator
                className="bg-zinc-300/20  -ml-3 "
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
              <p className="pt-3">Hours</p>
            </div>
            <div>
              <Separator
                className="bg-zinc-300/20 -ml-3 "
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
              <p className="pt-3">Mins</p>
            </div>
            <div>
              <Separator
                className="bg-zinc-300/20 -ml-3 "
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
              <p className="pt-3">Secs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
