"use client";
import { useState, useEffect } from "react";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { Skeleton } from "./ui/skeleton";

export const CountrySelector = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [lang, setLang] = useState("en"); // State to store language

  useEffect(() => {
    const fetchLanguage = async () => {
      const language = getCookie("language") ?? "en";
      setLang(language);
      setLoading(false); // Once language is fetched, loading is set to false
    };
    fetchLanguage();
  }, []); // Empty dependency array ensures useEffect runs only once

  const handleSetLanguage = (e: any) => {
    const selectedLanguage = e.target.value;
    setCookie("language", selectedLanguage);
    setLang(selectedLanguage);

    router.refresh();
  };

  return loading ? ( // Display splash screen while loading
    <Skeleton className="w-10 h-10" />
  ) : (
    <select
      id="countries"
      className="w-[5rem] bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={lang}
      onChange={handleSetLanguage}
    >
      <option value={"ar"} className="mt-10 ">
        🇦🇪 Ar
      </option>
      <option value="en">🇺🇸 En</option>
    </select>
  );
};
