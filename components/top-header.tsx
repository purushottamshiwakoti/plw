"use client";

import { AppUrl } from "@/lib/url";
import Image from "next/image";
import Link from "next/link";
import Slider from "./slider";
import { SmallSocialIcon } from "./small-social-icon";
import { Button } from "./ui/button";

export const TopHeader = ({ data }: { data: any }) => {
  return (
    <div
      className={` lg:flex items-center justify-between  lg:px-[10%] p-4`}
      style={{
        backgroundColor: data?.backgroundColor ?? "#eaeaea",
      }}
    >
      <div className="flex items-center gap-2">
        <Image
          // src={data?.icon}
          src={`${AppUrl}${data.icon}`}
          alt={data?.iconAlt}
          width={18}
          height={18}
          className="rotate-45"
        />
        <div
          className="font-medium text-base   z-10 "
          style={{
            color: data?.fontColor,
            backgroundColor: data?.backgroundColor ?? "#eaeaea",
          }}
        >
          {data?.title}
        </div>
      </div>
      <div className="  w-full">
        <Slider slides={data?.newsCampaign} fontColor={data?.fontColor} />
      </div>
      {data?.menu && (
        <div>
          {data?.menu.map((item: any) => (
            <Button variant={"link"} key={item.id} asChild>
              <Link href={`${item.Link}`}>{item.Name}</Link>
            </Button>
          ))}
        </div>
      )}
      <SmallSocialIcon size="1.6rem" url={data?.socialMedia} />
    </div>
  );
};
