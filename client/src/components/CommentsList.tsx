import axios from "axios";
import React, { useEffect, useState } from "react";

const CommentsList = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<{ id: string; content: string }[]>(
    []
  );

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data } = await axios.get<{
          [key: string]: { id: string; content: string };
        }>(`http://localhost:4001/posts/${postId}/comments`);
        console.log("API Response:", data);
        // Convert object to array if needed
        if (Array.isArray(data)) {
          setComments(data);
        } else if (typeof data === "object" && data !== null) {
          // Convert object with ID keys to array
          const commentsArray = Object.values(data) as {
            id: string;
            content: string;
          }[];
          setComments(commentsArray);
        } else {
          console.error("Unexpected data format:", typeof data, data);
          setComments([]);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
        setComments([]);
      }
    };

    void fetchComments();
  }, [postId]);

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
