import { Wifi } from "lucide-react";
import { Button } from "./ui/button";
import { SmallSocialIcon } from "./small-social-icon";
import { SocialIcon } from "react-social-icons";
import { apiCall } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import Slider from "./slider";

async function getData() {
  try {
    const res = await apiCall("header", "populate=*");
    const { data } = res;

    const title = data.attributes.Title;
    const backgroundColor = data.attributes.BackgroundColor;
    const icon = data.attributes.Icon.data.attributes.url;
    const iconAlt = data.attributes.Icon.data.attributes.name;
    const menu = data.attributes.Menu;
    const newsCampaign = data.attributes.NewsCampaign;
    const socialMedia = data.attributes.SocialMedia;

    return {
      title,
      backgroundColor,
      icon,
      iconAlt,
      menu,
      newsCampaign,
      socialMedia,
    };
  } catch (error) {
    console.log("Error retrieving data:", error);
    return null;
  }
}

export const Header = async () => {
  const data = await getData();
  return (
    <div
      className={` flex items-center justify-between px-[10rem] p-3`}
      style={{
        backgroundColor: data?.backgroundColor ?? "#eaeaea",
      }}
    >
      <div>
        <div className="flex items-center  gap-2">
          <Image
            // src={data?.icon}
            src={
              process.env.NODE_ENV === "development"
                ? `${process.env.APPURL}${data?.icon}`
                : data?.icon
            }
            alt={data?.iconAlt}
            width={25}
            height={25}
            className="rotate-45"
          />
          <div className="text-sm flex items-center">
            <span className="font-medium">{data?.title}</span>
            <span className="">
              {/* Our new campaign 2020 ready to launch from next week */}
              <Slider slides={data?.newsCampaign} />
            </span>
          </div>
        </div>
      </div>
      <div>
        {data?.menu.map((item: any) => (
          <Button variant={"link"} key={item.id} asChild>
            <Link href={`${item.Link}`}>{item.Name}</Link>
          </Button>
        ))}
      </div>
      <div>
        <SmallSocialIcon size="20px" url={data?.socialMedia} />
      </div>
    </div>
  );
};
