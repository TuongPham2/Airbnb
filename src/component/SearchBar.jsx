import React, { useState } from "react";
import { format } from "date-fns";
import vi from "date-fns/locale/vi";
import { FaSearch } from "react-icons/fa";
import LocationDropdown from "../component/LocationDropDown";
import Calendar from "../component/Calendar";
import GuestBox from "./GuestBox";

const SearchBar = ({
  locationInput,
  setLocationInput,
  activeField,
  setActiveField,
  selectionRange,
  setSelectionRange,
  guests,
  setGuests,
  showCalendar,
  setShowCalendar,
}) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
    if (
      ranges.selection.startDate &&
      ranges.selection.endDate &&
      ranges.selection.startDate.getTime() !==
        ranges.selection.endDate.getTime()
    ) {
      setShowCalendar(false);
      setActiveField(null);
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

  const handleSearch = () => {
    console.log("Searching for:", {
      location: locationInput,
      dates: selectionRange,
      guests,
    });
    setShowCalendar(false);
    setActiveField(null);
    setShowMobileSearch(false);
  };

  const handleFieldClick = (field) => {
    if (activeField === field) {
      setActiveField(null);
      if (field === "checkin" || field === "checkout") {
        setShowCalendar(false);
      }
    } else {
      setActiveField(field);
      setShowCalendar(field === "checkin" || field === "checkout");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 pb-6 relative">
      <div className="w-full max-w-4xl">
        <div className="hidden md:flex bg-white rounded-full border border-gray-200 shadow-lg overflow-visible relative">
          <div
            className={`absolute inset-y-0 bg-white border border-pink-700 rounded-full shadow-md transition-all duration-400 ease-in-out ${
              activeField === "location"
                ? "transform translate-x-0 w-1/4"
                : activeField === "checkin"
                ? "transform translate-x-full w-1/4"
                : activeField === "checkout"
                ? "transform translate-x-[200%] w-1/4"
                : activeField === "guests"
                ? "transform translate-x-[300%] w-1/4"
                : "opacity-0"
            }`}
          />
          <div
            className={`flex-1 z-10 relative rounded-full transition-colors duration-200 cursor-pointer ${
              activeField !== "location" ? "hover:bg-gray-200" : ""
            }`}
            onClick={() => handleFieldClick("location")}
          >
            <div className="flex flex-col px-4 py-3">
              <label className="text-sm font-semibold">Địa điểm</label>
              <input
                type="text"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                className="text-sm outline-none bg-transparent w-full"
                placeholder="Bạn muốn đi đâu?"
              />
            </div>
            {activeField === "location" && (
              <div className="absolute left-0 top-full z-50 mt-2 w-full">
                <LocationDropdown
                  value={locationInput}
                  onChange={(val) => {
                    setLocationInput(val);
                    setActiveField(null);
                  }}
                />
              </div>
            )}
          </div>
          <div
            className={`flex-1 z-10 rounded-full cursor-pointer ${
              activeField !== "checkin" ? "hover:bg-gray-200" : ""
            }`}
            onClick={() => handleFieldClick("checkin")}
          >
            <div className="flex flex-col px-4 py-3">
              <label className="text-sm font-semibold">Nhận phòng</label>
              <p className="text-sm">{formatDate(selectionRange.startDate)}</p>
            </div>
          </div>
          <div
            className={`flex-1 z-10 rounded-full cursor-pointer ${
              activeField !== "checkout" ? "hover:bg-gray-200" : ""
            }`}
            onClick={() => handleFieldClick("checkout")}
          >
            <div className="flex flex-col px-4 py-3">
              <label className="text-sm font-semibold">Trả phòng</label>
              <p className="text-sm">{formatDate(selectionRange.endDate)}</p>
            </div>
          </div>
          <div
            className={`flex-1 flex items-center z-10 relative rounded-full cursor-pointer ${
              activeField !== "guests" ? "hover:bg-gray-200" : ""
            }`}
          >
            <div
              className="flex flex-col px-4 py-3 w-full"
              onClick={() => handleFieldClick("guests")}
            >
              <label className="text-sm font-semibold">Khách</label>
              <input
                readOnly
                value={`${guests.adults + guests.children} khách${
                  guests.infants > 0 ? `, ${guests.infants} em bé` : ""
                }`}
                className="text-sm outline-none bg-transparent w-full cursor-pointer"
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-pink-600 text-white rounded-full p-2.5 m-2 hover:bg-pink-700 transition"
            >
              <FaSearch />
            </button>
            {activeField === "guests" && (
              <div className="absolute top-full right-0 z-50 mt-2 w-full">
                <GuestBox
                  guests={guests}
                  setGuests={setGuests}
                  onClose={() => setActiveField(null)}
                />
              </div>
            )}
          </div>

          {showCalendar &&
            (activeField === "checkin" || activeField === "checkout") && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 z-50 mt-2">
                <Calendar
                  selectionRange={selectionRange}
                  handleSelect={handleSelect}
                  resetDates={resetDates}
                />
              </div>
            )}
        </div>
        <div className="block md:hidden">
          {!showMobileSearch ? (
            <button
              onClick={() => setShowMobileSearch(true)}
              className="w-full flex items-center gap-2 px-4 py-3 bg-white rounded-full shadow-md border text-gray-600"
            >
              <FaSearch className="text-pink-600" /> Tìm kiếm
            </button>
          ) : (
            <div className="fixed inset-0 bg-white z-[9999] p-4 overflow-y-auto">
              <button
                onClick={() => setShowMobileSearch(false)}
                className="mb-4 text-gray-600 font-semibold"
              >
                ✕ Đóng
              </button>
              <div className="border rounded-lg p-3 mb-4">
                <label className="text-sm font-semibold">Địa điểm</label>
                <input
                  type="text"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  placeholder="Bạn muốn đi đâu?"
                  className="w-full outline-none bg-transparent text-sm mt-1"
                />
              </div>
              <div className="flex gap-2 mb-4">
                <div
                  className="flex-1 border rounded-lg p-3"
                  onClick={() => handleFieldClick("checkin")}
                >
                  <label className="text-sm font-semibold">Nhận phòng</label>
                  <p className="text-sm">
                    {formatDate(selectionRange.startDate)}
                  </p>
                </div>
                <div
                  className="flex-1 border rounded-lg p-3"
                  onClick={() => handleFieldClick("checkout")}
                >
                  <label className="text-sm font-semibold">Trả phòng</label>
                  <p className="text-sm">
                    {formatDate(selectionRange.endDate)}
                  </p>
                </div>
              </div>
              <div
                className="border rounded-lg p-3 mb-4"
                onClick={() => handleFieldClick("guests")}
              >
                <label className="text-sm font-semibold">Khách</label>
                <input
                  readOnly
                  value={`${guests.adults + guests.children} khách${
                    guests.infants > 0 ? `, ${guests.infants} em bé` : ""
                  }`}
                  className="w-full outline-none bg-transparent text-sm mt-1 cursor-pointer"
                />
              </div>
              {showCalendar &&
                (activeField === "checkin" || activeField === "checkout") && (
                  <div className="mb-4">
                    <Calendar
                      selectionRange={selectionRange}
                      handleSelect={handleSelect}
                      resetDates={resetDates}
                    />
                  </div>
                )}
              {activeField === "guests" && (
                <div className="mb-4">
                  <GuestDropdown
                    guests={guests}
                    setGuests={setGuests}
                    onClose={() => setActiveField(null)}
                  />
                </div>
              )}
              <button
                onClick={handleSearch}
                className="w-full bg-pink-600 text-white rounded-lg py-3 mt-2 font-semibold"
              >
                Tìm kiếm
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
