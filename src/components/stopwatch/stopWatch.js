import React, { useState, useEffect } from "react";
import "./stopWatch.scss";
import { useSelector } from "react-redux";
import { GetTheme } from "../../selectors/navigation";
import { RiTimerFill } from "react-icons/ri";
import {
  MdNotStarted,
  MdPauseCircle,
  MdOutlineRestartAlt,
} from "react-icons/md";
import { FaPlay } from "react-icons/fa";

const StopWatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const theme = useSelector(GetTheme);
  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const StartButton = (
    <div className="btn " onClick={handleStart}>
      <FaPlay />
    </div>
  );
  const ActiveButtons = (
    <div>
      <div className="btn" onClick={handleReset}>
        <MdOutlineRestartAlt />
      </div>
      <div className="btn btn-one" onClick={handlePauseResume}>
        {isPaused ? <MdNotStarted /> : <MdPauseCircle />}
      </div>
    </div>
  );
  return (
    <div className={`${theme ? "stopWatchDark" : "stopWatchLight"} p-4`}>
      <RiTimerFill className="stopWatchIcon" />
      <div className="timer text-center p-4">
        <span className="digits d-inline-block">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="digits d-inline-block">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
        </span>
        <span className="digits mili-sec d-inline-block">
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
      </div>
      <div className="Control-Buttons text-center">
        {isActive ? ActiveButtons : StartButton}
      </div>
    </div>
  );
};

export default StopWatch;
