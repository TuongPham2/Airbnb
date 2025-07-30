import React, { useState } from "react";
import Header from "./Header";
import BookingBox from "../pages/CardDetail/BookingBox";

const BookingLayout = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);

  return (
    <div>
      <Header
        checkIn={checkIn}
        checkOut={checkOut}
        guests={guests}
        setCheckIn={setCheckIn}
        setCheckOut={setCheckOut}
        setGuests={setGuests}
      />
      <div className="mt-20 flex justify-center">
        <BookingBox
          checkIn={checkIn}
          checkOut={checkOut}
          guests={guests}
          setCheckIn={setCheckIn}
          setCheckOut={setCheckOut}
          setGuests={setGuests}
        />
      </div>
    </div>
  );
};

export default BookingLayout;
