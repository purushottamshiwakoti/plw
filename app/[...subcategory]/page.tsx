import { TrendingPost } from "@/components/TrendingPost";
import { ArticleNotFOund } from "@/components/article-not-found";
import { Articles } from "@/components/articles";
import { Categories } from "@/components/categories";
import { CustomBreadcrumb } from "@/components/custom-breadcrum";
import { PopularTags } from "@/components/popular-tags";
import { RecentEvents } from "@/components/recent-events";
import { SearchInput } from "@/components/search-input";
import { Skeleton } from "@/components/ui/skeleton";
import { apiCall } from "@/lib/api";
import { ArrowRight, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";

async function getPages(subcategory: string[], page: number | undefined) {
  let breads: string[] = [];
  let paginationPage = page ?? 1;

  try {
    const lastSubcategory = subcategory[subcategory.length - 1];

    const res = await apiCall(
      `articles`,
      `populate=*&filter[pages][slug][$eq]=${lastSubcategory}&pagination[page]=${paginationPage}&pagination[pageSize]=10 `
    );
    const categories = subcategory;
    console.log(categories);

    const promises = categories.map(async (item) => {
      console.log(item);
      try {
        const response = await apiCall(`pages/${item}`, "populate=*");
        console.log(response.data.attributes.Title);
        breads.push(response.data.attributes.Title);
        console.log(breads);
        if (response.error) {
          throw new Error("API call failed");
        }
        console.log(breads);
      } catch (error) {
        console.error(error);
      }
    });
    console.log(breads);

    await Promise.all(promises);

    return { res, breads }; // Return both res and breads
  } catch (error) {
    console.error(error);
    throw error; // Re-throw error to be caught by caller if needed
  }
}

const CategoryPage = async ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) => {
  const { subcategory } = params;
  const { page } = searchParams;
  const response = await getPages(subcategory, page);
  const { res, breads } = response;
  const data = res;
  if (!data) {
    return notFound();
  }

  return (
    <div className="lg:mx-[10rem] mx-4 py-10">
      <div>
        <CustomBreadcrumb breads={breads} />

        <div className="mt-5 lg:flex   gap-20  ">
          <div className="relative lg:w-[55%]">
            <SearchInput />
            {data.data.length > 0 ? (
              <Articles data={data} />
            ) : (
              <ArticleNotFOund />
            )}
          </div>
          <div className="lg:relative md:w-[50%] lg:w-[20%] lg:mt-0 mt-8">
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
