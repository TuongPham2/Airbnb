import React from "react";
import HomeIcon from "../assets/icons/house.png";
import ExperienceIcon from "../assets/icons/balloon.png";
import ServiceIcon from "../assets/icons/dinner.png";

const HostModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="w-[90%] max-w-md md:max-w-4xl bg-white rounded-lg relative shadow-lg">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="p-6">
          <p className="font-bold text-lg md:text-xl mb-4 text-black text-center">
            Bạn muốn cung cấp gì?
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0 mt-4">
            {[HomeIcon, ExperienceIcon, ServiceIcon].map((icon, idx) => (
              <button
                key={idx}
                className="flex-1 h-[120px] md:h-[200px] border-2 border-gray-200 rounded-lg flex flex-col items-center justify-center hover:bg-gray-50 transition-colors duration-200 p-2"
              >
                <img src={icon} alt="" className="h-12 w-12 md:h-20 md:w-20" />
                <p className="mt-2 font-medium text-sm md:text-base">
                  {idx === 0 ? "Nơi ở" : idx === 1 ? "Trải nghiệm" : "Dịch vụ"}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="h-px bg-gray-200" />
        <div className="flex items-center justify-end">
          <button className="px-3 py-1.5 md:px-4 md:py-2 border border-black rounded-lg m-3 hover:bg-gray-100 text-sm md:text-base">
            Tiếp theo
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostModal;
