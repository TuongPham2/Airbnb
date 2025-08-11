import React from "react";
import { useParams } from "react-router-dom";
import CardData from "../../data/CardData.json";
import Amenities from "./Amenities";
import Review from "./Reviews";
import Location from "./Location";
import RoomInfo from "./Gallery";
import { useState, useEffect } from "react";

const CardDetailPage = () => {
  const { id } = useParams();
  const item = CardData.find((room) => room.id === parseInt(id));
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!item) {
    return (
      <p className="text-center mt-10">Không tìm thấy nội dung phù hợp.</p>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen mx-auto max-w-screen-2xl px-8 lg:px-16">
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
      <>
        {!isScrolled && (
          <header className="big-header">{/* Nội dung header lớn */}</header>
        )}

        {isScrolled && (
          <nav className="compact-nav fixed top-0 left-0 w-full shadow bg-white z-50">
            {/* Tabs thu gọn: Ảnh, Tiện nghi, Đánh giá, Vị trí */}
          </nav>
        )}
      </>
    </div>
  );
};

export default CardDetailPage;
