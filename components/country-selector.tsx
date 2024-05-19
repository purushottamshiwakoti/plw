import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export const CountrySelector = () => {
  const router = useRouter();
  const lang = getCookie("language");

  const handleSetLanguage = (e: any) => {
    const selectedLanguage = e.target.value;
    setCookie("language", selectedLanguage);
    router.refresh();
  };

  return (
    <select
      id="countries"
      className="w-[5rem] bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600
     
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={lang ?? "en"}
      onChange={handleSetLanguage}
    >
      <option value="ar" className="mt-10 ">
        🇦🇪 Ar
      </option>
      <option value="en">🇺🇸 En</option>
    </select>
  );
};
