"use client";

import { Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";

export const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  const clearSearch = () => {
    setSearchText("");
  };
  return (
    <>
      <Input
        className=" rounded-none focus-visible:ring-0 focus-visible:inset-0  pr-14      "
        placeholder="Type here to search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Search className="w-5 h-5 cursor-pointer text-buttonHoverBg absolute right-4 top-2" />
      {searchText.length > 0 && (
        <X
          className="w-5 h-5 cursor-pointer text-muted-foreground absolute right-10 top-2"
          onClick={() => clearSearch()}
        />
      )}
    </>
  );
};
