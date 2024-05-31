import { TrendingPost } from "@/components/TrendingPost";
import { ArticleNotFOund } from "@/components/article-not-found";
import { Articles } from "@/components/articles";
import { Categories } from "@/components/categories";
import { CustomBreadcrumb } from "@/components/custom-breadcrum";
import { SearchInput } from "@/components/search-input";
import { apiCall } from "@/lib/api";
import { notFound } from "next/navigation";

async function getPages(
  subcategory: string[],
  page: number | undefined,
  filter: string | undefined
) {
  let breads: string[] = [];
  let paginationPage = page ?? 1;

  const lastSubcategory = subcategory[subcategory.length - 1];
  console.log(lastSubcategory);
  try {
    console.log(`pages?filters[slug][$eq]=${lastSubcategory}`);

    const pageData = await apiCall(
      `pages?filters[slug][$eq]=${lastSubcategory}`,
      "populate=*"
    );

    let res;

    if (filter) {
      res = await apiCall(
        `articles`,
        `populate=*&filters[pages][slug][$eq]=${lastSubcategory}&pagination[page]=${paginationPage}&pagination[pageSize]=1 &filters[Title][$startsWith]=${filter}`
      );
    } else {
      res = await apiCall(
        `articles`,
        `populate=*&filters[pages][slug][$eq]=${lastSubcategory}&pagination[page]=${paginationPage}&pagination[pageSize]=1 `
      );
    }
    const featuredRes = await apiCall(
      "articles",
      "filters[IsFeatured][$eq]=true&populate=*&pagination[pageSize]=7"
    );
    const latestRes = await apiCall(
      "articles",
      "populate=*&pagination[pageSize]=7"
    );
    const categories = subcategory;

    const promises = categories.map(async (item) => {
      try {
        const response = await apiCall(`pages/${item}`, "populate=*");
        breads.push(response.data.attributes.Title);
        if (response.error) {
          throw new Error("API call failed");
        }
      } catch (error) {
        console.error(error);
      }
    });

    await Promise.all(promises);

    console.log(res);

    return { res, breads, featuredRes }; // Return both res and breads
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
  console.log(params);
  const { subcategory } = params;
  console.log({ subcategory });
  const { page, filter } = searchParams;
  const response = await getPages(subcategory, page, filter);
  const { res, breads, featuredRes } = response;

  const data = res;
  console.log(data);
  if (!data) {
    return notFound();
  }

  return (
    <div className="lg:mx-[5%] mx-4 py-10">
      <div>
        <CustomBreadcrumb breads={breads} />

        <div className="mt-5 lg:flex   gap-20  ">
          <div className="relative lg:w-[150%]">
            <SearchInput />
            {data.data.length > 0 ? (
              <Articles data={data} />
            ) : (
              <ArticleNotFOund />
            )}
          </div>
          <div className="lg:relative md:w-[50%]  lg:mt-0 mt-8">
            <Categories />
            <div className="mt-10">{/* <RecentEvents /> */}</div>
            <div className="mt-10">
              <TrendingPost data={featuredRes.data} />
            </div>
            <div className="mt-10">{/* <PopularTags /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
