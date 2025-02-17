import React from "react";
import LikeButton from "./LikeButton";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 m-4 max-w-md w-full">
      <div className="flex items-center gap-3">
        <img
          src={post.profileImage}
          alt={post.username}
          className="w-10 h-10 rounded-full object-cover"
        />
        <h3 className="text-lg font-semibold">{post.username}</h3>
      </div>
      <p className="text-gray-700 mt-2">{post.content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;
