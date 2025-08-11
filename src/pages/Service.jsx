import React from "react";
import Card from "../component/ListingCard";
import CardData from "../data/CardData.json";

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
    <div className="bg-gray-50 min-h-screen space-y-6 max-w-[1280px] mx-auto">
      <div className="flex flex-col items-center justify-center">
        {sections.map((section, index) => (
          <div key={index}>
            <div className="text-xl font-semibold my-4 hover:underline cursor-pointer">
              {section.title}
            </div>

            <div className="flex gap-4 pb-4">
              {filtered.slice(0, 7).map((item, idx) => (
                <Card key={idx} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
