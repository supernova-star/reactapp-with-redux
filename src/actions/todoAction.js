import { SET_NEW_TODO, REMOVE_TASK, SET_TODO_LIST } from "./actiontypes.const";

export const AddNewTask = (task) => ({
  type: SET_NEW_TODO,
  task,
});

export const RemoveTask = (index) => ({
  type: REMOVE_TASK,
  index,
});

export const SetTodoList = (list) => ({
  type: SET_TODO_LIST,
  list,
});
