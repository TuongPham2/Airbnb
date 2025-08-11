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

export default Experience;
