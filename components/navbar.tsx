"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navBar } from "@/lib/nav";
import { Separator } from "@/components/ui/separator";
import { SearchDialog } from "./dialog/search-dialog";
import { usePathname } from "next/navigation";

interface NavbarProps {
  className?: string;
  buttonName: string | null;
  showButton: boolean;
  buttonLink: string | null;
  menu: {
    id: string;
    Name: string;
    Link: string;
    SubMenu:
      | {
          id: string;
          Name: string;
          Link: string;
        }[]
      | null;
  }[];
  logo: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  className,
  buttonLink,
  buttonName,
  logo,
  menu,
  showButton,
}) => {
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

  const path = usePathname();

  return (
    <nav
      className={cn(
        "bg-white border-b text-white h-20 flex items-center justify-between px-[10rem] sticky w-full top-0 z-50",
        className
      )}
    >
      <Link href="/">
        <Image src={logo} alt="logo" width={180} height={50} priority />
      </Link>
      <ul className="flex items-center gap-11 text-primary">
        {menu.map((item: any, index: any) => (
          <li key={index} className="relative group cursor-pointer">
            {item.SubMenu.length == 0 ? (
              <Link href={item.Link}>
                <span
                  className={cn(
                    path == item.Link
                      ? "text-buttonHoverBg font-semibold text-base"
                      : "font-semibold text-base hover:text-buttonHoverBg"
                  )}
                  title={item.Name}
                >
                  {item.Name}
                </span>
              </Link>
            ) : (
              <span
                className={cn(
                  item.SubMenu.some((subItem: any) =>
                    subItem.Link.includes(path.split("/")[1])
                  ) && path !== "/"
                    ? "text-buttonHoverBg font-semibold text-base flex items-center"
                    : "font-semibold text-base hover:text-buttonHoverBg flex items-center"
                )}
                title={item.Name}
                onClick={() => handleParentClick(item.Name)}
              >
                {item.Name}{" "}
                {item.SubMenu && dropdown === item.Name ? (
                  <ChevronUp className="w-4 h-4 ml-2" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-2" />
                )}
              </span>
            )}

            {dropdown === item.Name && item.SubMenu && (
              <div
                className="absolute left-0 mt-[26px] z-10 bg-white w-[12rem] origin-left border-t-blue-700 border-t-[0.2rem] shadow-md"
                onMouseEnter={() => setDropdown(item.Name)} // Keep dropdown open when hovering over the dropdown menu
                onMouseLeave={() => setDropdown(null)}
                ref={dropdownRef}
              >
                {item.SubMenu.map((child: any, childIndex: any) => (
                  <div
                    className="relative transition duration-300 hover:bg-buttonHoverBg"
                    key={childIndex}
                  >
                    <Link href={child.Link} onClick={() => setDropdown(null)}>
                      <p
                        className="p-3 text-gray-700 hover:text-white text-base"
                        title={child.Name}
                      >
                        {child.Name}
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
          <SearchDialog />
        </div>
      </ul>
      <div>
        {showButton && (
          <Button
            className="bg-buttonHoverBg rounded-[5px] p-[25px] w-[9rem] hover:bg-buttonHoverBg/80  text-[15px] font-[700]"
            asChild
          >
            <Link href={buttonLink ?? "/"}>{buttonName}</Link>
          </Button>
        )}
      </div>
    </nav>
  );
};
