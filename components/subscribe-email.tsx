import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Mail, Search } from "lucide-react";

interface SubscribeEmailProps {
  button: string;
}

export const SubscribeEmail = ({ button }: SubscribeEmailProps) => {
  return (
    <div className="flex  gap-2 bg-black/60 px-2 py-3 focus-visible:ring-0 ">
      <div className="relative">
        <Input
          className="w-[20rem] h-[3.5rem] pl-[3rem]  text-lg rounded-sm text-muted-foreground"
          placeholder="Enter Your Email..."
        />
        <Mail className="absolute top-5 left-3 text-muted-foreground" />
      </div>

      <Button className="bg-buttonBg rounded-sm px-5 h-[3.5rem]  hover:bg-white hover:text-black uppercase text-[15px] font-[700]">
        {button}
      </Button>
    </div>
  );
};
