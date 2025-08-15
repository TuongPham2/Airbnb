import React from "react";
import ServiceInfo from "../CardDetail/ServiceInfo";
import { FaCamera, FaStar, FaGraduationCap } from "react-icons/fa";
import Reviews from "../CardDetail/Reviews";
import Location from "../CardDetail/Location";
const data = [
  {
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/c89aba11-6746-44a5-9911-9f28e5018340.jpeg",
    title: "Chụp ảnh một địa điểm",
    price: "₫30.748.960",
    time: "30 phút",
    description:
      "Buổi chụp ảnh sẽ được chụp tại Đấu trường La Mã 15 phút đi xe hơi và 15 phút ở ngọn đồi có tầm nhìn toàn cảnh Đấu trường La Mã. Tổng cộng 50 ảnh chưa chỉnh sửa và 10 ảnh đã chỉnh sửa sẽ được gửi trong 2 ngày bằng liên kết .",
  },
  {
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/4848a93b-274a-446e-9376-0143c3e6ca9f.jpeg",
    title: "Đi xe và chụp ảnh",
    price: "₫30.748.960",
    time: "1 giờ 30 phút",
    description:
      "Chụp ảnh tại ba địa điểm: Đấu trường La Mã, Orange Garden và Fontana del Acqua. Chúng tôi sẽ ghé thăm các địa điểm có xe cổ. Tất cả khách sẽ tham dự với tư cách là người qua đường ( 2-3 người cho 1 xe) Bạn sẽ nhận được 80-100 Jpeg và 10 ảnh đã chỉnh sửa",
  },
  {
    img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/d51f57c7-3cdd-43f8-9f7f-b8c877392218.jpeg",
    title: "Tour sang trọng",
    price: "₫30.748.960",
    time: "3 giờ",
    description:
      "Tham quan hơn 4 địa điểm, bao gồm Đấu trường La Mã, Vườn Cam, Fontana del Acqua và Đồi Gianicolo. Đã bao gồm dịch vụ đón và trả khách từ Trung tâm thành phố (Khu vực ZTL không có Acces) 100-150 ảnh Jpeg + 20 Ảnh đã chỉnh sửa",
  },
];

const ServiceDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Cột trái */}
          <div className="md:col-span-2">
            <div className="sticky top-6">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="rounded-2xl overflow-hidden mb-6">
                  <div className="w-full h-[200px]">
                    <img
                      src="https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/4848a93b-274a-446e-9376-0143c3e6ca9f.jpeg?im_w=960"
                      alt="Ảnh chính"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex justify-center -mt-12 mb-4 relative z-10">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Host"
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                  />
                </div>

                <h1 className="text-2xl font-bold text-center mb-2">
                  Tour chụp ảnh xe cổ đầy phong cách
                </h1>
                <p className="text-gray-600 text-center mb-4">
                  Đi xe qua Rome trong một chiếc Fiat 500 cổ điển, ghi lại những
                  khoảnh khắc chân thực, vui vẻ.
                </p>
                <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-4">
                  <span>⭐ 4.92</span>
                  <span>·</span>
                  <span>251 đánh giá</span>
                  <span>·</span>
                  <span>Rome</span>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="flex flex-col items-center text-sm">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                      className="w-6 h-6"
                    />
                    <span>Máy ảnh</span>
                  </div>
                  <div className="flex flex-col items-center text-sm">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
                      className="w-6 h-6"
                    />
                    <span>Rome</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="sticky top-6">
                  <div className="rounded-2xl border bg-white shadow-md p-6 w-full">
                    <div className="flex items-baseline justify-between mb-4">
                      <div>
                        <span className="text-lg font-bold">
                          Từ ₫30.563.677
                        </span>
                        <span className="text-sm text-gray-500"> /khách</span>
                      </div>
                      <span className="text-sm text-pink-500">
                        Hủy miễn phí
                      </span>
                    </div>
                    <button className="w-full bg-pink-500 text-white font-semibold rounded-lg py-3 hover:bg-pink-600 transition">
                      Đặt trước
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 p-6 space-y-8">
            <div className="flex flex-col justify-center space-y-6  ">
              {data.map((item, i) => (
                <ServiceInfo key={i} {...item} />
              ))}
            </div>
            <div className="  border-b-2 border:bg-black pb-8">
              <p className="text-[13px] text-gray-600 leading-snug">
                Bạn có thể nhắn tin cho Orkhan để tùy chỉnh hoặc thực hiện thay
                đổi.
              </p>
            </div>
            <div className="space-y-8 border-b-2 border:bg-black pb-8">
              <p className="font-bold text-xl">Thông tin năng lực</p>
              <div className="flex gap-6">
                <div className="w-1/2">
                  <div className="flex flex-col items-center  py-10 border border-gray-100 rounded-lg shadow-lg">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="avatar"
                      className="w-24 h-24 border border-gray-200 rounded-full mb-4 object-cover"
                    />

                    <div className="flex flex-col items-center">
                      <p className="font-bold text-xl">Orkhan</p>
                      <p className="text-gray-500 text-sm">Nhiếp ảnh gia</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-6 w-1/2">
                  <div className="flex items-start space-x-4">
                    <FaCamera className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-lg font-semibold">6 năm kinh nghiệm</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Tôi sử dụng tầm nhìn nghệ thuật để ghi lại những khoảnh
                        khắc chân thực, phong cách cho du khách.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaStar className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-lg font-semibold">
                        Điểm nhấn trong sự nghiệp
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Tôi đã nhận được đánh giá 5 sao và tham gia hội thảo về
                        nhiếp ảnh LED.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaGraduationCap className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-lg font-semibold">
                        Học vấn và đào tạo
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Tôi học tại Trường Nghệ thuật La Mã và được đào tạo về
                        nhiếp ảnh du lịch và phong cách sống.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-4 text-lg font-semibold">
                Danh mục dịch vụ của tôi
              </p>

              <div className="grid grid-rows-2 grid-cols-2 gap-2 rounded-3xl overflow-hidden h-[500px] border-b-2 border:bg-black pb-8">
                <div className="row-span-2">
                  <img
                    src="https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/4848a93b-274a-446e-9376-0143c3e6ca9f.jpeg?im_w=960"
                    alt="Ảnh chính"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <img
                    src="https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/0f324f5b-22fd-4658-8f45-4ca4a4a46c03.jpeg?im_w=960"
                    alt="Ảnh nhỏ 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <img
                    src="https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/85ff7fbd-2571-4ebf-abfe-ce0f3cec0624.jpeg?im_w=960"
                    alt="Ảnh nhỏ 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <Reviews />
            </div>
            <div>
              <Location />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
