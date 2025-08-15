import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 md:px-8 lg:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
        <div>
          <h3 className="font-bold text-gray-800 mb-4">Hỗ trợ</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Trung tâm trợ giúp
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                AirCover
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Chống phân biệt đối xử
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Hỗ trợ người khuyết tật
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Tùy chọn hủy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Báo cáo lo ngại của cộng đồng
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-4">Cộng đồng</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Airbnb.org: Viện trợ nhà ở
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Hỗ trợ người tị nạn Afghanistan
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Chống phân biệt đối xử
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Tuyệt vời hơn
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Chào mừng
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-4">Đón tiếp khách</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Cho thuê nhà của bạn trên Airbnb
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                AirCover cho Chủ nhà
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Tài nguyên đón tiếp khách
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Diễn đàn cộng đồng
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Đón tiếp khách có trách nhiệm
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-4">Giới thiệu</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Trang tin tức
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Tìm hiểu các tính năng mới
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Thư của người sáng lập
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Cơ hội nghề nghiệp
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Nhà đầu tư
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <div className="mb-4 md:mb-0">
          © 2023 Airbnb, Inc. ·{" "}
          <a href="#" className="hover:underline">
            Quyền riêng tư
          </a>{" "}
          ·{" "}
          <a href="#" className="hover:underline">
            Điều khoản
          </a>{" "}
          ·{" "}
          <a href="#" className="hover:underline">
            Sơ đồ trang web
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7 2a1 1 0 011 1v1h4V3a1 1 0 112 0v1h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v3h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a1 1 0 11-2 0v-1H8v1a1 1 0 11-2 0v-1H5a1 1 0 01-1-1v-3a1 1 0 011-1h1V8H5a1 1 0 01-1-1V4a1 1 0 011-1h1V2a1 1 0 011-1zM5 8h4v3H5V8zm6 0h4v3h-4V8z"
                clipRule="evenodd"
              />
            </svg>
            Tiếng Việt (VN)
          </a>
          <a href="#" className="hover:underline flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            VND
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
