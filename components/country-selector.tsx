"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useLanguageStore from "@/hooks/use-language-stroe";
import Image from "next/image";
import { useState } from "react";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { FlagIcon } from "react-flag-kit";

export const CountrySelector = () => {
  const router = useRouter();
  const lang = getCookie("language");

  const handleSetLanguage = (value: any) => {
    setCookie("language", value);
    router.refresh();
  };
  return (
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
            <FlagIcon code="US" size={20} />
            English
          </div>
        </SelectItem>
        <SelectItem value="ar">
          <div className="flex items-center gap-2">
            <FlagIcon code="AE" size={20} />
            Arabic
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
