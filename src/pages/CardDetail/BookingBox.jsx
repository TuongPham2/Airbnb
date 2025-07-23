import React from "react";

const BookingBox = () => {
  return (
    <div className="border border-gray-300 rounded-2xl p-4 shadow-md bg-white w-full max-w-[400px] sticky top-24">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl font-semibold ">₫604.824</p>
        <span className="text-sm">Cho 2 dem</span>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        <div>Nhan phong</div>
        <div>Tra phong</div>
        <div className="col-span-2">
          <select className="">
            <option value="">a</option>
          </select>
        </div>
      </div>
      <div>
        <button>Dat phong</button>
      </div>
      <p>Ban van chua mat tien</p>
    </div>
  );
};

export default BookingBox;
