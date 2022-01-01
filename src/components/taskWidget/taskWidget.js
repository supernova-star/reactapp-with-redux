import React from "react";
import "./taskWidget.scss";
import { useSelector } from "react-redux";
import { GetTheme } from "../../selectors/navigation";
import { GetTodoList } from "../../selectors/todo";
import { FaCheck } from "react-icons/fa";
import { MdViewList } from "react-icons/md";

const TaskWidget = () => {
  const theme = useSelector(GetTheme);
  const todoList = useSelector(GetTodoList);

  return (
    <div
      className={`${theme ? "taskWidgetDark" : "taskWidgetLight"} my-3 mx-4`}
    >
      <div className="listHeader p-2 text-center d-flex flex-row">
        <MdViewList size="2vw" className="me-5 mt-2" color="black" />
        <h5 className="taskheading ms-5">Task List!</h5>
      </div>
      <div className="p-3 taskContainer overflow-auto">
        {todoList.map((item) => (
          <div className="d-flex flex-row align-items-baseline p-1">
            <FaCheck className="col-sm-1" size="1.5vw" />
            <span className="ms-2 todoText">{item.title}</span>
          </div>
        ))}
        {todoList.length === 0 && (
          <div className="py-2 px-3 notask">No Tasks created!</div>
        )}
      </div>
    </div>
  );
};

export default TaskWidget;
