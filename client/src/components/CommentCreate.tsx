import axios from "axios";
import React, { useState } from "react";

const CommentCreate = ({ postId }: { postId: string }) => {
  const [content, setContent] = useState("");
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = await axios.post(
        `http://posts.com/posts/${postId}/comments`,
        {
          content,
        }
      );
      console.log("data", data);
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          void onSubmit(e);
        }}
      >
        <div className="form-group">
          <label htmlFor="">New Comment</label>
          <input
            type="text"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
