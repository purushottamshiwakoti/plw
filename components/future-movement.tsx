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
  title: string;
  description: string;
  icon: {
    Title: string;
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
}: FutureMovementProps) => {
  return (
    <section className="lg:px-[5%] px-4 w-full my-20">
      <div className="flex gap-[1px]  items-center justify-center ">
        <Star fill="#299726" strokeWidth={0} className="w-5 h-5" />
        <Star fill="#299726" strokeWidth={0} className="w-7 h-7" />
        <Star fill="#299726" strokeWidth={0} className="w-5 h-5" />
      </div>
      <div className="mt-5 space-y-3  ">
        <h2 className="text-[#222] lg:text-2xl text-xl font-bold text-center ">
          {title}
        </h2>

        <p className="text-center text-[#666] lg:mx-[14rem] mt-3">
          {description}
        </p>
      </div>
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
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
                  <h2 className="text-blue-500 text-xl font-semibold line-clamp-2 flex-1">
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
