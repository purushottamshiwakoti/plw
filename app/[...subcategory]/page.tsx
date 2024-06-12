import { TrendingPost } from "@/components/TrendingPost";
import { ArticleNotFOund } from "@/components/article-not-found";
import { Articles } from "@/components/articles";
import { Categories } from "@/components/categories";
import { CustomBreadcrumb } from "@/components/custom-breadcrum";
import { SearchInput } from "@/components/search-input";
import { apiCall } from "@/lib/api";
import { LoaderCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { Suspense } from "react";

async function getPages(
  subcategory: string[],
  page: number | undefined,
  filter: string | undefined
) {
  let breads: string[] = [];
  let paginationPage = page ?? 1;

  subcategory = subcategory.filter(
    (item) =>
      item !== "google%20anylitics%20code%20here" &&
      item !== "facebook%20pexels%20code%20here" &&
      item !== "favicon.ico"
  );

  const lastSubcategory = subcategory[subcategory.length - 1];

  try {
    const pageData = await apiCall(
      `pages`,
      `filters[slug][$eq]=${lastSubcategory}&populate=SEO.OgImage`
    );
    if (pageData.data == null) {
      return notFound();
    }
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
      "populate=*&pagination[pageSize]=7&sort=updatedAt:desc"
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

    return { res, breads, featuredRes, latestRes, pageData }; // Return both res and breads
  } catch (error) {
    console.error(error);
    throw error; // Re-throw error to be caught by caller if needed
  }
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  // read route params

  // fetch data

  const { subcategory } = params;
  const { page, filter } = searchParams;
  // optionally access and extend (rather than replace) parent metadata
  const response = await getPages(subcategory, page, filter);
  const { res, breads, featuredRes, latestRes, pageData } = response;

  return {
    title: pageData.data[0].attributes?.SEO?.MetaTitle ?? "Sfturem",
    description: pageData.data[0].attributes?.SEO?.MetaDescription,
    // canonical: data?.canonicalUrl,
    alternates: {
      canonical: pageData.data[0].attributes?.SEO?.CanonicalUrl,
    },
    openGraph: {
      title: pageData.data[0].attributes?.SEO?.OgTitle,
      description: pageData.data[0].attributes?.SEO?.OgDescription,
      images: pageData.data[0].attributes?.SEO?.OgImage,
    },
  };
}

const CategoryPage = async ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) => {
  const { subcategory } = params;
  const { page, filter } = searchParams;
  const response = await getPages(subcategory, page, filter);
  const { res, breads, featuredRes, latestRes, pageData } = response;
  console.log(pageData.data[0].attributes?.SEO?.MetaTitle);

  const data = res;
  // if (!data) {
  //   return notFound();
  // }

  return (
    <div className="lg:mx-[14%] mx-4 py-10">
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
            <Categories data={latestRes.data} />
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

export const Spinner = (
  <div className="w-full h-[100vh] flex items-center justify-center">
    <LoaderCircle className="animate-spin" />
  </div>
);

const page = ({ params, searchParams }: { params: any; searchParams: any }) => {
  return (
    <Suspense fallback={Spinner}>
      <CategoryPage params={params} searchParams={searchParams} />
    </Suspense>
  );
};
export default page;
