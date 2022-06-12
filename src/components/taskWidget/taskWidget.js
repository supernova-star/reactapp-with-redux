import React, { useRef } from "react";
import "./taskWidget.scss";
import { useSelector } from "react-redux";
import { GetTheme } from "../../selectors/navigation";
import { GetTodoList } from "../../selectors/todo";
import { FaCheck } from "react-icons/fa";
import Toast from "../shared/toast";

const TaskWidget = () => {
  const theme = useSelector(GetTheme);
  const todoList = useSelector(GetTodoList);

  return (
    <div
      className={`${theme ? "taskWidgetDark" : "taskWidgetLight"} my-3 mx-4`}
    >
      <div className="listHeader p-2 text-center">
        <h5 className="fs-2 ">Task List!</h5>
      </div>
      <div className="p-3 taskContainer overflow-auto">
        {todoList.map((item) => (
          <div className="d-flex flex-row align-items-baseline p-1">
            <FaCheck />
            <span className="ms-2 fs-5">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskWidget;
