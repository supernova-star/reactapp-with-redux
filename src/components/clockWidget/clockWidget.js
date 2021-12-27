import React, { useState, useEffect } from "react";
import "./clockWidget.scss";
import { useSelector } from "react-redux";
import { GetTheme } from "../../selectors/navigation";
import moment from "moment";
import { FaClock } from "react-icons/fa";

const ClockWidget = () => {
  const [time, settime] = useState("");
  const [Date, setDate] = useState("");
  const theme = useSelector(GetTheme);
  const getTime = () => {
    settime(moment().format("LTS"));
    const oneDate = moment();
    const monthName = oneDate.format("MMMM");
    const day = oneDate.format("D");
    const dayName = oneDate.format("dddd");
    const year = oneDate.format("YYYY");
    setDate(`${dayName}, ${monthName} ${day}, ${year}`);
  };

  setInterval(() => {
    getTime();
  }, 1000);
  useEffect(() => {
    getTime();
  }, []);

  return (
    <div
      className={`me-4 p-4 ${
        theme ? "clockContainerDark" : "clockContainerLight"
      }`}
    >
      <FaClock className="clockIcon" />
      <div className="px-3 py-2 showTime text-end">{time}</div>
      <div className="px-1 py-1 fs-2 text-white text-end">{Date}</div>
    </div>
  );
};

export default ClockWidget;
