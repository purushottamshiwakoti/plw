"use client";
import { navBar } from "@/lib/nav";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [drpdown, setDropdown] = useState<string | null>(null);
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

  return (
    <nav
      className={cn(
        "bg-navBg text-white h-20 flex items-center justify-between px-[10rem] sticky w-full top-0 z-50",
        className
      )}
    >
      <div>
        <Image
          src={"/images/logo.svg"}
          alt="logo"
          width={180}
          height={50}
          priority
        />
      </div>
      <ul className="flex items-center gap-11 ">
        {navBar.map((item, index) => (
          <li key={index} className="relative group cursor-pointer">
            {/* Main content */}
            {!item.children ? (
              <Link href={`${item.href ?? "/"}`}>
                <span className="font-semibold text-base" title={item.name}>
                  {item.name}
                </span>
              </Link>
            ) : (
              <span
                className="font-semibold text-base flex items-center"
                title={item.name}
                onClick={() => setDropdown(item.name)}
              >
                {item.name}{" "}
                {item.name === drpdown ? (
                  <ChevronUp className="w-4 h-4 ml-2" />
                ) : (
                  <ChevronDown className="w-4 h-4  ml-2" />
                )}
              </span>
            )}

            {/* Underline with transition */}
            <span className="absolute inset-x-0 -bottom-2 h-[1px] bg-white origin-right transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100"></span>

            {drpdown === item.name && item.children && (
              <div
                ref={dropdownRef}
                className="absolute left-0 mt-[26px] z-10 bg-white w-[12rem] origin-left border-t-blue-700 border-t-[0.2rem] shadow-md"
              >
                {item.children.map((child, index) => (
                  <div
                    className="relative transition duration-300 hover:bg-red-700"
                    key={index}
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

            {/* Lower text content */}
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
