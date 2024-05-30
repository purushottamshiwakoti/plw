"use client";

import useHeaderMenuStore from "@/hooks/use-toogle-header";
import { AppUrl } from "@/lib/url";
import Image from "next/image";
import Link from "next/link";
import Slider from "./slider";
import { SmallSocialIcon } from "./small-social-icon";
import { Button } from "./ui/button";

export const TopHeader = ({ data }: { data: any }) => {
  const { isMenuShown } = useHeaderMenuStore();
  return (
    <div
      className={` lg:flex items-center justify-between lg:px-[5%] p-3`}
      style={{
        backgroundColor: data?.backgroundColor ?? "#eaeaea",
      }}
    >
      <div>
        <div className="lg:flex items-center  gap-2">
          <div className="flex items-center gap-2">
            <Image
              // src={data?.icon}
              src={`${AppUrl}${data.icon}`}
              alt={data?.iconAlt}
              width={25}
              height={25}
              className="rotate-45"
            />
            <span className="font-medium">{data?.title}</span>
          </div>
          <div className="text-sm my-3 md:mt-2 lg:mt-0 lg:flex items-center flex-grow">
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
      <div className="lg:block flex items-start justify-center">
        <SmallSocialIcon size="20px" url={data?.socialMedia} />
      </div>
    </div>
  );
};
