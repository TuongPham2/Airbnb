import React, { useState, useContext } from "react";
import { FaFacebook, FaGoogle, FaApple, FaEnvelope } from "react-icons/fa";
import { AuthContext } from "./AuthContext";
import SignupForm from "./SignupForm";

const LoginForm = ({ isOpen, onClose }) => {
  const { login } = useContext(AuthContext);
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+84");
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen && !showSignupForm) return null;

  const Button = ({ icon, className, text, onClick }) => (
    <button
      onClick={onClick}
      className={`w-full bg-white text-black p-3 rounded-lg mb-2 border-2 border-gray-700 flex items-center justify-center gap-2 ${className}`}
    >
      {icon && <span className="text-gray-800">{icon}</span>}
      {text}
    </button>
  );

  const existingAccounts = ["+84901234567", "+84987654321"];
  const checkUserExists = (phoneNumber) => {
    return existingAccounts.includes(phoneNumber);
  };
  const handlePhoneLogin = () => {
    setError("");

    const cleanedPhone = phone.replace(/\D/g, "");
    if (
      !cleanedPhone ||
      cleanedPhone.length !== 10 ||
      !cleanedPhone.startsWith("0")
    ) {
      setError(
        "Vui lòng nhập số điện thoại Việt Nam hợp lệ (10 chữ số, bắt đầu bằng 0)."
      );
      return;
    }

    const fullPhone = countryCode + cleanedPhone.substring(1);
    const userExists = checkUserExists(fullPhone);

    login({ phone: fullPhone, provider: "phone" });

    if (userExists) {
      onClose();
    } else {
      setShowSignupForm(true);
    }
  };

  const handleSocialLogin = (provider) => {
    login({ name: "Người dùng " + provider, phone: null, provider });
    setShowSignupForm(true);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-[90] ${
          showSignupForm ? "hidden" : ""
        }`}
      >
        <div className="bg-white rounded-3xl shadow-lg w-[500px] p-6 relative">
          <div className="flex items-center mb-4 justify-center">
            <button
              type="button"
              onClick={onClose}
              aria-label="Đóng cửa sổ đăng nhập"
              className="absolute top-2 left-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold text-center mb-2">
              Đăng nhập hoặc đăng ký
            </h2>
          </div>
          <div className="bg-gray-400 h-[1px]" />
          <h3 className="text-xl font-bold my-4">
            Chào mừng bạn đến với Airbnb
          </h3>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <div>
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-full border-2 border-gray-400 p-2 rounded-lg mb-3"
            >
              <option value="+84">Việt Nam (+84)</option>
              <option value="+1">Hoa Kỳ (+1)</option>
              <option value="+81">Nhật Bản (+81)</option>
            </select>
            <input
              type="text"
              placeholder="Số điện thoại (ví dụ: 0123456789)"
              className="w-full border-2 border-gray-400 p-2 rounded-lg mb-3"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Chúng tôi sẽ gọi điện hoặc nhắn tin để xác nhận số điện thoại.
          </p>
          <button
            onClick={handlePhoneLogin}
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
              onClick={() => handleSocialLogin("facebook")}
              icon={<FaFacebook className="text-blue-600" />}
              className="bg-blue-100"
              text="Tiếp tục với Facebook"
            />
            <Button
              onClick={() => handleSocialLogin("google")}
              icon={<FaGoogle className="text-red-600" />}
              className="bg-red-100"
              text="Tiếp tục với Google"
            />
            <Button
              onClick={() => handleSocialLogin("apple")}
              icon={<FaApple className="text-black" />}
              className="bg-gray-200"
              text="Tiếp tục với Apple"
            />
            <Button
              onClick={() => handleSocialLogin("email")}
              icon={<FaEnvelope className="text-gray-800" />}
              className="bg-gray-100"
              text="Tiếp tục với Email"
            />
          </div>
        </div>
      </div>
      <SignupForm
        isOpen={showSignupForm}
        onClose={() => {
          setShowSignupForm(false);
          onClose();
        }}
      />
    </>
  );
};

export default LoginForm;
