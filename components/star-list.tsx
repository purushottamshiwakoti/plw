import { Star } from "lucide-react";

export const StarList = () => {
  return (
    <>
      <div className="flex gap-[1px]  items-center justify-center ">
        <Star fill="#CD2828" strokeWidth={0} className="w-5 h-5" />
        <Star fill="#CD2828" strokeWidth={0} className="w-7 h-7" />
        <Star fill="#CD2828" strokeWidth={0} className="w-5 h-5" />
      </div>
    </>
  );
};
