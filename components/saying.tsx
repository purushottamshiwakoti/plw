"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import parse from "html-react-parser";
import Image from "next/image";
import { AppUrl } from "@/lib/url";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface SayingProps {
  reviewStarColor: string;
  title: string;
  description: string;
  review: {
    Name: string;
    Designation: string;
    Stars: string;
    Review: string;
    StarColor: string;
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

export const Saying = ({
  description,
  title,
  review,
  reviewStarColor,
}: SayingProps) => {
  const [showFullReview, setShowFullReview] = useState<null | string>(null);

  const handleReadMore = (review: string) => {
    setShowFullReview(review);
  };

  const handleShowLess = () => {
    setShowFullReview(null);
  };

  return (
    <section className="lg:px-[14%] p-4 w-full my-20">
      <div className="lg:mt-5 space-y-3 text-center">
        <div className="flex justify-center items-center space-x-1">
          <Star
            fill={reviewStarColor ?? "red"}
            strokeWidth={0}
            className="w-4 h-4"
          />
          <Star
            fill={reviewStarColor ?? "red"}
            strokeWidth={0}
            className="w-6 -mt-2 h-6"
          />
          <Star
            fill={reviewStarColor ?? "red"}
            strokeWidth={0}
            className="w-4 h-4"
          />
        </div>
        <div className="mt-5 space-y-3">
          <h2 className="text-[#222] font-semibold lg:text-[30px] text-2xl">
            {title}
          </h2>
          <p className="text-[#666] lg:mx-[14rem] text-[16px] pt-5">
            {description}
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Carousel className="w-full pt-8 lg:px-[5rem] xl:px-[5%]">
          <CarouselContent className="gap-[2rem] lg:w-[35%] md:w-[50%]">
            {review.map((item, index) => (
              <CarouselItem
                key={index}
                className="border shadow-custom p-6 rounded-lg"
              >
                <div className="flex flex-col items-start">
                  <Quote className="text-[#09274C] mb-3" />
                  <div
                    className={`text-[#666] tracking-wide ${
                      showFullReview == item.Review ? "" : "line-clamp-5"
                    }`}
                  >
                    {parse(item.Review)}
                  </div>
                  <div>
                    {showFullReview != item.Review ? (
                      <Button
                        variant="link"
                        className="flex items-start justify-start mt-1 p-0"
                        onClick={() => handleReadMore(item.Review)}
                      >
                        Read More
                      </Button>
                    ) : (
                      <Button
                        variant="link"
                        className="flex items-start justify-start mt-1 p-0"
                        onClick={() => handleShowLess()}
                      >
                        Read Less
                      </Button>
                    )}
                  </div>
                  <div className="flex items-center mt-4">
                    <Image
                      src={`${AppUrl}${item.Image.media.data.attributes.formats.thumbnail.url}`}
                      width={100}
                      height={100}
                      alt={item.Image.alt}
                      className="rounded-full h-20 w-20 object-cover mr-4"
                    />
                    <div>
                      <div className="flex items-center mb-2">
                        {Array.from(
                          { length: parseInt(item.Stars) },
                          (_, index) => (
                            <Star
                              key={index}
                              fill={item.StarColor ?? "red"}
                              strokeWidth={0}
                              className="w-5 h-5"
                            />
                          )
                        )}
                      </div>
                      <h4 className="font-semibold text-[#222]">{item.Name}</h4>
                      <p className="text-muted-foreground">
                        {item.Designation}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-4">
            <CarouselPrevious className="w-12 border-[#222] rounded-[2px] border-[2px] text-[#222] text-3xl" />
            <CarouselNext className="w-12 border-[#222] rounded-[2px] border-[2px] text-[#222] text-3xl" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
