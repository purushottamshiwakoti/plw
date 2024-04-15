import { Star } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const PoliciesAndProgress = () => {
  return (
    <>
      <div className="px-[10rem] mt-[5rem] mb-10">
        <div className="  flex flex-col items-center justify-center">
          <div className="flex gap-[1px]  items-center justify-center ">
            <Star fill="#CD2828" strokeWidth={0} className="w-5 h-5" />
            <Star fill="#CD2828" strokeWidth={0} className="w-7 h-7" />
            <Star fill="#CD2828" strokeWidth={0} className="w-5 h-5" />
          </div>

          <p className="text-primary mt-2">Best Policies From Politaro</p>

          <h2 className="text-primary text-5xl font-bold text-center tracking-wide leading-snug mt-4 px-[20%]">
            Organized Policies To Influence Real Progress
          </h2>
        </div>
        <div className="mt-10">
          <div className="flex items-center justify-between">
            {Array.from({ length: 7 }, (_, index) => (
              <h2
                className="text-lg font-bold text-[#305e95] hover:underline "
                key={index}
              >
                Tax Reforms
              </h2>
            ))}
          </div>
          <hr className=" w-full mt-4   " />
        </div>

        <div className="grid grid-cols-2 mt-10">
          <div>
            <Image
              src={"/images/p2.jpg"}
              alt="hello"
              width={500}
              height={800}
              className="object-cover"
            />
          </div>
          <div>
            {Array.from({ length: 4 }, (_, index) => (
              <Accordion type="single" collapsible key={index}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
