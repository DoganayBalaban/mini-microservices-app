import React from "react";
import CommentCreate from "./CommentCreate";
import CommentsList from "./CommentsList";

const Post = ({
  post,
}: {
  post: {
    id: string;
    title: string;
    comments: { id: string; content: string; status: string }[];
  };
}) => {
  return (
    <tr key={post.id}>
      <td style={{ padding: "8px", border: "1px solid #ddd" }}>{post.id}</td>
      <td style={{ padding: "8px", border: "1px solid #ddd" }}>{post.title}</td>
      <td>
        <div>
          <div>
            <CommentCreate postId={post.id} />
          </div>
          <div>
            <CommentsList comments={post.comments} />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Post;
