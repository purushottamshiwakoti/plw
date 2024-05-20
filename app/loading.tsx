import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader } from "lucide-react";

const loading = () => {
  return (
    <div className=" h-[100vh]   mx-[10rem]">
      <div>
        <Skeleton className=" h-[35rem] " />
        <div>
          <div className="flex items-center justify-center mt-10">
            <Loader className=" w-8 h-8 animate-spin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
