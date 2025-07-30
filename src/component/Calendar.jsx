import React from "react";
import { DateRange } from "react-date-range";
import vi from "date-fns/locale/vi";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Calendar = ({ selectionRange, handleSelect, resetDates }) => {
  if (
    !selectionRange ||
    !selectionRange.startDate ||
    !selectionRange.endDate ||
    !selectionRange.key
  ) {
    return null; // Tránh lỗi nếu thiếu dữ liệu
  }

  return (
    <div className="w-full min-w-[700px] max-w-[900px] bg-white rounded-lg shadow-xl mt-2  ">
      <DateRange
        ranges={[selectionRange]}
        onChange={handleSelect}
        editableDateInputs={true} // thêm để tránh lỗi autoFocus
        locale={vi}
        months={2}
        direction="horizontal"
        rangeColors={["#000000"]}
        showDateDisplay={false}
      />
      <div className="text-right">
        <button
          className="m-4 text-sm text-red-600 underline "
          onClick={resetDates}
        >
          Xóa ngày
        </button>
      </div>
    </div>
  );
};

export default Calendar;
