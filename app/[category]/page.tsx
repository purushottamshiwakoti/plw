import { TrendingPost } from "@/components/TrendingPost";
import { Categories } from "@/components/categories";
import { CustomBreadCrum } from "@/components/custom-breadcrum";
import { PopularTags } from "@/components/popular-tags";
import { RecentEvents } from "@/components/recent-events";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="mx-[10rem] py-10">
      <div>
        <CustomBreadCrum />

        <div className="mt-5 flex   space-x-10   ">
          <div className="relative w-[60%]">
            <Input
              className=" rounded-none focus-visible:ring-0 focus-visible:inset-0  pr-10    "
              placeholder="Type here to search..."
            />
            <Search className="w-5 h-5 cursor-pointer text-buttonHoverBg absolute right-4 top-2" />
          </div>
          <div className="relative w-[20%]">
            <Categories />
            <div className="mt-10">
              <RecentEvents />
            </div>
            <div className="mt-10">
              <TrendingPost />
            </div>
            <div className="mt-10">
              <PopularTags />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
