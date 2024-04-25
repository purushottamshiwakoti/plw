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

export const CustomBreadCrum = () => {
  const params = useParams();
  let breads = [];
  for (const key in params) {
    const value = params[key];
    breads.push(value);
  }
  const page = breads[breads.length - 1];
  const components = breads.filter((item) => item !== page);

  console.log(page);
  console.log(components);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {components.length > 0 && (
          <>
            <BreadcrumbItem>
              {components.map((item, index) => (
                <BreadcrumbLink
                  href={`/${item}`}
                  key={index}
                  className="capitalize"
                >
                  {item}
                </BreadcrumbLink>
              ))}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage className="capitalize">{page}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
