import React from "react";
import { FaFacebook, FaGoogle, FaApple, FaEnvelope } from "react-icons/fa";

import { Link } from "react-router-dom";
const LoginForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const Button = ({ icon, className, text, onClick }) => (
    <button
      onClick={onClick}
      className={`w-full bg-white text-black p-3 rounded-lg mb-2 border-2 border-gray-700 flex items-center justify-center gap-2 ${className}`}
    >
      {icon && <span className="text-gray-800">{icon}</span>}
      {text}
    </button>
  );
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 ">
      <div className="bg-white rounded-3xl shadow-lg w-[500px] p-6 relative ">
        <div className="flex  items-center mb-4 justify-center">
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng cửa sổ đăng nhập"
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
          >
            ✕
          </button>

          <h2 className="text-lg font-semibold text-center mb-2">
            Đăng nhập hoặc đăng ký
          </h2>
        </div>
        <div className="bg-gray-400 h-[1px]  flex items-center justify-center " />
        <h3 className="text-xl font-bold  my-4">
          Chào mừng bạn đến với Airbnb
        </h3>
        <div>
          <select className="w-full border-2 border-gray-400 p-2 rounded-lg mb-3">
            <option>Việt Nam (+84)</option>
            <option>Hoa Kỳ (+1)</option>
            <option>Nhật Bản (+81)</option>
          </select>
          <input
            type="text"
            placeholder="Số điện thoại"
            className="w-full border-2 border-gray-400 p-2 rounded-lg mb-3"
          />
        </div>
        <p className="text-xs text-gray-500 mb-4">
          Chúng tôi sẽ gọi điện hoặc nhắn tin cho bạn để xác nhận số điện thoại.
          Có áp dụng phí dữ liệu và phí tin nhắn tiêu chuẩn. Chính sách về quyền
          riêng tư
        </p>
        <button
          onClick={onClose}
          className="w-full bg-red-700 text-white p-2 rounded-lg"
        >
          Tiếp tục
        </button>
        <div className="gap-2 flex items-center justify-center text-xs text-gray-700 m-4">
          <div className="flex-1 h-px bg-gray-300" />
          Hoặc
          <div className="flex-1 h-px bg-gray-300" />
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Button
            onClick={onClose}
            icon={<FaFacebook className="text-blue-600" />}
            className="bg-blue-100"
            text="Tiếp tục với Facebook"
          />
          <Button
            onClick={onClose}
            icon={<FaGoogle className="text-red-600" />}
            className="bg-red-100"
            text="Tiếp tục với Google"
          />
          <Button
            onClick={onClose}
            icon={<FaApple className="text-black" />}
            className="bg-gray-200"
            text="Tiếp tục với Apple"
          />
          <Button
            onClick={onClose}
            icon={<FaEnvelope className="text-gray-800" />}
            className="bg-gray-100"
            text="Tiếp tục với Email"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
