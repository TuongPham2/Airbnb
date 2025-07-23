import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import vi from "date-fns/locale/vi"; // tiếng Việt

import "react-date-range/dist/styles.css"; // style mặc định
import "react-date-range/dist/theme/default.css"; // theme mặc định
const Amenities = () => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };

  const resetDates = () => {
    setSelectionRange({
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    });
  };
  return (
    <div className="mx-[100px] mt-5 min-h-screen">
      <div className="max-w-screen-md space-y-4">
        <p className="text-xl font-bold">Nơi này có những gì cho bạn</p>
        <div className="grid grid-cols-2  grid-rows-4 gap-4">
          <div>Khóa ở cửa phòng ngủ</div>
          <div>Thang máy</div>
          <div>Cho phép gửi hành lý</div>
          <div>Tủ lạnh</div>
          <div>Wifi</div>
          <div>Sân hoặc ban công</div>
          <div>Máy sấy tóc</div>
          <div>Chỗ ở có camera an ninh ngoài nhà</div>
        </div>
        <button>Hiển thị tất cả tiện nghi</button>
        <div className="h-px bg-gray-300 w-full" />
        <div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              {format(selectionRange.startDate, "d MMM yyyy", { locale: vi })} -{" "}
              {format(selectionRange.endDate, "d MMM yyyy", { locale: vi })}
            </h2>

            <div className="text-black text-lg font-sans">
              <DateRange
                ranges={[selectionRange]}
                onChange={handleSelect}
                locale={vi}
                months={2}
                direction="horizontal"
                rangeColors={["#000000"]}
              />
              <button
                className="m-2 text-sm text-red-600 underline"
                onClick={resetDates}
              >
                Xóa ngày
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-gray-300 w-full" />
    </div>
  );
};

export default Amenities;
