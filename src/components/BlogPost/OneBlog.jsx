import React from "react";
import PostData from "./post.json";

const OneBlog = () => {
  return (
    <div>
      {PostData.map((post) => (
        <div>
          <h1>{post.authorName}</h1>
        </div>
      ))}
    </div>
  );
};

export default OneBlog;
