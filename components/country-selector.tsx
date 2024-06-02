"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FlagIcon } from "react-flag-kit";
import { Skeleton } from "./ui/skeleton";
import { boolean } from "zod";

export const CountrySelector = ({ showFlag }: { showFlag: boolean }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const fetchLanguage = async () => {
      const language = getCookie("language") ?? "en";
      setLang(language);
      setLoading(false); // Once language is fetched, loading is set to false
    };
    fetchLanguage();
  }, []); // Empty dependency array ensures useEffect runs only once

  const handleSetLanguage = (e: any) => {
    const selectedLanguage = e;
    setCookie("language", selectedLanguage);
    setLang(selectedLanguage);

    router.refresh();
  };

  return loading ? ( // Display splash screen while loading
    <Skeleton className="w-10 h-10" />
  ) : (
    <Select
      defaultValue={lang ?? "en"}
      onValueChange={(val: any) => handleSetLanguage(val)}
    >
      <SelectTrigger className="w-[80px] text-primary">
        <SelectValue placeholder="Select " />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <div className="flex items-center gap-2">
            {showFlag && <FlagIcon code="US" size={20} />}
            English
          </div>
        </SelectItem>
        <SelectItem value="ar">
          <div className="flex items-center gap-2">
            {showFlag && <FlagIcon code="SA" size={20} />}
            Arabic
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
