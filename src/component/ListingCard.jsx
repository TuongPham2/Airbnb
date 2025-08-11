import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const ListingCard = ({
  id,
  image,
  title,
  price,
  rating,
  type,
  liked: initialLiked,
  size = "small", // small | large
}) => {
  const [liked, setLiked] = useState(initialLiked || false);

  const toggleLike = (e) => {
    e.preventDefault();
    setLiked(!liked);
  };

  const cardWidth = size === "large" ? "w-[260px]" : "w-[180px]";
  const imageHeight = size === "large" ? "h-[220px]" : "h-[160px]";
  const titleText = size === "large" ? "text-base" : "text-sm";

  return (
    <Link
      to={`/${type}/${id}`}
      className="flex flex-col no-underline text-inherit"
    >
      <div className={`flex flex-col ${cardWidth}`}>
        <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg relative">
          <img
            src={image}
            alt={title}
            className={`w-full ${imageHeight} object-cover`}
          />
          {type === "accommodation" && (
            <button
              onClick={toggleLike}
              className="absolute top-2 right-2"
              aria-label="Like"
            >
              <FaHeart
                className={`w-6 h-6 transition-colors duration-200 ${
                  liked
                    ? "fill-red-500 text-red-500"
                    : "fill-white text-white drop-shadow-md"
                }`}
              />
            </button>
          )}
        </div>
        <div className="space-y-1">
          <h3 className={`${titleText} font-medium break-words line-clamp-2`}>
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

export default ListingCard;
