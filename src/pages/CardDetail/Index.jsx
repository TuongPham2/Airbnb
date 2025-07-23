import React from "react";
import { useParams } from "react-router-dom";
import CardData from "../../data/CardData.json";
import Amenities from "./Amenities";
import Review from "./Reviews";
import Location from "./Location";
import RoomInfo from "./RoomInfo";

const Index = () => {
  const { id } = useParams();
  const item = CardData.find((room) => room.id === parseInt(id));

  if (!item) {
    return (
      <p className="text-center mt-10">Không tìm thấy nội dung phù hợp.</p>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen mx-auto max-w-7xl p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Nội dung chính */}
        <div className="flex-1 space-y-6">
          <div>
            <RoomInfo item={item} />
          </div>
          <Amenities />
          <Review />
          <Location />
        </div>
      </div>
    </div>
  );
};

export default Index;
