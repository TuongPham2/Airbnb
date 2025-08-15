import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { format } from "date-fns";
import vi from "date-fns/locale/vi";
import HomeIcon from "../assets/icons/house.png";
import ServiceIcon from "../assets/icons/dinner.png";
import ExperienceIcon from "../assets/icons/balloon.png";
import LoginForm from "../Login/LoginForm";
import Calendar from "../component/Calendar";
import { FaSearch, FaBars, FaUser } from "react-icons/fa";
import GuestDropdown from "../component/GuestDropdown";
import LocationDropdown from "../component/LocationDropdown";
import Menu from "../pages/Menu";
import { useContext } from "react";

import { AuthContext } from "../Login/AuthContext";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const [activeField, setActiveField] = useState(null);
  const { currentUser, logout } = useContext(AuthContext);
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

  const [isScrolled, setIsScrolled] = useState(false);
  const [showFullSearch, setShowFullSearch] = useState(true);
  const handleExpandSearch = () => {
    setShowFullSearch(true);
    setIsScrolled(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const SCROLL_THRESHOLD = 200;

    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsScrolled(true);
        setShowFullSearch(false);
      } else {
        setIsScrolled(false);
        setShowFullSearch(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] flex flex-col bg-gray-100 transition-all duration-300">
      <div
        className={`px-6 py-6 flex items-center  transition-all duration-300 m-4 ${
          isScrolled ? "h-[60px] py-2" : "h-[80px] pt-4"
        }`}
      >
        <Link to="/accommodation" className="ml-6 flex-shrink-0">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo-2014.png"
            alt="logo"
            className="w-28 h-16 transition-all duration-300"
          />
        </Link>

        {!isScrolled ? (
          <div className="flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {[
              { path: "/accommodation", icon: HomeIcon, label: "Nơi ở" },
              {
                path: "/experience",
                icon: ExperienceIcon,
                label: "Trải nghiệm",
              },
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
        ) : (
          <div
            className="flex justify-center items-center bg-white shadow-md py-3 px-7 rounded-full border border-gray-200 absolute left-1/2 transform -translate-x-1/2
"
          >
            <div className="flex flex-row space-x-2">
              <img src={HomeIcon} alt="Nơi ở" className="h-8 w-8" />
              <button
                onClick={handleExpandSearch}
                className="text-md font-semibold"
              >
                Địa điểm bất kỳ
              </button>
            </div>
            <span className="mx-2 text-gray-500">|</span>
            <button
              onClick={handleExpandSearch}
              className="text-md font-semibold"
            >
              Thời gian bất kỳ
            </button>
            <span className="mx-2 text-gray-500">|</span>
            <div className="flex flex-row space-x-2">
              <button
                onClick={handleExpandSearch}
                className="text-md font-semibold"
              >
                Thêm khách
              </button>
              <button
                onClick={handleSearch}
                className="bg-pink-600 text-white rounded-full px-3 py-3 hover:bg-pink-700 transition-colors duration-200"
              >
                <FaSearch />
              </button>
            </div>
          </div>
        )}

        <div className="flex-shrink-0 ml-auto flex items-center space-x-4">
          {currentUser ? (
            <div className="flex gap-3 items-center">
              <span className="flex items-center gap-1">
                <FaUser />
                <span className="font-medium">
                  {currentUser.fullName || currentUser.name || "Người dùng"}
                </span>
              </span>

              <button
                onClick={logout}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Đăng xuất
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsLoginOpen(true)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold"
            >
              Đăng nhập
            </button>
          )}

          <LoginForm
            isOpen={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
          />

          {/* Menu */}
          <div className="relative">
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 border rounded-full px-3 py-2 hover:shadow-md transition cursor-pointer"
            >
              <FaBars />
            </div>

            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 z-50">
                <Menu />
              </div>
            )}
          </div>
        </div>
      </div>

      {showFullSearch && !isScrolled && (
        <div className="flex justify-center items-center bg-gray-100 pb-6 relative divide-x divide-black">
          <div className="w-full max-w-4xl bg-white rounded-full border border-gray-200 shadow-lg flex overflow-visible relative ">
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
              className={`flex-1 z-10 relative rounded-full transition-colors duration-200 cursor-pointer  ${
                activeField !== "location" ? "hover:bg-gray-200" : ""
              }`}
              onClick={() => handleFieldClick("location")}
            >
              <div className="flex flex-col px-4 py-3">
                <label className="text-sm text-black font-semibold">
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

            <div
              className={`flex-1 z-10 rounded-full transition-colors duration-200 cursor-pointer  ${
                activeField !== "checkin" ? "hover:bg-gray-200" : ""
              }`}
              onClick={() => handleFieldClick("checkin")}
            >
              <div className="flex flex-col px-4 py-3">
                <label className="text-sm text-black font-semibold">
                  Nhận phòng
                </label>
                <p className="text-sm text-gray-800">
                  {formatDate(selectionRange.startDate)}
                </p>
              </div>
            </div>
            <div
              className={`flex-1 z-10 rounded-full transition-colors duration-200 cursor-pointer ${
                activeField !== "checkout" ? "hover:bg-gray-200" : ""
              }`}
              onClick={() => handleFieldClick("checkout")}
            >
              <div className="flex flex-col px-4 py-3">
                <label className="text-sm text-black font-semibold">
                  Trả phòng
                </label>
                <p className="text-sm text-gray-800">
                  {formatDate(selectionRange.endDate)}
                </p>
              </div>
            </div>

            <div
              className={`flex-1 flex items-center z-10 relative rounded-full transition-colors duration-200 cursor-pointer ${
                activeField !== "guests" ? "hover:bg-gray-200" : ""
              }`}
            >
              <div
                className="flex flex-col px-4 py-3 w-full"
                onClick={() => handleFieldClick("guests")}
              >
                <label className="text-sm text-black font-semibold">
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
                className="bg-pink-600 text-white rounded-full p-2.5 m-2 hover:bg-pink-700 transition-colors duration-200  "
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
      )}
    </div>
  );
};

export default Header;
