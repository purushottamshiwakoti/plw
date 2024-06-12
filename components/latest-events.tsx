import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { removeImage } from "@/lib/remove-img";
import { AppUrl } from "@/lib/url";
import { format } from "date-fns";
import parse from "html-react-parser";
import { Calendar, Star, User } from "lucide-react";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const LatestEvents = ({ data }: { data: any[] }) => {
  const cookieStore = cookies();

  const locale = cookieStore.get("language")?.value ?? "en";

  return (
    <>
      <div className=" px-4 lg:px-[14%] bg-[#F4F4F4] py-20 ">
        <div className="flex justify-center  items-center  ">
          <Star fill="#F05555" strokeWidth={0} className="w-4 h-4" />
          <Star fill="#F05555" strokeWidth={0} className="w-6 -mt-3 h-6" />
          <Star fill="#F05555" strokeWidth={0} className="w-4 h-4" />
        </div>
        <div>
          <h2 className="font-[600] lg:text-[50px] md:text-3xl text-2xl text-center text-[#222] pt-4 pb-5">
            {locale == "en" ? "Featured" : "متميز"}
          </h2>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}  
          className=" mt-4    "
        >
          <CarouselContent className="gap-[2rem] w-[32%] ">
            {data &&
              data.map((item, index) => (
                <CarouselItem key={index} className=" bg-white  shadow-custom">
                  <Link key={index} href={`/article/${item.attributes.slug}`}>
                    <div className="space-y-3    " key={index}>
                      <div className="relative  -ml-4 h-[250px]">
                        <Image
                          src={`${AppUrl}${item.attributes.Image.data.attributes.formats.medium.url}`}
                          alt={item.attributes.alt}
                          fill
                          className="object-cover "
                        />
                        <div className="bg-red-500 absolute -bottom-8 rounded-[3px] text-white py-3 left-14 w-[70px] h-[70px] flex flex-col items-center justify-center">
                          <span className="font-bold text-xl">
                            {format(item.attributes.createdAt, "d")}
                          </span>
                          <span className="uppercase ">
                            {format(item.attributes.createdAt, "MMM")}
                          </span>
                        </div>
                      </div>
                      <div className="px-[35px]  py-10 -ml-4">
                        <h2 className="text-[#222] font-bold text-[20px] flex-1 line-clamp-1">
                          {item.attributes.Title}
                        </h2>
                        <div className="flex items-center justify-between mt-[15px] text-[#666]">
                          {/* <div className="flex  gap-2">
                          <User className="w-5 h-5" />
                          <div>By Sfuturem</div>
                        </div> */}
                          <div className="flex  gap-2">
                            <Calendar className="w-5 h-5" />
                            <div>
                              {/* April 2 2021 */}
                              {format(item.attributes.createdAt, "PPP")}
                            </div>
                          </div>
                        </div>
                        <div className="mt-[15px] ">
                          {/* <div className="flex  gap-2 ">
                    <Folder className="w-5 h-5" />
                    <div className="line-clamp-1">
                      Media Office Today NewsMedia Office Today News
                    </div>
                  </div> */}
                        </div>
                        <div className="mt-3 line-clamp-3 text-[#666]">
                          {parse(removeImage(item.attributes.Description))}
                        </div>
                        {/* <div>
                        <Button
                          variant={"link"}
                          className="flex items-start justify-start p-0 text-hovbg-buttonHoverBg"
                          asChild
                        >
                          <Link href={`/article/${item.attributes.slug}`}>
                            Read More
                          </Link>
                        </Button>
                      </div> */}
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
          </CarouselContent>
          <div className="mt-10">
            <div className="flex items-center justify-center gap-4">
              <CarouselPrevious className="w-12" />
              <CarouselNext className="w-12" />
            </div>
          </div>
        </Carousel>

        <div className="mt-5">
          {/* <div className="flex items-center justify-center gap-4">
            <Button variant={"outline"}>
              <ArrowLeft />
            </Button>
            <Button variant={"outline"}>
              <ArrowRight />
            </Button>
          </div>{" "} */}
          {/* <div className="flex items-center justify-center">
            <Button className="bg-buttonHoverBg rounded-[5px] p-[25px] w-[9rem] hover:bg-white hover:text-black capitalize text-[15px] ">
              View all
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div> */}
        </div>
      </div>
    </>
  );
};
