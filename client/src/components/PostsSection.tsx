import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

const PostsSection = () => {
  const [posts, setPosts] = useState<{ id: string; title: string }[]>([]);
  const [sortBy, setSortBy] = useState<"id" | "title">("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get<{
          [key: string]: { id: string; title: string };
        }>("http://localhost:4000/posts");
        console.log("API Response:", data);
        // Convert object to array if needed
        if (Array.isArray(data)) {
          setPosts(data);
        } else if (typeof data === "object" && data !== null) {
          // Convert object with ID keys to array
          const postsArray = Object.values(data);
          setPosts(postsArray);
        } else {
          console.error("Unexpected data format:", typeof data, data);
          setPosts([]);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      }
    };
    void fetchPosts();
  }, []);

  const handleSort = (field: "id" | "title") => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const sortedPosts = [...posts].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (sortOrder === "asc") {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  return (
    <div>
      <h1>Posts</h1>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                backgroundColor: "#f2f2f2",
                cursor: "pointer",
              }}
              onClick={() => handleSort("id")}
            >
              ID {sortBy === "id" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                backgroundColor: "#f2f2f2",
                cursor: "pointer",
              }}
              onClick={() => handleSort("title")}
            >
              Title {sortBy === "title" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                backgroundColor: "#f2f2f2",
                cursor: "pointer",
              }}
            >
              Comments
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsSection;
