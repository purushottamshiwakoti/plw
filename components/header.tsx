import { Wifi } from "lucide-react";
import { Button } from "./ui/button";
import { SmallSocialIcon } from "./small-social-icon";
import { SocialIcon } from "react-social-icons";

export const Header = () => {
  return (
    <div className="bg-[#EAEAEA] flex items-center justify-between px-[10rem] p-3">
      <div>
        <div className="flex items-center gap-2">
          <Wifi className="w-5 h-5 rotate-45" />
          <h2 className="text-sm">
            <span className="font-medium">News Press:</span>
            <span className="ml-3">
              Our new campaign 2020 ready to launch from next week
            </span>
          </h2>
        </div>
      </div>
      <div>
        <Button variant={"link"}>Media News</Button>
        <Button variant={"link"}>Join Us</Button>
        <Button variant={"link"}>Contact</Button>
      </div>
      <div>
        <SmallSocialIcon size="20px" />
      </div>
    </div>
  );
};
