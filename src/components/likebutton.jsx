import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`mt-3 px-4 py-1 text-sm font-semibold rounded-lg transition-all duration-300 ${
        liked ? "bg-red-500 text-white" : "bg-gray-300 text-gray-700"
      }`}
    >
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton;
