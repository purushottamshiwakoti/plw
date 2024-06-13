import { AppUrl } from "@/lib/url";
import { PersonStandingIcon, Star } from "lucide-react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface DonationProps {
  showDonationTitle: boolean;
  title: string;
  banner: string;
  description: string;
  showDonationAs: string;
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
  showDonationAs,
}: DonationProps) => {
  return (
    <div
      className="  bg-no-repeat bg-center bg-cover  "
      // style={{
      //   backgroundImage: `url(${AppUrl}${banner})`,
      // }}
    >
      <div className="bg- p-10">
        {showDonationTitle && (
          <div className="mt-5 space-y-3  ">
            <div className="flex gap-[1px]  items-center justify-center ">
              <Star fill="#F05555" strokeWidth={0} className="w-4 h-4" />
              <Star fill="#F05555" strokeWidth={0} className="w-6 -mt-3 h-6" />
              <Star fill="#F05555" strokeWidth={0} className="w-4 h-4" />
            </div>
            <div className="mt-5 s ">
              <p className="text-[#222] text-center text-[16px] mb-5 mt-3 ">
                {description}
              </p>
              <h2 className="font-[600] lg:text-[40px] md:text-3xl text-2xl text-center text-[#222] mt-2">
                {title}
              </h2>
            </div>
          </div>
        )}
        <div className=" flex justify-center lg:px-[4%] flex-wrap mt-10">
          {showDonationAs == "Grid" ? (
            donations &&
            donations.map((item, index) => {
              return (
                <div
                  className="group    hover:-translate-y-5 border transition-all duration-500 flex-col  my-5 lg:mx-4 cursor-pointer bg-white/20 rounded-md py-10"
                  key={index}
                >
                  <div className="  rounded-md  min-w-72 min-h-32 flex flex-col items-center justify-center">
                    {/* <PersonStandingIcon className=" w-24 h-24" /> */}
                    {item.Icon !== null && (
                      <Image
                        alt={item.Icon.alt ?? "lll"}
                        src={`${AppUrl}${item.Icon.media.data.attributes.formats.small.url}`}
                        width={80}
                        height={80}
                      />
                    )}
                  </div>
                  <div className=" flex flex-col items-center ">
                    <h2 className="font-bold text-[#222] text-xl ">
                      {item.Description}
                    </h2>
                    <p className=" mt-1 text-base line-clamp-5 text-[#666]">
                      {item.Title}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              {" "}
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full mt-4  l xl:px-[14%]  "
              >
                <CarouselContent className="gap-3">
                  {donations &&
                    donations.map((item, index) => (
                      <div
                        className="group hover:-translate-y-5 transition-all border duration-500 flex-col lg:my-14 my-5 lg:mx-4 cursor-pointer  rounded-md py-10"
                        key={index}
                      >
                        <div className="rounded-md min-w-72 min-h-32 flex flex-col items-center justify-center">
                          {item.Icon !== null && (
                            <Image
                              alt={item.Icon.alt ?? "Image Alt Text"}
                              src={`${AppUrl}${item.Icon.media.data.attributes.formats.small.url}`}
                              width={80}
                              height={80}
                            />
                          )}
                        </div>
                        <div className="flex flex-col items-center ">
                          <h2 className="font-bold text-[#222] text-xl ">
                            {item.Description}
                          </h2>
                          <p className=" mt-1 text-base line-clamp-5 text-[#666]">
                            {item.Title}
                          </p>
                        </div>
                      </div>
                    ))}
                </CarouselContent>
                <div className="">
                  <div className="flex items-center justify-center gap-4">
                    <CarouselPrevious className="w-12" />
                    <CarouselNext className="w-12" />
                  </div>
                </div>
              </Carousel>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
