import {
  Calendar,
  CircleAlertIcon,
  Folder,
  Handshake,
  Star,
  User,
} from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export const FutureMovement = () => {
  return (
    <section className="px-[10rem] w-full my-20">
      <div className="flex gap-[1px]  items-center justify-center ">
        <Star fill="#CD2828" strokeWidth={0} className="w-5 h-5" />
        <Star fill="#CD2828" strokeWidth={0} className="w-7 h-7" />
        <Star fill="#CD2828" strokeWidth={0} className="w-5 h-5" />
      </div>
      <div className="mt-5 space-y-3  ">
        <h2 className="text-[#222] text-2xl font-bold text-center ">
          Syrian Future Movement (SFM)
        </h2>

        <p className="text-center text-[#666] mx-[14rem] mt-3">
          Some of the humanitarian, social, and relief programs and projects
          implemented by the Syrian Future Stream both inside and outside Syria.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-10">
        {Array.from({ length: 3 }, (_, index) => (
          <div className="space-y-3 w-full " key={index}>
            <div className="flex items-center gap-10 ">
              <CircleAlertIcon className="text-blue-500 w-10 h-10" />
              <div>
                <h2 className="text-blue-500 text-xl font-semibold line-clamp-2 flex-1">
                  Educational Projects
                </h2>
                <p className="line-clamp-4 mt-1 text-muted-foreground">
                  For reading about the importance of our educational projects
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
