// components/GuestDropdown.jsx
import React from "react";

const GuestRow = ({ label, sub, count, onDecrease, onIncrease }) => {
  return (
    <div className="flex justify-between items-center py-3">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-gray-500">{sub}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          className={`border rounded-full w-8 h-8 flex justify-center items-center ${
            count === 0 ? "text-gray-400 border-gray-300" : ""
          }`}
          onClick={onDecrease}
          disabled={count === 0}
        >
          –
        </button>
        <span>{count}</span>
        <button
          className="border rounded-full w-8 h-8 flex justify-center items-center"
          onClick={onIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
};

const GuestDropdown = ({ guests, setGuests, onClear }) => {
  const updateGuest = (type, delta) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  return (
    <div className="absolute top-full right-0 z-50 mt-2 w-[250px] bg-white rounded-xl shadow-lg p-4">
      <GuestRow
        label="Người lớn"
        sub="Ages 13 or above"
        count={guests.adults}
        onDecrease={() => updateGuest("adults", -1)}
        onIncrease={() => updateGuest("adults", 1)}
      />
      <GuestRow
        label="Trẻ em"
        sub="Ages 2–12"
        count={guests.children}
        onDecrease={() => updateGuest("children", -1)}
        onIncrease={() => updateGuest("children", 1)}
      />
      <GuestRow
        label="Em bé"
        sub="Under 2"
        count={guests.infants}
        onDecrease={() => updateGuest("infants", -1)}
        onIncrease={() => updateGuest("infants", 1)}
      />
      <GuestRow
        label="Thú cưng"
        sub="Bringing a service animal?"
        count={guests.pets}
        onDecrease={() => updateGuest("pets", -1)}
        onIncrease={() => updateGuest("pets", 1)}
      />
      <button
        className="mt-4 w-full text-center text-red-500 font-medium"
        onClick={onClear}
      >
        Clear
      </button>
    </div>
  );
};

export default GuestDropdown;
