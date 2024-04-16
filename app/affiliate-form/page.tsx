import { AffiliateForm } from "@/components/forms/affiliate-form";
import { StarList } from "@/components/star-list";
import React from "react";

const AffiliateFormPage = () => {
  return (
    <div className="px-[10rem] py-[3rem]">
      <StarList
        title="  Want To Become Affiliate"
        description="  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          quidem sapiente nihil fugiat corporis asperiores esse cupiditate iusto
          consequuntur totam!"
      />

      <div className="mt-10 border-2 rounded-sm border-[#09274C]/40 p-5">
        <AffiliateForm />
      </div>
    </div>
  );
};

export default AffiliateFormPage;
