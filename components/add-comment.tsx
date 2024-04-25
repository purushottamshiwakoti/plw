import { CommentForm } from "./forms/comment-form";

export const AddComment = () => {
  return (
    <div>
      <h2 className="font-semibold  text-[#302E2F] tracking-wide">
        Add Comment
      </h2>
      <hr className="border-2 mt-2 w-[8%] border-buttonHoverBg" />
      <div className="mt-5">
        <CommentForm />
      </div>
    </div>
  );
};
