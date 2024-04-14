import { Navbar } from "./navbar";
import { SubscribeEmail } from "./subscribe-email";

export const Banner = () => {
  return (
    <div>
      <div className="h-[50rem]  w-full flex flex-col  bg-[url('/images/banner.jpg')] bg-no-repeat bg-center bg-cover ">
        <div className="absolute bg-black h-[50rem] w-full  opacity-[65%] z-10" />
        <Navbar className="bg-transparent z-20 mt-10" />

        <div className="text-white font-[400] mt-[8rem] text-[18px] z-10 flex flex-col items-center justify-center">
          <h3>Join my campaign for the upcoming elections</h3>
          <h2 className="mt-5 font-[700] text-[70px]  w-[74%] pl-40 leading-[6rem]">
            We&apos;re Ideal For All The People’s Brighter Future
          </h2>
          <div className="mt-[3rem]">
            <SubscribeEmail />
          </div>
        </div>
      </div>
    </div>
  );
};
