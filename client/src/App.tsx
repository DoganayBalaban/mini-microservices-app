import React from "react";
import PostCreate from "./components/PostCreate";
import PostsSection from "./components/PostsSection";

const App = () => {
  return (
    <div className="container">
      <div>
        <h1>Create Post</h1>
        <PostCreate />
      </div>
      <div>
        <h1>All Post</h1>
        <div>
          <PostsSection />
        </div>
      </div>
    </div>
  );
};

export default App;
