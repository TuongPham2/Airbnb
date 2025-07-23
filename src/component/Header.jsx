import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import HomeIcon from "../assets/icons/house.png";
import ServiceIcon from "../assets/icons/dinner.png";
import ExperienceIcon from "../assets/icons/balloon.png";
import LoginForm from "../pages/LoginForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isHostOpen, setIsHostOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <header className="bg-gray-100 px-6 pt-4   flex justify-between h-[150px] ">
        {/* logo */}
        <Link to="/accommodation" className=" gap-2 ml-6">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo-2014.png"
            alt="logo"
            className="w-28 h-16 mx-auto"
          />
        </Link>
        {/* navigation */}
        <div className=" gap-6   ">
          <div className="flex items-center space-x-10">
            <Link
              to="/accommodation"
              className={`text-gray-700 hover:text-black flex flex-row items-center justify-center ${
                currentPath === "/accommodation"
                  ? "border-b-4 border-black text-black "
                  : ""
              }`}
            >
              <img src={HomeIcon} alt="Nơi ở" className="h-10 w-10" />
              <span className="m-3">Nơi ở</span>
            </Link>

            <Link
              to="/experience"
              className={`text-gray-700 hover:text-black flex flex-row items-center justify-center ${
                currentPath === "/experience"
                  ? "border-b-4 border-black text-black  "
                  : ""
              }`}
            >
              <img
                src={ExperienceIcon}
                alt="Trải nghiệm"
                className="h-10 w-10"
              />
              <span className="m-3">Trải nghiệm</span>
            </Link>

            <Link
              to="/service"
              className={`text-gray-700 hover:text-black flex flex-row items-center justify-center ${
                currentPath === "/service"
                  ? "border-b-4 border-black text-black "
                  : ""
              }`}
            >
              <img src={ServiceIcon} alt="Dịch vụ" className="h-10 w-10" />
              <span className="m-3">Dịch vụ</span>
            </Link>
          </div>
        </div>

        <div className=" gap-4 ">
          <div className="flex items-center space-x-4">
            <button>Trở thành host</button>
            {/* menu */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-center"
              >
                <img
                  src="https://toppng.com/public/uploads/preview/menu-icon-png-3-lines-11552739310fjzs2n2wxt.png"
                  alt="Menu"
                  className="h-10 w-10"
                />
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white border rounded-lg shadow-lg z-10  ">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Trung tâm trợ giúp
                  </Link>
                  <div className="bg-gray-300 h-[1px]  flex items-center justify-center mx-4" />
                  {/* Trở thành host */}
                  <button
                    onClick={() => {
                      setIsHostOpen(!isHostOpen), setIsMenuOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-gray-100 block"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-sm">
                          Trở thành host
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Bắt đầu đón tiếp khách và kiếm thêm thu nhập thật dễ
                          dàng
                        </div>
                      </div>
                      <img
                        src={HomeIcon}
                        alt="Nơi ở"
                        className="h-10 w-10 object-cover rounded-md ml-3"
                      />
                    </div>
                  </button>

                  <div className="bg-gray-300 h-[1px]  flex items-center justify-center mx-4" />
                  <Link
                    to=""
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Giới thiệu chủ nhà
                  </Link>
                  <Link
                    to=""
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Tìm host hỗ trợ
                  </Link>
                  <div className="bg-gray-300 h-[1px]  flex items-center justify-center mx-4" />
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Đăng nhập hoặc đăng kí
                  </button>
                  <LoginForm
                    isOpen={isLoginOpen}
                    onClose={() => setIsLoginOpen(false)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {isHostOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" max-w-screen-lg bg-white  rounded-lg  relative shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setIsHostOpen(false)}
            >
              ✕
            </button>
            <div className="p-6">
              <p className="font-bold text-xl mb-4 text-black flex items-center justify-center">
                Bạn muốn cung cấp gì?
              </p>
              <div className="flex flex-row space-x-4 mt-10">
                <button className=" w-[250px] h-[280px] border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center  ">
                  <img
                    src={HomeIcon}
                    alt="Nơi ở"
                    className="h-[100px] w-[100px]  "
                  />
                  <span className="m-3">Nơi ở</span>
                </button>
                <button className=" w-[250px] h-[280px] border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center">
                  <img
                    src={ExperienceIcon}
                    alt="Trải nghiệm"
                    className="h-[100px] w-[100px] "
                  />
                  <p className="m-3">Trải nghiệm</p>
                </button>
                <button className=" w-[250px] h-[280px] border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center">
                  <img
                    src={ServiceIcon}
                    alt="dịch vụ"
                    className="h-[100px] w-[100px] "
                  />
                  <p className="m-3">Dịch vụ</p>
                </button>
              </div>
            </div>
            <div className=" h-px bg-gray-300 " />
            <div className="flex items-center justify-end">
              <button className="px-3 py-2 border border-black rounded-lg m-4">
                Tiep theo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
