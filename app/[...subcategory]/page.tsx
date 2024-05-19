import { TrendingPost } from "@/components/TrendingPost";
import { ArticleNotFOund } from "@/components/article-not-found";
import { Articles } from "@/components/articles";
import { Categories } from "@/components/categories";
import { CustomBreadcrumb } from "@/components/custom-breadcrum";
import { PopularTags } from "@/components/popular-tags";
import { RecentEvents } from "@/components/recent-events";
import { SearchInput } from "@/components/search-input";
import { apiCall } from "@/lib/api";
import { notFound } from "next/navigation";

async function getPages(subcategory: string[]) {
  try {
    const lastSubcategory = subcategory[subcategory.length - 1];
    console.log(lastSubcategory);

    const res = await apiCall(`pages/${lastSubcategory}`, "populate=*");
    const categories = subcategory.slice(0, -1);
    console.log(categories);

    const promises = categories.map(async (item) => {
      const response = await apiCall(`pages/${item}`, "populate=*");
      console.log(response?.error?.status);
      if (response.error) {
        throw new Error("API call failed"); // Throw an error if API call fails
      }
    });

    await Promise.all(promises);

    return res.data.attributes.articles.data;
  } catch (error) {
    console.log(error);
    // You can handle the error here, maybe return a specific error response
    return notFound(); // Assuming notFound() returns an appropriate error response
  }
}

const CategoryPage = async ({ params }: { params: any }) => {
  const { subcategory } = params;
  const data = await getPages(subcategory);
  if (!data) {
    return notFound();
  }

  return (
    <div className="lg:mx-[10rem] mx-4 py-10">
      <div>
        <CustomBreadcrumb />

        <div className="mt-5 lg:flex   gap-20  ">
          <div className="relative lg:w-[55%]">
            <SearchInput />
            {data.length > 0 ? <Articles data={data} /> : <ArticleNotFOund />}
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
