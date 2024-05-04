import { TrendingPost } from "@/components/TrendingPost";
import { AddComment } from "@/components/add-comment";
import { ArticleDetail } from "@/components/article-detail";
import { Articles } from "@/components/articles";
import { Categories } from "@/components/categories";
import { CustomBreadCrum } from "@/components/custom-breadcrum";
import { PopularTags } from "@/components/popular-tags";
import { RecentEvents } from "@/components/recent-events";
import { SearchInput } from "@/components/search-input";

const ArticlePage = () => {
  return (
    <div className="lg:mx-[10rem] mx-4 py-10">
      <div>
        <CustomBreadCrum />

        <div className="mt-5 lg:flex   lg:space-x-20 ">
          <div className="relative lg:w-[50%]">
            <ArticleDetail />
            <AddComment />
          </div>
          <div className="lg:relative lg:w-[30%] md:w-[50%] lg:mt-0 mt-8">
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

export default ArticlePage;
