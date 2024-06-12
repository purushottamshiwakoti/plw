"use client";

import { Button } from "@/components/ui/button";
import { AppUrl } from "@/lib/url";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

export const BannerNav: React.FC<NavbarProps> = ({
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

  // const menuItem = hasEmptyChildren(menu);

  return (
    <nav
      className={cn(
        "   h-20 flex items-center justify-between lg:px-[14%] px-4  w-full ",
        className
      )}
    >
      <Link href="/">
        <Image
          // src={logo}
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
        <MenuItem menu={menu} white={true} />
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
        <CountrySelector showFlag={showFlag} />
      </div>
    </nav>
  );
};
