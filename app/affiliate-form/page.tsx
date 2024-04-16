import { AffiliateForm } from "@/components/forms/affiliate-form";
import { StarList } from "@/components/star-list";
import React from "react";

const AffiliateFormPage = () => {
  return (
    <div className="px-[10rem] py-[3rem]">
      <StarList />
      <div className="mt-5 space-y-3  ">
        <p className=" text-primary font-[600] text-[25px] text-center">
          Want To Become Affiliate
        </p>
        <p className="text-center text-[#666] mx-[3rem] mt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          quidem sapiente nihil fugiat corporis asperiores esse cupiditate iusto
          consequuntur totam!
        </p>
      </div>
      <div className="mt-10 border-2 rounded-sm border-[#09274C]/40 p-5">
        <AffiliateForm />
      </div>
    </div>
  );
};

export default AffiliateFormPage;
