import {
  INCREMENT,
  DECREMENT,
  SET_COUNTER,
} from "../actions/actiontypes.const";
import { DEFAULT_COUNT_STATE } from "../store/state";

const counterReducer = (state = DEFAULT_COUNT_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_COUNTER:
      return {
        ...state,
        count: action.count,
      };
    default:
      return state;
  }
};

export default counterReducer;
