import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@mantine/core";
import { DialogClose } from "@radix-ui/react-dialog";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CountrySelector } from "./country-selector";

export const MobileNav = ({ menu }: { menu: any }) => {
  const path = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [subMenu, setSubMenu] = useState<string[]>([]);

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const toggleSubMenu = (item: any) => {
    setSubMenu((prevSubMenu) => {
      if (prevSubMenu.includes(item)) {
        return prevSubMenu.filter((subItem) => subItem !== item);
      } else {
        return [...prevSubMenu, item];
      }
    });
  };

  const renderChildren = (children: any[]) => {
    return children.map((childItem: any, index: number) => (
      <div className="flex flex-col mt-2" key={index}>
        {childItem.attributes.children.data.length === 0 ? (
          <DialogClose asChild key={index}>
            <Link href={childItem.attributes.url ?? "/"}>
              <span
                className={cn(
                  path === childItem.attributes.url
                    ? "text-buttonHoverBg font-semibold text-base "
                    : "font-semibold text-base hover:text-buttonHoverBg "
                )}
                title={childItem.attributes.title}
              >
                {childItem.attributes.title}
              </span>
            </Link>
          </DialogClose>
        ) : (
          <>
            <span
              className={cn(
                path === childItem.attributes.url
                  ? "text-buttonHoverBg font-semibold text-base "
                  : "font-semibold text-base hover:text-buttonHoverBg "
              )}
              title={childItem.attributes.title}
              onClick={() => toggleSubMenu(childItem.attributes.title)}
            >
              <span className="flex items-center">
                {childItem.attributes.title}
                {subMenu.includes(childItem.attributes.title) ? (
                  <ChevronUp className="w-5 h-5 ml-1" />
                ) : (
                  <ChevronDown className="w-5 h-5 ml-1" />
                )}
              </span>
            </span>
            <div>
              {subMenu.includes(childItem.attributes.title) &&
                renderChildren(childItem.attributes.children.data)}
            </div>
          </>
        )}
      </div>
    ));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="text-primary">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-scroll">
        <div className="flex flex-col space-y-3 mt-4" key={"D"}>
          {menu.map((item: any, index: any) => (
            <div key={index}>
              {item.attributes.children.data.length === 0 ? (
                <DialogClose asChild>
                  <Link href={item.attributes.url ?? "/"}>
                    <span
                      className={cn(
                        path === item.attributes.url
                          ? "text-buttonHoverBg font-semibold text-base "
                          : "font-semibold text-base hover:text-buttonHoverBg "
                      )}
                      title={item.attributes.title}
                    >
                      {item.attributes.title}
                    </span>
                  </Link>
                </DialogClose>
              ) : (
                <>
                  <div
                    className={cn(
                      path === item.attributes.url
                        ? "text-buttonHoverBg font-semibold text-base "
                        : "font-semibold text-base hover:text-buttonHoverBg "
                    )}
                    title={item.attributes.title}
                    onClick={() => toggleDropdown(item.attributes.title)}
                  >
                    <span className="flex items-center">
                      {item.attributes.title}
                      {openDropdown === item.attributes.title ? (
                        <ChevronUp className="w-5 h-5 ml-1" />
                      ) : (
                        <ChevronDown className="w-5 h-5 ml-1" />
                      )}
                    </span>
                  </div>
                  <div>
                    {openDropdown?.includes(item.attributes.title) &&
                      renderChildren(item.attributes.children.data)}
                  </div>
                </>
              )}
            </div>
          ))}
          <CountrySelector showFlag={false} />
        </div>
      </SheetContent>
    </Sheet>
  );
};
