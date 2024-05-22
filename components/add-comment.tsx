"use client";
import { CommentForm } from "./forms/comment-form";
import { getCookie } from "cookies-next";

export const AddComment = ({ data }: { data: string }) => {
  const cookie = getCookie("language") ?? "en";

  return (
    <div>
      <h2 className="font-semibold  text-[#302E2F] tracking-wide">
        {cookie == "en" ? "Add Comment" : "أضف تعليق"}
      </h2>
      <hr className="border-2 mt-2 w-[8%] border-buttonHoverBg" />
      <div className="mt-5">
        <CommentForm 
        data={data}
        />
      </div>
    </div>
  );
};
