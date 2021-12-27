import {
  SET_NAVIGATION_MODE,
  SET_TOAST_DETAILS,
} from "../actions/actiontypes.const";
import { DEFAULT_NAVIGATION_STATE } from "../store/state";

const navigationReducer = (state = DEFAULT_NAVIGATION_STATE, action) => {
  switch (action.type) {
    case SET_NAVIGATION_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    case SET_TOAST_DETAILS:
      return {
        ...state,
        toastDetails: {
          theme: action.toastDetails.theme,
          position: action.toastDetails.position,
          type: action.toastDetails.type,
          message: action.toastDetails.message,
        },
      };
    default:
      return state;
  }
};

export default navigationReducer;
