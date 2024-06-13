import {
  Calendar,
  CircleAlertIcon,
  Folder,
  Handshake,
  Star,
  User,
} from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

interface FutureMovementProps {
  movementStarColor: string;
  title: string;
  description: string;
  icon: {
    Title: string;
    TitleColor: string;
    Description: string;
    Icon: {
      alt: string;
      media: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  }[];
}

export const FutureMovement = ({
  description,
  title,
  icon,
  movementStarColor,
}: FutureMovementProps) => {
  return (
    <section className="lg:px-[14%] px-4 w-full my-20">
      <div className="flex justify-center  items-center  ">
        <Star fill={movementStarColor} strokeWidth={0} className="w-4 h-4" />
        <Star
          fill={movementStarColor}
          strokeWidth={0}
          className="w-6 -mt-3 h-6"
        />
        <Star fill={movementStarColor} strokeWidth={0} className="w-4 h-4" />
      </div>
      {/* <div className="mt-5 space-y-3  ">
        <h2 className=" lg:text-2xl text-xl font-bold text-center  text-[#222]">
          {title}
        </h2>

        <p className="text-center text-[#666] lg:mx-[14rem] mt-3">
          {description}
        </p>
      </div> */}
      <div className="mt-5 space-y-3  ">
        {/* <h2 className="text-[#222] text-center text-[16px] ">{serviceTitle}</h2> */}
        <p className="  font-[600] lg:text-[50px] md:text-3xl text-2xl text-center text-[#222] pt-2">
          {title}
        </p>
        <p className="text-center text-[#666] lg:mx-[14rem] text-[16px] pt-5  ">
          {description}
        </p>
      </div>
      <div
        className="mt-10 
      gap-y-20
       grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"
      >
        {icon &&
          icon.map((item, index) => (
            <div className="space-y-3 w-full " key={index}>
              <div className="flex items-center gap-10 ">
                {/* <CircleAlertIcon className="text-blue-500 w-10 h-10" /> */}
                {item.Icon && (
                  <Image
                    alt={item.Icon.alt}
                    // src={item.Icon.media.data.attributes.formats.small.url}
                    src={`${process.env.APPURL}${item.Icon.media.data.attributes.formats.thumbnail.url}`}
                    width={50}
                    height={50}
                  />
                )}

                <div>
                  <h2
                    className={`${
                      item.TitleColor && ` text-[${item.TitleColor}]`
                    }text-xl font-semibold line-clamp-2 flex-1 text-blue-500`}
                    style={{
                      color: item.TitleColor ? item.TitleColor : "blue",
                    }}
                  >
                    {item.Title}
                  </h2>
                  <p className="line-clamp-4 mt-1 text-muted-foreground">
                    {item.Description}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
