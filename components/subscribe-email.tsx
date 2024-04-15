import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

interface SubscribeEmailProps {
  button: string;
}

export const SubscribeEmail = ({ button }: SubscribeEmailProps) => {
  return (
    button &&
    button.length > 0 && (
      <div className="flex gap-4 bg-black/60 px-2 py-5 focus-visible:ring-0 ">
        <div className="relative">
          <Input
            className="w-[25rem] h-[4rem] pl-[3rem]  text-lg rounded-sm text-muted-foreground"
            placeholder="Enter Your Email..."
          />
          <Mail className="absolute top-5 left-3 text-muted-foreground" />
        </div>

        <Button className="bg-buttonBg rounded-sm px-20 h-[4rem] w-[9rem] hover:bg-white hover:text-black uppercase text-[15px] font-[700]">
          {button}
        </Button>
      </div>
    )
  );
};
