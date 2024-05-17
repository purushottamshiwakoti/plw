import { Search } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export const ArticleNotFOund = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <div className="flex items-center justify-center">
              <Search className="w-20 h-20 text-buttonHoverBg mb-5 animate-bounce" />
            </div>
            <p className="mb-4 text-3xl tracking-tight font-bold text-buttonHoverBg md:text-4xl dark:text-white">
              No articles added here yet.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Please check this page after some time to see new articles added
              to this page
            </p>
            <Button
              asChild
              className="bg-buttonHoverBg hover:bg-buttonHoverBg/80"
            >
              <Link href="/">Back to Homepage</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
