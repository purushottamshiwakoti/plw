"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, ChevronUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navBar } from "@/lib/nav";
import { Separator } from "@/components/ui/separator";
import { SearchDialog } from "./dialog/search-dialog";
import { usePathname } from "next/navigation";
import { AppUrl } from "@/lib/url";
import { MenuItem } from "./menu-item";
import { CountrySelector } from "./country-selector";
import { MobileNav } from "./mobile-nav";

interface NavbarProps {
  className?: string;
  buttonName: string | null;
  showButton: boolean;
  buttonLink: string | null;
  menu: any[];
  logo: string;
  backgroundColor: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  className,
  buttonLink,
  buttonName,
  logo,
  menu,
  showButton,
  backgroundColor,
}) => {
  const path = usePathname();

  // const menuItem = hasEmptyChildren(menu);

  return (
    <nav
      className={cn(
        " border-b text-white h-20 flex items-center justify-between lg:px-[10rem] px-4 sticky w-full top-0 z-50",
        className
      )}
      style={{
        backgroundColor: backgroundColor ?? "#fff",
      }}
    >
      <Link href="/">
        <Image
          // src={logo}
          src={
            process.env.NODE_ENV === "development" ? `${AppUrl}${logo}` : logo
          }
          alt="logo"
          width={180}
          height={50}
          priority
        />
      </Link>

      <div className="lg:hidden block ">
        <MobileNav menu={menu} />
      </div>

      <div className="lg:block hidden">
        <MenuItem menu={menu} />
      </div>

      <div className="lg:block hidden">
        {showButton && (
          <Button
            className="bg-buttonHoverBg rounded-[5px] p-[25px] w-[9rem] hover:bg-buttonHoverBg/80  text-[15px] font-[700]"
            asChild
          >
            <Link href={buttonLink ?? "/"}>{buttonName}</Link>
          </Button>
        )}
      </div>
      <div className="lg:block hidden">
        <CountrySelector />
      </div>
    </nav>
  );
};
