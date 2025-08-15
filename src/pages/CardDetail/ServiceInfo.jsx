import React from "react";

const ServiceInfo = ({ img, title, price, description }) => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="flex flex-row space-x-4">
        <img
          src={img}
          alt={title}
          className="w-36 h-36 rounded-2xl object-cover flex-shrink-0"
        />
        <div className="flex-1 ">
          <p className="font-semibold text-base text-gray-900 leading-tight mb-1">
            {title}
          </p>
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">{price}</span> /khách
          </p>
          <p className="text-sm text-gray-600 leading-snug line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
