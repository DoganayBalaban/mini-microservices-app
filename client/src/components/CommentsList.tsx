import axios from "axios";
import React, { useEffect, useState } from "react";

const CommentsList = ({
  comments,
}: {
  comments: { id: string; content: string; status: string }[];
}) => {
  const getCommentStyle = (status: string) => {
    switch (status) {
      case "rejected":
        return {
          border: "2px solid #ff6b6b",
          backgroundColor: "#fff5f5",
          opacity: 0.7,
        };
      case "pending":
        return {
          border: "2px solid #ffd93d",
          backgroundColor: "#fffbf0",
          opacity: 0.8,
        };
      default:
        return {
          border: "1px solid #ddd",
          backgroundColor: "#fff",
          opacity: 1,
        };
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "rejected":
        return {
          backgroundColor: "#ff6b6b",
          color: "white",
          text: "REJECTED",
        };
      case "pending":
        return {
          backgroundColor: "#ffd93d",
          color: "#333",
          text: "PENDING",
        };
      default:
        return null;
    }
  };

  const getStatusMessage = (status: string) => {
    switch (status) {
      case "rejected":
        return "This comment was rejected by moderation";
      case "pending":
        return "This comment is awaiting moderation review";
      default:
        return null;
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {comments.map((comment) => {
          const commentStyle = getCommentStyle(comment.status);
          const statusBadge = getStatusBadge(comment.status);
          const statusMessage = getStatusMessage(comment.status);

          return (
            <li
              key={comment.id}
              style={{
                padding: "10px",
                margin: "5px 0",
                borderRadius: "4px",
                ...commentStyle,
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{comment.content}</span>
                {statusBadge && (
                  <span
                    style={{
                      backgroundColor: statusBadge.backgroundColor,
                      color: statusBadge.color,
                      padding: "2px 8px",
                      borderRadius: "12px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {statusBadge.text}
                  </span>
                )}
              </div>
              {statusMessage && (
                <div
                  style={{
                    fontSize: "12px",
                    color: "#666",
                    marginTop: "5px",
                    fontStyle: "italic",
                  }}
                >
                  {statusMessage}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsList;
