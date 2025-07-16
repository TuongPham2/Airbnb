import React from "react";
import Card from "../component/ListingCard";
import CardData from "../data/CardData.json";
const Accommodation = () => {
  return (
    <div className="bg-gray-50 min-h-screen space-y-4">
      <div className="px-6">
        <h2 className="text-xl font-semibold mx-4 my-4">
          Nơi lưu trú được ưa chuộng tại Hà Nội
        </h2>
        <div className="flex gap-4  pb-4 mx-4">
          {CardData.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>
      <div className="px-6">
        <h2 className="text-xl font-semibold mx-4 my-4">
          Nơi lưu trú được ưa chuộng tại Hà Nội
        </h2>
        <div className="flex gap-4  pb-4 mx-4">
          {CardData.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>
      <div className="px-6">
        <h2 className="text-xl font-semibold mx-4 my-4 ">
          Nơi lưu trú được ưa chuộng tại Hà Nội
        </h2>
        <div className="flex gap-4  pb-4 mx-4 ">
          {CardData.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>
      <div className="px-6">
        <h2 className="text-xl font-semibold mx-4 my-4">
          Nơi lưu trú được ưa chuộng tại Hà Nội
        </h2>
        <div className="flex gap-4  pb-4 mx-4 ">
          {CardData.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>
      <div className="px-6">
        <h2 className="text-xl font-semibold mx-4 my-4">
          Nơi lưu trú được ưa chuộng tại Hà Nội
        </h2>
        <div className="flex gap-4  pb-4 mx-4 ">
          {CardData.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>
      <div className="px-6">
        <h2 className="text-xl font-semibold mx-4 my-4">
          Nơi lưu trú được ưa chuộng tại Hà Nội
        </h2>
        <div className="flex gap-4  pb-4 mx-4 ">
          {CardData.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
