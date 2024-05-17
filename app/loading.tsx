import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="flex items-center justify-center">
      {Array.from({ length: 100 }, (_, index) => (
        <div key={index}>
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
        </div>
      ))}

      <p>loading...</p>
    </div>
  );
};

export default loading;
