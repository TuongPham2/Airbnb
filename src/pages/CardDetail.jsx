import React from "react";
import { useParams } from "react-router-dom";
import CardData from "../data/CardData.json";

const CardDetail = () => {
  const { id, type } = useParams();
  const item = CardData.find(
    (item) => item.id === Number(id) && item.type === type
  );

  if (!item) {
    return (
      <div className="p-6 text-red-500">Không tìm thấy nội dung phù hợp.</div>
    );
  }

  return (
    <div className="mx-[100px] mt-5  min-h-screen">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
        <div>
          <span>chia se</span>
          <span className="mx-2">luu</span>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[400px] rounded-lg overflow-hidden ">
        <div className="col-span-2 row-span-2 ">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      {/* Thông tin chi tiết */}
      <div className="mt-4 flex flex-col space-y-6 ">
        <div>
          <h1 className="font-bold text-xl">
            Toàn bộ căn hộ cho thuê tại Cleveland, Ohio, Hoa Kỳ{" "}
          </h1>
          <p>4 khách-1 phòng ngủ-2 giường-1 phòng tắm</p>
        </div>
        <div className="max-w-screen-md">
          <div className=" border border-gray-300 rounded-lg p-4 flex items-center justify-between ">
            <div className="flex-shrink-0">
              <p className="font-semibold text-base">Được khách yêu thích</p>
            </div>

            <div className="flex-grow mx-4 max-w-[300px]">
              <p className="text-sm font-medium line-clamp-2">
                Khách đánh giá đây là một trong những ngôi nhà được yêu thích
                nhất Airbnb
              </p>
            </div>

            <div className="flex-shrink-0 flex items-center space-x-4">
              <div className="text-right">
                <p className="text-lg font-semibold">4,96</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">26</p>
                <p className="text-sm text-gray-500">đánh giá</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/423/286/original/avatar-icon-vector-illustration.jpg"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p>Host: Deeetra</p>
              <p>Superhost-2 tháng kinh nghiệm đón tiếp khách</p>
            </div>
          </div>
          <div class="h-px bg-gray-300 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
