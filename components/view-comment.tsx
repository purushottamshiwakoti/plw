import React from "react";
import { format } from "date-fns";

const ViewComment = ({ comments }: { comments: any[] }) => {
  return (
    <div className="mt-10">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="bg-white shadow-md rounded-md p-4 mb-6"
        >
          <h3 className="text-lg font-semibold">
            {comment.attributes.FullName}
          </h3>
          <p className="text-gray-600 mb-2">{comment.attributes.Email}</p>
          <p className="text-gray-800">{comment.attributes.Comment}</p>
          <p className="text-xs text-gray-400 mt-2">
            {/* {new Date(comment.attributes.publishedAt).toLocaleString()} */}
            {format(comment.attributes.createdAt, "PPP")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ViewComment;
