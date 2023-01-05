import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const Banner = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="relative z-[1] bg-[url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-center bg-no-repeat bg-cover">
      <div className="absolute z-[1] h-full w-full bg-black/50"></div>
      <div className="container mx-auto py-32 relative z-[2] flex items-center">
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText='Enter "tomorrow"'
            // onChangeRaw={(event) => handleChangeRaw(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
