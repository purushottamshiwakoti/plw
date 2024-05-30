import { Handshake, Star } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

interface ServicesInterface {
  serviceTitle: string;
  serviceSubTitle: string;
  serviceDescription: string;
  serviceIcons: {
    id: string;
    ButtonName: string;
    Icon: {
      id: string;
      alt: string;
      media: {
        data: {
          attributes: {
            // formats: {
            //   thumbnail: {
            //     url: string;
            //   };
            // };
            url: string;
          };
        };
      };
    };
  }[];
}

export const Services = ({
  serviceDescription,
  serviceIcons,
  serviceSubTitle,
  serviceTitle,
}: ServicesInterface) => {
  return (
    <section className="lg:px-[10rem] px-3 w-full my-20">
      <div className="flex justify-center  items-center  ">
        <Star fill="#299726" strokeWidth={0} className="w-5 h-5" />
        <Star fill="#299726" strokeWidth={0} className="w-7 h-7" />
        <Star fill="#299726" strokeWidth={0} className="w-5 h-5" />
      </div>
      <div className="mt-5 space-y-3  ">
        <h2 className="text-[#222] text-center ">{serviceTitle}</h2>
        <p className="  font-[600] lg:text-[50px] md:text-3xl text-2xl text-center text-buttonHoverBg">
          {serviceSubTitle}
        </p>
        <p className="text-center text-[#666] lg:mx-[14rem]  mt-3">
          {serviceDescription}
        </p>
      </div>
      <div className="lg:flex lg:flex-wrap  grid grid-cols-2 md:grid-cols-4 items-center lg:gap-8 gap-7   justify-center mt-10 md:px-10 ">
        {serviceIcons &&
          serviceIcons.map((item, index) => {
            return (
              <div
                className="cursor-pointer group  transition-all hover:-translate-y-5 duration-500"
                key={index}
              >
                <div className=" bg-[#F4F4F4] group-hover:bg-buttonHoverBg/40 border-1 w-ful lg:w-[170px] h-[160px]  ">
                  <div className="bg-transparent flex items-center justify-center h-full">
                    {item.Icon.media.data !== null && (
                      <Image
                        // src={item.Icon.media.data.attributes.formats.thumbnail.url}
                        src={`${process.env.APPURL}${item.Icon.media.data.attributes.url}`}
                        alt={item.Icon.alt}
                        width={55}
                        height={55}
                      />
                    )}
                  </div>
                </div>
                <div>
                  <Button className="w-full  h-[3rem] rounded-none bg-buttonHoverBg group-hover:bg-buttonHoverBg/80 hover:bg-buttonHoverBg/80 ">
                    {item.ButtonName}
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};
