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
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  const updateUserProfile = (profileData) => {
    setCurrentUser((prev) => {
      const updated = { ...prev, ...profileData };
      console.log("Hồ sơ đã cập nhật:", updated);
      localStorage.setItem("user", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, login, logout, updateUserProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
