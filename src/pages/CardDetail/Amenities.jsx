import React from "react";
import Calendar from "../../component/Calendar";
import { useState } from "react";
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

  return (
    <div className="mx-[100px] mt-5 min-h-screen">
      <div className="max-w-screen-md space-y-4">
        <p className="text-xl font-bold">Nơi này có những gì cho bạn</p>
        <div className="grid grid-cols-2  grid-rows-4 gap-4">
          <div>Khóa ở cửa phòng ngủ</div>
          <div>Thang máy</div>
          <div>Cho phép gửi hành lý</div>
          <div>Tủ lạnh</div>
          <div>Wifi</div>
          <div>Sân hoặc ban công</div>
          <div>Máy sấy tóc</div>
          <div>Chỗ ở có camera an ninh ngoài nhà</div>
        </div>
        <button>Hiển thị tất cả tiện nghi</button>
        <div className="h-px bg-gray-300 w-full" />
        <div className="flex justify-center items-center py-6">
          <Calendar
            selectionRange={selectionRange}
            handleSelect={handleSelect}
            resetDates={resetDates}
          />
        </div>
      </div>
      <div className="h-px bg-gray-300 w-full" />
    </div>
  );
};

export default Amenities;
