"use server";
import { cookies } from "next/headers";

export const apiCall = async (name: string, params: string) => {
  // const {selectedLanguage}= await useLanguageStore()
  const cookieStore = cookies();

  const locale = cookieStore.get("language")?.value ?? "en";

  try {
    let apiUrl = process.env.APIURL; // Default to production API URL

    // Check if it's in development mode and override API URL
    if (process.env.NODE_ENV === "development") {
      apiUrl = process.env.DEVAPIURL || apiUrl;
    }

    const response = await fetch(
      `${apiUrl}/${name}?${params}&locale=${locale}`,
      {
        // const response = await fetch(`${apiUrl}/${"header"}?${"populate=*"}`, {
        cache: "no-store",
      }
    );

    const res = await response.json();
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
