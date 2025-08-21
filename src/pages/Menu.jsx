import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/icons/house.png";
import { AuthContext } from "../Login/AuthContext";
import { FaUser, FaSignOutAlt } from "react-icons/fa";

const Menu = ({ onClose, setIsLoginOpen, setIsHostOpen }) => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="right-0 mt-2 w-60 bg-white border rounded-lg shadow-lg">
      <div className="h-px bg-gray-200 mx-4" />
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

      <div className="h-px bg-gray-200 mx-4" />
      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Giới thiệu chủ nhà
      </Link>
      <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Tìm host hỗ trợ
      </Link>

      {!currentUser && (
        <button
          onClick={() => {
            setIsLoginOpen(true);
            onClose();
          }}
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Đăng nhập hoặc đăng kí
        </button>
      )}

      {currentUser && (
        <div className="px-4 py-3 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaUser />
            <span className="font-medium">
              {currentUser.fullName || currentUser.name || "Người dùng"}
            </span>
          </div>
          <button
            onClick={() => {
              logout();
              onClose();
            }}
            className="flex items-center gap-2 text-red-500 hover:bg-gray-100 px-2 py-1 rounded"
          >
            <FaSignOutAlt /> Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
