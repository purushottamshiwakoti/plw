"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
import { gsap } from "gsap";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const navElement = navRef.current;

    const showAnim = gsap.fromTo(
      navElement,
      { y: -100, opacity: 0, display: "none" },
      { y: 0, opacity: 1, display: "flex", duration: 0.5, paused: true }
    );

    const handleScroll = () => {
      if (window.scrollY > 500) {
        showAnim.play();
        setIsVisible(true);
      } else {
        showAnim.reverse();
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={cn(
        "border-b border-t hidden h-20 items-center justify-between lg:px-[14%] px-4 sticky w-full top-0 z-50",
        className,
        { "bg-white": isVisible } // Apply the background color only when visible
      )}
      style={{
        backgroundColor: isVisible ? backgroundColor ?? "#fff" : "transparent", // Dynamic background color
        opacity: 0, // Set initial opacity to 0
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
