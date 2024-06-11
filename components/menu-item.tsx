"use client";

import Link from "next/link";
import { useState } from "react";

export const MenuItem = ({ menu }: { menu: any }) => {
  const [showSubmenu, setShowSubmenu] = useState<null | string>(null);
  const [submenu, setSubmenu] = useState<string[]>([]);

  const handleMouseEnter = (title: string) => {
    setSubmenu((prev) => [...prev, title]);
  };
  const handleMouseLeave = (title: string) => {
    setSubmenu((prev) => prev.filter((item) => item !== title));
  };

  const renderFirstMenu = (i: any, index: number, length: number) => {
    return (
      <div
        className="relative"
        onMouseEnter={() => setSubmenu([i.attributes.title])}
      >
        <div className="px-2 py-3 hover:bg-[#F05555] hover:text-white transition-all duration-500">
          {i.attributes.url !== "" ? (
            <Link href={i.attributes.url} key={index} className="">
              {i.attributes.title}
            </Link>
          ) : (
            <li
              key={index}
              className=""
              onMouseEnter={() => setSubmenu([i.attributes.title])}
            >
              {i.attributes.title}
            </li>
          )}
        </div>
        <div>{index !== length - 1 && <hr />}</div>
        {submenu.includes(i.attributes.title) &&
        i.attributes.children.data.length > 0 ? (
          <div className="absolute -top-1 -right-56 w-[14rem] border-t-4 bg-white border-[#567869]">
            {i.attributes.children.data.map((item: any, idx: number) => {
              return renderSubMenu(item, idx);
            })}
          </div>
        ) : null}
      </div>
    );
  };

  const renderSubMenu = (i: any, index: number) => {
    return (
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter(i.attributes.title)}
      >
        <div className="px-2 py-3 hover:bg-[#F05555] hover:text-white transition-all duration-500">
          {i.attributes.url !== "" ? (
            <Link href={i.attributes.url} key={index} className="">
              {i.attributes.title}
            </Link>
          ) : (
            <li
              key={index}
              className=""
              onMouseEnter={() => handleMouseEnter(i.attributes.title)}
            >
              {i.attributes.title}
            </li>
          )}
        </div>
        <div>{index !== length - 1 && <hr />}</div>
        {submenu.includes(i.attributes.title) &&
        i.attributes.children.data.length > 0 ? (
          <div className="absolute -top-1 -right-56 w-[14rem] border-t-4 bg-white border-[#567869]">
            {i.attributes.children.data.map((item: any, idx: number) => {
              return renderSubMenu(item, idx);
            })}
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <div>
      <ul className="flex items-center gap-10">
        {menu.map((item: any, index: number) => {
          return item.attributes.children.data.length == 0 ? (
            <Link
              href={item.attributes.url}
              key={index}
              className="font-semibold underline-animate transition-all cursor-pointer"
            >
              {item.attributes.title}
            </Link>
          ) : item.attributes.children.data.length < 4 ? (
            item.attributes.url !== "" ? (
              <div className="relative">
                <Link
                  href={item.attributes.url}
                  key={index}
                  className="font-semibold underline-animate transition-all cursor-pointer"
                  onMouseEnter={() => setShowSubmenu(item.attributes.title)}
                >
                  {item.attributes.title}
                </Link>
                {showSubmenu == item.attributes.title && (
                  <div className="absolute top-[3.3rem] w-[14rem] bg-white -left-10 border-t-4 border-[#567869]">
                    {item.attributes.children.data.map(
                      (i: any, idx: number) => {
                        return renderFirstMenu(
                          i,
                          idx,
                          item.attributes.children.data.length
                        );
                      }
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="relative">
                <li
                  key={index}
                  className="font-semibold underline-animate transition-all cursor-pointer"
                  onMouseEnter={() => setShowSubmenu(item.attributes.title)}
                >
                  {item.attributes.title}
                </li>
                {showSubmenu == item.attributes.title && (
                  <div className="absolute top-[3.3rem] w-[14rem] bg-white -left-10 border-t-4 border-[#567869]">
                    {item.attributes.children.data.map(
                      (i: any, idx: number) => {
                        return renderFirstMenu(
                          i,
                          idx,
                          item.attributes.children.data.length
                        );
                      }
                    )}
                  </div>
                )}
              </div>
            )
          ) : item.attributes.url !== "" ? (
            <Link
              href={item.attributes.url}
              key={index}
              className="font-semibold underline-animate transition-all cursor-pointer"
            >
              {item.attributes.title}
            </Link>
          ) : (
            <li
              key={index}
              className="font-semibold underline-animate transition-all cursor-pointer"
            >
              {item.attributes.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
