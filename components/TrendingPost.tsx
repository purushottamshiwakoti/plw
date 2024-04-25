import { Calendar } from "lucide-react";
import Image from "next/image";

export const TrendingPost = () => {
  return (
    <div>
      <h2 className="uppercase text-base font-semibold ">Trending Posts</h2>
      <div>
        <hr className="w-[35%] border-2 border-buttonHoverBg" />
      </div>
      <div className="mt-2">
        <div className="mt-5 space-y-3">
          {Array.from({ length: 7 }, (_, index) => (
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src={"/images/p2.jpg"}
                  alt="image"
                  width={80}
                  height={50}
                />
                <div>
                  <h3 className="text-xs font-semibold text-primary/70">
                    Upholds The Idea That True Democracy Right
                  </h3>
                  <div className="mt-1 flex items-center ">
                    <Calendar className="text-buttonHoverBg w-4 h-4 mr-1" />
                    <p className="text-buttonHoverBg text-[10px] font-semibold">
                      Jun 8,2024
                    </p>
                  </div>
                </div>
              </div>
              <hr className="mt-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
