import React from "react";
import { Link } from "react-router-dom";
import ListingCard from "./../../component/ListingCard";
import CardData from "../../data/CardData.json";

const Accommodation = () => {
  const filtered = CardData.filter((item) => item.type === "accommodation");

  const sections = [
    "Nơi lưu trú được ưa chuộng tại Hà Nội",
    "Khám phá căn hộ hiện đại",
    "Căn hộ giá tốt hôm nay",
    "Trải nghiệm nghỉ dưỡng yên tĩnh",
    "Top lựa chọn trong tuần",
    "Gợi ý dành riêng cho bạn",
  ].map((title) => ({
    title,
  }));

  return (
    <div className="bg-gray-50 min-h-screen space-y-6 max-w-[1280px] mx-auto">
      <div className="flex flex-col items-center justify-center">
        {sections.map((section, index) => (
          <div key={index}>
            <Link to={`/${section.slug}`}>
              <div className="text-xl font-semibold my-4 hover:underline cursor-pointer">
                {section.title}
              </div>
            </Link>

            <div className="flex gap-4 pb-4">
              {filtered.slice(0, 7).map((item, idx) => (
                <ListingCard key={idx} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accommodation;
