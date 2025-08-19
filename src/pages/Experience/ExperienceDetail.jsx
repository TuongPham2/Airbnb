import React from "react";
import Location from "../CardDetail/Location";
import Reviews from "../CardDetail/Reviews";
import BookingBox from "../CardDetail/BookingBox";
import { FaLeaf, FaMapMarkerAlt, FaAward } from "react-icons/fa";

const ExperienceDetail = () => {
  const experience = {
    title: "Ăn trưa với biểu tượng thời trang Lenny Niemeyer trong nhà",
    subtitle:
      "Tìm hiểu câu chuyện về đồ bơi Brazil từ nhà thiết kế huyền thoại trong dinh thự Ipanema của cô.",
    host: {
      name: "Lenny Niemeyer",
      role: "Người tiên phong trong thiết kế đồ bơi Brazil",
      avatar:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6201447/original/6b80385e-18e3-4889-b0e8-75784bfbc1d5.jpeg?im_w=480",
    },
    images: [
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6201447/original/ef0fd8d7-ad64-4a8c-b2de-51f5431dbafe.jpeg?im_w=480",
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6201447/original/6b80385e-18e3-4889-b0e8-75784bfbc1d5.jpeg?im_w=480",
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6201447/original/81f31b26-a8c2-4752-8e03-2a4fc2e7c99f.jpeg?im_w=480",
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6201447/original/975a9aae-25fb-43f3-bc5f-92e40d940541.jpeg?im_w=480",
    ],
    whatYouDo: [
      {
        title: "Gặp gỡ ở Ipanema",
        desc: "Tôi sẽ chào đón bạn với các loại cocktail đặc trưng và đồ ăn nhẹ.",
        img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6201447/original/39c800f7-4710-4762-bc7f-df28530ddb1d.jpeg?im_w=480",
      },
      {
        title: "Đi qua công việc của tôi",
        desc: "Xem những bức ảnh hiếm hoi và quần áo nguyên bản trải dài trong sự nghiệp của tôi.",
        img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6201447/original/3c627656-3120-4c4f-bd1c-c3e6e1ba20a2.jpeg?im_w=480",
      },
      {
        title: "Chia sẻ bữa ăn",
        desc: "Nếm thử các món ăn yêu thích của tôi khi tôi thảo luận về lịch sử đồ bơi.",
        img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6201447/original/67ba923a-9ef8-44cc-a898-38978828e6f5.jpeg?im_w=480",
      },
      {
        title: "Thư giãn và trò chuyện",
        desc: "Vui lòng hỏi tôi bất kỳ điều gì về hành trình thời trang của tôi.",
        img: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6201447/original/c7ecaa0e-485a-4daa-a2bd-4abf08e3d7d1.jpeg?im_w=480",
      },
    ],
    infoItems: [
      {
        icon: <FaLeaf className="text-green-600" />,
        title: "Airbnb Original",
        description:
          "Lenny Niemeyer đã thiết kế riêng workshop nghệ thuật này cho Airbnb.",
      },
      {
        icon: <FaAward className="text-yellow-500" />,
        title: "Nhà thiết kế của năm",
        description: "Được trao giải thưởng Unique bởi Mode City năm 2018",
      },
      {
        icon: <FaMapMarkerAlt className="text-red-500" />,
        title: "Địa điểm",
        description: "Rio de Janeiro - Ipanema",
      },
      {
        icon: <FaLeaf className="text-green-600" />,
        title: "Yêu cầu đối với khách",
        description: "Khách từ 18 tuổi trở lên có thể tham dự.",
      },
      {
        icon: <FaAward className="text-blue-500" />,
        title: "Chính sách hủy",
        description: "Hủy muộn nhất 3 ngày trước để được hoàn tiền đầy đủ.",
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid grid-cols-2 gap-2">
          {experience.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="experience"
              className="w-full h-48 sm:h-60 object-cover rounded-lg"
            />
          ))}
        </div>
        <div className="md:col-span-1 p-6 bg-white rounded-xl shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {experience.title}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
            {experience.subtitle}
          </p>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={experience.host.avatar}
              alt={experience.host.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {experience.host.name}
              </h3>
              <p className="text-gray-500 text-sm">{experience.host.role}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col md:flex-row gap-8">
        <section className="md:w-2/3 mt-12">
          <h2 className="text-2xl font-semibold mb-6">Những việc bạn sẽ làm</h2>
          <div className="flex flex-col space-y-6">
            {experience.whatYouDo.map((item, i) => (
              <div key={i} className="flex gap-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="md:w-1/3">
          <div className="sticky top-24  p-6">
            <BookingBox />
          </div>
        </div>
      </div>
      <div className="mt-12 max-w-3xl">
        <Location />
      </div>
      <div className="mt-12 border-t pt-8 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-6">Giới thiệu bản thân</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6">
            <img
              src={experience.host.avatar}
              alt={experience.host.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              {experience.host.name}
            </h3>
            <p className="text-gray-500 text-sm text-center">
              {experience.host.role}
            </p>
          </div>
          <div className="sm:col-span-1 md:col-span-2 text-gray-700 text-base leading-relaxed">
            <p>
              Tôi là một trong những nhà thiết kế đồ bơi nổi tiếng nhất Brazil.
              Năm 1991, tôi ra mắt nhãn hiệu riêng và mở cửa hàng boutique đầu
              tiên ở Ipanema. Hiện có hơn 150 điểm bán hàng toàn cầu. Bộ sưu tập
              của tôi được giới thiệu trong Tuần lễ thời trang São Paulo. Năm
              2016, tôi vinh dự thiết kế đồng phục chính thức cho phái đoàn
              Brazil tại Olympic Rio.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 max-w-3xl">
        <Reviews />
      </div>
      <div className="py-10 border-t">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Những điều cần biết
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {experience.infoItems.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
