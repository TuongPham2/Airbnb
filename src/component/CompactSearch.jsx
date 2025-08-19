import React from "react";
import { FaSearch } from "react-icons/fa";
import HomeIcon from "../assets/icons/house.png";

const CompactSearch = ({ handleExpandSearch, handleSearch }) => {
  return (
    <div className="hidden md:flex justify-center items-center bg-white shadow-md py-1 sm:py-2 px-4 sm:px-6 rounded-full border border-gray-200 absolute left-1/2 transform -translate-x-1/2">
      <div className="flex flex-row space-x-1 sm:space-x-2">
        <img src={HomeIcon} alt="Nơi ở" className="h-6 w-6 sm:h-7 sm:w-7" />
        <button
          onClick={handleExpandSearch}
          className="text-sm sm:text-base font-medium"
        >
          Địa điểm bất kỳ
        </button>
      </div>
      <span className="mx-1 sm:mx-2 text-gray-400">|</span>
      <button
        onClick={handleExpandSearch}
        className="text-sm sm:text-base font-medium"
      >
        Thời gian bất kỳ
      </button>
      <span className="mx-1 sm:mx-2 text-gray-400">|</span>
      <div className="flex flex-row space-x-1 sm:space-x-2">
        <button
          onClick={handleExpandSearch}
          className="text-sm sm:text-base font-medium"
        >
          Thêm khách
        </button>
        <button
          onClick={handleSearch}
          className="bg-pink-600 text-white rounded-full px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-pink-700 transition-colors duration-200"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default CompactSearch;
