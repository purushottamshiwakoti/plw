"use client";
import useHeaderMenuStore from "@/hooks/use-toogle-header";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const MenuItem = ({ menu }: { menu: any }) => {
  const { toggleMenu } = useHeaderMenuStore();
  const [hoverMenu, setHoverMenu] = useState<any>(["hello"]);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

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

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
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
    return (
      hoverMenu &&
      hoverMenu.includes(title) && (
        <div
          className=" absolute  -right-[14rem] top-0 z-10 bg-white w-[14rem]   border-t-buttonHoverBg  shadow-md "

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
                  href={`${child.attributes.url}`}
                  onClick={() => {
                    setDropdown(null);
                    setHoverMenu(["hello"]);
                    toggleMenu(true);
                  }}
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
                        ...(prev || []),
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
                    <Link
                      href={child.attributes.url}
                      className="p-3 text-gray-700  text-sm hover:text-white  flex items-center group justify-between "
                      title={child.attributes.title}
                      onClick={() => {
                        setDropdown(null);
                        setHoverMenu(["hello"]);
                        toggleMenu(true);
                      }}
                    >
                      {child.attributes.title}
                      <ChevronRight className="w-3 h-3  ml-2  " />
                    </Link>

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
    <div className="relative ">
      <ul className="flex items-center gap-10 text-primary">
        {menu.map((item: any, index: number) => {
          return (
            <li key={index} className=" group cursor-pointer">
              {item.attributes.children.data.length == 0 ? (
                <Link
                  href={item.attributes.url ?? "/"}
                  onClick={() => {
                    setDropdown(null);
                    setHoverMenu(["hello"]);
                    toggleMenu(true);
                  }}
                >
                  <span
                    className={cn(
                      path === item.attributes.url
                        ? "text-buttonHoverBg font-semibold text-base "
                        : "font-semibold text-base hover:text-buttonHoverBg "
                    )}
                    onMouseEnter={() =>
                      handleParentClick(item.attributes.title)
                    }
                    title={item.attributes.title}
                  >
                    {item.attributes.title}
                  </span>
                </Link>
              ) : (
                <>
                  <div>
                    <span
                      className={cn(
                        path === item.attributes.url
                          ? "text-buttonHoverBg font-semibold text-base "
                          : "font-semibold text-base hover:text-buttonHoverBg "
                      )}
                      title={item.attributes.title}
                      // onClick={() => handleParentClick(item.attributes.title)}
                      // onMouseLeave={() => handleParentClick("")}
                      onMouseEnter={() => {
                        handleParentClick(item.attributes.title);

                        item.attributes.children.data.length > 4
                          ? toggleMenu(false)
                          : null;
                      }}
                    >
                      <Link
                        href={item.attributes.url ?? "#"}
                        className="flex items-center"
                        onClick={() => {
                          setDropdown(null);
                          setHoverMenu(["hello"]);
                          toggleMenu(true);
                        }}
                      >
                        {item.attributes.title}

                        {dropdown === item.attributes.title ? (
                          <ChevronDown className="w-3 h-3 ml-[2px]" />
                        ) : (
                          <ChevronUp className="w-3 h-3 ml-[2px] " />
                        )}
                      </Link>
                    </span>
                    <div>
                      {dropdown === item.attributes.title && (
                        <div
                          className=" absolute mt-[26px]  z-10 bg-white  origin-left border-t-buttonHoverBg border-t-[0.2rem] shadow-md"
                          // onMouseEnter={() => setDropdown(item.Name)} // Keep dropdown open when hovering over the dropdown menu
                          // onMouseOut={() => setDropdown(null)}
                          ref={dropdownRef}
                          onMouseLeave={() => {
                            handleParentClick("null");
                            setHoverMenu("");
                          }}
                        >
                          {item.attributes.children.data.map(
                            (child: any, childIndex: any) =>
                              item.attributes.children.data.length < 4 ? (
                                <div
                                  className="  transition  duration-300 hover:bg-buttonHoverBg min-w-[15rem]"
                                  key={childIndex}
                                >
                                  {child.attributes.children.data.length ==
                                  0 ? (
                                    <Link
                                      href={`${child.attributes.url}`}
                                      onClick={() => {
                                        setDropdown(null);
                                        setHoverMenu(["hello"]);
                                      }}
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
                                          setHoverMenu((prev: any) => [
                                            ...(prev || []),
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
                                        className="relative w-  full"
                                      >
                                        <Link
                                          href={child.attributes.url}
                                          className="p-3 px-8 text-gray-700  hover:text-white text-sm flex justify-between items-center peer "
                                          title={child.attributes.title}
                                          onClick={() => {
                                            setDropdown(null);
                                            setHoverMenu(["hello"]);
                                            toggleMenu(true);
                                          }}
                                        >
                                          {child.attributes.title}
                                          <ChevronRight className="w-3 h-3 ml-2" />
                                        </Link>
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
                                <>
                                  <div
                                    className="bg-white min-h-[70vh] max-h-[90vh]
                                shadow-sm
                                flex fixed left-0 mx-[10rem] w-auto   overflow-auto"
                                    onMouseLeave={() => toggleMenu(true)}
                                  >
                                    <div className="flex px-5 py-5  justify-between flex-wrap  ">
                                      {item.attributes.children.data.map(
                                        (item: any, index: number) => (
                                          <div
                                            className="  w-[17vw] mt-3 relative "
                                            key={index}
                                          >
                                            <div>
                                              <Link
                                                href={item.attributes.url}
                                                className="text-sm font-semibold text-gray-500"
                                                onClick={() => {
                                                  setDropdown(null);
                                                  setHoverMenu(["hello"]);
                                                  toggleMenu(true);
                                                }}
                                              >
                                                {item.attributes.title}
                                              </Link>
                                              <span className="border-2 border-buttonHoverBg absolute w-[30%] left-0 top-7"></span>
                                              <hr className="my-2 " />
                                            </div>
                                            <div>
                                              {item.attributes.children.data
                                                .length > 0 &&
                                                item.attributes.children.data.map(
                                                  (
                                                    child: any,
                                                    index: number
                                                  ) => (
                                                    <div
                                                      className=" "
                                                      key={index}
                                                    >
                                                      {child.attributes.children
                                                        .data.length == 0 ? (
                                                        <Link
                                                          href={`${child.attributes.url}`}
                                                          onClick={() => {
                                                            setDropdown(null);
                                                            setHoverMenu([
                                                              "hello",
                                                            ]);
                                                            toggleMenu(true);
                                                          }}
                                                        >
                                                          <p
                                                            className="p-3  text-sm text-gray-700  "
                                                            title={
                                                              child.attributes
                                                                .title
                                                            }
                                                          >
                                                            {
                                                              child.attributes
                                                                .title
                                                            }
                                                          </p>
                                                        </Link>
                                                      ) : (
                                                        <>
                                                          <div
                                                            onMouseEnter={() =>
                                                              setHoverMenu(
                                                                (prev: any) => [
                                                                  ...(prev ||
                                                                    []),
                                                                  child
                                                                    .attributes
                                                                    .title,
                                                                ]
                                                              )
                                                            }
                                                            onMouseLeave={() => {
                                                              setHoverMenu(
                                                                hoverMenu.filter(
                                                                  (item: any) =>
                                                                    item !=
                                                                    child
                                                                      .attributes
                                                                      .title
                                                                )
                                                              );
                                                            }}
                                                            className="relative w-full"
                                                          >
                                                            <Link
                                                              href={
                                                                child.attributes
                                                                  .url
                                                              }
                                                              className="p-3  text-gray-700   text-sm flex items-center justify-between peer "
                                                              title={
                                                                child.attributes
                                                                  .title
                                                              }
                                                              onClick={() => {
                                                                setDropdown(
                                                                  null
                                                                );
                                                                setHoverMenu([
                                                                  "hello",
                                                                ]);
                                                                toggleMenu(
                                                                  true
                                                                );
                                                              }}
                                                            >
                                                              {
                                                                child.attributes
                                                                  .title
                                                              }
                                                              <ChevronRight className="w-3 h-3 ml-2" />
                                                            </Link>
                                                            <div>
                                                              {renderChildren({
                                                                children:
                                                                  child
                                                                    .attributes
                                                                    .children
                                                                    .data,
                                                                title:
                                                                  child
                                                                    .attributes
                                                                    .title,
                                                              })}
                                                            </div>
                                                          </div>
                                                        </>
                                                      )}
                                                      <Separator className=" " />
                                                    </div>
                                                  )
                                                )}
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </>
                              )
                          )}
                        </div>
                      )}
                    </div>
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
