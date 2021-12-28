import React from "react";
import Counter from "../counter/counter";
import { useSelector } from "react-redux";
import "./dashboard.scss";
import { GetTheme } from "../../selectors/navigation";
import ClockWidget from "../clockWidget";
import StopWatch from "../stopwatch/stopWatch";
import TaskWidget from "../taskWidget/taskWidget";
import { GetLoginDetails } from "../../selectors/login";

const Dashboard = () => {
  const theme = useSelector(GetTheme);
  const loginDetails = useSelector(GetLoginDetails);
  const { name } = loginDetails.currentUserInfo;

  return (
    <div className="dashboardContainer rounded p-3">
      <h3
        className={`mb-3 p-2 text-capitalize ${
          theme ? "text-white" : "text-dark"
        }`}
      >
        {`Welcome ${name}!`}
      </h3>
      <div className="d-flex flex-row">
        <ClockWidget />
        <StopWatch />
      </div>
      <div className="d-flex flex-row">
        <Counter />
        <TaskWidget />
      </div>
    </div>
  );
};

export default Dashboard;
