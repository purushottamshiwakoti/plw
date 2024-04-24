import { PersonStandingIcon, Star } from "lucide-react";
import Image from "next/image";

interface DonationProps {
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
              medium: {
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
}: DonationProps) => {
  return (
    <div
      className="  bg-no-repeat bg-center bg-cover  mb-10"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="bg-[#06B37C]/90 p-10">
        <div className="mt-5 space-y-3  ">
          <h2 className="text-white text-center font-semibold text-3xl ">
            {title}
          </h2>
          <div className="flex gap-[1px]  items-center justify-center ">
            <Star fill="white" strokeWidth={0} className="w-5 h-5" />
            <Star fill="white" strokeWidth={0} className="w-7 h-7" />
            <Star fill="white" strokeWidth={0} className="w-5 h-5" />
          </div>
          <p className=" text-white text-xl text-center">{description}</p>
        </div>
        <div className="grid grid-cols-4  mt-10 px-[6rem]">
          {donations &&
            donations.map((item, index) => (
              <div
                className="group flex items-center hover:-translate-y-5 transition-all duration-500 flex-col my-14 mx-4 cursor-pointer bg-white/20 rounded-md py-10"
                key={index}
              >
                <div className="p-10   rounded-md  w-40 h-40 flex items-center">
                  {/* <PersonStandingIcon className="text-white w-24 h-24" /> */}
                  <Image
                    alt={item.Icon.alt}
                    src={
                      process.env.NODE_ENV === "development"
                        ? `${process.env.APPURL}${item.Icon.media.data.attributes.formats.medium.url}`
                        : item.Icon.media.data.attributes.formats.medium.url
                    }
                    width={80}
                    height={80}
                  />
                </div>
                <div className="mt-4 text-white">
                  <h2 className="font-bold text-3xl">{item.Description}</h2>
                </div>
                <p className="text-white mt-2 text-lg line-clamp-5 ">
                  {item.Title}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
