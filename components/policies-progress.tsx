"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AppUrl } from "@/lib/url";

interface PoliciesAndProgressProps {
  title: string;
  faqStarColor: string;
  subTitle: string;
  faqActiveColor: string;
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
  faqStarColor,
  faqActiveColor,
}: PoliciesAndProgressProps) => {
  const [faqData, setFaqData] = useState(faq[0].Title);
  const faqList = faq.filter((item) => item.Title == faqData);
  const [changed, setChanged] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
      <div className="lg:px-[14%] px-3 lg:mt-[5rem] mt-3 lg:mb-10 mb-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-[1px] items-center justify-center">
            <Star
              fill={faqStarColor ?? "red"}
              strokeWidth={0}
              className="w-5 h-5"
            />
            <Star
              fill={faqStarColor ?? "red"}
              strokeWidth={0}
              className="w-7 h-7"
            />
            <Star
              fill={faqStarColor ?? "red"}
              strokeWidth={0}
              className="w-5 h-5"
            />
          </div>

          <p className="text-primary mt-2">{title}</p>

          <h2 className="text-primary lg:text-5xl text-2xl font-bold text-center tracking-wide leading-snug mt-4 lg:px-[20%]">
            {subTitle}
          </h2>
        </div>
        <div className="mt-10 overflow-x-auto w-full">
          <div className="flex items-center gap-[54px]">
            {faq.map((item, index) => (
              <div className="relative group" key={index}>
                <h2
                  style={{
                    fontSize: "1.125rem", // text-lg equivalent
                    fontWeight: "bold",
                    cursor: "pointer",
                    flex: 1,
                    whiteSpace: "nowrap",
                    color: isHovered
                      ? faqActiveColor
                      : faqData === item.Title
                      ? faqActiveColor
                      : "#305e95",
                  }}
                  onClick={() => {
                    setFaqData(item.Title);
                    setChanged(true);
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.Title}
                </h2>
                <hr
                  className={
                    faqData == item.Title
                      ? `w-[150%] -left-[25%] opacity-100 -bottom-[17px] absolute border border-${faqActiveColor} flex-nowrap`
                      : `w-[150%] -left-[25%] opacity-0 group-hover:opacity-100 -bottom-[17px] absolute flex-nowrap border border-${faqActiveColor}`
                  }
                />
              </div>
            ))}
          </div>
          <hr className="w-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 my-10 opacity-0 faqs pb-20">
          <div>
            {faqList[0] && (
              <div className="lg:w-[23vw] w-[70vw] h-[20rem] relative">
                <Image
                  // src={faqList[0].Image.media.data.attributes.formats.small.url}
                  src={
                    AppUrl +
                    faqList[0]?.Image.media.data.attributes.formats.small.url
                  }
                  alt={faqList[0]?.Image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
          <div className="lg:mt-0 mt-4 lg:ml-12 col-span-2">
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
                      <AccordionTrigger
                        activeColor={faqActiveColor}
                        className="font-semibold"
                      >
                        {item.Question}
                      </AccordionTrigger>
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
