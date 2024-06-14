import React from "react";

export default function CategoryCard({ posts, loading }) {
  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-14 mt-20">
      {posts.map((post) => (
        <div className="px-2 py-4 flex flex-col bg-white rounded-lg border">
          <img src={post.imgUrl} alt="" />
          <div className="gap-2 px-2 w-[220px] text-start mt-2">
            <h2 className="font-bold">
              {post.title}: <span className="font-light">{post.description}</span>{" "}
            </h2>
            <li className="font-light text-sm">{post.category}</li>
          </div>
        </div>
      ))}
    </div>
  );
}
