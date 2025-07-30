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
  ];

  return (
    <div className="bg-gray-50 min-h-screen space-y-6 max-w-[1280px] mx-auto px-6">
      {sections.map((title, index) => (
        <div key={index}>
          <h2 className="text-xl font-semibold mx-4 my-4">{title}</h2>
          <div className="flex gap-4 justify-center pb-4 ">
            {filtered.slice(0, 7).map((item, idx) => (
              <Card key={idx} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
