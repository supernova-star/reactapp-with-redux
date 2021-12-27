import { DEFAULT_TODO_STATE } from "../store/state";
import {
  REMOVE_TASK,
  SET_NEW_TODO,
  SET_TODO_LIST,
} from "../actions/actiontypes.const";

const TodoReducer = (state = DEFAULT_TODO_STATE, action) => {
  switch (action.type) {
    case SET_NEW_TODO:
      state.todoList.push(action.task);
      return {
        ...state,
        todoList: state.todoList,
      };
    case REMOVE_TASK:
      return {
        ...state,
        todoList: [
          ...state.todoList.slice(0, action.index),
          ...state.todoList.slice(action.index + 1),
        ],
      };
    case SET_TODO_LIST:
      return {
        ...state,
        todoList: action.list,
      };
    default:
      return state;
  }
};

export default TodoReducer;
