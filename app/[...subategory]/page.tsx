import { TrendingPost } from "@/components/TrendingPost";
import { Articles } from "@/components/articles";
import { Categories } from "@/components/categories";
import { CustomBreadcrumb } from "@/components/custom-breadcrum";
import { PopularTags } from "@/components/popular-tags";
import { RecentEvents } from "@/components/recent-events";
import { SearchInput } from "@/components/search-input";

const CategoryPage = () => {
  return (
    <div className="lg:mx-[10rem] mx-4 py-10">
      <div>
        <CustomBreadcrumb />

        <div className="mt-5 lg:flex   gap-20  ">
          <div className="relative lg:w-[50%]">
            <SearchInput />
            <Articles />
          </div>
          <div className="lg:relative md:w-[50%] lg:w-[30%] lg:mt-0 mt-8">
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
