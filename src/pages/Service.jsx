import React from "react";
import Card from "../component/ListingCard";
import CardData from "../data/CardData.json";

const Service = () => {
  const filtered = CardData.filter((item) => item.type === "service");

  const sections = [
    "Nơi lưu trú được ưa chuộng tại Hà Nội",
    "Khám phá căn hộ hiện đại",
    "Căn hộ giá tốt hôm nay",
    "Trải nghiệm nghỉ dưỡng yên tĩnh",
    "Top lựa chọn trong tuần",
    "Gợi ý dành riêng cho bạn",
  ];

  return (
    <div className="bg-gray-50 min-h-screen  space-y-6 mx-10">
      {sections.map((title, index) => (
        <div className="px-6" key={index}>
          <h2 className="text-xl font-semibold mx-4 my-4">{title}</h2>
          <div className="flex gap-4 pb-4 mx-4 ">
            {filtered.map((item, idx) => (
              <Card key={idx} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
