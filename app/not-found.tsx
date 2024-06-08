import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";

const NotFound = () => {
  const cookieStore = cookies();
  const locale = cookieStore.get("language")?.value ?? "en";
  console.log(locale);

  const paragraph =
    locale == "en"
      ? " We're sorry, but it seems like the page you're looking for can't be found."
      : "عذرًا، ولكن يبدو أنه لا يمكن العثور على الصفحة التي تبحث عنها.";
  const detail =
    locale == "en"
      ? "  Don't worry though, let's help you get back on track! You can use the navigation menu above to explore our site or go back to homepage"
      : "لكن لا تقلق، دعنا نساعدك على العودة إلى المسار الصحيح! يمكنك استخدام قائمة التنقل أعلاه لاستكشاف موقعنا أو العودة إلى الصفحة الرئيسية";

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl text-red-500 animate-bounce tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            {paragraph}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {detail}
          </p>
          <Button
            asChild
            className="bg-buttonHoverBg hover:bg-buttonHoverBg/80"
          >
            <Link
              href="#"
              className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              {locale == "en"
                ? "Back to Homepage"
                : "العودة إلى الصفحة الرئيسية"}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
