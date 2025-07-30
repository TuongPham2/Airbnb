import React from "react";
import { DoorOpen, Bed, Calendar } from "lucide-react";
import BookingBox from "./BookingBox";

const RoomInfo = ({ item }) => {
  return (
    <div className="mx-[100px] mt-5 min-h-screen">
      {/* Tiêu đề + Chia sẻ */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
        <div>
          <span>Chia sẻ</span>
          <span className="mx-2">Lưu</span>
        </div>
      </div>

      {/* Grid ảnh */}
      <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[400px] rounded-lg overflow-hidden">
        <div className="col-span-2 row-span-2">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Phần nội dung chia 2 cột */}
      <div className="mt-10 flex flex-col-reverse lg:flex-row gap-8">
        {/* LEFT - Nội dung 2/3 */}
        <div className="lg:w-2/3 space-y-6">
          {/* Tiêu đề + mô tả */}
          <div>
            <h1 className="font-bold text-xl">
              Toàn bộ căn hộ cho thuê tại Cleveland, Ohio, Hoa Kỳ
            </h1>
            <p>4 khách - 1 phòng ngủ - 2 giường - 1 phòng tắm</p>
          </div>

          {/* Được yêu thích */}
          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
            <div>
              <p className="font-semibold">Được khách yêu thích</p>
              <p className="text-sm">
                Khách đánh giá đây là một trong những ngôi nhà được yêu thích
                nhất Airbnb
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">4,96</p>
              <p className="text-yellow-500">★★★★★</p>
            </div>
          </div>

          {/* Host */}
          <div className="flex items-center space-x-4 border-b border-gray-300 pb-4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/423/286/original/avatar-icon-vector-illustration.jpg"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Host: Deeetra</p>
              <p className="text-sm">
                Superhost - 2 tháng kinh nghiệm đón tiếp khách
              </p>
            </div>
          </div>

          {/* Tiện ích */}
          <div className="space-y-4 border-b border-gray-300 pb-4">
            <div className="flex items-center space-x-4">
              <DoorOpen className="h-7 w-7" />
              <div>
                <p className="font-semibold">Tự nhận phòng</p>
                <p className="text-sm">
                  Bạn có thể gặp nhân viên trực cửa để nhận phòng.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Bed className="h-7 w-7" />
              <div>
                <p className="font-semibold">Phòng trong nhà</p>
                <p className="text-sm">
                  Bạn sẽ có phòng riêng trong một ngôi nhà và được sử dụng những
                  khu vực chung.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Calendar className="h-7 w-7" />
              <div>
                <p className="font-semibold">Hủy miễn phí trước 3 thg 8</p>
                <p className="text-sm">
                  Được hoàn tiền đầy đủ nếu bạn thay đổi kế hoạch.
                </p>
              </div>
            </div>
          </div>

          {/* Giới thiệu */}
          <div className="border-b border-gray-300 pb-4">
            <p className="text-xl font-bold">Giới thiệu về chỗ ở này</p>
            <p className="text-sm mt-2">
              Sống cùng gia đình bản xứ Tọa lạc ngay trung tâm thành phố Đà
              Lạt... (cắt bớt mô tả)
            </p>
          </div>

          {/* Phòng ngủ */}
          <div className="border-b border-gray-300 pb-4">
            <p className="text-xl font-bold">Nơi bạn sẽ ngủ nghỉ</p>
            <img
              src={item.image}
              alt=""
              className="w-[300px] max-h-[200px] object-cover rounded-lg shadow"
            />
          </div>
        </div>

        {/* RIGHT - Booking box 1/3 sticky */}
        <div className="lg:w-1/3 w-full h-fit sticky top-28 self-start">
          <BookingBox item={item} />
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
