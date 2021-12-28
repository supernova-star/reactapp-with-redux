import { INCREMENT, DECREMENT, SET_COUNTER } from "./actiontypes.const";

export const IncrementCounter = () => ({ type: INCREMENT });

export const DecrementCounter = () => ({ type: DECREMENT });

export const SetCounter = (count) => ({ type: SET_COUNTER, count });
