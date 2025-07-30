import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { format } from "date-fns";
import vi from "date-fns/locale/vi";
import HomeIcon from "../assets/icons/house.png";
import ServiceIcon from "../assets/icons/dinner.png";
import ExperienceIcon from "../assets/icons/balloon.png";
import LoginForm from "./LoginForm";
import Calendar from "./Calendar";
import { FaSearch } from "react-icons/fa";
import GuestDropdown from "./GuestDropdown";
import LocationDropdown from "./LocationDropDown";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isHostOpen, setIsHostOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const [activeField, setActiveField] = useState(null);

  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const location = useLocation();
  const currentPath = location.pathname;

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
    <div className=" flex flex-col top-0 left-0 right-0 z-50">
      {/* Header trên */}
      <div className="bg-gray-100 px-6 pt-4 flex justify-between items-center h-[80px]">
        <Link to="/accommodation" className="ml-6">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo-2014.png"
            alt="logo"
            className="w-24 h-12"
          />
        </Link>

        {/* Menu điều hướng */}
        <div className="flex items-center space-x-8">
          {[
            { path: "/accommodation", icon: HomeIcon, label: "Nơi ở" },
            { path: "/experience", icon: ExperienceIcon, label: "Trải nghiệm" },
            { path: "/service", icon: ServiceIcon, label: "Dịch vụ" },
          ].map(({ path, icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors duration-200 ${
                currentPath === path
                  ? "border-b-4 border-black text-black pb-2"
                  : ""
              }`}
            >
              <img src={icon} alt={label} className="h-8 w-8" />
              <span className="ml-2 font-medium">{label}</span>
            </Link>
          ))}
        </div>

        {/* Host + menu */}
        <div className="flex items-center space-x-4">
          <div>
            <button
              onClick={() => setIsLoginOpen(true)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left font-semibold"
            >
              Đăng nhập
            </button>
            <LoginForm
              isOpen={isLoginOpen}
              onClose={() => setIsLoginOpen(false)}
            />
          </div>
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center"
            >
              <img
                src="https://toppng.com/public/uploads/preview/menu-icon-png-3-lines-11552739310fjzs2n2wxt.png"
                alt="Menu"
                className="h-8 w-8"
              />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white border rounded-lg shadow-lg z-10">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Trung tâm trợ giúp
                </Link>
                <div className="bg-gray-200 h-[1px] mx-4" />
                <button
                  onClick={() => {
                    setIsHostOpen(!isHostOpen);
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-3 hover:bg-gray-100 block w-full text-left"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-sm">
                        Trở thành host
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Kiếm thêm thu nhập từ việc đón tiếp khách
                      </div>
                    </div>
                    <img
                      src={HomeIcon}
                      alt="Nơi ở"
                      className="h-8 w-8 object-cover rounded-md ml-3"
                    />
                  </div>
                </button>
                <div className="bg-gray-200 h-[1px] mx-4" />
                <Link
                  to=""
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Giới thiệu chủ nhà
                </Link>
                <Link
                  to=""
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Tìm host hỗ trợ
                </Link>
                <div className="bg-gray-200 h-[1px] mx-4" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Thanh tìm kiếm chính */}
      <div className="flex justify-center items-center bg-gray-100 py-6 relative">
        <div className="w-full max-w-4xl bg-white rounded-full border border-gray-200 shadow-lg flex overflow-visible relative">
          <div
            className={`absolute inset-y-0 bg-white border border-gray-400 rounded-full shadow-md transition-all duration-400 ease-in-out ${
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
          {/* Ô Địa điểm */}
          <div
            className="flex-1 z-10 relative hover:bg-gray-200 rounded-full transition-colors duration-200"
            onClick={() => handleFieldClick("location")}
          >
            <div className="flex flex-col px-4 py-3">
              <label className="text-xs text-gray-500 font-semibold">
                Địa điểm
              </label>
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

          {/* Nhận phòng */}
          <div
            className="flex-1 z-10 hover:bg-gray-200 rounded-full cursor-pointer transition-colors duration-200"
            onClick={() => handleFieldClick("checkin")}
          >
            <div className="flex flex-col px-4 py-3">
              <label className="text-xs text-gray-500 font-semibold">
                Nhận phòng
              </label>
              <p className="text-sm text-gray-800">
                {formatDate(selectionRange.startDate)}
              </p>
            </div>
          </div>

          {/* Trả phòng */}
          <div
            className="flex-1 z-10 hover:bg-gray-200 rounded-full cursor-pointer transition-colors duration-200"
            onClick={() => handleFieldClick("checkout")}
          >
            <div className="flex flex-col px-4 py-3">
              <label className="text-xs text-gray-500 font-semibold">
                Trả phòng
              </label>
              <p className="text-sm text-gray-800">
                {formatDate(selectionRange.endDate)}
              </p>
            </div>
          </div>

          {/* Số khách + nút tìm kiếm */}
          <div className="flex-1 flex items-center z-10 relative cursor-pointer hover:bg-gray-200 rounded-full transition-colors duration-200">
            <div
              className="flex flex-col px-4 py-3 w-full  "
              onClick={() => handleFieldClick("guests")}
            >
              <label className="text-xs text-gray-500 font-semibold">
                Khách
              </label>
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
              className="bg-pink-600 text-white rounded-full p-3 m-2 hover:bg-pink-700 transition-colors duration-200"
            >
              <FaSearch />
            </button>
            {activeField === "guests" && (
              <div className="absolute top-full right-0 z-50 mt-2 w-full">
                <GuestDropdown
                  guests={guests}
                  setGuests={setGuests}
                  onClose={() => setActiveField(null)}
                />
              </div>
            )}
          </div>

          {/* Lịch hiển thị ở giữa, cùng hàng với dropdown */}
          {showCalendar &&
            (activeField === "checkin" || activeField === "checkout") && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-50 mt-2">
                <Calendar
                  selectionRange={selectionRange}
                  handleSelect={handleSelect}
                  resetDates={resetDates}
                />
              </div>
            )}
        </div>
      </div>
      {/* Modal Trở thành Host */}
      {isHostOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="max-w-screen-lg bg-white rounded-lg relative shadow-lg">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsHostOpen(false)}
            >
              ✕
            </button>
            <div className="p-6">
              <p className="font-bold text-xl mb-4 text-black text-center">
                Bạn muốn cung cấp gì?
              </p>
              <div className="flex flex-row space-x-4 mt-10">
                {[HomeIcon, ExperienceIcon, ServiceIcon].map((icon, idx) => (
                  <button
                    key={idx}
                    className="w-[250px] h-[280px] border-2 border-gray-200 rounded-lg flex flex-col items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <img src={icon} alt="" className="h-[100px] w-[100px]" />
                    <p className="mt-3 font-medium">
                      {idx === 0
                        ? "Nơi ở"
                        : idx === 1
                        ? "Trải nghiệm"
                        : "Dịch vụ"}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            <div className="h-px bg-gray-200" />
            <div className="flex items-center justify-end">
              <button className="px-4 py-2 border border-black rounded-lg m-4 hover:bg-gray-100">
                Tiếp theo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
