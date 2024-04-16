import { Star } from "lucide-react";

export const StarList = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex gap-[1px]  items-center justify-center ">
        <Star fill="#CD2828" strokeWidth={0} className="w-5 h-5" />
        <Star fill="#CD2828" strokeWidth={0} className="w-7 h-7" />
        <Star fill="#CD2828" strokeWidth={0} className="w-5 h-5" />
      </div>
      <div className="mt-5 space-y-3  ">
        <p className=" text-primary font-[600] text-[25px] text-center">
          {title}
        </p>
        <p className="text-center text-[#666] mx-[3rem] mt-3">{description}</p>
      </div>
    </>
  );
};
