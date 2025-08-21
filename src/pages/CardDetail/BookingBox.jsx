import React, { useState } from "react";
import Calendar from "../../component/Calendar"; // Đường dẫn tùy dự án
import { format } from "date-fns";
import vi from "date-fns/locale/vi";
import GuestDropDown from "../../component/GuestDropDown";

const BookingBox = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);

    if (
      ranges.selection.startDate &&
      ranges.selection.endDate &&
      ranges.selection.startDate.getTime() !==
        ranges.selection.endDate.getTime()
    ) {
      setShowCalendar(false);
    }
  };
  const resetDates = () => {
    setSelectionRange({
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    });
  };

  const formatDate = (date) => format(date, "dd MMM yyyy", { locale: vi });
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const [activeField, setActiveField] = useState(null);

  const handleFieldClick = (field) => {
    setActiveField(field === activeField ? null : field);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 border relative">
      <h2 className="text-lg font-semibold mb-4">Thêm ngày để xem giá</h2>

      <div className="grid grid-cols-2 border rounded-lg overflow-visible relative">
        <div
          className="border-r p-2 cursor-pointer"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
            Nhận phòng
          </label>
          <p className="text-sm text-gray-800">
            {formatDate(selectionRange.startDate)}
          </p>
        </div>
        <div
          className="p-2 cursor-pointer"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
            Trả phòng
          </label>
          <p className="text-sm text-gray-800">
            {formatDate(selectionRange.endDate)}
          </p>
        </div>

        {showCalendar && (
          <div className="absolute top-full left-0 mt-2 z-50 w-full">
            <Calendar
              selectionRange={selectionRange}
              handleSelect={handleSelect}
              resetDates={resetDates}
            />
          </div>
        )}
      </div>

      <div className="flex-1 flex items-center z-10 relative cursor-pointer hover:bg-gray-200 rounded-full transition-colors duration-200 mt-4">
        <div
          className="flex flex-col px-4 py-3 w-full"
          onClick={() => handleFieldClick("guests")}
        >
          <label className="text-xs text-gray-500 font-semibold">Khách</label>
          <input
            readOnly
            value={`${guests.adults + guests.children} khách${
              guests.infants > 0 ? `, ${guests.infants} em bé` : ""
            }`}
            className="text-sm outline-none bg-transparent w-full cursor-pointer"
          />
        </div>

        {activeField === "guests" && (
          <div className="absolute top-full right-0 z-50 mt-2 w-full">
            <GuestDropDown
              guests={guests}
              setGuests={setGuests}
              onClose={() => setActiveField(null)}
            />
          </div>
        )}
      </div>

      <button className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold hover:opacity-90">
        Kiểm tra tình trạng còn phòng
      </button>
    </div>
  );
};

export default BookingBox;
