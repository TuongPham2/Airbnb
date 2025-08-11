// component/HostModal.jsx
import React from "react";
import HomeIcon from "../assets/icons/house.png";
import ExperienceIcon from "../assets/icons/balloon.png";
import ServiceIcon from "../assets/icons/dinner.png";

const HostModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="max-w-screen-lg bg-white rounded-lg relative shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
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
                  {idx === 0 ? "Nơi ở" : idx === 1 ? "Trải nghiệm" : "Dịch vụ"}
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
  );
};

export default HostModal;
