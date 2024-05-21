"use client";

import { Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

export const SearchInput = () => {
  const path = usePathname();
  const router = useRouter();

  const [searchText, setSearchText] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`${path}?filter=${searchText}&page=1`);
  };

  const clearSearch = () => {
    setSearchText("");
    router.push(`${path}?filter=&page=1`); // Clear filter when searchText is empty
  };

  useEffect(() => {
    if (searchText.length === 0) {
      clearSearch();
    }
  }, [searchText]);

  return (
    <>
      <form action="" onSubmit={handleSearch}>
        <Input
          className=" rounded-none focus-visible:ring-0 focus-visible:inset-0  pr-14      "
          placeholder="Type here to search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Search
          className="w-5 h-5 cursor-pointer text-buttonHoverBg absolute right-4 top-2"
          type="submit"
          onClick={handleSearch}
        />

        {searchText.length > 0 && (
          <X
            className="w-5 h-5 cursor-pointer text-muted-foreground absolute right-10 top-2"
            onClick={() => clearSearch()}
          />
        )}
      </form>
    </>
  );
};
