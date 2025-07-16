// components/Card.jsx
import React from "react";
import { Heart } from "lucide-react";

const Card = ({ image, title, price, rating, liked }) => {
  return (
    <div className="flex flex-col">
      <div className="min-w-[175px] rounded-2xl overflow-hidden shadow hover:shadow-lg border border-gray-200 relative">
        <img src={image} alt={title} className="w-[175px] h-40 object-cover" />
        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
          <Heart
            className={`w-5 h-5 ${
              liked ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </div>
      </div>
      <div className="p-3 space-y-1">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-600 ">{price}</p>
          <p className="text-xs text-gray-600">★ {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
