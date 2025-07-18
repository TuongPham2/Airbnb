import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({
  id,
  image,
  title,
  price,
  rating,
  type,
  liked: initialLiked,
}) => {
  const [liked, setLiked] = useState(initialLiked || false);

  const toggleLike = (e) => {
    e.preventDefault(); // Ngăn chặn Link khi bấm vào icon tim
    setLiked(!liked);
  };

  return (
    <Link
      to={`/${type}/${id}`}
      className="flex flex-col no-underline text-inherit"
    >
      <div className="flex flex-col w-[160px] ">
        {/* Hình ảnh */}
        <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg border border-gray-200 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-[150px] object-cover"
          />

          {/* Tim chỉ hiển thị nếu là accommodation */}
          {type === "accommodation" && (
            <button
              onClick={toggleLike}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
              aria-label="Like"
            >
              <Heart
                className={`w-5 h-5 transition-colors duration-200 ${
                  liked ? "fill-red-500 text-red-500" : "text-gray-400"
                }`}
              />
            </button>
          )}
        </div>

        {/* Thông tin */}
        <div className=" space-y-1">
          <h3 className="text-sm font-medium break-words line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-xs text-gray-600">{price}</p>
            <p className="text-xs text-gray-600">★ {rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
