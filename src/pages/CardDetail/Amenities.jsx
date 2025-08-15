import React, { useState } from "react";
import Calendar from "../../component/Calendar";
import { FaCheckCircle } from "react-icons/fa"; // Icon cho tiện nghi

const Amenities = () => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };

  const resetDates = () => {
    setSelectionRange({
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    });
  };

  const amenitiesList = [
    "Khóa ở cửa phòng ngủ",
    "Thang máy",
    "Cho phép gửi hành lý",
    "Tủ lạnh",
    "Wifi",
    "Sân hoặc ban công",
    "Máy sấy tóc",
    "Chỗ ở có camera an ninh ngoài nhà",
  ];

  return (
    <div className="mt-10 border-b border-gray-300 pt-8">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-2xl font-bold mb-6">Nơi này có những gì cho bạn</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {amenitiesList.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-800 text-lg"
            >
              <FaCheckCircle className="text-green-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <button className="mt-4 px-4 py-2 border border-gray-400 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
          Hiển thị tất cả tiện nghi
        </button>
        <div className="h-px bg-gray-300 w-full my-8" />

        <div className="flex justify-center items-center py-6">
          <Calendar
            selectionRange={selectionRange}
            handleSelect={handleSelect}
            resetDates={resetDates}
          />
        </div>
      </div>
    </div>
  );
};

export default Amenities;
