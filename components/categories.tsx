"use client";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { getCookie } from "cookies-next";
import { format } from "date-fns";
import { AppUrl } from "@/lib/url";
import Link from "next/link";

export const Categories = ({ data }: { data: any }) => {
  const cookie = getCookie("language") ?? "en";
  return (
    <div>
      <h2 className="uppercase text-base font-semibold ">
        {cookie == "en" ? "Latest Posts" : "أحدث المشاركات"}
      </h2>
      <div>
        <hr className="w-[35%] border-2 border-buttonHoverBg" />
      </div>
      <div className="mt-2">
        <div className="mt-5 space-y-3">
          {data.map((item: any, index: number) => (
            <Link href={`article/${item.attributes.slug}`} key={index}>
              <div className="flex items-center gap-2">
                <Image
                  src={`${AppUrl}${item.attributes.Image.data.attributes.formats.medium.url}`}
                  alt={item.attributes.alt}
                  width={80}
                  height={50}
                />
                <div>
                  <h3 className="text-xs font-semibold text-primary/70 line-clamp-2">
                    {item.attributes.Title}
                  </h3>
                  <div className="mt-1 flex items-center ">
                    <Calendar className="text-buttonHoverBg w-4 h-4 mr-1" />
                    <p className="text-buttonHoverBg text-[10px] font-semibold">
                      {/* Jun 8,2024 */}
                      {format(item.attributes.createdAt, "PPP")}
                    </p>
                  </div>
                </div>
              </div>
              <hr className="mt-3" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
