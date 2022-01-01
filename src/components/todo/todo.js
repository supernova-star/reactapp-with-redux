import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./todo.scss";
import { FaTrash } from "react-icons/fa";
import { GetTodoList } from "../../selectors/todo";
import {
  AddNewTask,
  FetchTodoList,
  RemoveTask,
} from "../../actions/todoAction";
import { GetTheme } from "../../selectors/navigation";

const Todo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(GetTodoList);
  const theme = useSelector(GetTheme);
  const [inputValue, setinputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState(todoList);
  const [noResultFound, setNoResultFound] = useState(false);

  useEffect(() => {
    if (todoList.length === 0) {
      dispatch(FetchTodoList());
    }
  }, []);
  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };
  const handleAddTask = async () => {
    if (inputValue !== "") {
      await dispatch(AddNewTask(inputValue));
      setinputValue("");
    }
  };
  const handleRemoveTask = (todoId) => {
    const index = todoList.findIndex((item) => item.id === todoId);
    dispatch(RemoveTask(index));
    if (searchValue !== "") {
      const newList = list.filter((item) => item.id !== todoId);
      setList(newList);
      if (newList.length === 0) {
        setNoResultFound(true);
      }
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchValue(searchTerm);
    const newList = todoList.filter((item) =>
      item.title.includes(e.target.value)
    );
    setList(newList);
    if (newList.length === 0) {
      setNoResultFound(true);
    } else {
      setNoResultFound(false);
    }
  };
  useEffect(() => {
    if (searchValue === "") {
      setList(todoList);
    }
  }, [todoList, searchValue]);

  return (
    <div
      className={`rounded pt-0 pb-3 px-3 ${
        theme ? "todoContainerDark" : "todoContainerLight"
      }`}
    >
      <p
        className={`mb-3 py-3 px-3 todoListHeader ${
          theme ? "text-white" : "text-dark"
        }`}
      >
        Task List!
      </p>
      <div className="d-flex flex-row mt-3">
        <div>
          <div
            className={`w-100 m-0 p-3 col-sm-4 ${
              theme ? "todoInputDark" : "todoInputLight"
            }`}
          >
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="inputstyles form-control py-2 px-4"
              placeholder="Enter new task"
            />
            <button onClick={handleAddTask} className="btn w-100 my-3">
              Add Task
            </button>
          </div>
        </div>

        <div
          className={`col-sm-8 ms-3 p-3 ${
            theme ? "todoContentDark" : "todoContentLight"
          }`}
        >
          <input
            type="text"
            value={searchValue}
            onChange={handleSearch}
            class="searchBar mb-2 form-control py-2 px-4"
            placeholder={
              todoList.length === 0
                ? "Please add tasks to search"
                : "Search task"
            }
            disabled={todoList.length === 0}
          />
          <div className="list overflow-auto d-flex flex-column">
            {list.map((item, index) => (
              <div
                key={index}
                className="todo p-3 d-flex flex-row justify-content-between align-items-center my-2"
              >
                <span>{item.title}</span>
                <button
                  onClick={() => handleRemoveTask(item.id)}
                  className="btn"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            {list.length === 0 && !noResultFound && (
              <div className="noResult p-4 m-2 d-flex flex-column justify-content-center align-items-center">
                <div className="display-5 m-1">No Tasks created!</div>
                <h5 className="">Please create a task first</h5>
              </div>
            )}
            {noResultFound && (
              <div className="noResult p-4 m-2 d-flex flex-column justify-content-center align-items-center">
                <div className="display-5 m-1">No Results found!</div>
                <h5 className="">Please search with a different key</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
