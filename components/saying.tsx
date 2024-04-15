import { Calendar, Folder, Quote, Star, User } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export const Saying = () => {
  return (
    <>
      <section className="px-[10rem] w-full my-20">
        <div className="mt-5 space-y-3  ">
          <h2 className="text-[#222] text-2xl font-bold text-center ">
            They said about
          </h2>

          <p className="text-center text-[#666] mx-[14rem] mt-3">
            Syrian Future Movement
          </p>
          <div className="flex gap-[1px]  items-center justify-center ">
            <Star fill="#CD2828" strokeWidth={0} className="w-5 h-5" />
            <Star fill="#CD2828" strokeWidth={0} className="w-7 h-7" />
            <Star fill="#CD2828" strokeWidth={0} className="w-5 h-5" />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-10">
          {Array.from({ length: 3 }, (_, index) => (
            <div className="space-y-3 shadow-xl border-1 w-full " key={index}>
              <div className="px-6 py-10">
                <div className="flex-1">
                  <Quote className="text-[#09274C]" />
                  <p className="mt-3 line-clamp-none">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consequatur voluptas necessitatibus iusto voluptates ipsum
                    eveniet, odio neque cupiditate natus, blanditiis aperiam
                    mollitia laborum sint non quasi, quod ratione? Ad maiores
                    architecto blanditiis ab doloribus incidunt esse, ipsum,
                    saepe at ipsam illum ex asperiores. Suscipit quis inventore
                    esse sequi ab magni et, blanditiis fugit est aut distinctio
                    a, nisi rem obcaecati ea eaque! Quia veritatis optio enim
                    blanditiis
                  </p>
                  <div className=" flex items-end justify-end">
                    <Quote className="text-[#09274C]" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="space-x-3 flex items-center">
                    <Image
                      src="/images/p2.jpg"
                      width={100}
                      height={100}
                      alt="img"
                      className="rounded-full h-20 w-20 object-cover "
                    />
                    <div>
                      <div className="flex items-center mb-2">
                        {Array.from({ length: 5 }, (_, index) => (
                          <Star
                            key={index}
                            fill="#CD2828"
                            strokeWidth={0}
                            className="w-5 h-5"
                          />
                        ))}
                      </div>
                      <h2 className="text-muted-foreground font-semibold">
                        Ambassador{" "}
                      </h2>
                      <h4 className="text-buttonBg font-semibold">
                        Dr Farouk Taha
                      </h4>
                    </div>
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
