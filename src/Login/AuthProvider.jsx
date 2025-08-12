import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Lỗi khi đọc user từ localStorage:", error);
      localStorage.removeItem("user");
    }
  }, []);

  const login = (userData) => {
    setCurrentUser(userData);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  const updateUserProfile = (profileData) => {
    setCurrentUser((prev) => ({ ...prev, ...profileData }));
    console.log("Hồ sơ đã cập nhật:", { ...currentUser, ...profileData });
  };
  return (
    <AuthContext.Provider
      value={{ currentUser, login, logout, updateUserProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
