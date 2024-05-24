import { TrendingPost } from "@/components/TrendingPost";
import { AddComment } from "@/components/add-comment";
import { ArticleDetail } from "@/components/article-detail";
import { ArticleNotFOund } from "@/components/article-not-found";
import { Articles } from "@/components/articles";
import { Categories } from "@/components/categories";
import { CustomBreadcrumb } from "@/components/custom-breadcrum";
import { PopularTags } from "@/components/popular-tags";
import { RecentEvents } from "@/components/recent-events";
import { SearchInput } from "@/components/search-input";
import { Skeleton } from "@/components/ui/skeleton";
import ViewComment from "@/components/view-comment";
import { apiCall } from "@/lib/api";
import { getDate } from "date-fns";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";

async function getArticle(slug: string) {
  try {
    const res = await apiCall(`articles/${slug}`, "populate=*");
    const featuredRes = await apiCall(
      "articles",
      "filters[IsFeatured][$eq]=true&populate=*&pagination[pageSize]=7"
    );
    // console.log();
    return { res, featuredRes };
  } catch (error) {
    console.log(error);
    return notFound();
  }
}

const ArticlePage = async ({ params }: { params: any }) => {
  const response = await getArticle(params.detail);
  const { res, featuredRes } = response;
  const data = res.data;
  if (!data) {
    return notFound();
  }
  return (
    <div className="lg:mx-[10rem] mx-4 py-10">
      <div>
        {/* <CustomBreadcrumb /> */}

        <div className="mt-5 lg:flex   lg:gap-20 ">
          <div className="relative lg:w-[55%]">
            {data ? (
              <>
                <ArticleDetail data={data} />
                <AddComment data={data.id} />
                <ViewComment comments={data.attributes.comments.data} />
              </>
            ) : (
              <ArticleNotFOund />
            )}
          </div>
          <div className="lg:relative lg:w-[20%] md:w-[50%] lg:mt-0 mt-8">
            <Categories />
            <div className="mt-10">{/* <RecentEvents /> */}</div>
            <div className="mt-10">
              <TrendingPost data={featuredRes.data} />
            </div>
            <div className="mt-10">{/* <PopularTags />   */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
