import React from "react";
import Card from "../component/ListingCard";
import CardData from "../data/CardData.json";

const Experience = () => {
  const filtered = CardData.filter((item) => item.type === "experience");

  const sections = [
    "Trải nghiệm nổi bật",
    "Trải nghiệm gần bạn",
    "Trải nghiệm trực tuyến",
    "Dành cho gia đình",
    "Dành cho cặp đôi",
    "Hoạt động ngoài trời",
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

export default Experience;
