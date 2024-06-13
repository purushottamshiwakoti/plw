"use client";

import { Button } from "@/components/ui/button";
import { AppUrl } from "@/lib/url";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CountrySelector } from "./country-selector";
import { MenuItem } from "./menu-item";
import { MobileNav } from "./mobile-nav";

interface NavbarProps {
  className?: string;
  buttonName: string | null;
  showButton: boolean;
  buttonLink: string | null;
  menu: any[];
  logo: string;
  backgroundColor: string;
  showFlag: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  className,
  buttonLink,
  buttonName,
  logo,
  menu,
  showButton,
  backgroundColor,
  showFlag,
}) => {
  const path = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(path !== "/");

  useEffect(() => {
    const handleScroll = () => {
      if (path === "/" && window.scrollY > 300) {
        setIsVisible(true);
      } else if (path === "/" && window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    if (path !== "/") {
      setIsVisible(true);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (path === "/") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [path]);

  return (
    <nav
      ref={navRef}
      className={cn(
        "border-b border-t h-20 items-center justify-between lg:px-[14%] px-4 sticky w-full top-0 z-50",
        className,
        { hidden: path === "/" && !isVisible }
      )}
      style={{
        backgroundColor: isVisible ? backgroundColor ?? "#fff" : "transparent",
        opacity: isVisible ? 1 : 0,
        display: isVisible ? "flex" : "none",
      }}
    >
      <Link href="/">
        <Image
          src={`${AppUrl}${logo}`}
          alt="logo"
          width={150}
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
            className="bg-buttonHoverBg rounded-[5px] p-[25px] w-[9rem] hover:bg-buttonHoverBg/80 text-[15px] font-[700]"
            asChild
          >
            <Link href={buttonLink ?? "/"}>{buttonName}</Link>
          </Button>
        )}
      </div>
      <div className="lg:block hidden">
        <CountrySelector showFlag={showFlag} />
      </div>
    </nav>
  );
};
