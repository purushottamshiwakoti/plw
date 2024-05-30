"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AppUrl } from "@/lib/url";

interface PoliciesAndProgressProps {
  title: string;
  subTitle: string;
  faq: {
    Title: string;
    QuestionAnswer: {
      Question: string;
      Answer: string;
    }[];
    Image: {
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

export const PoliciesAndProgress = ({
  subTitle,
  title,
  faq,
}: PoliciesAndProgressProps) => {
  const [faqData, setFaqData] = useState(faq[0].Title);
  const faqList = faq.filter((item) => item.Title == faqData);
  const [changed, setChanged] = useState(true);

  useGSAP(() => {
    gsap.fromTo(
      ".faqs",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 }
    );

    setChanged(false);
  }, [changed]);

  return (
    <>
      <div className="lg:px-[5%] px-3  lg:mt-[5rem] mt-3 lg:mb-10 mb-4">
        <div className="  flex flex-col items-center justify-center">
          <div className="flex gap-[1px]  items-center justify-center ">
            <Star fill="#299726" strokeWidth={0} className="w-5 h-5" />
            <Star fill="#299726" strokeWidth={0} className="w-7 h-7" />
            <Star fill="#299726" strokeWidth={0} className="w-5 h-5" />
          </div>

          <p className="text-primary mt-2">{title}</p>

          <h2 className="text-primary lg:text-5xl text-2xl font-bold text-center tracking-wide leading-snug mt-4 lg:px-[20%]">
            {subTitle}
          </h2>
        </div>
        <div className="mt-10 overflow-x-auto w-full ">
          <div className="flex items-center  gap-[54px]  ">
            {faq.map((item, index) => (
              <div className="relative group " key={index}>
                <h2
                  className={
                    faqData == item.Title
                      ? "text-lg font-bold  hover:text-buttonHoverBg text-buttonHoverBg  cursor-pointer flex-1 whitespace-nowrap "
                      : "text-lg font-bold text-[#305e95] hover:text-buttonHoverBg  cursor-pointer flex-1 whitespace-nowrap "
                  }
                  onClick={() => {
                    setFaqData(item.Title), setChanged(true);
                  }}
                  key={index}
                >
                  {item.Title}
                </h2>{" "}
                {/* Use flex container to hold hr and arrows */}
                <hr
                  className={
                    faqData == item.Title
                      ? "w-[150%] -left-[25%] opacity-100   -bottom-[17px] absolute border-buttonHoverBg flex-nowrap"
                      : "w-[150%] -left-[25%] opacity-0 group-hover:opacity-100   -bottom-[17px] absolute flex-nowrap border-buttonHoverBg"
                  }
                />
                {/* First horizontal line */}
                {/* Second horizontal line */}
              </div>
            ))}
          </div>
          <hr className=" w-full mt-4   " />
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 my-10  opacity-0 faqs pb-20 ">
          <div>
            {faqList[0] && (
              <Image
                // src={faqList[0].Image.media.data.attributes.formats.small.url}
                src={
                  AppUrl +
                  faqList[0]?.Image.media.data.attributes.formats.small.url
                }
                alt="hello"
                width={430}
                height={430}
                className="object-cover"
              />
            )}
          </div>
          <div className="lg:mt-0 mt-4">
            <Accordion
              type="single"
              collapsible
              defaultValue={"0"}
              className="w-full"
            >
              {faqList[0] &&
                faqList[0]?.QuestionAnswer.map((item, index) => {
                  return (
                    <AccordionItem value={index.toLocaleString()} key={index}>
                      <AccordionTrigger>{item.Question}</AccordionTrigger>
                      <AccordionContent>{item.Answer}</AccordionContent>
                    </AccordionItem>
                  );
                })}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};
