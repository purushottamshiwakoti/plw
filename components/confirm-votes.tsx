import { Star } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { AppUrl } from "@/lib/url";

interface ConfirmVotesProps {
  title: string;
  subtitle: string;
  description: string;
  showButton: boolean;
  buttonName: string;
  buttonLink: string;
  bgImage: string;
}

export const ConfirmVotes = ({
  title,
  subtitle,
  description,
  showButton,
  buttonName,
  buttonLink,
  bgImage,
}: ConfirmVotesProps) => {
  return (
    <>
      <div
        className="  bg-no-repeat bg-center bg-cover  mb-10 "
        // style={{
        //   backgroundImage: `url(${bgImage})`,
        // }}

        style={{
          backgroundImage: `url(${AppUrl + bgImage})`,
        }}
      >
        <div className="bg-primary/90 lg:p-10 p-4 lg:py-[7rem] flex flex-col items-center justify-center">
          <div className="flex gap-[1px]  items-center justify-center ">
            <Star fill="#299726" strokeWidth={0} className="w-5 h-5" />
            <Star fill="#299726" strokeWidth={0} className="w-7 h-7" />
            <Star fill="#299726" strokeWidth={0} className="w-5 h-5" />
          </div>

          <p className="text-white mt-2">{title}</p>

          <h2 className="text-white lg:text-3xl text-2xl text-center font-bold tracking-wider mt-4">
            {subtitle}
          </h2>
          <p className="text-white text-center leading-relaxed  mt-6 lg:px-[17%]">
            {description}
          </p>
          {showButton && (
            <div className="mt-10">
              <Button
                className="bg-buttonHoverBg  rounded-[5px] p-[25px] w-[9rem] hover:bg-white hover:text-black uppercase text-[15px] font-[700]"
                asChild
              >
                <Link href={buttonLink}>{buttonName}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
