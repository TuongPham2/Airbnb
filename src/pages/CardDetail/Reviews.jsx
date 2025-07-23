import React from "react";

const Reviews = () => {
  const ratings = [
    {
      title: "Xếp hạng tổng thể",
      score: 4.9,
      icon: "https://cdn-icons-png.flaticon.com/512/478/478544.png",
    },
    {
      title: "Mức độ sạch sẽ",
      score: 4.9,
      icon: "https://cdn-icons-png.flaticon.com/512/995/995053.png",
    },
    {
      title: "Độ chính xác",
      score: 5.0,
      icon: "https://cdn-icons-png.flaticon.com/512/1442/1442912.png",
    },
    {
      title: "Nhận phòng",
      score: 5.0,
      icon: "https://cdn-icons-png.flaticon.com/512/263/263069.png",
    },
    {
      title: "Giao tiếp",
      score: 5.0,
      icon: "https://cdn-icons-png.flaticon.com/512/589/589708.png",
    },
    {
      title: "Vị trí",
      score: 5.0,
      icon: "https://cdn-icons-png.flaticon.com/512/592/592245.png",
    },
    {
      title: "Giá trị",
      score: 5.0,
      icon: "https://cdn-icons-png.flaticon.com/512/1442/1442912.png",
    },
  ];

  const reviews = [
    {
      name: "Vy",
      time: "2 tuần trước",
      content:
        "Anh chủ dễ thương, thân thiện. 9:00 tụi mình ghé gửi hành lý, nhưng phòng đang trống nên ảnh cho check in sớm luôn. Phòng thì sạch sẽ, hiện đại, mới nữa. Có cả sân thượng để nắ...",
      avatar: "https://i.pravatar.cc/40?img=1",
      years: "2 năm",
    },
    {
      name: "Vinh",
      time: "tháng 5 năm 2025",
      content:
        "Vị trí home ngay trung tâm dễ tìm, chủ nhà thân thiện hỗ trợ khách nhiệt tình. Phòng mới sạch sẽ, gọn gàng. 1 nơi lưu trú ngắn hạn lý tưởng. Sẽ quay lại ở khi có dịp lên Đà Lạt.",
      avatar: "https://i.pravatar.cc/40?img=2",
      years: "3 tháng",
    },
    {
      name: "Dani",
      time: "tháng 6 năm 2025",
      content:
        "Anh chủ nhà thân thiện, cho phép khách nhận phòng linh hoạt và hướng dẫn khách nhiều dịch vụ bổ ích.",
      avatar: "https://i.pravatar.cc/40?img=3",
      years: "7 năm",
    },
    {
      name: "Diep",
      time: "tháng 6 năm 2025",
      content:
        "Home gần trung tâm nên rất tiện đi lại, phòng mới, dễ thương, highly recommend!",
      avatar: "https://i.pravatar.cc/40?img=4",
      years: "6 năm",
    },
    {
      name: "Linh",
      time: "1 tuần trước",
      content:
        "Mọi thứ đều rất tuyệt vời. Phòng sạch sẽ, thoáng mát. Chủ nhà nhiệt tình và chu đáo, mình cảm thấy như đang ở nhà vậy. Rất đáng giá!",
      avatar: "https://i.pravatar.cc/40?img=5",
      years: "1 năm",
    },
    {
      name: "Minh",
      time: "tháng 4 năm 2025",
      content:
        "Không gian yên tĩnh, sạch sẽ và gần nhiều địa điểm du lịch. Anh chủ thân thiện và hỗ trợ nhanh chóng. Sẽ giới thiệu bạn bè đến đây!",
      avatar: "https://i.pravatar.cc/40?img=6",
      years: "4 năm",
    },
  ];

  return (
    <div className="mx-[100px] border-b border-gray-300 p-4">
      <div className="flex flex-col items-center my-8">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/11351/11351682.png"
            alt="left wreath"
            className="w-16 h-16 transform -scale-x-100"
          />

          <h1 className="text-[80px] font-semibold">5,0</h1>

          <img
            src="https://cdn-icons-png.flaticon.com/512/11351/11351682.png"
            alt="right wreath"
            className="w-16 h-16"
          />
        </div>

        <p className="text-xl font-semibold mt-2">Được khách yêu thích</p>
        <p className="text-gray-600 text-base text-center max-w-xl mt-1">
          Nhà này được khách yêu thích dựa trên điểm xếp hạng, lượt đánh giá và
          độ tin cậy
        </p>
      </div>

      <div className="grid grid-cols-7 py-6 divide-x-2 divide-gray-300">
        {ratings.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col space-y-4 px-6 items-center text-center"
          >
            <div className=" space-x-2">
              <div className="font-semibold text-sm whitespace-nowrap">
                {item.title}
              </div>
              <div className="font-semibold text-sm text-gray-700">
                {item.score}
              </div>
            </div>
            <img src={item.icon} alt="icon" className="w-8 h-8" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {reviews.map((r, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 mb-2">
              <img
                src={r.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{r.name}</p>
                <p className="text-sm text-gray-500">
                  {r.years} hoạt động trên Airbnb
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-1">★★★★★ · {r.time}</p>
            <p className="text-black text-md">{r.content}</p>
          </div>
        ))}
      </div>

      <div>
        <button className="mt-6 border border-gray-300 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300 transition-colors">
          Xem tất cả đánh giá
        </button>
      </div>
    </div>
  );
};

export default Reviews;
