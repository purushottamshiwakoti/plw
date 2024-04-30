"use client";

import Image from "next/image";
import { SmallSocialIcon } from "./small-social-icon";
import Slider from "./slider";
import { Button } from "./ui/button";
import Link from "next/link";
import useHeaderMenuStore from "@/hooks/use-toogle-header";

export const TopHeader = ({ data }: { data: any }) => {
  const { isMenuShown } = useHeaderMenuStore();
  return (
    isMenuShown && (
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
            <div className="text-sm flex items-center flex-grow">
              <span className="font-medium">{data?.title}</span>
              <span className="">
                {/* Our new campaign 2020 ready to launch from next week */}
                <Slider slides={data?.newsCampaign} />
              </span>
            </div>
          </div>
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
        <div>
          <SmallSocialIcon size="20px" url={data?.socialMedia} />
        </div>
      </div>
    )
  );
};
