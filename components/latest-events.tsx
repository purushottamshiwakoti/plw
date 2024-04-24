import { ArrowRight, Calendar, Folder, Upload, User } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export const LatestEvents = () => {
  return (
    <>
      <div className="my-10 px-[10rem] ">
        <div>
          <h2 className="text-[#4F4F4F] text-center font-bold text-3xl">
            Latest Events
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-10">
          {Array.from({ length: 6 }, (_, index) => (
            <div className="space-y-3 shadow-xl border-1 w-full " key={index}>
              <div className=" relative w-full h-[200px] ">
                <Image
                  src={"/images/p2.jpg"}
                  alt="img"
                  fill
                  className="object-cover"
                />
                <div className="bg-buttonHoverBg absolute -bottom-8 rounded-sm text-white py-3 left-4 p-[3px] w-[5rem] flex flex-col items-center justify-center">
                  <span className="font-bold text-2xl">14</span>
                  <span className="uppercase text-base ">Mar</span>
                </div>
              </div>
              <div className="px-6 py-10">
                <h2 className="text-[#302E2F] font-bold text-xl flex-1 line-clamp-2">
                  Sunday News Summary 14-04-24.
                </h2>
                <div className="flex items-center justify-between mt-3 text-[#7E7E7E]">
                  <div className="flex  gap-2">
                    <User className="w-5 h-5" />
                    <div>By Sfuturem</div>
                  </div>
                  <div className="flex  gap-2">
                    <Calendar className="w-5 h-5" />
                    <div>April 2 2021</div>
                  </div>
                </div>
                <div className="mt-3 text-[#7E7E7E]">
                  <div className="flex  gap-2 ">
                    <Folder className="w-5 h-5" />
                    <div className="line-clamp-1">
                      Media Office Today NewsMedia Office Today News
                    </div>
                  </div>
                </div>
                <p className="mt-3 line-clamp-6">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur voluptas necessitatibus iusto voluptates ipsum
                  eveniet, odio neque cupiditate natus, blanditiis aperiam
                  mollitia laborum sint non quasi, quod ratione? Ad maiores
                  architecto blanditiis ab doloribus incidunt esse, ipsum, saepe
                  at ipsam illum ex asperiores. Suscipit quis inventore esse
                  sequi ab magni et, blanditiis fugit est aut distinctio a, nisi
                  rem obcaecati ea eaque! Quia veritatis optio enim blanditiis
                  nemo doloribus nisi maxime ex. Odit laborum et labore deserunt
                  sed ipsum modi architecto incidunt est possimus accusamus amet
                  ipsam, enim fugit eum, praesentium dolore facilis dolor ad
                  quas iure, asperiores dignissimos consequuntur? Rerum
                  distinctio dolores labore exercitationem quod, cum nesciunt
                  laudantium repellat dolorem quos deleniti cumque omnis vero
                  non ipsum, facilis amet optio iusto sit magnam error?
                  Reiciendis quam ullam eveniet enim. Ratione suscipit expedita
                  inventore, fuga sunt officiis quidem aliquam repellendus
                  corporis voluptatem libero velit fugit vel doloribus nemo rem
                  nihil! Ipsam at a harum rem voluptatum error repudiandae!
                  Explicabo qui beatae iure earum, nihil fugiat assumenda
                  consectetur quasi ipsum, corporis temporibus, esse dignissimos
                  nisi. Quo a amet vitae ex dolorum exercitationem accusamus
                  sequi quidem doloribus ipsum, eveniet dicta quam harum
                  repudiandae minus, fugiat aliquam libero. Magni ab dicta vero
                  maiores.
                </p>
                <div>
                  <Button
                    variant={"link"}
                    className="flex p-0 text-hovbg-buttonHoverBg"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          {" "}
          <div className="flex items-center justify-center">
            <Button className="bg-buttonHoverBg rounded-[5px] p-[25px] w-[9rem] hover:bg-white hover:text-black capitalize text-[15px] ">
              View all
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
