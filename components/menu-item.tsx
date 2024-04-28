"use client";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const MenuItem = ({ menu }: { menu: any }) => {
  const [hoverMenu, setHoverMenu] = useState<any>(["hello"]);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdown(null); // Close dropdown if clicked outside
        setHoverMenu(null); // Close dropdown if clicked outside
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

  const renderChildren = ({
    children,
    title,
  }: {
    children: any;
    title: string;
  }) => {
    console.log(hoverMenu);
    return (
      hoverMenu &&
      hoverMenu.includes(title) && (
        <div
          className=" absolute  -right-[10rem]  top-0 z-10 bg-white w-[10rem]   border-t-blue-700  shadow-md "

          // onMouseEnter={() => setDropdown(item.Name)} // Keep dropdown open when hovering over the dropdown menu
          //   onMouseLeave={() => {
          //     setDropdown(null);
          //     // setHoverMenu(null);
          //   }
          // }
          // ref={dropdownRef}
        >
          {children.map((child: any, childIndex: any) => (
            <div
              className="  transition duration-300 hover:bg-buttonHoverBg"
              key={childIndex}
            >
              {child.attributes.children.data.length == 0 ? (
                <Link
                  href={`${child.attributes.link}`}
                  onClick={() => setDropdown(null)}
                >
                  <p
                    className="p-3 text-sm text-gray-700 hover:text-white "
                    title={child.attributes.title}
                  >
                    {child.attributes.title}
                  </p>
                </Link>
              ) : (
                <>
                  <div
                    onMouseEnter={() =>
                      setHoverMenu((prev: any[]) => [
                        ...prev,
                        child.attributes.title,
                      ])
                    }
                    onMouseLeave={() => {
                      setHoverMenu(
                        hoverMenu.filter(
                          (item: any) => item != child.attributes.title
                        )
                      );
                    }}
                    className="relative  w-full "
                  >
                    <p
                      className="p-3 text-gray-700  text-sm hover:text-white  flex items-center group "
                      title={child.attributes.title}
                    >
                      {child.attributes.title}
                      <ChevronRight className="w-5 h-5  ml-2  " />
                    </p>

                    {renderChildren({
                      children: child.attributes.children.data,
                      title: child.attributes.title,
                    })}
                  </div>
                </>
              )}
              <Separator className="absolute " />
            </div>
          ))}
        </div>
      )
      //   <p className="absolute left-[11.4rem] p-3  top-0 ml-10 w-[10rem] shadow-sm  bg-white">
      //     hello
      //   </p>
    );
  };

  const path = usePathname();
  return (
    <div className="relative">
      <ul className="flex items-center gap-10 text-primary">
        {menu.map((item: any, index: number) => {
          return (
            <li key={index} className=" group cursor-pointer">
              {item.attributes.children.data.length == 0 ? (
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
              ) : (
                <>
                  <span
                    className={cn(
                      path === item.attributes.url
                        ? "text-buttonHoverBg font-semibold text-base "
                        : "font-semibold text-base hover:text-buttonHoverBg "
                    )}
                    title={item.attributes.title}
                    onClick={() => handleParentClick(item.attributes.title)}
                  >
                    <span className="flex items-center">
                      {item.attributes.title}
                      {dropdown === item.attributes.title ? (
                        <ChevronDown className="w-4 h-4 ml-1" />
                      ) : (
                        <ChevronUp className="w-4 h-4 ml-1" />
                      )}
                    </span>
                  </span>
                  <div>
                    {dropdown === item.attributes.title && (
                      <div
                        className="absolute  mt-[26px]  z-10 bg-white  origin-left border-t-blue-700 border-t-[0.2rem] shadow-md"
                        // onMouseEnter={() => setDropdown(item.Name)} // Keep dropdown open when hovering over the dropdown menu
                        // onMouseOut={() => setDropdown(null)}
                        ref={dropdownRef}
                      >
                        {item.attributes.children.data.map(
                          (child: any, childIndex: any) =>
                            item.attributes.children.data.length < 4 ? (
                              <div
                                className="  transition  duration-300 hover:bg-buttonHoverBg"
                                key={childIndex}
                              >
                                {child.attributes.children.data.length == 0 ? (
                                  <Link
                                    href={`${child.attributes.url}`}
                                    onClick={() => setDropdown(null)}
                                  >
                                    <p
                                      className="p-3 px-8 text-sm text-gray-700 hover:text-white "
                                      title={child.attributes.title}
                                    >
                                      {child.attributes.title}
                                    </p>
                                  </Link>
                                ) : (
                                  <>
                                    <div
                                      onMouseEnter={() =>
                                        setHoverMenu((prev: any[]) => [
                                          ...prev,
                                          child.attributes.title,
                                        ])
                                      }
                                      onMouseLeave={() => {
                                        setHoverMenu(
                                          hoverMenu.filter(
                                            (item: any) =>
                                              item != child.attributes.title
                                          )
                                        );
                                      }}
                                      className="relative w-full"
                                    >
                                      <p
                                        className="p-3 px-8 text-gray-700  hover:text-white text-sm flex items-center peer "
                                        title={child.attributes.title}
                                      >
                                        {child.attributes.title}
                                        <ChevronRight className="w-5 h-5 ml-2" />
                                      </p>
                                      <div>
                                        {renderChildren({
                                          children:
                                            child.attributes.children.data,
                                          title: child.attributes.title,
                                        })}
                                      </div>
                                    </div>
                                  </>
                                )}
                                <Separator className=" " />
                              </div>
                            ) : (
                              <div className="absolute top-0 left-0">
                                <p>
                                  Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Iure sint enim optio officia
                                  fuga eius, odio error libero harum ut.
                                </p>
                              </div>
                            )
                        )}
                      </div>
                    )}
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
