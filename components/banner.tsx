"use client";
import { SubscribeEmail } from "./subscribe-email";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface BannerProps {
  title: string;
  description: string;
  image: string;
  button: string;
  showInput: boolean;
}

export const Banner = ({
  description,
  title,
  image,
  button,
  showInput,
}: BannerProps) => {
  return (
    <div>
      <div
        className={`h-[35rem]  w-full flex flex-col   bg-no-repeat bg-center bg-cover`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute bg-black h-[35rem] w-full  opacity-[70%] z-10 " />
        {/* <Navbar className="bg-transparent z-20 mt-10" /> */}

        <div className="text-white font-[400] mt-[8rem] text-[18px] z-10 ">
          <h3 className="title text-center ">{title}</h3>
          <h2 className="mt-5 font-[700] text-[50px]    px-[22rem] description text-center ">
            {description}
          </h2>
          {showInput && (
            <div className="mt-5 flex items-center justify-center">
              <SubscribeEmail button={button} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
