"use client";

import { Select } from "@mantine/core";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FlagIcon } from "react-flag-kit";
import { Skeleton } from "./ui/skeleton";

// Define the props type
interface CountrySelectorProps {
  showFlag: boolean;
}

// Define the option type
interface LanguageOption {
  value: string;
  label: string;
  flag: string;
}

export const CountrySelector: React.FC<CountrySelectorProps> = ({
  showFlag,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [lang, setLang] = useState<string>("en");

  const fetchLanguage = () => {
    const language = getCookie("language") ?? "en";
    setLang(language as string);
    setLoading(false);
    console.log({ loading });
  };
  useEffect(() => {
    fetchLanguage();
  }, []);

  console.log({ loading });

  const handleSetLanguage = (value: string | null) => {
    if (value) {
      setCookie("language", value);
      setLang(value);
      router.refresh();
    }
  };

  // const languageOptions: LanguageOption[] = [
  //   { value: "en", label: "En", flag: "US" },
  //   { value: "ar", label: "Ar", flag: "SA" },
  // ];

  // const data = languageOptions.map((option) => ({
  //   value: option.value,
  //   label: (
  //     <div className="flex items-center gap-2">
  //       {showFlag && <FlagIcon code={option.flag} size={20} />}
  //       {option.label}
  //     </div>
  //   ),
  // }));

  return loading ? (
    <Skeleton className="w-10 h-10" />
  ) : (
    <Select
      className="w-24"
      value={lang}
      onChange={handleSetLanguage}
      data={[
        { label: "🇺🇸 En", value: "en" },
        { label: "🇸🇦 Ar", value: "ar" },
      ]}
      searchable
    />
  );
};
