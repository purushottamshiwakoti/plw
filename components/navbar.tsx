"use client";
import { navBar } from "@/lib/nav";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Ref, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav
      className={cn(
        "bg-navBg text-white h-20 flex items-center justify-between px-[10rem]",
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
            <span className="font-semibold text-base" title={item.name}>
              {item.name}
            </span>

            {/* Underline with transition */}
            <span className="absolute inset-x-0 bottom-0 h-[1px] bg-white origin-right transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100"></span>

            {item.children && (
              <div className="opacity-0 absolute left-0 mt-[26px] z- bg-white w-[12rem] origin-left border-t-blue-700 border-t-[0.2rem]    shadow-md transition-opacity duration-300 group-hover:opacity-100">
                {item.children.map((child, index) => (
                  <div
                    className="relative transition duration-300 hover:bg-red-700 "
                    key={index}
                  >
                    <p
                      className="p-3 text-gray-700 hover:text-white text-base"
                      title={child.name}
                    >
                      {child.name}
                    </p>
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
