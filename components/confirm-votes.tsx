import { Star } from "lucide-react";
import { Button } from "./ui/button";

export const ConfirmVotes = () => {
  return (
    <>
      <div className=" bg-[url('/images/banner.jpg')] bg-no-repeat bg-center bg-cover  mb-10 ">
        <div className="bg-primary/90 p-10 py-[7rem] flex flex-col items-center justify-center">
          <div className="flex gap-[1px]  items-center justify-center ">
            <Star fill="#CD2828" strokeWidth={0} className="w-5 h-5" />
            <Star fill="#CD2828" strokeWidth={0} className="w-7 h-7" />
            <Star fill="#CD2828" strokeWidth={0} className="w-5 h-5" />
          </div>

          <p className="text-white mt-2">Great Politaro Ideas</p>

          <h2 className="text-white text-3xl font-bold tracking-wider mt-4">
            Confirm Your Vote Status
          </h2>
          <p className="text-white text-center leading-relaxed  mt-6 px-[17%]">
            Ipsum dolor sit amet, consectetur adipisicing elitm sed eiusmod
            tempor incididunt labore excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Sed ut perspiciatis unde omnis.
          </p>
          <div className="mt-10">
            <Button className="bg-buttonBg  rounded-[5px] p-[25px] w-[9rem] hover:bg-white hover:text-black uppercase text-[15px] font-[700]">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
