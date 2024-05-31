import Image from "next/image";
import { SmallSocialIcon } from "./small-social-icon";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

interface MomvementProps {
  title: string;
  position: string;
  description: any;
  image: any;
  imageAlt: string;
  movementStarColor: string;
  url: {
    id: string;
    Link: string;
    Name: string;
  }[];
}

export const Momvement = ({
  description,
  position,
  title,
  url,
  image,
  imageAlt,
  movementStarColor,
}: MomvementProps) => {
  return (
    <div className=" bg-[#06B37C] ">
      <div className="lg:flex ">
        <div className="lg:p-10 p-2 md:p-5">
          <Image
            // src={image}
            src={`${process.env.APPURL}${image}`}
            alt={imageAlt}
            width={500}
            height={500}
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="lg:p-20 p-2 md:p-5 text-white space-y-3 lg:w-[60%]">
          <h3 className="font-bold text-2xl">{title}</h3>
          <p className="text-sm  text-white/90 font-semibold">{position}</p>
          <hr className="border-2 border-[#E23E4E] w-[20%]  bg-[#E23E4E] h-1" />
          <div className="font-semibold  pt-4 p">
            {/* {description} */}
            <BlocksRenderer content={description} />
          </div>
          <div className="flex items-center justify-center">
            <SmallSocialIcon size="30px" url={url} />
          </div>
        </div>
      </div>
    </div>
  );
};
