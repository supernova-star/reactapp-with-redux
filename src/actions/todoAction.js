import userAPI from "../apis/userAPI";
import { GetLoginDetails } from "../selectors/login";
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

export const FetchTodoList = () => async (dispatch, getState) => {
  const state = getState();
  const loginDetails = GetLoginDetails(state);
  const response = await userAPI.get(
    `/posts?userId=${loginDetails.currentUserInfo.id}`
  );
  dispatch(SetTodoList(response.data));
};
