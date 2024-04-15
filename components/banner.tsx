import { url } from "inspector";
import { SubscribeEmail } from "./subscribe-email";

interface BannerProps {
  title: string;
  description: string;
  image: string;
  button: string;
}

export const Banner = ({ description, title, image, button }: BannerProps) => {
  return (
    <div>
      <div
        className={`h-[50rem]  w-full flex flex-col   bg-no-repeat bg-center bg-cover`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute bg-black h-[50rem] w-full  opacity-[65%] z-10" />
        {/* <Navbar className="bg-transparent z-20 mt-10" /> */}

        <div className="text-white font-[400] mt-[8rem] text-[18px] z-10 flex flex-col items-center justify-center">
          <h3>{title}</h3>
          <h2 className="mt-5 font-[700] text-[70px]  w-[74%] pl-40 leading-[6rem]">
            {description}
          </h2>
          <div className="mt-[3rem]">
            <SubscribeEmail button={button} />
          </div>
        </div>
      </div>
    </div>
  );
};
