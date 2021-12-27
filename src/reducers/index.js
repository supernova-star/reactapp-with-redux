import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import navigationReducer from "./navigationReducer";
import productReducer from "./productsReducer";
import TodoReducer from "./todoReducer";
import loginReducer from "./loginReducer";

const reducers = combineReducers({
  counter: counterReducer,
  products: productReducer,
  todoList: TodoReducer,
  navigation: navigationReducer,
  login: loginReducer,
});

export default reducers;
