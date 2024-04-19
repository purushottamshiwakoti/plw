import { Calendar, Folder, Quote, Star, User } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

interface SayingProps {
  title: string;
  description: string;
  review: {
    Name: string;
    Designation: string;
    Stars: string;
    Review: any;
  }[];
}

export const Saying = ({ description, title, review }: SayingProps) => {
  return (
    <>
      <section className="px-[10rem] w-full my-20">
        <div className="mt-5 space-y-3  ">
          <h2 className="text-[#222] text-2xl font-bold text-center ">
            {title}
          </h2>

          <p className="text-center text-[#666] mx-[14rem] mt-3">
            {description}
          </p>
          <div className="flex gap-[1px]  items-center justify-center ">
            <Star fill="#299726" strokeWidth={0} className="w-5 h-5" />
            <Star fill="#299726" strokeWidth={0} className="w-7 h-7" />
            <Star fill="#299726" strokeWidth={0} className="w-5 h-5" />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-10">
          {review.map((item, index) => (
            <div
              className="shadow-xl border-1 w-full flex flex-col p-3"
              key={index}
            >
              <div className="px-6 py-10 flex-1 flex flex-col">
                <div className="flex items-start justify-start mb-3">
                  <Quote className="text-[#09274C]" />
                </div>
                <div className="mt-3 flex-1 overflow-hidden">
                  <BlocksRenderer content={item.Review} />
                </div>
                <div className="flex items-start justify-end mt-3">
                  <Quote className="text-[#09274C]" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/images/p2.jpg"
                    width={100}
                    height={100}
                    alt="img"
                    className="rounded-full h-20 w-20 object-cover"
                  />
                  <div>
                    <div className="flex items-center mb-2">
                      {Array.from(
                        { length: parseInt(item.Stars) },
                        (_, index) => (
                          <Star
                            key={index}
                            fill="#299726"
                            strokeWidth={0}
                            className="w-5 h-5"
                          />
                        )
                      )}
                    </div>
                    <h2 className="text-muted-foreground font-semibold">
                      {item.Designation}
                    </h2>
                    <h4 className="text-buttonBg font-semibold">{item.Name}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
