import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Folder,
  Upload,
  User,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import parse from "html-react-parser";
import { removeImage } from "@/lib/remove-img";
import Link from "next/link";
import { format } from "date-fns";
import { AppUrl } from "@/lib/url";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export const LatestEvents = ({ data }: { data: any[] }) => {
  const cookieStore = cookies();

  

  const locale = cookieStore.get("language")?.value ?? "en";

  return (
    <>
      <div className="my-10 mt-20 lg:px-[5rem] px-4 ">
        <div>
          <h2 className="text-[#4F4F4F] text-center font-bold text-3xl mb-10 ">
            {locale == "en" ? "Featured" : "متميز"}
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full mt-4  px-[10rem]   "
          >
            <CarouselContent className="  ">
              <div className="flex  justify-center items-center w-full  space-x-6">
                {data.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="max-w-[2vw] shadow-xl border h-[50vh] flex justify-center   "
                  >
                    <Link
                      href={`/article/${item.attributes.slug}`}
                      className="space-y-3   "
                      key={index}
                    >
                      <div className="relative  h-[200px] ">
                        <Image
                          src={`${AppUrl}${item.attributes.Image.data.attributes.formats.medium.url}`}
                          alt={item.attributes.alt}
                          fill
                          className="object-cover "
                        />
                        <div className="bg-buttonHoverBg absolute -bottom-8 rounded-sm text-white py-3 left-4 p-[3px] w-[5rem] flex flex-col items-center justify-center">
                          <span className="font-bold text-2xl">
                            {format(item.attributes.createdAt, "d")}
                          </span>
                          <span className="uppercase text-base">
                            {format(item.attributes.createdAt, "MMM")}
                          </span>
                        </div>
                      </div>
                      <div className="px-6 py-10">
                        <h2 className="text-[#302E2F] font-bold text-xl flex-1 line-clamp-2">
                          {item.attributes.Title}
                        </h2>
                        <div className="flex items-center justify-between mt-3 text-[#7E7E7E]">
                          <div className="flex  gap-2">
                            <User className="w-5 h-5" />
                            <div>By Sfuturem</div>
                          </div>
                          <div className="flex  gap-2">
                            <Calendar className="w-5 h-5" />
                            <div>
                              {/* April 2 2021 */}
                              {format(item.attributes.createdAt, "PPP")}
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 text-[#7E7E7E]">
                          {/* <div className="flex  gap-2 ">
                    <Folder className="w-5 h-5" />
                    <div className="line-clamp-1">
                      Media Office Today NewsMedia Office Today News
                    </div>
                  </div> */}
                        </div>
                        <div className="mt-3 line-clamp-3">
                          {parse(removeImage(item.attributes.Description))}
                        </div>
                        <div>
                          <Button
                            variant={"link"}
                            className="flex items-start justify-start p-0 text-hovbg-buttonHoverBg mt-1"
                            asChild
                          >
                            <Link href={`/article/${item.attributes.slug}`}>
                              Read More
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </div>
            </CarouselContent>
            <div className="mt-10">
              <div className="flex items-center justify-center gap-4">
                <CarouselPrevious className="w-12" />
                <CarouselNext className="w-12" />
              </div>
            </div>
          </Carousel>
        </div>

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
