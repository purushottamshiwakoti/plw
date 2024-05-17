import { TrendingPost } from "@/components/TrendingPost";
import { ArticleNotFOund } from "@/components/article-not-found";
import { Articles } from "@/components/articles";
import { Categories } from "@/components/categories";
import { CustomBreadcrumb } from "@/components/custom-breadcrum";
import { PopularTags } from "@/components/popular-tags";
import { RecentEvents } from "@/components/recent-events";
import { SearchInput } from "@/components/search-input";
import { apiCall } from "@/lib/api";

async function getPages(subcategory: string[]) {
  try {
    console.log(subcategory[subcategory.length - 1]);
    const res = await apiCall(
      `pages/${subcategory[subcategory.length - 1]}`,
      "populate=*"
    );
    console.log();
    return res.data.attributes.articles.data;
  } catch (error) {
    console.log(error);
  }
}

const CategoryPage = async ({ params }: { params: any }) => {
  const { subcategory } = params;
  const data = await getPages(subcategory);

  return (
    <div className="lg:mx-[10rem] mx-4 py-10">
      <div>
        <CustomBreadcrumb />

        <div className="mt-5 lg:flex   gap-20  ">
          <div className="relative lg:w-[50%]">
            <SearchInput />
            {data.length > 0 ? <Articles data={data} /> : <ArticleNotFOund />}
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
