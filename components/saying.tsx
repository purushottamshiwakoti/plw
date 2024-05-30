"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import parse from "html-react-parser";
import Image from "next/image";
import { AppUrl } from "@/lib/url";
import { Star, Quote } from "lucide-react";

interface SayingProps {
  title: string;
  description: string;
  review: {
    Name: string;
    Designation: string;
    Stars: string;
    Review: string;
    Image: {
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
      alt: string;
    };
  }[];
}

export const Saying = ({ description, title, review }: SayingProps) => {
  const [showFullReview, setShowFullReview] = useState<null | string>(null);

  const handleReadMore = (review: string) => {
    setShowFullReview(review);
  };

  const handleShowLess = () => {
    setShowFullReview(null);
  };

  return (
    <>
      <section className="lg:px-[6rem] p-4 w-full my-20">
        <div className="lg:mt-5 space-y-3">
          <h2 className="text-[#222] text-2xl font-bold text-center">
            {title}
          </h2>
          <p className="text-center text-[#666] lg:mx-[14rem] mt-3">
            {description}
          </p>
          <div className="flex gap-[1px] items-center justify-center">
            <Star fill="#299726" strokeWidth={0} className="w-5 h-5" />
            <Star fill="#299726" strokeWidth={0} className="w-7 h-7" />
            <Star fill="#299726" strokeWidth={0} className="w-5 h-5" />
          </div>
        </div>
        <div className="mt-10 flex justify-center flex-wrap gap-3">
          {review &&
            review.map((item, index) => (
              <div
                className="shadow-xl border-1  flex w-[29vw] flex-col p-3 review-card"
                key={index}
              >
                <div className="px-6 py-10 flex flex-col">
                  <div className="flex items-start justify-start mb-3">
                    <Quote className="text-[#09274C]" />
                  </div>
                  <div
                    className={`mt-3 ${showFullReview ? "overflow-auto" : ""}`}
                  >
                    {showFullReview === item.Review ? (
                      <>
                        {parse(item.Review)}
                        <Button
                          variant={"link"}
                          className="p-0"
                          onClick={handleShowLess}
                        >
                          Show Less
                        </Button>
                      </>
                    ) : (
                      <>
                        {parse(item.Review.slice(0, 300) + "...")}
                        <Button
                          variant={"link"}
                          className="p-0"
                          onClick={() => handleReadMore(item.Review)}
                        >
                          Read More
                        </Button>
                      </>
                    )}
                  </div>
                  <div className="flex items-start justify-end mt-3">
                    <Quote className="text-[#09274C]" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={`${AppUrl}${item.Image.media.data.attributes.formats.thumbnail.url}`}
                      width={100}
                      height={100}
                      alt={item.Image.alt}
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
                      <h4 className="text-buttonBg font-semibold">
                        {item.Name}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {review &&
            review.map((item, index) => (
              <div
                className="shadow-xl border-1  flex w-[29vw] flex-col p-3 review-card"
                key={index}
              >
                <div className="px-6 py-10 flex flex-col">
                  <div className="flex items-start justify-start mb-3">
                    <Quote className="text-[#09274C]" />
                  </div>
                  <div
                    className={`mt-3 ${showFullReview ? "overflow-auto" : ""}`}
                  >
                    {showFullReview === item.Review ? (
                      <>
                        {parse(item.Review)}
                        <Button
                          variant={"link"}
                          className="p-0"
                          onClick={handleShowLess}
                        >
                          Show Less
                        </Button>
                      </>
                    ) : (
                      <>
                        {parse(item.Review.slice(0, 300) + "...")}
                        <Button
                          variant={"link"}
                          className="p-0"
                          onClick={() => handleReadMore(item.Review)}
                        >
                          Read More
                        </Button>
                      </>
                    )}
                  </div>
                  <div className="flex items-start justify-end mt-3">
                    <Quote className="text-[#09274C]" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={`${AppUrl}${item.Image.media.data.attributes.formats.thumbnail.url}`}
                      width={100}
                      height={100}
                      alt={item.Image.alt}
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
                      <h4 className="text-buttonBg font-semibold">
                        {item.Name}
                      </h4>
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
