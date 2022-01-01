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
    <div className="dashboardContainer rounded pt-0 pb-3 px-3">
      <p
        className={`mb-3 py-3 px-3 text-capitalize  ${
          theme ? "text-white headerDark" : "text-dark headerLight"
        }`}
      >
        {`Welcome ${name}!`}
      </p>
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
