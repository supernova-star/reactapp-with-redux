import userAPI from "../apis/userAPI";
import { SET_SPINNER, SET_USERS, SET_USER_INFO } from "./actiontypes.const";

export const SetUserInfo = (userInfo) => ({
  type: SET_USER_INFO,
  userInfo,
});

export const SetUserList = (list) => ({
  type: SET_USERS,
  list,
});

export const SetSpinner = (spinner) => ({
  type: SET_SPINNER,
  spinner,
});

export const GetUserList = () => async (dispatch) => {
  dispatch(SetSpinner(true));
  const response = await userAPI.get("/users");
  dispatch(SetUserList(response.data));
  dispatch(SetSpinner(false));
};
