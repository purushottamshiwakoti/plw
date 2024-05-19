import { AppUrl } from "@/lib/url";
import { PersonStandingIcon, Star } from "lucide-react";
import Image from "next/image";

interface DonationProps {
  showDonationTitle: boolean;
  title: string;
  banner: string;
  description: string;
  donations: {
    Title: string;
    Description: string;
    Icon: {
      alt: string;
      media: {
        data: {
          attributes: {
            formats: {
              small: {
                url: string;
              };
            };
          };
        };
      };
    };
  }[];
}

export const Donation = ({
  description,
  donations,
  title,
  banner,
  showDonationTitle,
}: DonationProps) => {
  console.log(description, donations, title, banner, showDonationTitle);
  return (
    <div
      className="  bg-no-repeat bg-center bg-cover  mb-10"
      style={{
        backgroundImage: `url(${AppUrl}${banner})`,
      }}
    >
      <div className="bg-[#06B37C]/90 p-10">
        {showDonationTitle && (
          <div className="mt-5 space-y-3  ">
            <h2 className="text-white text-center font-semibold lg:text-3xl text-xl ">
              {title}
            </h2>
            <div className="flex gap-[1px]  items-center justify-center ">
              <Star fill="white" strokeWidth={0} className="w-5 h-5" />
              <Star fill="white" strokeWidth={0} className="w-7 h-7" />
              <Star fill="white" strokeWidth={0} className="w-5 h-5" />
            </div>
            <p className=" text-white lg:text-xl text-lg text-center">
              {description}
            </p>
          </div>
        )}
        <div className=" flex justify-center flex-wrap">
          {donations &&
            donations.map((item, index) => {
              console.log(
                `${AppUrl}${item.Icon.media.data.attributes.formats.small?.url}`
              );
              console.log(item.Icon.media.data.attributes.formats.small);
              return (
                <div
                  className="group   hover:-translate-y-5 transition-all duration-500 flex-col lg:my-14 my-5 lg:mx-4 cursor-pointer bg-white/20 rounded-md py-10"
                  key={index}
                >
                  <div className="  rounded-md  min-w-72 min-h-32 flex flex-col items-center justify-center">
                    {/* <PersonStandingIcon className="text-white w-24 h-24" /> */}
                    <Image
                      alt={item.Icon.alt}
                      src={`${AppUrl}${item.Icon.media.data.attributes.formats.small.url}`}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className=" flex flex-col items-center text-white">
                    <h2 className="font-bold text-3xl">{item.Description}</h2>
                    <p className="text-white mt-2 text-lg line-clamp-5 ">
                      {item.Title}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
