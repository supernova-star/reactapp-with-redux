import { SET_NAVIGATION_MODE, SET_TOAST_DETAILS } from "./actiontypes.const";

export const SetMode = (mode) => ({
  type: SET_NAVIGATION_MODE,
  mode,
});
export const SetToastDetails = (toastDetails) => ({
  type: SET_TOAST_DETAILS,
  toastDetails,
});
