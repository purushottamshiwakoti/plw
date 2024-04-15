import { PersonStandingIcon, Star } from "lucide-react";

export const Donation = () => {
  return (
    <div className=" bg-[url('/images/banner.jpg')] bg-no-repeat bg-center bg-cover  mb-10">
      <div className="bg-[#09274C]/80 p-10">
        <div className="mt-5 space-y-3  ">
          <h2 className="text-white text-center font-semibold text-3xl ">
            Donate and contribute with us
          </h2>
          <div className="flex gap-[1px]  items-center justify-center ">
            <Star fill="#CD2828" strokeWidth={0} className="w-5 h-5" />
            <Star fill="#CD2828" strokeWidth={0} className="w-7 h-7" />
            <Star fill="#CD2828" strokeWidth={0} className="w-5 h-5" />
          </div>
          <p className=" text-white text-xl text-center">
            Share the joy of Eid with our people
          </p>
        </div>
        <div className="grid grid-cols-4  mt-10 px-[6rem]">
          {Array.from({ length: 8 }, (_, index) => (
            <div
              className="flex items-center flex-col my-14 mx-4 cursor-pointer bg-white/20 rounded-md py-10 "
              key={index}
            >
              <div className="p-10   rounded-md  w-40 h-40 flex items-center">
                <PersonStandingIcon className="text-buttonBg/70 w-24 h-24" />
              </div>
              <div className="mt-4 text-white">
                <h2 className="font-bold text-3xl">50 $</h2>
              </div>
              <p className="text-white mt-2 text-lg line-clamp-5 ">
                A small project for a family
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
