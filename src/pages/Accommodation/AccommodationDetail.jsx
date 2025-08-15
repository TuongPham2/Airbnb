import React from "react";
import { useParams } from "react-router-dom";
import CardData from "../../data/CardData.json";
import Amenities from "../CardDetail/Amenities";
import Review from "../CardDetail/Reviews";
import Location from "../CardDetail/Location";
import Gallery from "../CardDetail/Gallery";
import { useState, useEffect } from "react";

const AccommodationDetail = () => {
  const { id } = useParams();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const item = CardData.find((room) => room.id === parseInt(id));
  if (!item) {
    return (
      <p className="text-center mt-10">Không tìm thấy nội dung phù hợp.</p>
    );
  }
  return (
    <div className="bg-gray-50 min-h-screen mx-auto max-w-screen-xl">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-6">
          <div className="flex-1 space-y-6">
            <Gallery item={item} />
            <Amenities />
            <Review />
            <Location />
          </div>
        </div>
      </div>
      <>
        {!isScrolled && <header className="big-header"></header>}

        {isScrolled && (
          <nav className="compact-nav fixed top-0 left-0 w-full shadow bg-white z-50"></nav>
        )}
      </>
    </div>
  );
};

export default AccommodationDetail;
