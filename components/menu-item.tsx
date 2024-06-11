"use client";

import Link from "next/link";
import { useState } from "react";

export const MenuItem = ({ menu }: { menu: any }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

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
