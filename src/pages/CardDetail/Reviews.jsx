import React from "react";

const Reviews = () => {
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
    <div className="border-b border-gray-300 pb-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <p className="font-bold text-xl">Lượt đánh giá</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 w-full">
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
              <p className="text-black text-md break-words">{r.content}</p>
            </div>
          ))}
        </div>

        <div>
          <button className="mt-6 border border-gray-300 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300 transition-colors">
            Xem tất cả đánh giá
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
