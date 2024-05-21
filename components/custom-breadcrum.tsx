"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useParams } from "next/navigation";
import React from "react";

import _ from "lodash";
import { getCookie } from "cookies-next";

export const CustomBreadcrumb = ({ breads }: { breads: any[] }) => {
  const page = breads[breads.length - 1];
  const components = breads.slice(0, breads.length - 1);
  const cookie = getCookie("language") ?? "en";

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            {cookie == "en" ? "Home" : "منزل"}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {components.length > 0 && (
          <>
            {components.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={`/${components.slice(0, index + 1).join("/")}`}
                    className="capitalize"
                  >
                    {String(item).replaceAll("-", " ")}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </React.Fragment>
            ))}
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage className="capitalize">{page}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
