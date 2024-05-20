import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="lg:mx-[10rem] mx-4 py-10">
      <div className="mt-5 lg:flex   gap-20  ">
        <div className="relative lg:w-[55%]">
          <div className="mt-2">
            <Skeleton className="w-full h-[25rem] " />
            {Array.from({ length: 2 }).map((_, index) => (
              <Skeleton className="w-[35vw] h-[2rem] mt-4 " key={index} />
            ))}
            {Array.from({ length: 20 }).map((_, index) => (
              <Skeleton className="w-[40vw] h-[1rem] mt-4 " key={index} />
            ))}
          </div>
        </div>
        <div className="lg:relative md:w-[50%] lg:w-[20%] lg:mt-0 mt-8">
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>
                <Skeleton className="w-[20rem] h-7" />
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton className="w-[15rem] h-5 mt-5" key={index} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
