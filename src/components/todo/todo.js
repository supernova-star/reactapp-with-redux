import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./todo.scss";
import { FaTrash } from "react-icons/fa";
import { GetTodoList } from "../../selectors/todo";
import { AddNewTask, RemoveTask } from "../../actions/todoAction";
import { GetTheme } from "../../selectors/navigation";

const Todo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(GetTodoList);
  const theme = useSelector(GetTheme);
  const [inputValue, setinputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState(todoList);
  const [noResultFound, setNoResultFound] = useState(false);
  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };
  const handleAddTask = async () => {
    if (inputValue !== "") {
      await dispatch(AddNewTask(inputValue));
      setinputValue("");
    }
  };
  const handleRemoveTask = (todo) => {
    const index = todoList.findIndex((item) => item === todo);
    dispatch(RemoveTask(index));
    if (searchValue !== "") {
      const newList = list.filter((item) => item !== todo);
      setList(newList);
      if (newList.length === 0) {
        setNoResultFound(true);
      }
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchValue(searchTerm);
    const newList = todoList.filter((item) => item.includes(e.target.value));
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
    <div className="todoContainer rounded p-3">
      <h3 className={`mb-3 p-2 ${theme ? "text-white" : "text-dark"}`}>
        Task List!
      </h3>
      <div className="d-flex flex-row">
        <div
          className={`mx-3 col-sm-4 ${
            theme ? "todoInputDark" : "todoInputLight"
          }`}
        >
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            class="inputstyles form-control py-2 px-4"
            placeholder="Enter new task"
          />
          <button onClick={handleAddTask} className="btn w-100 my-3">
            Add Task
          </button>
        </div>

        <div
          className={`col-sm-8 ${
            theme ? "todoContentDark" : "todoContentLight"
          }`}
        >
          <input
            type="text"
            value={searchValue}
            onChange={handleSearch}
            class="searchBar mx-2 mb-2 form-control py-2 px-4"
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
                className="todo p-3 d-flex flex-row justify-content-between align-items-center m-2"
              >
                <span>{item}</span>
                <button onClick={() => handleRemoveTask(item)} className="btn">
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
