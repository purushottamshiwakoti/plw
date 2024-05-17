import Image from "next/image";
import { Button } from "./ui/button";
import { Calendar, MessageCircle, User } from "lucide-react";
import { Article } from "@/types";
import { AppUrl } from "@/lib/url";
import parse from "html-react-parser";
import { format } from "date-fns";

export const ArticleDetail = ({ data }: { data: Article }) => {
  return (
    <div
      // href={"#"}
      className=" pb-5  group cursor-pointer "
    >
      <div className="w-full h-[25rem] overflow-hidden relative">
        <Image
          src={`${AppUrl}${data.attributes.Image.data.attributes.formats.medium.url}`}
          alt="img"
          fill
          className="object-cover "
        />
        <div className="absolute bottom-10 left-10">
          <Button className="bg-buttonHoverBg hover:bg-buttonHoverBg/80 rounded-sm px-[30px]">
            Category
          </Button>
        </div>
      </div>
      <div className="space-y-5 mt-10">
        <h3 className="text-[#323031] font-bold text-2xl">
          {data.attributes.Title}
        </h3>
        <div className="md:flex items-center gap-5 md:space-y-0 space-y-3">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-buttonHoverBg" />
            <p className="text-muted-foreground font-medium">admin</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-buttonHoverBg" />
            <p className="text-muted-foreground font-medium">
              {format(data.attributes.createdAt, "PPP")}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-buttonHoverBg" />
            <p className="text-muted-foreground font-medium">0 Comments</p>
          </div>
        </div>
        <p className="text-muted-foreground ">
          {parse(data.attributes.Description)}
        </p>
      </div>
    </div>
  );
};
