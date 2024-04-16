"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navBar } from "@/lib/nav";
import { Separator } from "@/components/ui/separator";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [dropdown, setDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdown(null); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleParentClick = (itemName: string) => {
    setDropdown((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <nav
      className={cn(
        "bg-navBg text-white h-20 flex items-center justify-between px-[10rem] sticky w-full top-0 z-50",
        className
      )}
    >
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={180}
          height={50}
          priority
        />
      </Link>
      <ul className="flex items-center gap-11">
        {navBar.map((item, index) => (
          <li key={index} className="relative group cursor-pointer">
            {!item.children ? (
              <Link href={item.href ?? "/"}>
                <span className="font-semibold text-base" title={item.name}>
                  {item.name}
                </span>
              </Link>
            ) : (
              <span
                className="font-semibold text-base flex items-center"
                title={item.name}
                // onMouseEnter={() => setDropdown(item.name)}
                // onMouseLeave={() => setDropdown(null)}
                onClick={() => handleParentClick(item.name)}
              >
                {item.name}{" "}
                {dropdown === item.name ? (
                  <ChevronUp className="w-4 h-4 ml-2" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-2" />
                )}
              </span>
            )}

            {dropdown === item.name && item.children && (
              <div
                className="absolute left-0 mt-[26px] z-10 bg-white w-[12rem] origin-left border-t-blue-700 border-t-[0.2rem] shadow-md"
                onMouseEnter={() => setDropdown(item.name)} // Keep dropdown open when hovering over the dropdown menu
                onMouseLeave={() => setDropdown(null)}
                ref={dropdownRef}
              >
                {item.children.map((child, childIndex) => (
                  <div
                    className="relative transition duration-300 hover:bg-red-700"
                    key={childIndex}
                  >
                    <Link href={child.href} onClick={() => setDropdown(null)}>
                      <p
                        className="p-3 text-gray-700 hover:text-white text-base"
                        title={child.name}
                      >
                        {child.name}
                      </p>
                    </Link>
                    <Separator className="absolute bottom-0" />
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
        <div>
          <Search className="w-5 h-5 cursor-pointer" />
        </div>
      </ul>
      <div>
        <Button className="bg-buttonBg rounded-[5px] p-[25px] w-[9rem] hover:bg-white hover:text-black uppercase text-[15px] font-[700]">
          Donations
        </Button>
      </div>
    </nav>
  );
};
