import React from "react";
import Card from "../component/ListingCard";
import CardData from "../data/CardData.json";

const Accommodation = () => {
  const filtered = CardData.filter((item) => item.type === "accommodation");

  const sections = [
    "Nơi lưu trú được ưa chuộng tại Hà Nội",
    "Khám phá căn hộ hiện đại",
    "Căn hộ giá tốt hôm nay",
    "Trải nghiệm nghỉ dưỡng yên tĩnh",
    "Top lựa chọn trong tuần",
    "Gợi ý dành riêng cho bạn",
  ];

  return (
    <div className="bg-gray-50 min-h-screen space-y-6 max-w-[1280px] mx-auto px-6">
      {sections.map((title, index) => (
        <div key={index} className="">
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

export default Accommodation;
