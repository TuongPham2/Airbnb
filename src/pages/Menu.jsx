import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/icons/house.png";
import HostModal from "./HostModal";

const Menu = ({ onClose }) => {
  const [isHostOpen, setIsHostOpen] = useState(false);

  return (
    <div className=" right-0 mt-2 w-60 bg-white border rounded-lg shadow-lg">
      <Link to="" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
        Trung tâm trợ giúp
      </Link>
      <div className="h-px bg-gray-200 mx-4" />

      <button
        onClick={() => {
          setIsHostOpen(true);
          onClose();
        }}
        className="px-4 py-3 hover:bg-gray-100 w-full text-left"
      >
        <div className="flex justify-between items-center">
          <div>
            <div className="font-semibold text-sm">Trở thành host</div>
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

      {isHostOpen && (
        <HostModal isOpen={isHostOpen} onClose={() => setIsHostOpen(false)} />
      )}

      <div className="h-px bg-gray-200 mx-4" />
      <Link
        to="/introduce-host"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Giới thiệu chủ nhà
      </Link>
      <Link
        to="/find-host"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Tìm host hỗ trợ
      </Link>
    </div>
  );
};

export default Menu;
