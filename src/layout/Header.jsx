import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../assets/icons/house.png";
import ServiceIcon from "../assets/icons/dinner.png";
import ExperienceIcon from "../assets/icons/balloon.png";
import LoginForm from "../Login/LoginForm";
import { FaBars } from "react-icons/fa";
import Menu from "../pages/Menu";
import CompactSearch from "../component/CompactSearch";
import SearchBar from "../component/SearchBar";
import HostModal from "../pages/HostModal";

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
        className={`flex items-center transition-all duration-300 m-2 sm:m-4 px-3 py-4 sm:px-6 sm:py-6
          ${isScrolled ? "h-[60px] py-2" : "h-[70px] sm:h-[80px]"}
        `}
      >
        <Link to="/accommodation" className="ml-2 sm:ml-6 flex-shrink-0">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo-2014.png"
            alt="logo"
            className="hidden md:block w-28 h-16 transition-all duration-300"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo-2014.png"
            alt="logo"
            className="block md:hidden w-20 h-10 transition-all duration-300"
          />
        </Link>

        {!isScrolled ? (
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
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
                    ? "border-b-2 md:border-b-4 border-black text-black pb-1 md:pb-2"
                    : ""
                }`}
              >
                <img src={icon} alt={label} className="h-8 w-8" />
                <span className="ml-2 font-medium">{label}</span>
              </Link>
            ))}
          </div>
        ) : (
          <CompactSearch
            handleExpandSearch={handleExpandSearch}
            locationInput={locationInput}
            selectionRange={selectionRange}
            guests={guests}
          />
        )}
        <div className="flex-shrink-0 ml-auto flex items-center space-x-4">
          <div className="relative">
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 border rounded-full px-3 py-2 hover:shadow-md transition cursor-pointer"
            >
              <FaBars />
            </div>
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 z-50">
                <Menu
                  onClose={() => setIsMenuOpen(false)}
                  setIsLoginOpen={setIsLoginOpen}
                  setIsHostOpen={setIsHostOpen}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {showFullSearch && !isScrolled && (
        <div>
          <div className="hidden md:block">
            <SearchBar
              locationInput={locationInput}
              setLocationInput={setLocationInput}
              activeField={activeField}
              setActiveField={setActiveField}
              selectionRange={selectionRange}
              setSelectionRange={setSelectionRange}
              guests={guests}
              setGuests={setGuests}
              showCalendar={showCalendar}
              setShowCalendar={setShowCalendar}
            />
          </div>
          <div className="block md:hidden">
            <SearchBar
              locationInput={locationInput}
              setLocationInput={setLocationInput}
              activeField={activeField}
              setActiveField={setActiveField}
              selectionRange={selectionRange}
              setSelectionRange={setSelectionRange}
              guests={guests}
              setGuests={setGuests}
              showCalendar={showCalendar}
              setShowCalendar={setShowCalendar}
            />
          </div>
        </div>
      )}

      <div className="md:hidden fixed bottom-0 left-0 right-0 w-full bg-white border-t flex justify-around py-2 z-50">
        {[
          { path: "/accommodation", icon: HomeIcon, label: "Nơi ở" },
          { path: "/experience", icon: ExperienceIcon, label: "Trải nghiệm" },
          { path: "/service", icon: ServiceIcon, label: "Dịch vụ" },
        ].map(({ path, icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center text-xs ${
              currentPath === path ? "text-black" : "text-gray-500"
            }`}
          >
            <img src={icon} alt={label} className="h-6 w-6" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
      <HostModal isOpen={isHostOpen} onClose={() => setIsHostOpen(false)} />

      <LoginForm isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Header;
