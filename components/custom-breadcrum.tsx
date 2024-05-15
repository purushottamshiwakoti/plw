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

export const CustomBreadcrumb = () => {
  const params = useParams();
  let breads = [];
  for (const key in params) {
    const value = params[key];
    breads.push(value);
  }
  const allBreads = _.flattenDeep(breads);
  const page = allBreads[allBreads.length - 1];
  let components = breads.filter((item) => item !== page);

  components = _.flattenDeep(components);
  components = components.slice(0, components.length - 1);
  components = _.flattenDeep(components);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
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
