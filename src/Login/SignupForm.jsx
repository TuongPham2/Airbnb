import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

const SignupForm = ({ isOpen, onClose }) => {
  const { updateUserProfile, currentUser } = useContext(AuthContext);
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleRegister = () => {
    setError("");

    if (!fullName.trim()) return setError("Vui lòng nhập tên đầy đủ.");
    if (!termsAccepted)
      return setError("Vui lòng đồng ý với Điều khoản & Chính sách.");
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setError("Vui lòng nhập email hợp lệ.");
    if (dob && isNaN(new Date(dob).getTime()))
      return setError("Vui lòng nhập ngày sinh hợp lệ.");

    const profileData = {
      fullName,
      dob: dob || null,
      email: email || null,
      provider: currentUser?.provider || "unknown",
      phone: currentUser?.phone || null,
    };

    updateUserProfile(profileData);
    console.log("Đăng ký thành công với dữ liệu:", profileData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[90] bg-black bg-opacity-50">
      <div className="bg-white rounded-3xl shadow-lg w-[500px] p-6 relative">
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng cửa sổ đăng ký"
          className="absolute top-2 left-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-lg font-semibold text-center mb-2">
          Hoàn tất đăng ký
        </h2>
        <div className="bg-gray-400 h-[1px] mb-4" />
        <h3 className="text-xl font-bold mb-4">Thông tin cá nhân</h3>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Tên đầy đủ (ví dụ: Nguyễn Văn A)"
            className="w-full border-2 border-gray-400 p-2 rounded-lg"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="date"
            className="w-full border-2 border-gray-400 p-2 rounded-lg text-gray-700"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            max={new Date().toISOString().split("T")[0]}
          />
          <input
            type="email"
            placeholder="Email (tùy chọn, ví dụ: ten@vidu.com)"
            className="w-full border-2 border-gray-400 p-2 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="form-checkbox h-4 w-4 text-red-600 rounded"
            />
            Tôi đồng ý với{" "}
            <a href="#" className="text-red-600 hover:underline">
              Điều khoản & Chính sách
            </a>{" "}
            của Airbnb
          </label>
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-red-700 text-white p-2 rounded-lg mt-4 hover:bg-red-800"
        >
          Đăng ký
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
