"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Calendar, MessageCircle, User } from "lucide-react";
import { usePagination } from "@mantine/hooks";
import { Text, Pagination } from "@mantine/core";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Article } from "@/types";
import parse from "html-react-parser";
import { removeImage } from "@/lib/remove-img";
import { AppUrl } from "@/lib/url";
import { format } from "date-fns";

export const Articles = ({ data }: { data: Article[] }) => {
  console.log(data);
  const itemsPerPage = 5;
  const pagination = usePagination({ total: 4, siblings: 3, initialPage: 1 });

  const currentPage = pagination.active;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, 20);

  const params = useParams();
  const category = params.category;
  console.log(data[0].attributes.pages);

  return (
    <div className="mt-5 lg:space-y-20 space-y-5">
      <div className="">
        {data.map((item, index) => (
          //   <Link href={"#"}>
          <div
            // href={"#"}
            className="bg-white shadow-md pb-5  group cursor-pointer "
            key={index + startIndex}
          >
            <Link href={`/article/${item.attributes.slug}`}>
              <div className="w-full h-[25rem] overflow-hidden relative">
                <div className="bg-white/40 opacity-0 group-hover:opacity-100 absolute w-full transition-all duration-500  h-[25rem] top-0 z-20" />
                <Image
                  src={`${AppUrl}${item.attributes.Image.data.attributes.formats.medium.url}`}
                  alt="img"
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-300 group-hover:blur-[1px] "
                />
                <div className="absolute bottom-10 left-10 flex gap-6 flex-wrap">
                  {item.attributes.pages.data.map((btn, index) => (
                    <Button
                      className="bg-buttonHoverBg hover:bg-buttonHoverBg/80 rounded-sm px-[30px]"
                      key={index}
                    >
                      {btn.attributes.Title}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="p-5 space-y-5">
                <h3 className="text-[#323031] font-bold text-2xl">
                  {item.attributes.Title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {parse(removeImage(item.attributes.Description))}
                </p>
                <div>
                  <Button
                    className="text-buttonHoverBg p-0 underline -mt-3"
                    variant={"link"}
                  >
                    ReadMore
                  </Button>
                </div>
                <hr className="w-[10%] border-2" />
                <div className="md:flex items-center gap-5 space-y-2 md:space-y-0">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-buttonHoverBg" />
                    <p className="text-muted-foreground font-medium">admin</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-buttonHoverBg" />
                    <p className="text-muted-foreground font-medium">
                      {format(item.attributes.createdAt, "PPP")}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-buttonHoverBg" />
                    <p className="text-muted-foreground font-medium">
                      0 Comments
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          //   </Link>
        ))}
      </div>

      <div className="flex items-center justify-center">
        {/* <Pagination
          total={4}
          siblings={1}
          defaultValue={pagination.active}
          onChange={pagination.setPage}
          color="#299726"
        /> */}
      </div>
    </div>
  );
};
