"use client";
import { BannerNav } from "./banner-nav";
import { SubscribeEmail } from "./subscribe-email";

import { AppUrl } from "@/lib/url";

interface BannerProps {
  title: string;
  description: string;
  image: string;
  button: string;
  showInput: boolean;
  logo: string;
  buttonLink: string;
  buttonName: string;
  menu: any;
  showButton: boolean;
  backgroundColor: string;
  showFlag: boolean;
}

export const Banner = ({
  description,
  title,
  image,
  button,
  showInput,
  backgroundColor,
  buttonLink,
  buttonName,
  logo,
  menu,
  showButton,
  showFlag,
}: BannerProps) => {
  return (
    <div>
      <div
        className={` lg:h-[85vh] h-[50vh]  w-full flex flex-col   bg-no-repeat bg-center bg-cover`}
        style={{
          backgroundImage: `url(${AppUrl}${image})`,
        }}
      >
        <div className="absolute bg-black opacity-50 lg:h-[85vh] h-[50vh] w-full   z-10 " />
        {/* <Navbar className="bg-transparent z-20 mt-10" /> */}
        <div className="mt-5 z-40">
          <BannerNav
            logo={logo}
            buttonLink={buttonLink}
            buttonName={buttonName}
            menu={menu}
            showButton={showButton}
            backgroundColor={backgroundColor}
            showFlag={showFlag}
          />
        </div>

        <div className=" flex items-center  flex-col text-white z-10 h-full mt-[12%]">
          <h3 className="title  lg:text-[20px] md:text-[18px] text-[16px] ">
            {title}
          </h3>
          <h2 className="mt-[17px] lg:text-[74px]  text-[30px] text-center lg:px-32 block lg:leading-[84px] font-bold   ">
            {description}
          </h2>
          {showInput && (
            <div className="mt-5 lg:mx-0 md:mx-10 mx-1 lg:flex items-center justify-center">
              <SubscribeEmail button={button} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
