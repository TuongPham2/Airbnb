import React from "react";
import { Link } from "react-router-dom";
import ListingCard from "./../../component/ListingCard";
import CardData from "../../data/CardData.json";

const Service = () => {
  const filtered = CardData.filter((item) => item.type === "service");

  const sections = [
    "Dịch vụ phổ biến",
    "Dọn dẹp nhà cửa",
    "Giặt ủi và chăm sóc đồ dùng",
    "Sửa chữa và bảo trì",
    "Nấu ăn tại nhà",
    "Gợi ý từ chúng tôi",
  ].map((title) => ({
    title,
  }));

  return (
    <div className="bg-gray-50 min-h-screen space-y-10 max-w-[1280px] mx-auto px-4 mt-20 md:mt-0">
      {sections.map((section, index) => (
        <div key={index} className="w-full">
          <Link to={`/${section.slug}`}>
            <div className="text-xl font-semibold mb-4 hover:underline cursor-pointer">
              {section.title}
            </div>
          </Link>
          <div className="flex gap-4 pb-4 overflow-x-auto scrollbar-hide md:grid md:grid-cols-7 md:gap-12 md:overflow-x-visible ">
            {filtered.slice(0, 7).map((item, idx) => (
              <div
                key={idx}
                className="
                  flex-shrink-0 w-[75%] 
                  md:w-auto md:flex-shrink-0
                "
              >
                <ListingCard {...item} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
