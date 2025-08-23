import axios from "axios";
import React, { useEffect, useState } from "react";

const CommentsList = ({
  comments,
}: {
  comments: { id: string; content: string }[];
}) => {
  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
