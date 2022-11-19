import React from "react";
import PostData from "./post.json";

const OneBlog = () => {
  return (
    <div>
      {PostData.map((post) => (
        <div key={post.id} className="bg-gray-800 text-white min-h-60">
          <div className="max-w-5xl bg-gray-900 w-full mx-auto">
            <h1>hi</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OneBlog;
