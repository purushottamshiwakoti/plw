import { TrendingPost } from "@/components/TrendingPost";
import { Articles } from "@/components/articles";
import { Categories } from "@/components/categories";
import { CustomBreadCrum } from "@/components/custom-breadcrum";
import { PopularTags } from "@/components/popular-tags";
import { RecentEvents } from "@/components/recent-events";
import { SearchInput } from "@/components/search-input";

const CategoryPage = () => {
  return (
    <div className="mx-[10rem] py-10">
      <div>
        <CustomBreadCrum />

        <div className="mt-5 flex   space-x-20   ">
          <div className="relative w-[50%]">
            <SearchInput />
            <Articles />
          </div>
          <div className="relative w-[30%]">
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
