import { Handshake, Star } from "lucide-react";
import { Button } from "./ui/button";

export const Services = () => {
  return (
    <section className="px-[10rem] w-full my-20">
      <div className="flex gap-[1px]  items-center justify-center ">
        <Star fill="#CD2828" strokeWidth={0} className="w-5 h-5" />
        <Star fill="#CD2828" strokeWidth={0} className="w-7 h-7" />
        <Star fill="#CD2828" strokeWidth={0} className="w-5 h-5" />
      </div>
      <div className="mt-5 space-y-3  ">
        <h2 className="text-[#222] text-center ">
          Great Political Party With Vision & Ideas To Sustain
        </h2>
        <p className=" text-primary font-[600] text-[50px] text-center">
          Together, We can Build Our Nation
        </p>
        <p className="text-center text-[#666] mx-[14rem] mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elitm sed do
          eiusmod tempor incididunt labor dolore minim veniam quis nostrud
          exercitation ullamco laboris nis aliquip exa consequat.
        </p>
      </div>
      <div className="flex items-center gap-10  justify-center mt-10">
        {Array.from({ length: 4 }, (_, index) => (
          <div className="cursor-pointer" key={index}>
            <div className="bg-[#F4F4F4] border-1 px-12 py-12">
              <Handshake className="w-20 h-20" color="#CD2828" />
            </div>
            <div>
              <Button className="w-full h-[3rem] bg-[#245DA2] rounded-sm">
                Volunteers
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
