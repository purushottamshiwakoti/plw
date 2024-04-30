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
    <div className="mx-[10rem] mb-10 mt-10">
      <div className="bg-[#06B37C] text-white flex items-center justify-around p-10 py-[4rem] rounded-2xl">
        <div className=" ml-[2rem]">
          <h2 className="font-bold text-[30px]">{title}</h2>
          <p className="text-center text-[24px]">{description}</p>
        </div>
        <div className="flex flex-grow ml-[15rem] mr-[5rem] items-center justify-between ">
          {/* Days */}
          <div className="flex gap-10">
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-[40px] ">{timeRemaining.days}</h3>
              <p>Days</p>
            </div>
            <div>
              <Separator className="bg-zinc-300/20 " orientation="vertical" />
            </div>
          </div>

          {/* Hours */}
          <div className="flex gap-10">
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-[40px]">{timeRemaining.hours}</h3>
              <p>Hours</p>
            </div>
            <div>
              <Separator className="bg-zinc-300/20 " orientation="vertical" />
            </div>
          </div>

          {/* Minutes */}
          <div className="flex gap-10">
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-[40px]">{timeRemaining.minutes}</h3>
              <p>Mins</p>
            </div>
            <div>
              <Separator className="bg-zinc-300/20 " orientation="vertical" />
            </div>
          </div>

          {/* Seconds */}
          <div className="flex gap-10">
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-[40px]">{timeRemaining.seconds}</h3>
              <p>Secs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
