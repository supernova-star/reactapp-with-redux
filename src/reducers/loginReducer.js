import {
  SET_USERS,
  SET_SPINNER,
  SET_USER_INFO,
} from "../actions/actiontypes.const";
import { DEFAULT_LOGIN_STATE } from "../store/state";

const loginReducer = (state = DEFAULT_LOGIN_STATE, action) => {
  switch (action.type) {
    case SET_SPINNER:
      return {
        ...state,
        spinner: action.spinner,
      };
    case SET_USERS:
      return {
        ...state,
        userList: action.list,
      };
    case SET_USER_INFO:
      return {
        ...state,
        currentUserInfo: action.userInfo,
      };
    default:
      return state;
  }
};

export default loginReducer;
