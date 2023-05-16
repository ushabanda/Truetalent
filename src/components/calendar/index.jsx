import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./styles.css";
// import { createTheme } from '@mui/material/styles';
import { green } from "@mui/material/colors";



const Calendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div>
      <div className="fromdate">
        <CalendarMonthIcon style={{ color: "#14bc9a" }} />
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="fromda"
          placeholderText={"DD/MM/YYYY"}
        />
      </div>
      <div className="todate">
        <CalendarMonthIcon style={{ color: "#14bc9a" }} />
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className="toda"
          placeholderText={"DD/MM/YYYY"}
        />
      </div>
    </div>
  );
};

export default Calendar;
